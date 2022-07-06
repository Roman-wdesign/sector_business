<template>
  <div>
    <div class="container">
      <div class="row header">
        <div class="col-1 header__logo">
          
        </div>
        <div class="col-1">
          <router-link class="header__links-route" :to="{ name: 'start' }"
            >Home
          </router-link>
        </div>
        <div class="col-2">
          <router-link class="header__links-route" :to="{ name: 'start' }"
            >How it works
          </router-link>
        </div>
        <div class="col-1">
          <router-link class="header__links-route" :to="{ name: 'start' }"
            >Services
          </router-link>
        </div>
        <div class="col">
          <img
            src="../assets/img/NFT.png"
            class="header__block_image img-fluid position-absolute top-0 end-0"
            alt="NFT"
          />
          <button type="button" class="header__block_button position-absolute">
            Connect Wallet
          </button>
        </div>
      </div>
      <section class="row gy-3" style="margin-bottom: 250px">
        <div class="col-7">
          <div class="main position-relative">
            <h1 class="main__header">
              Discover Rare <br />
              Collections Of <br />
              Art & NFT’s
            </h1>
            <div class="main__rectangle bottom-50 start-0"></div>
            <p class="h4">
              Amet minim mollit non deserunt ullamco est sit <br />
              aliqua dolor do amet sint.
            </p>
            <div class="void"></div>
            <div class="main-buttons">
              <button class="main-buttons__button">Explore</button>
              <button class="main-buttons__button-v2">Create</button>
            </div>
          </div>
        </div>
      </section>

      <section
        class="row gy-3 d-flex justify-content-between"
        style="margin-bottom: 150px"
      >
        <div class="col-4">
          <img
            src="../assets/img/secondImg.png"
            class="price__block-image  img-fluid"
            alt="secondImg"
          />
        </div>
        <div class="col-4 d-flex justify-content-between">
          <div class="price__block-list">
            <h2 class="price__header">
              1 cr of land mint price<br />
              3000 NFT’s
            </h2>
            <div class="number">
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">1</p></div>
                <div class="number_content">
                  Acre of digital land that you will own
                </div>
              </div>
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">1</p></div>
                <div class="number_content">
                  Acre of digital land that you will own
                </div>
              </div>
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">1</p></div>
                <div class="number_content">
                  Acre of digital land that you will own
                </div>
              </div>
            </div>
            <div class="main-buttons">
              <button class="main-buttons__button">Connect Wallet</button>
            </div>
          </div>
        </div>
      </section>

      <section
        class="row gy-3 d-flex justify-content-between"
        style="margin-bottom: 150px"
      >
        <div class="col-4 d-flex justify-content-between">
          <div class="price__block-list">
            <h2 class="price__header">
              1 cr of land mint price<br />
              3000 NFT’s
            </h2>
            <div class="number">
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">1</p></div>
                <div class="number_content">
                  Acre of digital land that you will own
                </div>
              </div>
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">1</p></div>
                <div class="number_content">
                  Acre of digital land that you will own
                </div>
              </div>
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">1</p></div>
                <div class="number_content">
                  Acre of digital land that you will own
                </div>
              </div>
            </div>
            <div class="main-buttons">
              <button class="main-buttons__button">Connect Wallet</button>
            </div>
          </div>
        </div>
        <div class="col-4">
          <img
            src="../assets/img/thirdBlock.png"
            class="third-block-image  img-fluid"
            alt="secondImg"
          />
        </div>
      </section>




      <section class="row gy-3" style="margin-bottom: 65px">
        <div class="col text-center">
          <h2>! Acre + 4000 Sq ft Of Land Metavarce House</h2>
        </div>
      </section>




      <section class="row gy-3 ">
        <div class="col ">
          <img
            src="../assets/img/trinityWoman.png"
            class="trinity img-fluid"
            alt="trinityWoman"
          />
        </div>
        <div class="col pt-5">
          <img
            src="../assets/img/trinityMan.png"
            class="trinity img-fluid"
            alt="trinityMan"
          />
        </div>
        <div class="col ">
          <img
            src="../assets/img/trinityNoname.png"
            class="trinity img-fluid"
            alt="trinityNoname"
          />
        </div>
      </section>



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
};
</script>

<style scoped></style>
