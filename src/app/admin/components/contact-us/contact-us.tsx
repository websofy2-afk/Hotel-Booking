"use client";
import { useEffect, useState, useMemo } from "react";
import { ArrowUpDown } from "lucide-react";
import { Radio } from "react-loader-spinner";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import MessageModel from "../common/MessageModel";

export default function ContactUs() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const [studentRecord, setStudentRecord] = useState({
    studentName: "",
    phone: "",
    email: "",
    message: "",
    date: ""
  });

  const handleOnChange = (studentName: string, phone: string, message: string, date: string, email: string) => {
    setStudentRecord({ ...studentRecord, studentName: studentName, phone: phone, message: message, date: date, email: email })
  }

  const [sortField, setSortField] = useState<
    "name" | "phone" | "email" | "date" | null
  >(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const recordsPerPage = 10;

  useEffect(() => {    
    const fetchContacts = async () => {
      try {
        const res = await fetch("/api/auth/contact-us");
        if (!res.ok) throw new Error("Failed to fetch");
        const result = await res.json();
        setContacts(result?.data || []);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getFieldValue = (item: any, field: "name" | "phone" | "email" | "date") => {
    switch (field) {
      case "name":
        return String(item.name ?? "").toLowerCase();
      case "email":
        return String(item.email ?? "").toLowerCase();
      case "phone": {
        const raw = String(item.phone ?? "");
        const digits = raw.replace(/\D/g, "");
        return digits === "" ? 0 : Number(digits);
      }
      case "date":
        return new Date(item.createdAt).getTime();
    }
  };


  const filteredData = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    const filtered = contacts.filter((d) => {
      const email = String(d.email ?? "").toLowerCase();
      const phone = String(d.phone ?? "");

      const matchesSearch =
        !term ||
        email.includes(term) ||
        phone.includes(term)

      const recordDate = new Date(d.createdAt).getTime();
      const from = fromDate ? new Date(fromDate).getTime() : null;
      const to = toDate ? new Date(toDate).getTime() : null;

      const matchesDate =
        (!from || recordDate >= from) &&
        (!to || recordDate <= to);
      return matchesSearch && matchesDate;

    });

    if (sortField) {
      filtered.sort((a, b) => {
        const aVal = getFieldValue(a, sortField);
        const bVal = getFieldValue(b, sortField);

        if (sortField === "date" || sortField === "phone") {
          return sortOrder === "asc"
            ? Number(aVal) - Number(bVal)
            : Number(bVal) - Number(aVal);
        }

        return sortOrder === "asc"
          ? String(aVal).localeCompare(String(bVal))
          : String(bVal).localeCompare(String(aVal));
      });
    }

    return filtered;
  }, [contacts, searchTerm, sortField, sortOrder, fromDate, toDate]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.max(1, Math.ceil(filteredData.length / recordsPerPage));

  const exportToCSV = () => {
    const csvRows = [
      ["Sn. No.", "Name", "Phone", "Email", "Message", "Date"],
      ...filteredData.map((d, i) =>
        [i + 1, d.name, d.phone, d.email, d.message, new Date(d?.createdAt).toLocaleDateString("en-IN")]),
    ];
    const csvContent ="data:text/csv;charset=utf-8," + csvRows.map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "stintwol_contact_us_record.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSort = (field: "name" | "phone" | "email" | "date") => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
    setCurrentPage(1);
  };

  return (
    <div className="p-4">
      <PageBreadcrumb pageTitle="Contact us" />
      <div className="flex items-start justify-between gap-12">
        <div className="flex sm:flex-row justify-start items-center mb-6 gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search by Email Or Phone"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="border px-3 py-2 rounded-lg w-full sm:w-[15em] focus:ring focus:ring-blue-300 outline-none"
            />
          </div>

          <div className="flex gap-2">
            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="fromDate">From</label>
              <input
                type="date"
                id="fromDate"
                value={fromDate}
                onChange={(e) => {
                  setFromDate(e.target.value);
                  setCurrentPage(1);
                }}
                className="border px-3 py-2 rounded-lg focus:ring focus:ring-blue-300 outline-none cursor-pointer"
              />
            </div>

            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="toDate">To</label>
              <input
                id="toDate"
                type="date"
                value={toDate}
                onChange={(e) => {
                  setToDate(e.target.value);
                  setCurrentPage(1);
                }}
                className="border px-3 py-2 rounded-lg focus:ring focus:ring-blue-300 outline-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        <button
          onClick={exportToCSV}
          className="bg-learning cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-learning/90 transition"
        >
          Export CSV
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center text-center">
          <Radio
            visible={true}
            height="150"
            width="150"
            colors={["#f9b52b", "#e31e24", "#e31e24"]}
            ariaLabel="radio-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : filteredData.length === 0 ? (
        <div className="text-center text-gray-500">No matching records found.</div>
      ) :

        (
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Sn. No.
                  </th>
                  <th
                    onClick={() => handleSort("name")}
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-1">
                      Name
                      <ArrowUpDown
                        className={`w-4 h-4 transition-transform ${sortField === "name"
                          ? sortOrder === "asc"
                            ? "rotate-180 text-blue-600"
                            : "text-blue-600"
                          : "text-gray-400"
                          }`}
                      />
                    </div>
                  </th>
                  <th
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-1">
                      Phone
                      <ArrowUpDown
                        className={`w-4 h-4 transition-transform ${sortField === "phone"
                          ? sortOrder === "asc"
                            ? "rotate-180 text-blue-600"
                            : "text-blue-600"
                          : "text-gray-400"
                          }`}
                      />
                    </div>
                  </th>

                  <th
                    onClick={() => handleSort("email")}
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer select-none"
                  >
                    <div
                      className="flex items-center gap-1">
                      Email
                      <ArrowUpDown
                        className={`w-4 h-4 transition-transform ${sortField === "email"
                          ? sortOrder === "asc"
                            ? "rotate-180 text-blue-600"
                            : "text-blue-600"
                          : "text-gray-400"
                          }`}
                      />
                    </div>
                  </th>

                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 select-none">
                    <div className="flex items-center gap-1">Message</div>
                  </th>
                  <th
                    onClick={() => handleSort("date")}
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-1">
                      Date
                      <ArrowUpDown
                        className={`w-4 h-4 transition-transform ${sortField === "date"
                          ? sortOrder === "asc"
                            ? "rotate-180 text-blue-600"
                            : "text-blue-600"
                          : "text-gray-400"
                          }`}
                      />
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {currentRecords.map((record, index) => (
                  <tr key={record._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {(currentPage - 1) * recordsPerPage + index + 1}.
                    </td>
                    <td
                      className="px-6 py-4 text-sm text-gray-900">{record.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{record.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{record.email}</td>
                    <td

                      className="px py-4 text-sm w-44 items-center justify-center flex gap-1 text-gray-900">
                      {record.message.substring(0, 20)}...
                      
                      <span onClick={() => {
                        handleOnChange(record.name, record.phone, record.message, new Date(record?.createdAt).toLocaleDateString("en-IN"), record.email,);
                        setShowMessage(!showMessage);
                      }}>
                        {showMessage ? (
                          <IoEyeOutline size={17} className="text-gray-500 cursor-pointer" />
                        ) : (
                          <IoEyeOffOutline size={17} className="text-gray-500 cursor-pointer" />
                        )}
                      </span>
                      
                      </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{
                      new Date(record?.createdAt).toLocaleDateString("en-IN")
                    }</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center p-4">
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 border rounded ${currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white cursor-pointer hover:bg-gray-100"
                    }`}
                >
                  Prev
                </button>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 border rounded ${currentPage === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white hover:bg-gray-100 cursor-pointer"
                    }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      {
        showMessage && <MessageModel closedModel={setShowMessage} data={studentRecord} mode="contact"/>
      }
    </div>
  );
}

