<template>
   <section class="section service" id="service" aria-label="service">
          <div class="service-container">
            <p class="section-subtitle">All Services</p>

            <h2 class="h2 section-title">Trusted For Our Services</h2>

            <p class="section-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the standard dummy text ever since the when an printer
              took.
            </p>

            <ul class="service-list grid-list">
              <li>
                <div class="service-card">
                  <div class="card-icon">
                    <img
                      src="../assets/images/service-icon-1.png"
                      width="80"
                      height="60"
                      loading="lazy"
                      alt="Truck"
                    />
                  </div>

                  <h3 class="h3 card-title">
                    <span class="span">01</span> Air Freight
                  </h3>

                  <p class="card-text">
                    Our aim is to optimize and improve your supply chain so that
                    we can give you the best service.
                  </p>

                  <a href="#" class="btn-link">
                    <ion-icon
                      name="chevron-forward"
                      aria-hidden="true"
                    ></ion-icon>

                    <span class="span">View Detail</span>
                  </a>
                </div>
              </li>

              <li>
                <div class="service-card">
                  <div class="card-icon">
                    <img
                      src="../assets/images/service-icon-2.png"
                      width="74"
                      height="60"
                      loading="lazy"
                      alt="Ship"
                    />
                  </div>

                  <h3 class="h3 card-title">
                    <span class="span">02</span> Road Freight
                  </h3>

                  <p class="card-text">
                    Our aim is to optimize and improve your supply chain so that
                    we can give you the best service.
                  </p>

                  <a href="#" class="btn-link">
                    <ion-icon
                      name="chevron-forward"
                      aria-hidden="true"
                    ></ion-icon>

                    <span class="span">View Detail</span>
                  </a>
                </div>
              </li>

              <li>
                <div class="service-card">
                  <div class="card-icon">
                    <img
                      src="../assets/images/service-icon-3.png"
                      width="60"
                      height="60"
                      loading="lazy"
                      alt="Airplane"
                    />
                  </div>

                  <h3 class="h3 card-title">
                    <span class="span">03</span> Ocean Freight
                  </h3>

                  <p class="card-text">
                    Our aim is to optimize and improve your supply chain so that
                    we can give you the best service.
                  </p>

                  <a href="#" class="btn-link">
                    <ion-icon
                      name="chevron-forward"
                      aria-hidden="true"
                    ></ion-icon>

                    <span class="span">View Detail</span>
                  </a>
                </div>
              </li>

              <li>
                <div class="service-card">
                  <div class="card-icon">
                    <img
                      src="../assets/images/service-icon-4.png"
                      width="50"
                      height="60"
                      loading="lazy"
                      alt="Train"
                    />
                  </div>

                  <h3 class="h3 card-title">
                    <span class="span">04</span> Rail Freight
                  </h3>

                  <p class="card-text">
                    Our aim is to optimize and improve your supply chain so that
                    we can give you the best service.
                  </p>

                  <a href="#" class="btn-link">
                    <ion-icon
                      name="chevron-forward"
                      aria-hidden="true"
                    ></ion-icon>

                    <span class="span">View Detail</span>
                  </a>
                </div>
              </li>

              <li>
                <div class="service-card">
                  <div class="card-icon">
                    <img
                      src="../assets/images/service-icon-5.png"
                      width="63"
                      height="60"
                      loading="lazy"
                      alt="Trolley"
                    />
                  </div>

                  <h3 class="h3 card-title">
                    <span class="span">05</span> Warehousing
                  </h3>

                  <p class="card-text">
                    Our aim is to optimize and improve your supply chain so that
                    we can give you the best service.
                  </p>

                  <a href="#" class="btn-link">
                    <ion-icon
                      name="chevron-forward"
                      aria-hidden="true"
                    ></ion-icon>

                    <span class="span">View Detail</span>
                  </a>
                </div>
              </li>

              <li>
                <div class="service-card">
                  <div class="card-icon">
                    <img
                      src="../assets/images/service-icon-6.png"
                      width="46"
                      height="60"
                      loading="lazy"
                      alt="Paper"
                    />
                  </div>

                  <h3 class="h3 card-title">
                    <span class="span">06</span> Project Cargo
                  </h3>

                  <p class="card-text">
                    Our aim is to optimize and improve your supply chain so that
                    we can give you the best service.
                  </p>

                  <a href="#" class="btn-link">
                    <ion-icon
                      name="chevron-forward"
                      aria-hidden="true"
                    ></ion-icon>

                    <span class="span">View Detail</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>
</template>

<script>
export default {
   name:"ServiceProject"
}
</script>

<style lang="scss" scoped>
.service {
  background-color: var(--alice-blue);
}
.service-container{
    display: flex;
    flex-direction: column;
    
}
.service :is(.section-subtitle, .section-title, .section-text) {
  text-align: center;
}

.service .section-title {
  margin-block-end: 20px;
}

.service .section-text {
  margin-block-end: 50px;
}

.service-card {
  background-color: var(--white);
  padding: 30px;
  border: 20px solid var(--cultured-3);
  transition: var(--transition);
}

.service-card:is(:hover, :focus-within) {
  border-color: var(--dark-orange);
}

.service-card .card-icon {
  margin-block-end: 30px;
}

.service-card .card-title .span {
  display: inline-block;
  color: var(--dark-orange);
  font-size: var(--fs-3);
  margin-inline-end: 15px;
}

.service-card .card-text {
  margin-block: 10px 20px;
}
</style>