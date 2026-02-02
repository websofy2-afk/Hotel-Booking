"use client";
import { useEffect, useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import Tooltip from "../common/Tooltip";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import MessageModel from "../common/MessageModel";
import { FaqModel } from "./FaqModel";
import Pagination from "@/app/(ui)/components/shared/pagination";

export const Faq = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any[]>([]);
    const [showMessage, setShowMessage] = useState(false);
    const [userFaq, setUserFaq] = useState({
        question: "",
        answer: ""
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [modal, setModal] = useState<{ mode: string; item?: any } | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [tooltip, setTooltip] = useState<{ message: string; type: any } | null>(
        null
    );

    const handleOnChange = (question: string, answer: string,) => {
        setUserFaq({ ...userFaq, question: question, answer: answer });
    }

    const showTooltip = (
        message: string,
        type: "success" | "error" | "info" = "info"
    ) => {
        setTooltip({ message, type });
        setTimeout(() => setTooltip(null), 3000);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;

    const [search, setSearch] = useState({ question: "" });

    const fetchData = async () => {
        const res = await fetch("/api/auth/faq");
        const faqJson = await res.json();
        setData(faqJson.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredData = data.filter(
        (item) =>
            item.question.toLowerCase().includes(search.question.toLowerCase())
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
                res = await fetch("/api/auth/faq", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form)
                });
            } else if (modal.mode === "edit") {
                res = await fetch(`/api/auth/faq/${modal.item._id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
            } else if (modal.mode === "delete") {
                res = await fetch(`/api/auth/faq/${modal.item._id}`, {
                    method: "DELETE",
                });
            }
            data = await res.json();
            if (res.ok) {
                showTooltip(data?.message, "success");
            } else {
                showTooltip(data.message || "Something went wrong", "error");
            }
        } catch (error) {
            const err = error as Error;
            console.log("Internal Server Error ", err)
            showTooltip("Internal Server Error", "error");
        } finally {
            setModal(null);
            fetchData();
        }
    };

    return (
        <div className="p-4">
            {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
            <PageBreadcrumb pageTitle="FAQs" />
            <div className="flex justify-end items-center mb-4">
                <button onClick={() => setModal({ mode: "create" })} className="bg-primary cursor-pointer text-white px-4 py-2 rounded-lg transition hover:bg-primary/90">
                    + Create FAQ
                </button>
            </div>

            <div className="flex gap-3 mb-4 w-[15em]">
                {["question"].map((key) => (
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
                        {["Question", "Answer", "Actions"].map((item, index) => (
                            <th key={index} className="py-2 px-3 border">{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item) => (
                        <tr key={item._id} className="text-center">
                            <td className="border border-border text-justify shadow-md shadow-skyBlue/20 p-2">{item.question}</td>
                            <td className="border border-border shadow-md shadow-skyBlue/20 p-2
                            items-center text-justify flex gap-1
                            ">
                                <span className="w-[21em]">{item.answer.substring(0, 40)}...</span>
                                <span onClick={() => {
                                    handleOnChange(item.question, item.answer);
                                    setShowMessage(!showMessage);
                                }}>
                                    {showMessage ? (
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
                <FaqModel
                    mode={modal.mode}
                    initialData={modal.item}
                    onClose={() => setModal(null)}
                    onSave={handleSave}
                />
            )}
            {
                showMessage && <MessageModel closedModel={setShowMessage} data={userFaq} mode="faq" />
            }
        </div>
    );
}

