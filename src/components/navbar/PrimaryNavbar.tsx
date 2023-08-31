"use client";
import styles from "./PrimaryNavbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function PrimaryNavbar() {
  const currentRoute = usePathname();
  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <Link href={"/"}>
          <div className={styles.icon}>
            <Image
              src="/guild-icon.png"
              width={40}
              height={40}
              alt="guild icon"
            />
          </div>
        </Link>
        <ul className={styles.ul}>
          <li className={currentRoute === "/" ? styles.activeLink : ""}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={currentRoute === "/about-us" ? styles.activeLink : ""}>
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li className={currentRoute === "/media" ? styles.activeLink : ""}>
            <Link href={"/media"}>Media</Link>
          </li>
          <li>
            {/* external link, no need for active class */}
            <a href="https://www.bonfire.com/store/enveus-apparel/">Store</a>
          </li>
          <li>
            {/* external link, no need for active class */}
            <a href="https://discord.gg/enveus">Discord</a>
          </li>
        </ul>
      </div>
      <div className={styles.menu}>
        <div className={styles.icon}>
          <Image
            src="/default-user-icon.png"
            width={35}
            height={35}
            style={{ borderRadius: "50%" }}
            alt="user's discord icon"
          />
          <p>Guest</p>
        </div>
      </div>
    </nav>
  );
}
