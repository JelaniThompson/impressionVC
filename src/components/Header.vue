<template>
    <div class="header">
        <div class="header__logo">
            <a href="/"><img src="@/assets/header/ImpressionWordmark.png" alt="Impression Ventures Logo" class="header__logo"></a>
        </div>
        <div class="header__menu">
            <ul>
                <li><a href="/team">Who We Are</a></li>
                <li><a href="https://www.dropbox.com/sh/5cw89k78yzs4yv7/AAAkmgFnIkWkVtpmXaSM9Ffxa?dl=0" target="_blank">Press Kit</a></li>
                <li><a href="https://medium.com/@impressionvc" target="_blank">Blog</a></li>
                <li><a href="/investors">Investor Portal</a></li>
                <li>
                    <a href="/contact">
                        <div class="header__pitchButton">
                            How to Pitch Us
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <Slide class="header__burger" right>
            <a href="/">
                <span>Home</span>
            </a>
            <a href="/team">
                <span>Who We Are</span>
            </a>
            <a href="https://www.dropbox.com/sh/5cw89k78yzs4yv7/AAAkmgFnIkWkVtpmXaSM9Ffxa?dl=0">
                <span>Press Kit</span>
            </a>
            <a href="https://medium.com/@impressionvc">
                <span>Blog</span>
            </a>
            <a href="/investors">
                <span>Investor Portal</span>
            </a>
            <a href="/contact">
                <div class="header__pitchButton">
                    How to Pitch Us
                </div>
            </a>
        </Slide>
    </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
    name: 'Header',
    components: {
        Slide
    }
}
</script>

<style lang="scss">
a {
    text-decoration: none;
    color: #fff;
    display: block;
    list-style: none;
}
.header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: 'Montserrat', sans-serif;
    max-height: 90px;
    height: 100%;
    width: 100%;
    top: 0;
    padding: 18px 0 18px 0;
    background-color: #000;
    &__logo {
        justify-self: flex-start;
        align-self: center;
        margin-right: auto;
        margin-left: 10%;
        max-width: 230px;
    }
    &__menu > ul {
        color: #fff;
        display: block;
        list-style: none;
    }
    &__menu > ul > li {
        display: inline-block;
        margin: 0 20px 0 20px;
        font-weight: bold;
    }
    &__pitchButton {
        background-color: #1965BD;
        padding: 18px;
        border-radius: 4px;
        font-weight: 600;
    }

    &__burger {
      .bm-burger-bars {
        background-color: #fff !important;
        z-index: 99;
      }
      .bm-menu {
          background-color: #000;
      }
    }
    @media (max-width: 359px) {
        .bm-burger-button {
            position: relative !important;
            top: 0 !important;
        }

        &__logo {
            margin-right: 40%;
            // width: 100px;
            width: 187px !important;
        }

    }

    @media screen and (min-width: 411px) and (max-width: 450px) {
        &__menu > ul {
            display: none;
        }    
        &__logo {
            margin-left: 6%;
        }
    }

    @media (min-width: 767.98px) {
        .bm-burger-bars {
            background-color: white;
        }
    }

    @media (max-width: 575.98px) {
        &__menu > ul {
            display: none;
        }
    }

    @media (max-width: 806px) {
        &__menu > ul {
            display: none;
        }
    }
    // @media (min-width: 807px) {
    //     &__burger {
    //         display: none !important;
    //         visibility: hidden;
    //     }
    // }

  @media (min-width: 807px) and (max-width: 863px) {
    &__menu > ul {
        visibility: hidden;
    }
  }

//   @media (min-width: 864px) {
//       &__burger {
//           visibility: hidden;
//       }
//   }

    @media (min-width: 863px) and (max-width: 1087px) {
        &__menu > ul {
            display: none;
        }
    }

    @media (min-width: 1088px) and (max-width: 1199px) {
        &__burger {
            display: none;
        }
    }
  
    /* iPad Pro */
  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2)  and (orientation: portrait)  {
      &__menu > ul {
          display: none;
      }
  }

  @media (min-width: 1200px) {
      &__burger {
          display: none;
      }
  }
}
</style>