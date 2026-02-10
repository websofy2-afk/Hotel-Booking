"use client";
import { useEffect, useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import Tooltip from "../common/Tooltip";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import MessageModel from "../common/MessageModel";
import Pagination from "@/app/(ui)/components/shared/pagination";
import { HotelModel } from "./HotelModel";

export const Hotel = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any[]>([]);
    const [blogCategorydata, setBlogCategoryData] = useState<any[]>([]);
    const [hotelLocation, setHotelLocation] = useState<any[]>([]);
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

    const [search, setSearch] = useState({ "hotel name": "", "hotel location": "" });

    const fetchData = async () => {
        const [hotelRes, hotelLocationRes] = await Promise.all([fetch("/api/auth/hotel"), fetch("/api/auth/hotel-location")])
        const hotelJson = await hotelRes.json();
        const hotelLocationJson = await hotelLocationRes.json();
        setData(hotelJson.data);
        setHotelLocation(hotelLocationJson.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredData = data.filter(
        (item) =>
            item.hotelName.toLowerCase().includes(search["hotel name"].toLowerCase()) &&
            item.hotelLocation.toLowerCase().includes(search["hotel location"].toLowerCase())
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
                res = await fetch("/api/auth/hotel", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form)
                });
            } else if (modal.mode === "edit") {
                res = await fetch(`/api/auth/hotel/${modal.item._id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
            } else if (modal.mode === "delete") {
                res = await fetch(`/api/auth/hotel/${modal.item._id}`, {
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
            <PageBreadcrumb pageTitle="Hotel" />
            <div className="flex justify-end items-center mb-4">
                <button onClick={() => setModal({ mode: "create" })} className="bg-primary cursor-pointer text-white px-4 py-2 rounded-lg transition hover:bg-primary/90">
                    + Add Hotel
                </button>
            </div>

            <div className="flex gap-3 mb-4 w-[30em]">
                {["hotel name", "hotel location"].map((key) => (
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
                        {["Hotel Name", "Location", "Rating", "Description", "Actions"].map((item, index) => (
                            <th className="py-2 px-3 border" key={index}>{item}</th>
                        ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item) => (
                        <tr key={item._id} className="text-center">
                            <td className="border border-border shadow-md shadow-skyBlue/20 p-2">{item.hotelName}</td>
                            <td className="border border-border shadow-md shadow-skyBlue/20 p-2">{item.hotelLocation}</td>
                            <td className="border border-border shadow-md shadow-skyBlue/20 p-2 text-yellow-500">{"★".repeat(item.rating)}</td>
                            <td className="border border-border shadow-md shadow-skyBlue/20 p-2 flex items-center justify-center"
                            >
                                {item.aboutOfHotel.substring(0, 20)}
                                <span onClick={() => { setBlogDescription(item.aboutOfHotel), setShowDescription(!showDescription); }}
                                >
                                    {showDescription ? (
                                        <IoEyeOutline size={17} className="text-skyBlue cursor-pointer" />
                                    ) : (
                                        <IoEyeOffOutline size={17} className="text-skyBlue cursor-pointer" />
                                    )}
                                </span>
                            </td>
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
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            {modal && (
                <HotelModel
                    mode={modal.mode}
                    initialData={modal.item}
                    onClose={() => setModal(null)}
                    onSave={handleSave}
                    hotelLocation={hotelLocation}
                />
            )}
            {
                showDescription && <MessageModel closedModel={setShowDescription} data={blogDescription} mode="blog" />
            }
        </div>
    );
}

