import { FC } from "react";
import styles from "./YoutubeCard.module.css";

interface YouTubeCardProps {
  title: string;
  url: string;
}

const YoutubeCard: FC<YouTubeCardProps> = ({ title, url }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h3>{title}</h3>
        <iframe
          className={styles.video}
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeCard;
