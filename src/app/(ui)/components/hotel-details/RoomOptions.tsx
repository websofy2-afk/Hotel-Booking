export default function RoomOptions() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Available Rooms</h2>

      {[1, 2].map((room) => (
        <div
          key={room}
          className="border rounded-lg p-4 mb-4 flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold">Deluxe Room</h3>
            <p className="text-sm text-gray-500">Free Cancellation</p>
          </div>

          <div className="text-right">
            <p className="text-lg font-bold">₹3,330</p>
            <button className="text-blue-600 text-sm mt-1">
              Select Room
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
