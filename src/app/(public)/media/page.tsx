import YoutubeCard from "@/components/card/YoutubeCard";
import styles from "../../page.module.css";

export default function MediaPage() {
  return (
    <main className={styles.main}>
      <br />
      <div className={styles.center}>
        <h1>Media</h1>
      </div>
      <br />
      <div className={styles.wrap}>
        <YoutubeCard
          title={"//Ashes of Creation: Alpha 2"}
          url={"https://www.youtube.com/embed/utOcgt4W7V0"}
        />
        <YoutubeCard
          title={"//Ashes of Creation: Recruitment"}
          url={"https://www.youtube.com/embed/muVrY8nvo5g"}
        />
        <YoutubeCard
          title={"//ESO: Zerg Bombs"}
          url={"https://www.youtube.com/embed/W7JXazJNHNw"}
        />
        <YoutubeCard
          title={"//Podcast: AOC Discussion Round"}
          url={"https://www.youtube.com/embed/eLlL_R9K1rA?start=156"}
        />
        <YoutubeCard
          title={"//Ashes of Creation: Tokyo Drift"}
          url={"https://www.youtube.com/embed/XH_LyTOQi-A"}
        />
        <YoutubeCard
          title={"//Stomp a Nuian out"}
          url={"https://www.youtube.com/embed/ui-CMf3paro"}
        />
        <YoutubeCard
          title={"//Shadow Wizard Money Gang!!!"}
          url={"https://www.youtube.com/embed/6nL2AvxGgDE"}
        />
      </div>
      <br />
      <br />
    </main>
  );
}
