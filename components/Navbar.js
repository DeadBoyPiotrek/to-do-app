import styles from './Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
function Navbar() {
  const router = useRouter();

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar_link}>
          <Link href="/">
            <a className={router.pathname == '/' ? styles.active : ``}>
              Main Page
            </a>
          </Link>
        </div>
        <div className={styles.navbar_link}>
          <Link href="/to-do-list">
            <a
              className={router.pathname == '/to-do-list' ? styles.active : ``}
            >
              To Do List
            </a>
          </Link>
        </div>
        <div className={styles.navbar_link}>
          <Link href="/notes">
            <a className={router.pathname == '/notes' ? styles.active : ``}>
              Notes
            </a>
          </Link>
        </div>
        <div className={styles.navbar_link}>
          <Link href="/blog">
            <a className={router.pathname == '/blog' ? styles.active : ``}>
              Blog
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
