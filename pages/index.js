import Head from "next/head";
import { motion } from "framer-motion";
import favicon from "../public/favicon.ico";

// Import Components
// import Header from "../components/Home/Header";
// import Day1 from "../components/Home/DailyHeaders/Day1";
import Day2 from "../components/Home/DailyHeaders/Day2";
// import Day3 from "../components/Home/DailyHeaders/Day3";
import Recap from "../components/Home/Recap";
import Description from "../components/Home/Description";
import About from "../components/Home/About";
import LodeFA from "../components/Home/LodeFA";
import ChainAmica from "../components/Home/ChainAmica";
import Program from "../components/Home/Program";

export default function Home() {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Head>
        <title>Prasmul Gear Up 2022</title>
        <meta
          name="description"
          content="Website of Prasmul Gear Up 2022 - Orientation Program by Universitas Prasetiya Mulya"
        />
        <meta property="og:type" content="article" />

        <meta property="og:title" content="Prasmul Gear Up 2022" />

        <meta
          property="og:description"
          content="Prasmul Gear Up 2022 - Orientation Program by Universitas Prasetiya Mulya"
        />

        <meta property="og:image" content={favicon} />

        <meta property="og:url" content="https://prasmulgearup.com/" />

        <meta property="og:site_name" content="Prasmul Gear Up 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}
      {/* <Day1 /> */}
      <Day2 />
      {/* <Day3 /> */}
      <Recap />
      <Description />
      <About />
      <LodeFA />
      <ChainAmica />
      <Program />
    </motion.div>
  );
}
