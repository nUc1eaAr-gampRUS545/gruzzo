<template>
    <section class="section hero" aria-label="home" id="home">
          <div class="container">
            <div class="hero-content">
              <h2 class="h1 hero-title">
                <span class="span">To Every</span> Direction
              </h2>

              <p class="hero-text">
                There are many variations of passages of worem Ipsum available,
                but the majority
              </p>

              <a href="#" class="btn-outline">View Services</a>

              <img
                src="../assets/images/hero-shape.png"
                width="116"
                height="116"
                loading="lazy"
                class="hero-shape shape-1"
              />

              <img
                src="../assets/images/hero-shape.png"
                width="116"
                height="116"
                loading="lazy"
                class="hero-shape shape-2"
              />
            </div>
          </div>
        </section>
</template>

<script>
    export default {
        name:"HeroBanner"
        
    }
</script>

<style lang="scss" scoped>
@import url(../styles/styles.scss);
.hero {
  position: relative;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-image: url("../assets/images/hero-banner.jpg");
  background-size: cover;
  background-position: center;
  display: grid;
  place-content: center;
  padding-block-start: calc(var(--section-padding) + 85px);
  z-index: 1;
}
.section {
  padding-block: var(--section-padding);
}
.hero-content {
  color: var(--white);
    text-align: center;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;


}

.hero-title .span {
  color: var(--dark-orange);
  font-size: var(--fs-2);
  font-weight: var(--fw-700);
}

.hero-text {
  margin-block: 20px 15px;
}

.btn-outline {
  max-width: max-content;
  margin-inline: auto;
  font-size: var(--fs-9);
  font-weight: var(--fw-500);
  text-transform: uppercase;
  border: 1px solid var(--white);
  padding: 8px 20px;
  transition: var(--transition);
}

.btn-outline:is(:hover, :focus) {
  background-color: var(--dark-orange);
  border-color: var(--dark-orange);
}

.hero-shape {
  position: absolute;
  z-index: -1;
  animation: move 2s ease-in-out infinite alternate;
}

.hero .shape-1 {
  top: 100px;
  left: 30px;
}

.hero .shape-2 {
  bottom: 80px;
  right: 30px;
}

@keyframes move {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(20px);
  }
}

</style>