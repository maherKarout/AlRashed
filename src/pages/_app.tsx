// import "../../public/css/accessibility.min.module.css"
// import "../../public/css/common-skeleton.min.module.css"
// // import "../../public/css/kingster-style-custom.module.css"
// import "../../public/css/style.module.css"
// import "../../public/css/page-builder.css";

// import "/public/css/style-core.css"
// import "/public/css/kingster-style-custom.css"


import "@/styles/globals.scss";
import "@/styles/Fonts/font.scss";
import type { AppProps } from "next/app";
import Layout from "./Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>

    {/* <link rel="stylesheet" href="css/common-skeleton.min.css?" type="text/css" media="all" /> */}
    {/* <link rel="stylesheet" href="css/tooltip.min.css" type="text/css" media="all" /> */}
    {/* <link rel="stylesheet" href="css/font-awesome.css" type="text/css" media="all" /> */}
    {/* <link rel="stylesheet" href="css/elegant-font.css" type="text/css" media="all" /> */}
    {/* <link rel="stylesheet" href="css/style.css" type="text/css" media="all" /> */}
    {/* <link rel="stylesheet" href="css/page-builder.css" type="text/css" media="all" /> */}
    {/* <link rel="stylesheet" href="plugins/revslider/public/assets/css/rs6.css" type="text/css" media="all" /> */}
    {/* <link rel="stylesheet" href="css/style-core.css" type="text/css" media="all" /> */}
    {/* <link rel="stylesheet" href="css/kingster-style-custom.css" type="text/css" media="all" /> */}
    </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
