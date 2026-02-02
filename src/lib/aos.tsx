"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Aoscompo() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: false,
  //   });
  // }, []);

  useEffect(() => {
  import("aos").then(AOS => {
    AOS.init({ once: true });
  });
}, []);


  return null;
}
