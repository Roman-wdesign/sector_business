<template>
  <div id="sidemenu">
    <button
      class="sidemenu__btn"
      @click="navOpen = !navOpen"
      :class="{ active: navOpen }"
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
              <router-link class="header__links-route" :to="{ name: 'start' }"
                >Home
              </router-link>
            </li>
            <li class="sidemenu__item">
              <router-link class="header__links-route" :to="{ name: 'start' }"
                >How it works
              </router-link>
            </li>
            <li class="sidemenu__item">
              <router-link class="header__links-route" :to="{ name: 'start' }"
                >Services
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  name: "McvBurgerMenu",
  data: () => ({
    navOpen: false
  }),
};
</script>

<style scoped></style>
