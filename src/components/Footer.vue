<template>
  <footer
    class="row footer xs-wrap sm-wrap md-nowrap"
    style="margin-bottom: 6.25rem"
  >
    <router-link
      class="col-xs-12 col-sm-12 col-md-1 d-flex justify-content-center logo__router"
      :to="{ name: 'start' }"
    >
      <img
        src="../assets/svg/tokenLogo.svg"
        class="header__logo img-fluid"
        alt="Logo"
      />
    </router-link>

    <div class="text-center footer-links col-sm-3 col-md-1">
      <router-link class="header__links-route" :to="{ name: 'start' }"
        >Privacy
      </router-link>
    </div>
    <div class="text-center col-sm-3 col-md-1">
      <router-link class="header__links-route" :to="{ name: 'start' }"
        >Terms
      </router-link>
    </div>
    <div class="text-center col-sm-3 col-md-2">
      <router-link class="header__links-route" :to="{ name: 'start' }"
        >Contact Us
      </router-link>
    </div>

    <div class="col-sm-12 col-md-4 col-lg-2 flex-wrap">
      <div class="footer__shapes">
        <div class="footer_shape m-2">
          <router-link class="header__links-route" :to="{ name: 'start' }">
            <img
              src="../assets/svg/vector.svg"
              class="footer__logo_society img-fluid"
              alt="Social"
            />
          </router-link>
        </div>
        <div class="footer_shape m-2">
          <router-link class="header__links-route" :to="{ name: 'start' }">
            <img
              src="../assets/svg/twitter.svg"
              class="footer__logo_society-2 img-fluid"
              alt="Social2"
            />
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "McvFooter",
};
</script>

<style scoped></style>
