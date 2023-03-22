import React from "react";
import styles from "./CollageBox.module.scss";
function CollageBox({
  nameCollage,
  blue = false,
}: {
  nameCollage: string;
  blue?: boolean;
}) {
  if (blue) {
    return (
      <div className={styles["collage-box-blue"]}>
        <h1 className={styles.title}>اسم الكلية</h1>
      </div>
    );
  } else {
    return (
      <div className={styles["collage-box"]}>
        <h1 className={styles.title}>اسم الكلية</h1>
      </div>
    );
  }
}

export default CollageBox;
