import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.scss";

function Navbar({ showMenu }: { showMenu: boolean }) {
  useEffect(() => {
    scrollNavbar(navbarRef.current);
    openNavbar(navbarRef.current, showMenu);
  });

  const navbarRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.navbar} ref={navbarRef}>
      <ul>
        <li>الشؤون الاكاديمية</li>
        <li>القبول </li>
        <li>الكليات</li>
        <li>عن الجامعة</li>
        <li className={styles.liimg}>
          <Image src="/download.jpg" width={70} height={70} alt="" />
        </li>
        <li>الخدمات الرقمية</li>
        <li>الاخبار والفعاليات</li>
        <li>الأبحاث العلمية</li>
      </ul>
    </div>
  );
}

export default Navbar;

function scrollNavbar(ref: HTMLDivElement | any) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200 && window.innerWidth > 900)
      ref.classList.add(styles["show-scroll"]);
    else ref.classList.remove(styles["show-scroll"]);
  });
}

function openNavbar(ref: HTMLDivElement | any, showMenu: boolean) {
  if (window.innerWidth <= 900 && showMenu) {
    ref.style.right = "100%";
  } else {
    ref.style.right = "0";
  }
}
