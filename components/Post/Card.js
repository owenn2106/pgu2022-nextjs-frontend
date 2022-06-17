import styles from "../../styles/Announcements/Announcements.module.css";

const Card = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <span>{new Date(post.created).toDateString()}</span>
      <h3 className={styles.postTitle}>{post.title}</h3>
      <p className={styles.postBody}>{post.body}</p>
      {post.link && (
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.postLink}
        >
          {post.link}
        </a>
      )}
    </div>
  );
};

export default Card;
