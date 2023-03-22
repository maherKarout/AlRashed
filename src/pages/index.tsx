import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/Components/Header/Header";
import Landing from "@/Components/Landing/Landing";
import Navbar from "@/Components/Navbar/Navbar";
import CardsUn from "@/Components/CardsUn/CardsUn";
import CollageBox from "@/Components/BoxCollage/CollageBox";
import { Grid } from "@mui/material";
import Container from "@/Components/Container/Container";
import LearnSection from "@/Home-components/LearnSection/LearnSection";

export default function Home() {
  const collageName = [
    "اسم الكلية",
    "اسم الكلية",
    "اسم الكلية",
    "اسم الكلية",
    "اسم الكلية",
    "اسم الكلية",
    "اسم الكلية",
    "اسم الكلية",
  ];
  return (
    <>
      {/* <Header />
      <Navbar /> */}
      <Landing />
      <Container>
        <CardsUn />
      </Container>

      <Container>
        <Grid container spacing={5} sx={{ padding: "20px" }}>
          {collageName.map((collage: string, index: number) => {
            return (
              <Grid item md={3} sm={6} xs={12} key={index}>
                <CollageBox nameCollage={collage} blue={false} />
              </Grid>
            );
          })}
        </Grid>

        <LearnSection />
      </Container>
    </>
  );
}
