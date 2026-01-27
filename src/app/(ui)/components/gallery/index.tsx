"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";

type MediaType = {
    id: number;
    type: "image" | "video" | "virtual";
    src: string;
    hotel: string;
    location: string;
    thumb?: string;
};

const mediaItems: MediaType[] = [
    { id: 1, type: "image", src: "/images/image-gallery/hotels/hotel-1.avif", hotel: "LuxeLeaf Grand", location: "Goa, India" },
    { id: 2, type: "image", src: "/images/image-gallery/hotels/hotel-2.avif", hotel: "LuxeLeaf Grand", location: "Goa, India" },
    { id: 3, type: "video", src: "/video/hero-video.mp4", hotel: "Ocean Crown Hotel", location: "Kerala, India" },
    { id: 4, type: "virtual", src: "https://www.youtube.com/embed/KLWY1R7MZKE", hotel: "Skyline Suites", location: "Mumbai, India" },
    { id: 5, type: "image", src: "/images/image-gallery/hotels/hotel-3.avif", hotel: "Palm Grove Hotel", location: "Jaipur, India" },
    { id: 6, type: "image", src: "/images/image-gallery/hotels/hotel-4.avif", hotel: "Palm Grove Hotel", location: "Jaipur, India" },
    { id: 7, type: "image", src: "/images/image-gallery/rooms/room-1.avif", hotel: "Mountain Bliss", location: "Manali, India" },
    { id: 8, type: "video", src: "/video/hero-video.mp4", hotel: "Royal Heritage", location: "Udaipur, India" },
    { id: 9, type: "image", src: "/images/image-gallery/rooms/room-2.avif", hotel: "Blue Lagoon Hotel", location: "Pondicherry, India" },
    { id: 10, type: "image", src: "/images/image-gallery/rooms/room-3.avif", hotel: "Crystal Crown", location: "Bangalore, India" },
    { id: 11, type: "image", src: "/images/image-gallery/rooms/room-4.avif", hotel: "Himalayan Pearl", location: "Shimla, India" },
    { id: 12, type: "image", src: "/images/image-gallery/rooms/room-1.avif", hotel: "Royal Sea Breeze", location: "Andaman & Nicobar" },
];

export default function Gallery() {
    const itemsPerPage = 9;
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(mediaItems.length / itemsPerPage);
    const paginated = mediaItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeGlobalIndex, setActiveGlobalIndex] = useState<number | null>(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    const startRef = useRef<{ x: number; y: number } | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    function openAtGlobalIndex(globalIdx: number) {
        setActiveGlobalIndex(globalIdx);
        setActiveIndex(globalIdx - (page - 1) * itemsPerPage);
        setIsZoomed(false);
        setTranslate({ x: 0, y: 0 });
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        setActiveIndex(null);
        setActiveGlobalIndex(null);
        setIsZoomed(false);
        setTranslate({ x: 0, y: 0 });
        document.body.style.overflow = "";
    }
    function goPrev() {
        if (activeGlobalIndex == null) return;
        const prev = (activeGlobalIndex - 1 + mediaItems.length) % mediaItems.length;
        openAtGlobalIndex(prev);
    }
    function goNext() {
        if (activeGlobalIndex == null) return;
        const next = (activeGlobalIndex + 1) % mediaItems.length;
        openAtGlobalIndex(next);
    }

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (activeGlobalIndex == null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
            if (e.key === " " || e.key === "Spacebar") setIsZoomed((z) => !z);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [activeGlobalIndex]);

    // Pan handlers (only active when zoomed on desktop)
    function onPointerDown(e: React.PointerEvent) {
        if (!isZoomed) return;
        (e.target as Element).setPointerCapture(e.pointerId);
        startRef.current = { x: e.clientX - translate.x, y: e.clientY - translate.y };
    }
    function onPointerMove(e: React.PointerEvent) {
        if (!isZoomed || !startRef.current) return;
        const x = e.clientX - startRef.current.x;
        const y = e.clientY - startRef.current.y;
        setTranslate({ x, y });
    }
    function onPointerUp() {
        startRef.current = null;
    }

    const [loadedMap, setLoadedMap] = useState<Record<number, boolean>>({});
    function markLoaded(globalIdx: number) {
        setLoadedMap((m) => ({ ...m, [globalIdx]: true }));
    }
    const breakpointCols = {
        default: 3,
        1100: 3,
        800: 2,
        500: 1,
    };
    return (
        <section className="py-16 bg-light">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-center mb-8 uppercase  md:text-[40px]" data-aos="fade-up">
                    LuxeLeaf —{" "}
                    <span className="text-skyBlue">Photos, Videos & Virtual Tours</span>
                </h1>
                <Masonry
                    breakpointCols={breakpointCols}
                    className="flex w-auto -ml-4"
                    columnClassName="pl-4 bg-clip-padding"
                >
                    {paginated.map((item, idx) => {
                        const globalIdx = (page - 1) * itemsPerPage + idx;
                        return (
                            <div key={item.id} data-aos="zoom-in" data-aos-delay={(idx % 6) * 60} className="mb-6">
                                <div
                                    role="button"
                                    onClick={() => openAtGlobalIndex(globalIdx)}
                                    className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                                >
                                    {item.type === "image" && (
                                        <div className="relative w-full">
                                            {!loadedMap[globalIdx] && (
                                                <div className="absolute inset-0 bg-gray-200 blur-sm animate-pulse"></div>
                                            )}
                                            <Image
                                                src={item.src}
                                                alt={`${item.hotel} - ${item.location}`}
                                                width={600}
                                                height={420}
                                                loading="lazy"
                                                onLoadingComplete={() => markLoaded(globalIdx)}
                                                className={`w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105 ${loadedMap[globalIdx] ? "filter-none blur-0" : "blur-md"}`}
                                            />
                                        </div>
                                    )}
                                    {item.type === "video" && (
                                        <div className="relative w-full">
                                            <video
                                                src={item.src}
                                                className="w-full h-auto rounded-xl object-cover"
                                                muted
                                                loop
                                                autoPlay
                                                playsInline
                                            />
                                        </div>
                                    )}
                                    {item.type === "virtual" && (
                                        <div className="relative w-full">
                                            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden">
                                                <iframe
                                                    src={item.src}
                                                    title={item.hotel}
                                                    className="w-full h-full"
                                                    loading="lazy"
                                                    allowFullScreen
                                                />
                                            </div>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                                        <div>
                                            <p className="text-white font-semibold text-lg">{item.hotel}</p>
                                            <p className="text-white/90 text-sm">{item.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Masonry>

                <div className="flex items-center justify-center gap-3 mt-8" data-aos="fade-up">
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                        disabled={page === 1}
                    >
                        Prev
                    </button>

                    <div className="px-4 py-2 bg-white rounded shadow-sm text-sm">
                        Page {page} of {totalPages}
                    </div>

                    <button
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                        disabled={page === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
            {activeGlobalIndex != null && (
                <div
                    className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
                    onPointerUp={onPointerUp}
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 z-50 text-white text-3xl p-2 rounded-full hover:bg-white/10"
                        aria-label="Close"
                    >
                        <IoClose />
                    </button>

                    {/* Prev */}
                    <div onClick={e => e.stopPropagation()}>
                        <button
                            onClick={goPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white text-2xl p-3 rounded-full hover:bg-white/10"
                            aria-label="Previous"
                        >
                            <FaChevronLeft />
                        </button>

                        <button
                            onClick={goNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white text-2xl p-3 rounded-full hover:bg-white/10"
                            aria-label="Next"
                        >
                            <FaChevronRight />
                        </button>

                        <button
                            onClick={() => setIsZoomed((z) => !z)}
                            className="absolute right-6 bottom-6 z-50 text-white bg-black/30 p-3 rounded-full hover:bg-white/10 flex items-center gap-2"
                            aria-label="Toggle zoom"
                        >
                            <FaExpand />
                            <span className="text-sm">{isZoomed ? "Zoomed" : "Zoom"}</span>
                        </button>

                        <div
                            ref={containerRef}
                            onPointerDown={onPointerDown}
                            onPointerMove={onPointerMove}
                            style={{
                                transform: isZoomed ? `translate(${translate.x}px, ${translate.y}px) scale(2)` : "translate(0px,0px) scale(1)",
                                transition: isZoomed ? "transform 0s" : "transform 0.25s ease",
                                touchAction: "none",
                                maxWidth: "96%",
                                maxHeight: "92%",
                            }}
                            className="relative"
                        >
                            {(() => {
                                const item = mediaItems[activeGlobalIndex];
                                if (!item) return null;
                                if (item.type === "image") {
                                    return (
                                        <div className="rounded-xl overflow-hidden" onClick={closeLightbox}>
                                            <Image
                                                src={item.src}
                                                alt={`${item.hotel} - ${item.location}`}
                                                width={1400}
                                                height={900}
                                                className="object-contain max-h-[82vh]"
                                            />
                                        </div>
                                    );
                                }
                                if (item.type === "video") {
                                    return (
                                        <video
                                            src={item.src}
                                            controls
                                            autoPlay
                                            className="rounded-xl max-h-[82vh] w-full object-contain"
                                        />
                                    );
                                }
                                return (
                                    <div className="rounded-xl overflow-hidden w-[90vw] h-[80vh]">
                                        <iframe
                                            src={item.src}
                                            title={item.hotel}
                                            className="w-full h-full"
                                            allowFullScreen
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}
