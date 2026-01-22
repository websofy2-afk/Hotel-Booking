export default function FilterSidebar({ setHotels } : {setHotels : any}) {
  return (
    <aside className="w-64 bg-white shadow-lg rounded-xl p-5 h-fit sticky top-24">
      <h3 className="text-xl font-semibold mb-4">Filters</h3>

      <div className="flex flex-col gap-4">

        {/* Price */}
        <label className="font-medium">Price Range</label>
        <input
          type="range"
          min="1000"
          max="20000"
          className="w-full"
          onChange={() => {}}
        />

        {/* Star Rating */}
        <label className="font-medium">Star Rating</label>
        <select className="border p-2 rounded">
          <option>All</option>
          <option>⭐⭐⭐⭐⭐</option>
          <option>⭐⭐⭐⭐</option>
          <option>⭐⭐⭐</option>
        </select>
      </div>
    </aside>
  );
}
