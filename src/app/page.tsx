import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <main className="main">
      <section className="section section--title">
          <h1 className="title">Where the dreams come true</h1>
      </section>
      <section className="section section--form">
        <article className="form-wrapper">
          <section className="form-wrapper__title-box">
            <h2 className="form-wrapper__title">Login</h2>
          </section>
          <form className="form">
            <div className="form__field">
              <input type="text" placeholder="Userame..." />
            </div>
            <div className="form__field">
              <input type="text" placeholder="Password..." />
            </div>
            <div className="form__remember">
              <label className="form__checkbox">
                <input type="checkbox" id="cbox1" />
                Remember me
              </label>
              <a className="link" href="#">Forgot your password?</a>
            </div>
            <button className="button" type="submit">Login</button>
          </form>
          <section className="form-wrapper__login-app">
            <p>Or login with...</p>
            <ul>
              <li>Google</li>
              <li>Twitter</li>
              <li>Facebook</li>
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
