<template>
  <header class="header row pt-5">
    <router-link class="col-1 align-items-center" :to="{ name: 'start' }">
      <img
          src="../assets/svg/tokenLogo.svg"
          class="header__logo img-fluid"
          alt="Logo"
      />
    </router-link>

    <div class="col d-sm-block d-xs-block d-md-block d-lg-none">
      <mcv-burger-menu/>
    </div>

    <div class="col-1 d-none d-lg-block">
      <router-link class="header__links-route" :to="{ name: 'start' }"
      >Home
      </router-link>
    </div>
    <div class="col-2 d-none d-lg-block">
      <router-link class="header__links-route" :to="{ name: 'start' }"
      >How it works
      </router-link>
    </div>
    <div class="col-1 d-none d-lg-block">
      <router-link class="header__links-route" :to="{ name: 'start' }"
      >Services
      </router-link>
    </div>
  </header>
</template>

<script>
import McvBurgerMenu from '@/components/BurgerMenu';
export default {
  name: "McvHeader",
  data: () => ({

  }),
  components: {McvBurgerMenu}
}
</script>

<style scoped>

</style>