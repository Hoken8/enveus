import Image from "next/image";
import styles from "../../page.module.css";
import RedirectButton from "@/components/button/RedirectButton";

export default function AboutUsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.sectionImage}>
        <div className={styles.backgroundImage}>
          <Image
            src="/enveus-banner.jpg"
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
          <h1>Enveus Gaming</h1>
          <br />
          <br />
          <h2>
            &rsaquo;&rsaquo;&rsaquo;&ensp; Ashes of Creation
            &ensp;&lsaquo;&lsaquo;&lsaquo;
          </h2>
          <br />
          <p>
            Enveus is currently the most active guild in Alpha-1 with an
            undefeated record in sieges.
          </p>
          <br />
          <p>
            The Enveus Community has invested over $100,000 in game packages to
            support and pre-test Ashes of Creation. We have the inside track
            with 10+ Phoenix Initiative Members, hundreds of hours of pre-Alpha
            testing, and the largest roster with 160+ members with access to
            Alpha-2. Our knowledge and testing covers every facet of the Game
            World (Economics, Crafting, Naval Combat, Open World PVP, Node
            Operations, Siege Warfare, Progressive Raiding, etc.).
          </p>
          <br />
          <p>
            We also have chapters in upcoming MMO&apos;s such as Throne &
            Liberty, ArcheAge 2, Riot MMO and evaluate any upcoming MMO&apos;s.
          </p>
          <br />
          <br />
          <RedirectButton
            url="https://ashesofcreation.com/"
            text="Ashes of Creation"
            color="button--orange"
          />
          <br />
          <RedirectButton
            url="https://throneandliberty.online/"
            text="Throne and Liberty"
            color="button--blue"
          />
          <br />
          <RedirectButton
            url="https://aa-classic.com/"
            text="ArcheAge Classic"
            color="button--blue"
          />
          <br />
        </div>
      </div>
    </main>
  );
}
