"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import Tooltip from '../common/Tooltip';
import { CirclesWithBar } from 'react-loader-spinner';
import Logo from '@/app/(ui)/components/Layout/Header/Logo';

const Logout = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [tooltip, setTooltip] = useState<{ message: string; type: any } | null>(null);
    const router = useRouter();
    const showTooltip = (
        message: string,
        type: "success" | "error" | "info" = "info"
    ) => {
        setTooltip({ message, type });
        setTimeout(() => setTooltip(null), 3000);
    };
    const handleLogout = async () => {
        try {
            const res = await fetch("/api/auth/logout", { method: "POST" });
            const data = await res.json();
            if (res.ok) {
                setTimeout(() => {
                    router.push("/admin/signin");
                }, 1000)
                showTooltip(data.message, "success");
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (err: any) {
            showTooltip(err, "success");
        }
    };
    useEffect(() => {
        handleLogout()
    }, [])

    return (
        <div className="flex gap-5 flex-col h-screen items-center justify-center">
            {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
            <Logo/>
            <CirclesWithBar
                height="100"
                width="100"
                color="#4fa94d"
                outerCircleColor="#e31e24"
                innerCircleColor="#f9b52b"
                barColor="#f9b52b"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Logout