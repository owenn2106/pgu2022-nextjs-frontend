import { useEffect, useState } from "react";
import Head from "next/head";

import APIService from "../components/APIService";
import Card from "../components/Post/Card";

import styles from "../styles/Announcements/Announcements.module.css";

const announcements = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    APIService.GetPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div className={styles.announcementsWrapper}>
      <Head>
        <title>PGU'22 - Announcements</title>
        <meta name="description" content="Website of Prasmul Gear Up 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h2 style={{ textAlign: "center", fontSize: "4rem" }}>ANNOUNCEMENTS</h2>
        {posts.map((post) => {
          return <Card post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

export default announcements;
