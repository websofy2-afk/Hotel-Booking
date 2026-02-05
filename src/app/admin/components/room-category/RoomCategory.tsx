"use client";
import { useEffect, useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import Tooltip from "../common/Tooltip";
import RoomCategoryModel from "./RoomCategoryModel";

export default function RoomCategory() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [modal, setModal] = useState<{ mode: string; item?: any } | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [tooltip, setTooltip] = useState<{ message: string; type: any } | null>(
    null
  );

  const showTooltip = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    setTooltip({ message, type });
    setTimeout(() => setTooltip(null), 3000);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const [search, setSearch] = useState({ category: "" });

  const fetchData = async () => {
    const res = await fetch("/api/auth/room-category");
    const json = await res.json();
    setData(json.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter(
    (item) => item.category.toLowerCase().includes(search.category.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSave = async (form: any) => {
    if (!modal) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let res: any = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let data: any = null;

    try {
      if (modal.mode === "create") {
        res = await fetch("/api/auth/room-category", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });
      } else if (modal.mode === "edit") {
        res = await fetch(`/api/auth/room-category/${modal.item._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else if (modal.mode === "delete") {
        res = await fetch(`/api/auth/room-category/${modal.item._id}`, {
          method: "DELETE",
        });
      }
      data = await res.json();
      if (res.ok) {
        showTooltip(data?.message, "success");
      } else {
        showTooltip(data.message || "Something went wrong", "error");
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error) {
      console.log("Internal Server Error ", error)
      showTooltip("Internal Server Error", "error");
    } finally {
      setModal(null);
      fetchData();
    }
  };

  return (
    <div className="p-4">
      {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
      <PageBreadcrumb pageTitle="Room Category" />
      <div className="flex justify-end items-center mb-4">
        <button onClick={() => setModal({ mode: "create" })} className="bg-primary cursor-pointer text-white px-4 py-2 rounded-lg transition hover:bg-primary/90">
          + Add Room Category
        </button>
      </div>
      <div className="flex gap-3 mb-4 w-[12em]">
        {["category"].map((key) => (
          <input
            key={key}
            type="text"
            placeholder={`Search by ${key}`}
            className="border px-2 py-1 rounded"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            value={(search as any)[key]}
            onChange={(e) => setSearch({ ...search, [key]: e.target.value })}
          />
        ))}
      </div>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-herobg">
            <th className="py-2 px-3 border">Room Category</th>
            <th className="py-2 px-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item._id} className="text-center">
              <td className="border border-border shadow-md shadow-skyBlue/20 p-2">{item.category}</td>
              <td className="border border-border shadow-md shadow-skyBlue/20">
                <div className="flex mx-1 gap-2 justify-center">
                  <button onClick={() => setModal({ mode: "edit", item })} className="bg-green-600 cursor-pointer text-white px-3 py-1 rounded">
                    Edit
                  </button>
                  <button onClick={() => setModal({ mode: "delete", item })} className="bg-red-600 cursor-pointer text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          className="px-3 py-1 border cursor-pointer rounded disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 border cursor-pointer rounded ${currentPage === page ? "bg-blue-600 text-white" : ""}`}
          >
            {page}
          </button>
        ))}
        <button
          className="px-3 py-1 border cursor-pointer rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>

      {modal && (
        <RoomCategoryModel
          mode={modal.mode}
          initialData={modal.item}
          onClose={() => setModal(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

