import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-around"}
          alignItems={{ xs: "center", md: "flex-start" }}
          spacing={5}
          sx={{ textAlign: { xs: "center", md: "start" } }}
        >
     

          <Stack alignItems={"center"}>
            <Image
              src={"/assets/AlRashed 2.svg"}
              alt=""
              width={100}
              height={100}
            />
            <h2 className={styles.maintitle}>
              جامعة الرشسيد الدولية الخاصة للعلوم
            </h2>
            <p>هنا يوجد نص هنا يوجد نصهنا يوجد نص هنا يوجد </p>
            <p>هنا يوجد نص هنا يوجد نصهنا يوجد نص هنا يوجد </p>
          </Stack>

          <Stack alignItems={"start"}>
            <h2 className={styles.title}>روابط سريعة</h2>
            <p>القبول في الجامعة</p>
            <p>هنا يوجد نص</p>
            <p>هنا يوجد نص</p>
            <p>هنا يوجد نص</p>
          </Stack>

          <Stack alignItems={"start "}>
            <h2 className={styles.title}>تواصل معنا</h2>
            <p>
              <img src="/assets/Call Silent.svg" alt="" />
              01133117100-0158691200
            </p>
            <p>
              <img src="/assets/Squircle.svg" alt="" />
              ru@ru.edu.sy ru@ru.edu.sy{" "}
            </p>
            <p className={styles["social-media"]}>
              <Image
                src={"/assets/YouTube.svg"}
                width={30}
                height={30}
                alt=""
              />
              <Image
                src={"/assets/Facebook.svg"}
                width={30}
                height={30}
                alt=""
              />
              <Image
                src={"/assets/Instagram.svg"}
                width={30}
                height={30}
                alt=""
              />
              <Image
                src={"/assets/Group 73.svg"}
                width={30}
                height={50}
                alt=""
              />
            </p>
          </Stack>


        </Stack>
      </footer>

      <Stack direction={{xs:"column" ,md:"row"}} sx={{textAlign:{xs:"center" ,md:"start"}}} className={styles["bottom-footer"]}>
        <p>All Rights Reserved | Terms and Conditions | Privacy Policy</p>
        <p>
          Copyright © 2023 جامعة الرشيد الخاصة - AL-Rasheed Private University
        </p>
      </Stack>
    </div>
  );
}

export default Footer;
