export default function Pagination({ currentPage, totalItems, perPage, onPageChange } : { currentPage:any, totalItems:any, perPage:any, onPageChange:any}) {
  const totalPages = Math.ceil(totalItems / perPage);

  return (
    <div className="flex justify-center mt-8 gap-2">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-lg ${
            currentPage === index + 1
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
