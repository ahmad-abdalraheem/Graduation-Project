// just a test file, not completed
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.brand}>
        <h3>Dev Paths</h3>
      </div>
      <nav className={style.navMenu}>
        <a href="">home</a>
        <a href="">roadmap</a>
        <a href="">My Progress</a>
        <a href="">about us</a>
      </nav>
    </div>
  );
};
