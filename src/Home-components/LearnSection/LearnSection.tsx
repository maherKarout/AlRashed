import { Box } from "@mui/material";
import React from "react";
import styles from "./LearnSection.module.scss";

function LearnSection() {
  return (
    <div className={styles["learn-section"]}>
      <Box sx={{ display: { sm: "none", md: "block" } }}>
        <span className={styles["left-side"]}></span>
        <span className={styles["right-side"]}></span>
      </Box>
      <h1 className={styles.title}>التعليم في جامعة الرشيد</h1>
      <p>هنا يوجد نص هنا يوجد نص هنا يوجد نص هنا يوجد نص</p>
    </div>
  );
}

export default LearnSection;
