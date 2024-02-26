<template>
    <section class="section newsletter" aria-label="newsletter">
          <div class="newsletter-container">
            <figure class="newsletter-banner img-holder">
              <img src="../assets/images/newsletter-banner.png" width="303" height="381" alt="newsletter banner"
                class="w-100" />
            </figure>

            <div class="newsletter-content">
              <h2 class="h2 section-title">Subscribe for offers and news</h2>

              <form action="" class="newsletter-form">
                <input type="email" name="email_address" placeholder="Enter Your Email" aria-label="email"
                  class="email-field" />

                <button type="submit" class="newsletter-btn">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </section>
</template>

<script>
export default {
   name:"NewsLatter"
}
</script>

<style lang="scss" scoped>
.newsletter-container{
    padding-inline: 15px;
    display: flex;
    flex-direction: row;
    height: 135px;

    align-items: flex-end;
    position: relative;
}
.newsletter {
  background-color: var(--dark-orange);
}

.newsletter .img-holder {
  background-color: transparent;
  margin-block-end: 20px;
  max-width: max-content;
}

.newsletter .section-title {
  margin-block-end: 20px;
}

.email-field {
  background-color: var(--white);
  color: var(--eerie-black);
  font-size: var(--fs-9);
  height: 65px;
  padding-inline: 20px;
  margin-block-end: 10px;
  outline: none;
  transition: var(--transition);
}

.email-field:focus {
  box-shadow: 0 2px 2px hsla(0, 0%, 0%, 0.4);
}

.newsletter-btn {
  background-color: var(--prussian-blue);
  color: var(--white);
  font-family: var(--ff-oswald);
  font-weight: var(--fw-700);
  padding: 8px 20px;
}

</style>