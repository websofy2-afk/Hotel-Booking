import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  pageTitle: string;
}

const PageBreadcrumb: React.FC<BreadcrumbProps> = ({ pageTitle }) => {
  return (
    <div className="flex flex-wrap items-center mt-20 justify-between gap-3 mb-6">
      <h2
        className="text-xl font-semibold"
        x-text="pageName"
      >
        {pageTitle}
      </h2>
      <nav>
        <ol className="flex items-center justify-center gap-1.5">
          <li>
            <Link
              className="inline-flex items-center gap-1.5 text-sm text-MidnightNavyText"
              href="/admin/dashboard"
            >
              Home
              <ChevronRight size={17} />
            </Link>
          </li>
          <li className="text-sm text-midnight_text">
            {pageTitle}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default PageBreadcrumb;
