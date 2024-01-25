import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <main className="main">
      <section className="section section--title">
          <div className="logo">
            <img className="icon" alt="paper-plane-logo" src="/icon_logo.svg"/>
            <p>LoveTravel</p>
          </div>
          <h1 className="title">Where the dreams come true</h1>
      </section>
      <section className="section section--form">
        <article className="form-wrapper">
          <section className="form-wrapper__title-box">
            <h2 className="form-wrapper__title">Login</h2>
          </section>
          <form className="form">
            <div className="form__field">
              <div className="icon__wrapper">
                <img className="icon" alt="user-icon" src="/icon_user.svg"/>
              </div>
              <input type="text" placeholder="Userame..." />
            </div>
            <div className="form__field">
              <div className="icon__wrapper">
                <img className="icon" alt="lock-icon" src="/icon_lock.svg"/>
              </div>
              <input type="text" placeholder="Password..." />
            </div>
            <div className="form__remember">
              <label className="form__checkbox">
                <input type="checkbox" id="cbox1" />
                Remember me
              </label>
              <a className="link" href="#">Forgot your password?</a>
            </div>
            <button className="button button--main" type="submit">Login</button>
          </form>
          <section className="form-wrapper__login-app">
            <p>Or login with...</p>
            <ul className="login-app__list">
              <li><button className="button button--app" aria-label="login with google"><img alt="google-icon" src="/icon_google.svg"/></button></li>
              <li><button className="button button--app" aria-label="login with twitter"><img alt="twitter-icon" src="/icon_twitter.svg"/></button></li>
              <li><button className="button button--app" aria-label="login with facebook"><img alt="facebook-icon" src="/icon_fb.svg"/></button></li>
            </ul>
          </section>
          <section className="form-wrapper__forgot">
            <p>Don't you have an account?</p>
            <a className="link" href="#">Register access</a>
          </section>
        </article>
      </section>
    </main>
  );
}
