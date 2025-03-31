const PuredropDevice = require('../kit/device')

module.exports = (platform) => {
	return () => {
		platform.devices.forEach(device => {
			new PuredropDevice(device, platform)
		})

		const accessoriesToRemove = []
		platform.cachedAccessories.forEach(accessory => {
			let deviceExists = platform.devices.find(device => device.id === accessory.context.deviceId)
			if (!deviceExists) {
				accessoriesToRemove.push(accessory)
				platform.log.easyDebug('Unregistering Unnecessary Cached Device:' + accessory.displayName)
			}
		})

		if (accessoriesToRemove.length) {
			platform.api.unregisterPlatformAccessories(platform.PLUGIN_NAME, platform.PLATFORM_NAME, accessoriesToRemove)
			platform.cachedAccessories = platform.cachedAccessories.filter( cachedAccessory => !accessoriesToRemove.find(accessory => accessory.UUID === cachedAccessory.UUID) )

		}
	}
}