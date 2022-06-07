<template>
  <div>
    <div class="container">
      <header class="home">
        <div class="home__header">
          <button class="btn btn-primary">Click</button>
          <div class="home__logo"></div>
          <div class="home__links">

            <router-link
                class="home__links_route"
                :to="{name: 'start'}"
            >Home
            </router-link>

            <router-link
                class="home__links_route"
                :to="{name: 'start'}"
            >How it works
            </router-link>

            <router-link
                class="home__links_route"
                :to="{name: 'start'}"
            >Services
            </router-link>

            <router-link
                class="home__links_route"
                :to="{name: 'start'}"
            >Roadmap
            </router-link>
          </div>
        </div>
        <h1>Discover Rare
          Collections Of
          Art & NFT’s</h1>
        <div class="myLinkStyle"></div>
      </header>

      <section class="row gy-3">
        <div class="col-12">
          <div class="block">first</div>
        </div>
      </section>
      <section class="row gy-3"></section>
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