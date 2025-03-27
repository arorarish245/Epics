let Characteristic, Service

class PuredropGen1 {
	constructor(device, platform) {
		Service = platform.api.hap.Service
		Characteristic = platform.api.hap.Characteristic
        this.userConfig = platform.rishavbz
        this.userConfig2 = platform.ayushmankar01
		this.lighting = platform.config.lighting
		this.pushAndDrink = platform.config.pushAndDrink
		this.nightMode = platform.config.nightMode
		this.energySaveMode = platform.config.energySaveMode
		this.smartHeatingMode = platform.config.smartHeatingMode
		this.buttonsSound = platform.config.buttonsSound
		this.statePollingInterval = platform.config.statePollingInterval ? platform.config.statePollingInterval * 1000 : 300000 // sets bar of water polling to 5 mins by default or as per by rishavbz, ayushmankar01 config
		this.name = device.name || 'Puredrop'
		this.displayName = this.name
		this.id = device.id
		this.log = platform.log
		this.api = platform.api
		this.storage = platform.storage
		this.model = 'Gen 1'
		this.serial = this.id
		this.manufacturer = '@rishav-bhardwaz'
		this.displayName = this.name
		this.configurationDevice = false

	}
}


module.exports = PuredropGen1