"use client";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

export default function DelayedFooter() {
  const [mounted, setMounted] = useState(false);
  setTimeout(() => {
    setMounted(true);
  }, 2000);
  return mounted ? <Footer /> : null;
}
