<template>
     <footer class="footer">
      <div class="footer-container">
        <div class="footer-top section">
          <div class="footer-brand">
            <a href="#" class="logo">Transportio</a>

            <p class="footer-text">
              Many desktop publishing packages and web page editors now use are
              dolra Ipsum as their default.
            </p>

            <ul class="social-list">
              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>
          </div>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Quick Links</p>
            </li>

            <li>
              <a href="#" class="footer-link">About</a>
            </li>

            <li>
              <a href="#" class="footer-link">Services</a>
            </li>

            <li>
              <a href="#" class="footer-link">Blog</a>
            </li>

            <li>
              <a href="#" class="footer-link">FAQ</a>
            </li>

            <li>
              <a href="#" class="footer-link">Contact Us</a>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Services</p>
            </li>

            <li>
              <a href="#" class="footer-link">Warehouse</a>
            </li>

            <li>
              <a href="#" class="footer-link">Air Freight</a>
            </li>

            <li>
              <a href="#" class="footer-link">Ocean Freight</a>
            </li>

            <li>
              <a href="#" class="footer-link">Road Freight</a>
            </li>

            <li>
              <a href="#" class="footer-link">Packaging</a>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Community</p>
            </li>

            <li>
              <a href="#" class="footer-link">Business Consulting</a>
            </li>

            <li>
              <a href="#" class="footer-link">Testimonials</a>
            </li>

            <li>
              <a href="#" class="footer-link">Track Your Shipment</a>
            </li>

            <li>
              <a href="#" class="footer-link">Privacy Policy</a>
            </li>

            <li>
              <a href="#" class="footer-link">Terms & Condition</a>
            </li>
          </ul>
        </div>

        <div class="footer-bottom">
          <p class="copyright">
            &copy; 2022 Transportio. All Rights Reserved by
            <a href="#" class="copyright-link">codewithsadee</a>
          </p>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
    name:"FooterPage"
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--plutinum);
  color: var(--prussian-blue);
}
.footer-container{
    display: flex;
    flex-direction: column;
}
.footer-list{
  width: fit-content;
}
.footer-top {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, 1fr);
    justify-items: self-end;
    margin: 0 50px;
}

.footer .logo {
  color: var(--prussian-blue);
  font-weight: var(--fw-800);
  font-size: 3.2rem;
}

.footer-text {
  margin-block: 10px 30px;
}

.social-list {
  display: flex;
  gap: 10px;
}

.social-link {
  background-color: var(--indigo-dye);
  color: var(--white);
  font-size: 20px;
  padding: 12px;
  transition: var(--transition);
}

.social-link:is(:hover, :focus) {
  background-color: var(--prussian-blue);
}

.footer-list-title {
  font-size: var(--fs-6);
  max-width: max-content;
  padding-block-end: 10px;
  border-block-end: 3px solid var(--dark-orange);
  margin-block-end: 20px;
}

.footer-link {
  padding-block: 6px;
}

.footer-bottom {
  padding-block: 40px;
  border-block-start: 1px solid var(--prussian-blue);
  font-size: var(--fs-9);
  color: var(--indigo-dye);
}

.copyright{
  display: flex;
  justify-content: center;
}
</style>