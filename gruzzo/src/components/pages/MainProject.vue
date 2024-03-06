<script setup>
import HeaderProject from "../HeaderProject.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import AboutContainer from "@/components/About.vue";
import ServiceProject from "@/components/Service.vue";
import FetureProjects from "@/components/Feature.vue";
import newProjects from "@/components/Projects.vue";
import FooterPage from "@/components/Footer.vue";
import NewsLatter from "@/components/NewsLatter.vue";
import BlogProject from "@/components/Blog.vue";
import CreateOrder from "../CreateOrder.vue";
import { onMounted } from "vue";
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

const scrollMeTo = (id) => {
  const topElement = document.getElementById(id);
  if (topElement) {
    topElement.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  const header = document.querySelector("#header");
  const backTopBtn = document.querySelector(".data-back-top-btn");
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      header.classList.add("active-header");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active-header");
      backTopBtn.classList.remove("active");
    }
  });
});
</script>
<template>
  <div id="top">
    <HeaderProject :scrollMeTo="scrollMeTo" />
    <main>
      <article>
        <HeroBanner id="home"/>
        <CreateOrder />
        <AboutContainer id="about" />
        <ProductCarousel />
        <ServiceProject id="service"/>
        <FetureProjects />
        <newProjects />
        <BlogProject id="blog" />
        <NewsLatter />
        <FooterPage id="footer" />
      </article>
    </main>
    <div
      @click="scrollMeTo('top')"
      class="back-top-btn data-back-top-btn"
      aria-label="Back to top"
    >
      ^
    </div>
  </div>
</template>

<style>
@import url(@/styles/styles.scss);

.active-header {
  background-color: var(--dark-orange);
  display: flex;
  width: 100%;
}
.back-top-btn {
  position: fixed;
  bottom: 10px;
  cursor: pointer;
  right: 20px;
  background-color: var(--eerie-black);
  color: var(--white);
  font-size: 20px;
  padding: 4px 10px 0px 10px;
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
</style>
