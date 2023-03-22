import Box from "@mui/material/Box";
import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <Box sx={{ padding: "40px", margin: " 50px auto" }}>{children}</Box>;
}
