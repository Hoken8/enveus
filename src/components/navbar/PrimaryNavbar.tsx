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
        <ul className={isExpanded ? styles.ulExpanded : styles.ul}>
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
      <div className={styles.user}>
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
          {!isExpanded ? (
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              fill="#777"
            />
          ) : (
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              fill="#777"
            />
          )}
        </svg>
      </button>
    </nav>
  );
}
