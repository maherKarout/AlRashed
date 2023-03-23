import React from "react";
import styles from "./Header.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import TranslateIcon from "@mui/icons-material/Translate";
import Image from "next/image";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({
  setShowMenu,
  showMenu,
}: {
  setShowMenu: Function;
  showMenu: boolean;
}) {
  return (
    <div className={styles.header}>
      <Image className={styles.logo} src="/assets/AlRashed 2.svg" alt="" width={60} height={60} />
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          left: "20px",
          cursor: "pointer",
        }}
        onClick={() => {
          setShowMenu(!showMenu);
          console.log(showMenu);
        }}
      >
        <MenuIcon />
      </Box>
      <ul>
        <li>
          <img src="/assets/Squircle.svg" alt="" /> ru@ru.edu.sy
        </li>
        <li>
          <img src="/assets/Call Silent.svg" alt="" />
          0158691200
        </li>
      </ul>
      <ul>
        <li>حساب الطالب</li>
        <li>
          <img src="/assets/language-icon 1.svg" alt="" /> عربي
        </li>
        <li></li>
      </ul>
    </div>
  );
}
