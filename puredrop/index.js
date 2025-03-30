const PLUGIN_NAME = 'homebridge-puredropgen1'
const PLATFORM_NAME = 'PureDrops'
const filterApi = require('./filter/api')
const path = require('path')
const storage = require('node-persist')


module.exports = (api) => {
	api.registerPlatform(PLUGIN_NAME, PLATFORM_NAME, puredropsPlatform)
}

// file is not completed need time to finish the code