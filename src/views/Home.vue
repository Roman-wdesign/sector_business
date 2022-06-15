<template>
  <div>
    <div class="container">

      <header class="header">

        <div class="header__logo-wrap">
          <div class="header__logo"></div>
        </div>
        <div class="header__links-col">

          <router-link
              class="header__links-route"
              :to="{name: 'start'}"
          >Home
          </router-link>

          <router-link
              class="header__links-route"
              :to="{name: 'start'}"
          >How it works
          </router-link>

          <router-link
              class="header__links-route"
              :to="{name: 'start'}"
          >Services
          </router-link>

          <router-link
              class="header__links-route"
              :to="{name: 'start'}"
          >Roadmap
          </router-link>
        </div>


      </header>
      <div class="header__block">
        <div class="header__block_image" style="width: 672px; height: 960px;"></div>
        <button class="header__block_button">Connect Wallet</button>
      </div>


      <!--      <div class="myLinkStyle"></div>-->


      <section class="row gy-3">
        <div class="main">
          <h1 class="main__header">Discover Rare <br>
            Collections Of <br>
            Art & NFT’s</h1>
          <div class="main__rectangle"></div>
          <p class="h4">Amet minim mollit non deserunt ullamco est sit <br> aliqua dolor do amet sint.
          </p>
        </div>
        <div class="main-buttons">
          <button class="main-buttons__button">Explore</button>
          <button class="main-buttons__button-v2">Create</button>
        </div>
      </section>
      <section class="row gy-3">

      </section>
      <section class="row gy-3"></section>
      <section class="row gy-3"></section>
      <section class="row gy-3"></section>
      <section class="row gy-3"></section>
      <section class="row gy-3"></section>
      <section class="row gy-3"></section>
    </div>
  </div>
</template>

<script>


export default {
  name: "McvHome",

  data: () => ({}),
}
</script>

<style scoped>

</style>