function ElectricRange(name) {
    var electricHotPlate_d_145 = new ElectricHotPlate('ЭКЧ 145-1,0', 1000);
    var electricHotPlate_d_180_1 = new ElectricHotPlate('ЭКЧ 180-1,5', 1500);
    var electricHotPlate_d_180_2 = new ElectricHotPlate('ЭКЧ 180-1,5', 1500);
    var electricHotPlate_d_220 = new ElectricHotPlate('ЭКЧ 220-2,0', 2000);
    var tubularElectricTop = new TubularElectric('AR-1', 1000);
    var tubularElectricBottom = new TubularElectric('AR-2', 1000);
    
		Devices.call(this, name, [electricHotPlate_d_145, electricHotPlate_d_180_1, electricHotPlate_d_180_2, electricHotPlate_d_220,tubularElectricTop, tubularElectricBottom]);
}

ElectricRange.prototype = Object.create(Devices.prototype); 