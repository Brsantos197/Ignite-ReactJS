import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import logo from "../../../public/images/logo.svg"
import Image from "next/image";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo}alt="ig.news" />
        <nav>
          <ActiveLink activeClass={styles.active} href="/">
          <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClass={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}