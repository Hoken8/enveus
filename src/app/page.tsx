import Image from "next/image";
import styles from "./page.module.css";
import RedirectButton from "@/components/button/RedirectButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sectionImage}>
        <div className={styles.backgroundImage}>
          <Image
            src="/background001.jpg"
            alt="background image"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              zIndex: "1",
            }}
          />
        </div>
        <div className={styles.backgroundGradient}></div>
        <div className={styles.overlay}>
          <div style={{ width: "25%", height: "25%", position: "relative" }}>
            <Image
              src="/enveus-logo.webp"
              alt="enveus logo"
              fill
              sizes="25vw"
              style={{
                objectFit: "contain",
              }}
              // width={384}
              // height={421}
            />
          </div>
          <h1>Enveus Gaming</h1>
          <br />
          <br />
          <h2>
            &rsaquo;&rsaquo;&rsaquo;&ensp; Join Us
            &ensp;&lsaquo;&lsaquo;&lsaquo;
          </h2>
          <p>
            Enveus is a PvX guild striving to be a centralized power in all
            aspects of Ashes of Creation. Created in 2016, Enveus has built a 18
            plus semi-hardcore to hardcore player base that focuses on
            competitive game-play. Our members are highly optimized and
            extremely supportive resulting in a non-toxic professional
            environment.
          </p>
          <br />
          <RedirectButton
            url="https://docs.google.com/forms/d/e/1FAIpQLScN52nvchN8ChLaTjYYasNxwNeb9XmvBpstr7j1udlfHEbJzw/viewform"
            text="APPLY"
            color="button--orange"
          />
        </div>
      </div>
      <div className={styles.sectionStats}>
        <br />
        <h2>Guild Statistics</h2>
        <br />
        <div style={{ width: "90%", height: "25vh", position: "relative" }}>
          <Image
            src="/classes-banner.png"
            alt="classes banner"
            // width={800}
            // height={338}
            fill
            sizes="90vw"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <br />
        <p>Discord: 1780 Members</p>
        <p>Community: 450+ Members</p>
        <p>AOC Alpha 2: 330+ Members</p>
        <p>AOC Phoenix Initiative: 12 Members</p>
        <br />
        <RedirectButton
          url="https://discord.com/invite/enveus"
          text="DISCORD"
          color="button--blue"
        />
        <br />
        <br />
      </div>
    </main>
  );
}
