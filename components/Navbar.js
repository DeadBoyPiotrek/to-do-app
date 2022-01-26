import styles from "./Navbar.module.scss";
function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.toDos}>to do list</div>
        <div className={styles.notes}>notes</div>
        <div className={styles.blog}>blog</div>
      </div>
    </>
  );
}

export default Navbar;
