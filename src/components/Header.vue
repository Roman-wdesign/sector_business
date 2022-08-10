<template>
  <header class="header row pt-5">
    <router-link class="col-1 logo__router" :to="{ name: 'start' }">
      <img
          src="../assets/svg/tokenLogo.svg"
          class="header__logo img-fluid"
          alt="Logo"
      />
    </router-link>

    <div class="col d-sm-block d-xs-block d-md-block d-lg-none">
      <div id="sidemenu">
        <button
            class="sidemenu__btn"
            v-on:click="navOpen = !navOpen"
            v-bind:class="{ active: navOpen }"
        >
          <span class="top"></span>
          <span class="mid"></span>
          <span class="bottom"></span>
        </button>
        <transition name="translateX">
          <nav v-show="navOpen">
            <div class="sidemenu__wrapper">
              <ul class="sidemenu__list">
                <li class="sidemenu__item">
                  <router-link
                      class="header__links-route"
                      :to="{ name: 'start' }"
                  >Home
                  </router-link>
                </li>
                <li class="sidemenu__item">
                  <router-link
                      class="header__links-route"
                      :to="{ name: 'start' }"
                  >How it works
                  </router-link>
                </li>
                <li class="sidemenu__item">
                  <router-link
                      class="header__links-route"
                      :to="{ name: 'start' }"
                  >Services
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </transition>
      </div>
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

    <div class="col-xs-4 col-sm-4 col-md-6">
      <img
          src="../assets/img/NFT.png"
          class="header__block_image img-fluid"
          alt="NFT"
      />
      <button
          type="button"
          class="header__block_button d-none d-lg-block position-absolute"
      >
        Connect Wallet
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "McvHeader"
}
</script>

<style scoped>

</style>