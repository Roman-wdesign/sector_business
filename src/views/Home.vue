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
              Discover Rare <br/>
              Collections Of <br/>
              Art & NFT’s
            </h1>
            <div class="main__rectangle bottom-50 start-0"></div>
            <p class="h4">
              Amet minim mollit non deserunt ullamco est sit <br/>
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
              1 cr of land mint price<br/>
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
                <div class="number_shape"><p class="number_figure">2</p></div>
                <div class="number_content">
                  Acre of digital land that you will own
                </div>
              </div>
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">3</p></div>
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
              1 cr of land mint price<br/>
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
                <div class="number_shape"><p class="number_figure">2</p></div>
                <div class="number_content">
                  Acre of digital land that you will own
                </div>
              </div>
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">3</p></div>
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


      <section class="trinity_img row gy-3" style="margin-bottom: 90px">
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


      <section class="row gy-3  d-flex justify-content-center" style="margin-bottom: 150px">
        <div class="col-10 d-flex justify-content-center">
          <div class="price__block-list d-flex justify-content-center">
            <h2 class="price__header d-flex justify-content-center">
              400 NFTs
            </h2>
            <div class="number" style="margin-bottom: 85px; margin-top: 50px">
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">1</p></div>
                <div class="number_content">
                  1 Acre of land +4000 sq feet metaverse house
                </div>
              </div>
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">2</p></div>
                <div class="number_content">
                  Walk around your house and land on the metaverse
                </div>
              </div>
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">3</p></div>
                <div class="number_content">
                  Invite friends to your house and sell your house on opensea
                </div>
              </div>
            </div>
            <div class="main-buttons d-flex justify-content-center">
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
              1 acre + 4000 Square<br>
              ft land metaverse house
            </h2>
            <div class="number">
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">1</p></div>
                <div class="number_content">
                  Acre of digital land that you will own
                </div>
              </div>
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">2</p></div>
                <div class="number_content">
                  Acre of digital land that you will own
                </div>
              </div>
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">3</p></div>
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
              src="../assets/img/androidImg.png"
              class="third-block-image  img-fluid"
              alt="secondImg"
          />
        </div>
      </section>


      <section class="roadmap d-flex justify-content-evenly row gy-5  " >
        <h1 class="price__header d-flex justify-content-center mb-5">
          Roadmap
        </h1>
        <div class="col-4">
          <div class="roadmap_shell  mb-5" >
            <div class="roadmap__row">
              <div class="number_shape"><p class="number_figure">1</p></div>
              <div class="number_content1">
                Build custom manage for <br>
                mansion holders
              </div>
            </div>
            <div class="roadmap__row" >
              <div class="number_shape"><p class="number_figure">2</p></div>
              <div class="number_content1">
                Launch our own crypto token<br>
                for staking
              </div>
            </div>
          </div>
          <div class="roadmap_shell" >
            <div class="number__row d-flex flex-row">
              <div class="number_shape"><p class="number_figure">5</p></div>
              <div class="number_content1">
                Build custom manage for <br>
                mansion holders
              </div>
            </div>
            <div class="number__row d-flex flex-row">
              <div class="number_shape"><p class="number_figure">6</p></div>
              <div class="number_content1">
                Launch our own crypto token<br>
                for staking
              </div>
            </div>
          </div>
        </div>

        <div class="col-4 pt-5">
          <div class="roadmap_shell d-flex flex-column justify-content-center  mb-5" >
            <div class="number__row d-flex flex-row">
              <div class="number_shape"><p class="number_figure">3</p></div>
              <div class="number_content1">
                Build custom manage for <br>
                mansion holders
              </div>
            </div>
            <div class="number__row d-flex flex-row" >
              <div class="number_shape"><p class="number_figure">4</p></div>
              <div class="number_content1">
                Launch our own crypto token<br>
                for staking
              </div>
            </div>
          </div>
          <div class="roadmap_shell  " >
            <div class="number__row d-flex flex-row">
              <div class="number_shape"><p class="number_figure">7</p></div>
              <div class="number_content1">
                Build custom manage for <br>
                mansion holders
              </div>
            </div>
            <div class="number__row d-flex flex-row">
              <div class="number_shape"><p class="number_figure">8</p></div>
              <div class="number_content1">
                Launch our own crypto token<br>
                for staking
              </div>
            </div>
          </div>
        </div>

      </section>


      <section class="row gy-3">

      </section>
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
