<template>
  <div>
    <div class="container">
      <header class="header row  pt-5">
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

      <section class="row great gy-3">
        <div class="col">
          <div class="main">
            <div class="main__content">
              <div class="main__content_header position-relative">
                <h1 class="display-1 fw-bold">
                  Discover Rare <br />
                  Collections Of <br />
                  Art & NFT’s
                </h1>
                <div class="main__rectangle"></div>
              </div>
              <p class="main__content_text h4" style="margin: 55px 0">
                Amet minim mollit non deserunt ullamco est sit <br />
                aliqua dolor do amet sint.
              </p>
            </div>

            <div class="main-buttons d-flex flex-row">
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
            class="price__block-image img-fluid"
            alt="secondImg"
          />
        </div>
        <div class="col-md-6 col-lg-4 d-flex justify-content-between">
          <div
            class="price__block-list d-flex flex-column justify-content-between"
          >
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
        <div class="col-md-6 col-lg-4 d-flex justify-content-between">
          <div
            class="price__block-list d-flex flex-column justify-content-between"
          >
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
            class="third-block-image img-fluid"
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
        <div class="col">
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
        <div class="col">
          <img
            src="../assets/img/trinityNoname.png"
            class="trinity img-fluid"
            alt="trinityNoname"
          />
        </div>
      </section>

      <section
        class="row gy-3 d-flex justify-content-center"
        style="margin-bottom: 150px"
      >
        <div class="col-10 d-flex justify-content-center">
          <div
            class="price__block-list d-flex justify-content-center flex-column"
          >
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
        <div class="col-md-6 col-lg-4 d-flex justify-content-between">
          <div
            class="price__block-list d-flex flex-column justify-content-between"
          >
            <h2 class="price__header">
              1 acre + 4000 Square<br />
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
            class="third-block-image img-fluid"
            alt="secondImg"
          />
        </div>
      </section>

      <section
        class="roadmap d-flex justify-content-evenly row gy-5"
        style="margin-bottom: 150px"
      >
        <h1 class="price__header d-flex justify-content-center mb-5">
          Roadmap
        </h1>
        <div class="col-md-6 col-lg-4">
          <div class="roadmap_shell mb-5">
            <div class="roadmap__row">
              <div class="number_shape"><p class="number_figure">1</p></div>
              <div class="number_content1">
                Build custom manage for <br />
                mansion holders
              </div>
            </div>
            <div class="roadmap__row">
              <div class="number_shape"><p class="number_figure">2</p></div>
              <div class="number_content1">
                Launch our own crypto token<br />
                for staking
              </div>
            </div>
          </div>
          <div class="roadmap_shell">
            <div class="number__row d-flex flex-row">
              <div class="number_shape"><p class="number_figure">5</p></div>
              <div class="number_content1">
                Build custom manage for <br />
                mansion holders
              </div>
            </div>
            <div class="number__row d-flex flex-row">
              <div class="number_shape"><p class="number_figure">6</p></div>
              <div class="number_content1">
                Launch our own crypto token<br />
                for staking
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4 pt-5">
          <div
            class="roadmap_shell d-flex flex-column justify-content-center mb-5"
          >
            <div class="number__row d-flex flex-row">
              <div class="number_shape"><p class="number_figure">3</p></div>
              <div class="number_content1">
                Build custom manage for <br />
                mansion holders
              </div>
            </div>
            <div class="number__row d-flex flex-row">
              <div class="number_shape"><p class="number_figure">4</p></div>
              <div class="number_content1">
                Launch our own crypto token<br />
                for staking
              </div>
            </div>
          </div>
          <div class="roadmap_shell">
            <div class="number__row d-flex flex-row">
              <div class="number_shape"><p class="number_figure">7</p></div>
              <div class="number_content1">
                Build custom manage for <br />
                mansion holders
              </div>
            </div>
            <div class="number__row d-flex flex-row">
              <div class="number_shape"><p class="number_figure">8</p></div>
              <div class="number_content1">
                Launch our own crypto token<br />
                for staking
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="row d-flex justify-content-between gy-3"
        style="margin-bottom: 100px"
      >

        <h1 class="price__header d-flex justify-content-center mb-5">
          Mansion Battles Game
        </h1>
        <div class="col-4">
          <img
            src="../assets/img/johnDoe.png"
            class="price__block-image img-fluid"
            alt="secondImg"
          />
        </div>
        <div class="col-md-6 col-lg-4 d-flex justify-content-between">
          <div
            class="price__block-list d-flex flex-column justify-content-evenly"
          >
            <h1 class="price__header">*Coming Soon*</h1>
            <div class="number">
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">1</p></div>
                <div class="number_content">10 Acre of digital land</div>
              </div>
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">2</p></div>
                <div class="number_content">
                  Walk around your land on the metaverse
                </div>
              </div>
              <div class="number__row">
                <div class="number_shape"><p class="number_figure">3</p></div>
                <div class="number_content">Build Mansion on your land</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="row footer">
        <router-link class="col-1 logo__router" :to="{ name: 'start' }">
          <img
            src="../assets/svg/tokenLogo.svg"
            class="header__logo img-fluid"
            alt="Logo"
          />
        </router-link>

        <div class="col-1">
          <router-link class="header__links-route" :to="{ name: 'start' }"
            >Privacy
          </router-link>
        </div>
        <div class="col-1">
          <router-link class="header__links-route" :to="{ name: 'start' }"
            >Terms
          </router-link>
        </div>
        <div class="col-2">
          <router-link class="header__links-route" :to="{ name: 'start' }"
            >Contact Us
          </router-link>
        </div>
        <div class="col-2">
          <div class="footer__shapes">
            <div class="footer_shape m-2">
              <router-link class="header__links-route" :to="{ name: 'start' }">
                <div class="footer__logo_society"></div>
              </router-link>
            </div>
            <div class="footer_shape m-2">
              <router-link class="header__links-route" :to="{ name: 'start' }">
                <div class="footer__logo_society_2"></div>
              </router-link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "McvHome",

  data: () => ({
    navOpen: false,
  }),
  methods: {},
};
</script>

<style scoped></style>
