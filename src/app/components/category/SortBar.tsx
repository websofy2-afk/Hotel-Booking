export default function SortBar({ setSortOption }: { setSortOption: any }) {
    return (
        <div className="flex justify-end mb-4">
            <select
                className="border p-2 rounded-lg"
                onChange={(e) => setSortOption(e.target.value)}
            >
                <option value="popular">Sort By: Popularity</option>
                <option value="price_low">Price — Low to High</option>
                <option value="price_high">Price — High to Low</option>
                <option value="rating">Rating — High to Low</option>
            </select>
        </div>
    );
}
