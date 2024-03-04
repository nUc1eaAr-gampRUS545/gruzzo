<template>
    <section class="section feature" aria-label="feature">
          <div class="feature-container">
            <div class="title-wrapper">
              <div class="">
                <p class="section-subtitle">Estimation</p>

                <h2 class="h2 section-title">Has a wide range of solutions</h2>

                <p class="section-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry the standard dummy text ever since the
                  when an printer took.
                </p>
              </div>

              <a href="#" class="btn">Read More</a>
            </div>

            <ul class="feature-list grid-list">
              <li>
                <div class="feature-card" style="--card-number: '01'">
                  <div class="card-icon">
                    <img
                      src="../assets/images/feature-icon-1.png"
                      width="72"
                      height="91"
                      alt=""
                    />
                  </div>

                  <h3 class="h3 card-title">Solutions and specialized</h3>

                  <p class="card-text">
                    Our aim is to optimize and improve your supply chain so that
                    we can give you the best service
                  </p>

                  <a href="#" class="card-btn" aria-label="Read more">
                    →
                  </a>
                </div>
              </li>

              <li>
                <div class="feature-card" style="--card-number: '02'">
                  <div class="card-icon">
                    <img
                      src="../assets/images/feature-icon-2.png"
                      width="94"
                      height="94"
                      alt=""
                    />
                  </div>

                  <h3 class="h3 card-title">Multiple warehouses</h3>

                  <p class="card-text">
                    We provide multiple drop off and pickup locations so you
                    don't have to worry. And you should not face any kind...
                  </p>

                  <a href="#" class="card-btn" aria-label="Read more">
                    →
                  </a>
                </div>
              </li>

              <li>
                <div class="feature-card" style="--card-number: '03'">
                  <div class="card-icon">
                    <img
                      src="../assets/images/feature-icon-3.png"
                      width="93"
                      height="93"
                      alt=""
                    />
                  </div>

                  <h3 class="h3 card-title">Tracking made easy</h3>

                  <p class="card-text">
                    A tracking number for the entire process. so that you can
                    find the exact position. this process will help you
                  </p>

                  <a href="#" class="card-btn" aria-label="Read more">
                    →
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>
</template>

<script>
    export default {
        name:"FetureProjects"
        
    }
</script>

<style lang="scss" scoped>
.btn{
  position: relative;
  color: var(--white);
  background-color: var(--dark-orange);
  max-width: max-content;
  font-size: var(--fs-9);
  height: 42px;
  letter-spacing: 1px;
  padding-block: 10px;
  padding-inline: 15px 50px;
}
.feature-container{
    display: flex;
    flex-direction: column;
}
.feature .title-wrapper {

    display: flex;
    flex-direction: row;
    margin: 0 50px;
}

.feature .section-text {
  margin-block: 20px 40px;
}

.feature-card {
  position: relative;
  padding: 30px;
  
  text-align: center;
  border: 1px solid var(--alice-blue);
  transition: var(--transition);
}

.feature-card:is(:hover, :focus-within) {
  box-shadow: var(--shadow-3);
}

.feature-card::before {
  content: var(--card-number);
  color: var(--cultured-1);
  
  font-family: var(--ff-oswald);
  font-size: 150px;
  font-weight: var(--fw-700);
  line-height: 1;
  transition: var(--transition);
}

.feature-card:is(:hover, :focus-within)::before {
  color: var(--dark-orange);
}

.feature-card .card-icon {
  background-color: var(--alice-blue);
  width: 170px;
  height: 170px;
  display: grid;
  place-content: center;
  border-radius: 50%;
  margin-inline: auto;
  margin-block-end: 30px;
}

.feature-card .card-text {
  margin-block: 20px 40px;
  
}

.feature-card .card-btn {
  color: var(--prussian-blue);
  font-size: 24px;
  border: 2px solid var(--prussian-blue);
  max-width: max-content;
  margin-inline: auto;
  padding: 10px 18px;
}

</style>