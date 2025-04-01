import { useState } from "react";
import { motion } from "framer-motion";

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
    setWaterLevel(amount);
    setAction(`Dispensing ${amount}ml of water...`);
  };

  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-5">Smart Water Filter</h1>
      <motion.div
        className="w-32 h-48 bg-blue-400 rounded-b-xl overflow-hidden relative"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: waterLevel / 100 }}
        transition={{ duration: 0.5 }}
      />
      <p className="mt-2 text-lg">Water Level: {waterLevel}ml</p>
      <p className="mt-1 text-lg">Temperature: {temperature}°C</p>
      <p className="mt-1 text-lg">Container Size: {containerSize}</p>
      <p className="mt-2 text-gray-600">{action}</p>
      <div className="flex gap-3 mt-5">
        <button onClick={handlePourWater} className="px-4 py-2 bg-blue-500 text-white rounded">Pour Water</button>
        <button onClick={handleHeatWater} className="px-4 py-2 bg-red-500 text-white rounded">Heat Water</button>
        <button onClick={handleScanContainer} className="px-4 py-2 bg-green-500 text-white rounded">Scan Container</button>
        <button onClick={handleDispenseWater} className="px-4 py-2 bg-purple-500 text-white rounded">Dispense Water</button>
      </div>
    </div>
  );
}
