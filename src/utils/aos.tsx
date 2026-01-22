'use client'
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

const Aoscompo = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, []);

  return null;
}

export default Aoscompo
