const puredropApi = require('./filter/api')
const syncHomeKitCache = require('./filter/syncHomeKitCache')
const path = require('path')
const storage = require('node-persist')
const PLUGIN_NAME = 'homebridge-puredrop'
const PLATFORM_NAME = 'PuredropGen1'

module.exports = (api) => {
	api.registerPlatform(PLUGIN_NAME, PLATFORM_NAME, puredropPlatform)
}

class puredropPlatform {
	constructor(log, config, api) {

		this.cachedAccessories = []
		this.activeAccessories = []
		this.config = config
		this.log = log
		this.api = api
		this.storage = storage
		this.syncHomeKitCache = syncHomeKitCache(this)
		this.name = PLATFORM_NAME
		this.debug = config['debug'] || false
		this.PLUGIN_NAME = PLUGIN_NAME
		this.PLATFORM_NAME = PLATFORM_NAME

		
		this.refreshToken = config['refreshToken']
		
		if (!this.refreshToken) {
			this.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  --  ERROR  --  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n')
			this.log('Can\'t start homebridge-puredrop plugin without token !!\n')
			this.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n')
			return
		}

		this.persistPath = path.join(this.api.user.persistPath(), '/../puredrop-persist')
		this.emptyState = {devices:{}}
		
		// define debug method to output debug logs when enabled in the config
		this.log.easyDebug = (...content) => {
			if (this.debug) {
				this.log(content.reduce((previous, current) => {
					return previous + ' ' + current
				}))
			} else
				this.log.debug(content.reduce((previous, current) => {
					return previous + ' ' + current
				}))
		}
		
		this.api.on('didFinishLaunching', async () => {

			await this.storage.init({
				dir: this.persistPath,
				forgiveParseErrors: true
			})

			this.puredropApi = await puredropApi(this)

			this.cachedState = await this.storage.getItem('puredrop-state') || this.emptyState
			if (!this.cachedState.devices)
				this.cachedState = this.emptyState

			try {
				this.devices = await this.puredropApi.getDevices()
				await this.storage.setItem('puredrop-devices', this.devices)
			} catch(err) {
				this.log('ERR:', err)
				this.devices = await this.storage.getItem('puredrop-devices') || []
			}

			this.syncHomeKitCache()

		})

	}

	configureAccessory(accessory) {
		this.cachedAccessories.push(accessory)
	}

}