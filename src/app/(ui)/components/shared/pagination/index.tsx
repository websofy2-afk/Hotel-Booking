'use client';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-3 mt-10">
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded border ${
              currentPage === page
                ? 'bg-primary text-white'
                : 'border-border text-gray'
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
