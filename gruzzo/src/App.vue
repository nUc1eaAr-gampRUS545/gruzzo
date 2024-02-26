<script>
import HeaderProject from "@/components/Header.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import AboutContainer from "@/components/About.vue";
import ServiceProject from "@/components/Service.vue";
import FetureProjects from "@/components/Feature.vue";
import newProjects from "./components/Projects.vue";
import FooterPage from "@/components/Footer.vue";
import NewsLatter from "./components/NewsLatter.vue";
import BlogProject from "./components/Blog.vue";
const navbar = document.querySelector(".data-navbar");
const navToggler = document.querySelectorAll(".data-nav-toggler");
const navLinks = document.querySelectorAll(".data-nav-link");
const overlay = document.querySelector(".data-overlay");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#header");
  const backTopBtn = document.querySelector(".data-back-top-btn");
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  });
})

export default {
  components: {
    HeaderProject,
    HeroBanner,
    AboutContainer,
    ServiceProject,
    FetureProjects,
    newProjects,
    BlogProject,
    FooterPage,
    NewsLatter
  },
};
</script>
<template>
  <div id="top">
    <HeaderProject />
    <main>
      <article>
        <HeroBanner />
        <AboutContainer />
        <ServiceProject />
        <FetureProjects />
        <newProjects />
        <BlogProject />
        <NewsLatter/>
        <FooterPage />



      </article>
    </main>

    <!-- 
    - #FOOTER
  -->



    <!-- 
    - #BACK TO TOP
  -->

    <a href="#top" class="back-top-btn data-back-top-btn" aria-label="Back to top">
      <ion-icon name="chevron-up"></ion-icon>
    </a>

    <!-- 
    - custom js link
  -->
  </div>
</template>

<style>
@import url(./styles/styles.scss);

.active {
  background-color: var(--dark-orange);
}



/*-----------------------------------*\
#BACK TO TOP
\*-----------------------------------*/

.back-top-btn {
  position: fixed;
  bottom: 10px;
  right: 20px;
  background-color: var(--eerie-black);
  color: var(--white);
  font-size: 20px;
  padding: 10px;
  z-index: 3;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
}

.back-top-btn.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(-10px);
}

/*-----------------------------------*\
#MEDIA QUERISE
\*-----------------------------------*/

/**
* responsive for larger than 540px screen
*/
</style>
