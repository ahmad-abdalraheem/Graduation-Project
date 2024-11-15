// just a test file, not completed
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={style.header}>
      <h3 className={style.brand}>Dev Path</h3>

      <nav className={style.navMenu}>
        <a href="">home</a>
        <a href="">roadmap</a>
        <a href="">My Progress</a>
        <a href="">about us</a>
      </nav>
      <menu className={style.actions}>
        <button className={style.loginButton + " " + style.button}>
          Login
        </button>
        <button className={style.registerButton + " " + style.button}>
          Register
        </button>
      </menu>
    </div>
  );
};
