import Head from "next/head";
import { motion } from "framer-motion";

// Import Components
import Header from "../components/Home/Header";
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
        <meta name="description" content="Website of Prasmul Gear Up 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Description />
      <About />
      <LodeFA />
      <ChainAmica />
      <Program />
    </motion.div>
  );
}
