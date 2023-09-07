"use client";
import styles from "./PrimaryNavbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function PrimaryNavbar() {
  const currentRoute = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
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
      <button
        className={styles.hamburger}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 448 512"
        >
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            fill="purple"
          />
        </svg>
      </button>
    </nav>
  );
}
