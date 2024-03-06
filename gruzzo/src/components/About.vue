<template>
      <section class="section about" id="about" >
          <div class="about-container">
            <figure
              class="about-banner img-holder"
              style="--width: 400; --height: 720"
            >
              <img
                src="../assets/images/about-banner.jpg"
                width="400"
                height="720"
                loading="lazy"
                alt=""
                class="img-cover"
              />

              <img
                src="../assets/images/about-shape-1.png"
                width="260"
                height="170"
                loading="lazy"
                alt=""
                class="abs-img abs-img-1"
              />

              <img
                src="../assets/images/about-shape-2.png"
                width="500"
                height="500"
                loading="lazy"
                alt=""
                class="abs-img abs-img-2"
              />
            </figure>

            <div class="about-content">
              <p class="section-subtitle">Why Choose Us</p>

              <h2 class="h2 section-title">
                We Are Professional Logistics & cargo Agency
              </h2>

              <p class="section-text">
                Sed ut perspiciatis unde omnis iste natus error volup tatem
                accusantium dolorem que laudantium, totam inventore.
              </p>

              <ul class="about-list">
                <li class="about-item">
                  <div class="about-icon">
                    >
                  </div>

                  <p class="about-text">
                    Go beyond logistics, make the world go round and
                    revolutionize business.
                  </p>
                </li>

                <li class="about-item">
                  <div class="about-icon">
                    >
                  </div>

                  <p class="about-text">
                    Logistics through innovation, dedication, and technology.
                    ready, set, done.
                  </p>
                </li>

                <li class="about-item">
                  <div class="about-icon">
                    >
                  </div>

                  <p class="about-text">
                    We take pride in serving our customers safely. together with
                    passion.
                  </p>
                </li>

                <li class="about-item">
                  <div class="about-icon">
                    >
                  </div>

                  <p class="about-text">
                    Imagination what we can easily see is only a small
                    percentage.
                  </p>
                </li>

                <li class="about-item">
                  <div class="about-icon">
                    >
                  </div>

                  <p class="about-text">
                    Quality never goes out of style. safety, quality,
                    professionalism.
                  </p>
                </li>

                <li class="about-item">
                  <div class="about-icon">
                    >
                  </div>

                  <p class="about-text">
                    The quality shows in every move we make where business
                    lives.
                  </p>
                </li>
              </ul>

              <a href="#" class="btn">Learn More</a>
            </div>
          </div>
        </section>
</template>

<script>
    export default {
        name:"AboutContainer"
    }
</script>

<style lang="scss" scoped>
@import url(../styles/styles.scss);
.section {
  padding-block: var(--section-padding);
}
.about-container{
  max-width: 1180px;
  display: flex;
}
.about-banner {
  position: relative;
  box-shadow: var(--shadow-2);
  max-width: 300px;
  margin-block-end: 60px;
}

.about .abs-img-2 {
  display: none;
}

.about .abs-img-1 {
  position: absolute;
  bottom: 40px;
  right: 0;
  animation: move 2s ease-in-out infinite alternate;
}
@keyframes move{
  0% {
    transform: translateY(0);
}
100% {
    transform: translateY(20px);
}
}

.about :is(.section-title, .section-text) {
  margin-block-end: 20px;
}

.about-list {
  margin-block-end: 40px;
}

.about-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.about-text {
  font-size: var(--fs-8);
}

.about-icon {
  min-width: max-content;
  color: var(--dark-orange);
  margin-block-start: 8px;
}

.about-item:not(:last-child) {
  margin-block-end: 10px;
}
</style>