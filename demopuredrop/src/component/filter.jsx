import { useState } from "react";
import { motion } from "framer-motion";
import ControlButtons from "./Buttons"; 

export default function WaterFilter() {
  const [action, setAction] = useState("");
  const [waterLevel, setWaterLevel] = useState(0);
  const [temperature, setTemperature] = useState(25);
  const [containerSize, setContainerSize] = useState("Medium");

  const handlePourWater = () => {
    if (waterLevel < 100) {
      setWaterLevel(waterLevel + 20);
      setAction("Pouring Water...");
    }
  };

  const handleHeatWater = () => {
    if (temperature < 100) {
      setTemperature(temperature + 10);
      setAction("Heating Water...");
    }
  };

  const handleScanContainer = () => {
    const sizes = ["Small", "Medium", "Large"];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    setContainerSize(randomSize);
    setAction(`Scanned: ${randomSize} Cup`);
  };

  const handleDispenseWater = () => {
    let amount = containerSize === "Small" ? 50 : containerSize === "Medium" ? 100 : 150;
    setWaterLevel(Math.max(0, waterLevel - amount));
    setAction(`Dispensing ${amount}ml of water...`);
  };

  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-5">Smart Water Dispenser</h1>
      <div className="relative w-32 h-48 border-4 border-gray-500 rounded-b-xl overflow-hidden bg-white flex items-end">
        <motion.div
          className="w-full bg-blue-400"
          initial={{ height: 0 }}
          animate={{ height: `${waterLevel}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <p className="mt-2 text-lg">Water Level: {waterLevel}ml</p>
      <p className="mt-1 text-lg">Temperature: {temperature}°C</p>
      <p className="mt-1 text-lg">Container Size: {containerSize}</p>
      <p className="mt-2 text-gray-600">{action}</p>

      <ControlButtons
        onPour={handlePourWater}
        onHeat={handleHeatWater}
        onScan={handleScanContainer}
        onDispense={handleDispenseWater}
      />
    </div>
  );
}
