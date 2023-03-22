import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Navbar from "@/Components/Navbar/Navbar";
import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import customTheme from  "../theme/Index";

function Layout({ children }: { children: React.ReactNode }) {

  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    // <ThemeProvider theme={customTheme}>
    <div>
      <Header setShowMenu={setShowMenu} showMenu={showMenu} />
      <Navbar showMenu={showMenu} />
      {children}
      <Footer/>
    </div>
    //  {/* </ThemeProvider>   */}
  );
}

export default Layout;
