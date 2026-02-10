"use client";
import { useEffect, useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import Tooltip from "../common/Tooltip";
import { extractExcerpt } from "@/lib/extractExcerpt";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import MessageModel from "../common/MessageModel";
import RoomModel from "./RoomModel";

export default function Room() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [hotelLocation, setHotelLocation] = useState<any[]>([]);
  const [roomCategory, setRoomCategory] = useState<any[]>([]);
  const [hotel, setHotel] = useState<any[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [modal, setModal] = useState<{ mode: string; item?: any } | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [tooltip, setTooltip] = useState<{ message: string; type: any } | null>(
    null
  );

  const [blogDescription, setBlogDescription] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  const showTooltip = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    setTooltip({ message, type });
    setTimeout(() => setTooltip(null), 3000);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const [search, setSearch] = useState({ "room type": "", "hotel name": "" });

  const fetchData = async () => {
    const [roomRes, hotelLocationRes, roomCategoryRes, hotelRes] = await Promise.all([fetch("/api/auth/room"), fetch("/api/auth/hotel-location"), fetch("/api/auth/room-category"), fetch("/api/auth/hotel")])
    const roomJson = await roomRes.json();
    const hotelLocationJson = await hotelLocationRes.json();
    const roomCategoryResJson = await roomCategoryRes.json();
    const hotelResJson = await hotelRes.json();
    setData(roomJson.data);
    setHotelLocation(hotelLocationJson.data);
    setRoomCategory(roomCategoryResJson.data);
    setHotel(hotelResJson.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.roomType.toLowerCase().includes(search["room type"].toLowerCase()) &&
      item.roomRelatedToHotel.toLowerCase().includes(search["hotel name"].toLowerCase())
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
        res = await fetch("/api/auth/room", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });
      } else if (modal.mode === "edit") {
        res = await fetch(`/api/auth/room/${modal.item._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else if (modal.mode === "delete") {
        res = await fetch(`/api/auth/room/${modal.item._id}`, {
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
    catch (err) {
      const error = err as Error;
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
      <PageBreadcrumb pageTitle="Room" />
      <div className="flex justify-end items-center mb-4">
        <button onClick={() => setModal({ mode: "create" })} className="bg-primary cursor-pointer text-white px-4 py-2 rounded-lg transition hover:bg-primary/90">
          + Add Room
        </button>
      </div>

      <div className="flex gap-3 mb-4 w-[30em]">
        {["room type", "hotel name"].map((key) => (
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
            {
              ["Room Type", "Related Hotel", "Hotel Location", "Price", "Actions"].map((item, index) => (
                <th className="py-2 px-3 border" key={index}>{item}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item._id} className="text-center">
              <td className="border border-border shadow-md shadow-skyBlue/20 p-2">{item.roomType}</td>
              <td className="border border-border shadow-md shadow-skyBlue/20 p-2">{item.roomRelatedToHotel}</td>
              <td className="border border-border shadow-md shadow-skyBlue/20 p-2">{item.hotelLocation}</td>
              <td className="border border-border shadow-md shadow-skyBlue/20 p-2">₹{item.oldPrice}/=</td>

              {/* <td className="border border-border shadow-md shadow-skyBlue/20 p-2 flex items-center justify-center"
              >{extractExcerpt(item.content, 20)}...

                <span onClick={() => { setBlogDescription(extractExcerpt(item.content, 500)), setShowDescription(!showDescription); }}
                >
                  {showDescription ? (
                    <IoEyeOutline size={17} className="text-skyBlue cursor-pointer" />
                  ) : (
                    <IoEyeOffOutline size={17} className="text-skyBlue cursor-pointer" />
                  )}
                </span>
              </td> */}
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
        <RoomModel
          mode={modal.mode}
          initialData={modal.item}
          onClose={() => setModal(null)}
          onSave={handleSave}
          hotelLocation={hotelLocation}
          roomCategory={roomCategory}
          hotel={hotel}
        />
      )}
      {/* {
        showDescription && <MessageModel closedModel={setShowDescription} data={blogDescription}  mode="blog" />
      } */}
    </div>
  );
}

