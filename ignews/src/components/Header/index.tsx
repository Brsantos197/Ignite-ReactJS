import Link from "next/link";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import logo from "../../../public/images/logo.svg"
import Image from "next/image";

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo}alt="ig.news" />
        <nav>
          <Link href="/">
          <a className={styles.active}>Home</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}