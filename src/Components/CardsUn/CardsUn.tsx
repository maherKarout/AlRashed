import Grid from "@mui/material/Grid";
import React from "react";
import Card from "../Card/Card";
import styles from "./CardsUn.module.scss";

function CardsUn() {
  return (
    <div className={`${styles['cards-un']} container `}>
      <Grid container spacing={5}>
        <Grid md={4} xs={12} item>
          <Card />
        </Grid>

        <Grid md={4} xs={12} item>
          <Card />
        </Grid>

        <Grid md={4} xs={12} item>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}

export default CardsUn;
