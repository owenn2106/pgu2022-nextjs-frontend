import Head from "next/head";

// Import Components
import Header from "../components/Home/Header";
import Description from "../components/Home/Description";
import About from "../components/Home/About";
import Program from "../components/Home/Program";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prasmul Gear Up 2022</title>
        <meta name="description" content="Website of Prasmul Gear Up 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Description />
      <About />
      <Program />
    </div>
  );
}
