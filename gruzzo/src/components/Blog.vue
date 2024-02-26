<template>
     <section class="section blog" aria-label="blog" id="blog">
          <div class="blog-container">
            <p class="section-subtitle">Our Blogs</p>

            <h2 class="h2 section-title">Recent news & events</h2>

            <p class="section-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the standard dummy text ever since the when an printer
              took.
            </p>

            <div class="blog-list grid-list">
         
                <div class="blog-card">
                  <figure class="card-banner img-holder" style="--width: 770; --height: 500">
                    <img src="../assets/images/blog-1.jpg" width="770" height="500" loading="lazy"
                      alt="At the end of the day, going forward, a new normal that has evolved from. your only logistic partner."
                      class="img-cover" />
                  </figure>

                  <div class="card-content">
                    <time class="card-meta" datetime="2022-08-02">
                      <span class="span">02</span> Aug
                    </time>

                    <h3 class="h3 card-title">
                      <a href="#">
                        At the end of the day, going forward, a new normal that
                        has evolved from. your only logistic partner.
                      </a>
                    </h3>

                    <p class="card-text">
                      New chip traps clusters of migrating tumor cells
                      asperiortenetur, blanditiis odit. typesetting industry the
                      standard dummy text ever since the when an printer.
                    </p>

                    <a href="#" class="btn-link">
                      <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                      <span class="span">Read More</span>
                    </a>
                  </div>
                </div>
     

         
                <div class="blog-card">
                  <figure class="card-banner img-holder" style="--width: 770; --height: 500">
                    <img src="../assets/images/blog-2.jpg" width="770" height="500" loading="lazy"
                      alt="Going forward, a new normal that has evolved from generation. moving your products across all borders."
                      class="img-cover" />
                  </figure>

                  <div class="card-content">
                    <time class="card-meta" datetime="2022-08-21">
                      <span class="span">21</span> Aug
                    </time>

                    <h3 class="h3 card-title">
                      <a href="#">
                        Going forward, a new normal that has evolved from
                        generation. moving your products across all borders.
                      </a>
                    </h3>

                    <p class="card-text">
                      New chip traps clusters of migrating tumor cells
                      asperiortenetur, blanditiis odit. typesetting industry the
                      standard dummy text ever since the when an printer.
                    </p>

                    <a href="#" class="btn-link">
                      <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                      <span class="span">Read More</span>
                    </a>
                  </div>
                </div>
       
            </div>
          </div>
        </section>
</template>

<script>
    export default {
        name:"BlogProject"
    }
</script>

<style lang="scss" scoped>
.blog-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 250px
}
.blog :is(.section-subtitle, .section-title, .section-text) {
  text-align: center;
}

.blog .section-text {
  margin-block: 20px 50px;
}

.blog-card .card-content {
  position: relative;
  width: 400px;
  height: auto;
}

.blog-card .card-meta {
  background-color: var(--prussian-blue);
  color: var(--white);
  text-align: center;
  font-size: var(--fs-5);
  font-family: var(--ff-oswald);
  font-weight: var(--fw-600);
  line-height: 1.5;
  max-width: max-content;
  margin-inline: auto 20px;
  margin-block: -80px 20px;
  padding: 20px 25px;
  box-shadow: -8px 8px 0 var(--dark-orange);
}

.blog-card .card-meta .span {
  color: var(--dark-orange);
  font-size: var(--fs-3);
  font-weight: var(--fw-700);
  line-height: 0.75;
}

.blog-card .card-text {
  margin-block: 15px;
}
</style>