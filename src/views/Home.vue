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
        <div class="header__block">
          <div class="header__block_image" style="width: 672px; height: 960px;"></div>
          <button class="header__block_button">Connect Wallet</button>
        </div>

      </header>


      <section class="row gy-3" style="margin-bottom: 450px;">
        <div class="main">
          <h1 class="main__header">Discover Rare <br>
            Collections Of <br>
            Art & NFT’s</h1>
          <div class="main__rectangle"></div>
          <p class="h4">Amet minim mollit non deserunt ullamco est sit <br> aliqua dolor do amet sint.
          </p>
          <div class="void"></div>
          <div class="main-buttons">
            <button class="main-buttons__button">Explore</button>
            <button class="main-buttons__button-v2">Create</button>
          </div>
        </div>

      </section>


      <section class="row gy-3">
        <div class="price">
          <div class="price__block-image" style="width: 432px; height: 574px;"></div>
          <div class="price__block-list">
            <h2 class="price__header">1 cr of land mint price<br>
              3000 NFT’s</h2>
            <div class="number">
              <div class="number__row">
                <div class="number_shape"> <p class="number_figure">1</p></div>
                <div class="number_content">Acre of digital land that you will own</div>
              </div>
              <div class="number__row">
                <div class="number_shape"> <p class="number_figure">1</p></div>
                <div class="number_content">Acre of digital land that you will own</div>
              </div>
              <div class="number__row">
                <div class="number_shape"> <p class="number_figure">1</p></div>
                <div class="number_content">Acre of digital land that you will own</div>
              </div>
            </div>
            <div class="main-buttons">
              <button class="main-buttons__button">Connect Wallet</button>
            </div>
          </div>
        </div>

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