import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <main className="main">
      <section className="section">
          <h1 className="title">Where the dreams come true</h1>
      </section>
      <section className="section section--form">
        <article className="form-wrapper">
          <section className="form-wrapper__title-box">
            <h2 className="form-wrapper__title">Login</h2>
          </section>
          <form>
            <input type="text" placeholder="Userame..." />
            <input type="text" placeholder="Password..." />
            <label>
              <input type="checkbox" id="cbox1" />
              Remember me
            </label>
            <p>Forgot your password?</p>
            <button type="submit">Login</button>
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
            <a href="#">Register access</a>
          </section>
        </article>
      </section>
    </main>
  );
}
