const PLUGIN_NAME = 'homebridge-puredropgen1'
const PLATFORM_NAME = 'PureDrops'
const filterApi = require('./filter/api')
const path = require('path')
const storage = require('node-persist')


module.exports = (api) => {
	api.registerPlatform(PLUGIN_NAME, PLATFORM_NAME, puredropsPlatform)
}


class puredropsPlatform {
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
			this.log('ERROR \n')
			this.log('Can\'t start homebridge-puredrops plugin without token !!\n')
			this.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n')
			return
		}
	}
}

// file is not completed need time to finish the code