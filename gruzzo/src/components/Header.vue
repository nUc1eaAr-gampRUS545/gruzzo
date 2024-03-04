<template>
  <div class="header" id="header">
    <div className="header-container">
      <h1>
        <a href="#" className="logo">Transportio</a>
      </h1>

      <nav className="navbar" data-navbar>
        <div className="navbar-top">
          <a href="#" className="logo">Transportio</a>

          <button
            className="nav-close-btn"
            aria-label="Clsoe menu"
            data-nav-toggler
          ></button>
        </div>

        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#home" className="navbar-link" data-nav-link>
              <span>Home</span>

              <ion-icon name="chevron-forward"></ion-icon>
            </a>
          </li>

          <li className="navbar-item">
            <a href="#about" className="navbar-link" data-nav-link>
              <span>About</span>
            </a>
          </li>

          <li className="navbar-item">
            <a href="#service" className="navbar-link" data-nav-link>
              <span>Service</span>

              <ion-icon name="chevron-forward"></ion-icon>
            </a>
          </li>

          <li className="navbar-item">
            <a href="#blog" className="navbar-link" data-nav-link>
              <span>Blog</span>
            </a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link>
              <span>Contact</span>
            </a>
          </li>
          <li className="navbar-item">
            <router-link to="/login" className="navbar-link">
              <span>Sign-in</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <div className="header-contact">
        <div>
          <p className="contact-label">Free Call In Russia</p>

          <a href="tel:12345678910" className="contact-number"
            >+7 234 567 8910</a
          >
        </div>

        <div className="contact-icon">
          <ion-icon name="call-outline"></ion-icon>
        </div>
      </div>

      <button className="nav-open-btn" aria-label="Open menu" data-nav-toggler>
        <ion-icon name="menu-outline"></ion-icon>
      </button>

      <div className="overlay" data-nav-toggler data-overlay></div>
    </div>
  </div>
</template>

<script>
//const backTopBtn = document.querySelector(".data-back-top-btn");

export default {
  name: "HeaderProject",
  data() {
    return {
      message: "Привет, мир!",
    };
  },
};
</script>

<style lang="scss">
@import url(../styles/styles.scss);

.section {
  padding-block: var(--section-padding);
}

.header-contact {
  display: none;
}

.header {
  position: fixed;
  top: 0;

  left: 0;
  width: 100%;
  padding-block: 15px;
  z-index: 4;
  transition: var(--transition);
}

.header-container {
  display: flex;
  align-items: center;
  gap: 30px;
  max-width: 1180px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

.logo {
  font-family: var(--ff-oswald);
  color: var(--white);
  font-size: 3rem;
}

.nav-open-btn {
  color: var(--white);
  font-size: 35px;
}

.nav-open-btn ion-icon {
  --ionicon-stroke-width: 40px;
}

.navbar {
  position: fixed;
  top: 0;
  left: -300px;
  max-width: 300px;
  width: 100%;
  height: 100%;
  background-color: var(--white);
  box-shadow: var(--shadow-1);
  z-index: 3;
  visibility: hidden;
  transition: 0.25s var(--cubic-in);
}

.navbar.active {
  visibility: visible;
  transform: translateX(300px);
  transition: 0.5s var(--cubic-out);
}

.navbar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-block-end: 1px solid var(--plutinum);
  padding: 30px 20px;
}

.navbar-top .logo {
  color: var(--onyx);
  font-size: 3rem;
}

.nav-close-btn {
  font-size: 25px;
}

.nav-close-btn ion-icon {
  --ionicon-stroke-width: 40px;
}

.navbar-item:not(:last-child) {
  border-block-end: 1px solid var(--plutinum);
}

.navbar-link {
  color: var(--black);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  transition: var(--transition);
}

.navbar-link:is(:hover, :focus) {
  background-color: var(--cultured-1);
  color: var(--dark-orange);
}

.overlay {
  position: fixed;
  inset: 0;
  background-color: var(--black_60);
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  transition: var(--transition);
}

.overlay.active {
  visibility: visible;
  opacity: 1;
}

@media (min-width: 540px) {
  /**
 * REUSED STYLE
 */

  .btn {
    font-size: var(--fs-7);
    padding-inline: 30px 60px;
  }

  /**
 * HEADER
 */

  .header-contact {
    color: var(--white);
    display: flex;
    align-items: center;
    gap: 20px;
    text-align: right;
    line-height: 1.2;
    margin-inline-start: auto;
  }

  .header .contact-label {
    text-transform: uppercase;
    font-size: var(--fs-9);
  }

  .header .contact-number {
    font-size: var(--fs-6);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .header .contact-icon {
    font-size: 35px;
    opacity: 0.6;
  }
}

@media (min-width: 540px) {
  /**
 * REUSED STYLE
 */

  .btn {
    font-size: var(--fs-7);
    padding-inline: 30px 60px;
  }

  /**
 * HEADER
 */

  .header-contact {
    color: var(--white);
    display: flex;
    align-items: center;
    gap: 20px;
    text-align: right;
    line-height: 1.2;
    margin-inline-start: auto;
  }

  .header .contact-label {
    text-transform: uppercase;
    font-size: var(--fs-9);
  }

  .header .contact-number {
    font-size: var(--fs-6);
    font-weight: var(--fw-600);
    letter-spacing: 1px;
  }

  .header .contact-icon {
    font-size: 35px;
    opacity: 0.6;
  }
}

/**
* responsive for larger than 640px screen
*/

@media (min-width: 640px) {
  /**
 * REUSED STYLE
 */

  .h1 {
    --fs-3: 5rem;
  }

  .header-container {
    max-width: 540px;
    width: 100%;
    margin-inline: auto;
  }

  /**
 * HEADER
 */

  .header-container {
    max-width: unset;
  }

  .header .logo {
    font-size: 3.5rem;
  }

  /**
 * HERO
 */
}

/**
* responsive for larger than 768px screen
*/

@media (min-width: 768px) {
  /**
 * REUSED STYLE
 */

  .header-container {
    max-width: 720px;
  }

  .h1 {
    --fs-3: 6rem;
  }

  .grid-list {
    grid-template-columns: 1fr 1fr;
  }

  /**
 * HERO
 */

  .hero-title .span {
    --fs-2: 7rem;
  }

  .hero-text {
    font-size: var(--fs-7);
    max-width: 40ch;
    margin-block-end: 40px;
  }

  .btn-outline {
    font-size: var(--fs-7);
    padding: 12px 30px;
  }
}

/**
* responsive for larger than 992px screen
*/

@media (min-width: 992px) {
  /**
 * CUSTOM PROPERTY
 */

  :root {
    /**
   * typography
   */

    --fs-4: 4.5rem;

    /**
   * spacing
   */

    --section-padding: 120px;
  }

  /**
 * REUSED STYLE
 */

  .header-container {
    max-width: 960px;
  }

  .h1 {
    --fs-3: 10rem;
  }

  .section-subtitle {
    --fs-6: 3rem;
  }

  .section-text {
    max-width: 70ch;
    margin-inline: auto;
  }

  .grid-list {
    grid-template-columns: repeat(3, 1fr);
  }

  /**
 * HEADER
 */

  .nav-open-btn,
  .navbar-top,
  .navbar-link > ion-icon {
    display: none;
  }

  .navbar,
  .navbar.active {
    all: unset;
  }

  .navbar-list {
    display: flex;
    gap: 5px;
  }

  .navbar-item:not(:last-child) {
    border-block-end: none;
  }

  .navbar-link {
    color: var(--white);
  }

  .navbar-link:is(:hover, :focus) {
    background-color: transparent;
  }

  .header-contact {
    margin-inline-start: 0;
  }

  @media (min-width: 1200px) {
    /**
 * REUSED STYLE
 */

    .header-container {
      max-width: 1180px;
    }

    .h1 {
      --fs-3: 12rem;
    }

    /**
 * HEADER
 */

    .header .contact-number {
      --fs-6: 3rem;
    }
  }
}
</style>
