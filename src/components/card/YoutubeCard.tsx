import { FC } from "react";

interface YouTubeCardProps {
  title: string;
  url: string;
}

const YoutubeCard: FC<YouTubeCardProps> = ({ title, url }) => {
  return (
    <div
      style={{
        border: "2px solid rgb(53, 5, 117)",
        padding: "2px",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(74deg, rgba(53,5,117,1) 40%, rgba(138,43,226,1) 100%)",
          padding: "10px 2px",
        }}
      >
        <h3
          style={{
            paddingLeft: "10px",
          }}
        >
          {title}
        </h3>
      </div>
      <iframe
        width="560"
        height="315"
        src={url}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div
        style={{
          background:
            "linear-gradient(74deg, rgba(53,5,117,1) 40%, rgba(138,43,226,1) 100%)",
          height: "25px",
        }}
      ></div>
    </div>
  );
};

export default YoutubeCard;
