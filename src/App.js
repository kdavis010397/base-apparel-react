import EmailInput from "./components/EmailInput";

import classes from "./App.module.css";

import heroImage from "./images/hero-desktop.jpg";
import mobileHero from "./images/hero-mobile.jpg";
import logo from "./images/logo.svg";

const App = () => {
  return (
    <div className={classes.container}>
      <div className={classes["hero-image-frame"]}>
        <img src={heroImage} alt="Woman" />
      </div>

      <div className={classes.background}>
        <main>
          <img className={classes.logo} src={logo} alt="Logo" />
          <img
            className={classes["mobile-image"]}
            src={mobileHero}
            alt="Woman"
          />
          <header>
            <h1>
              <span>We're</span> Coming Soon
            </h1>
            <p>
              Hello fellow shoppers! We're currently building our new fasion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
          </header>

          <EmailInput />
        </main>
      </div>
    </div>
  );
};

export default App;
