import Image from "next/image";
import styles from "./page.module.css";
import { ThemeToggle } from "./ui/ThemeToggle";

export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeToggle />
    </main>
  );
}
