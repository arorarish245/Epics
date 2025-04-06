export default function ControlButtons({
  onPour,
  onHeat,
  onScan,
  onDispense,
}) {
  return (
    <div className="flex gap-3 mt-5">
      <button onClick={onPour} className="px-4 py-2 bg-blue-500 text-white rounded">
        Pour Water
      </button>
      <button onClick={onHeat} className="px-4 py-2 bg-red-500 text-white rounded">
        Heat Water
      </button>
      <button onClick={onScan} className="px-4 py-2 bg-green-500 text-white rounded">
        Scan Container
      </button>
      <button onClick={onDispense} className="px-4 py-2 bg-purple-500 text-white rounded">
        Dispense Water
      </button>
    </div>
  );
}
