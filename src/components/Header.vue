<template>
    <div class="header">
        <div class="header__logo">
            <a href="/"><img src="@/assets/header/HeaderLogo.png" alt="Impression Ventures Logo" class="header__logo"></a>
        </div>
        <div class="header__menu">
            <ul>
                <li><a href="/team">Team</a></li>
                <li><a href="https://www.dropbox.com/sh/5cw89k78yzs4yv7/AAAkmgFnIkWkVtpmXaSM9Ffxa?dl=0" target="_blank">Press Kit</a></li>
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
                <span>Team</span>
            </a>
            <a href="https://www.dropbox.com/sh/5cw89k78yzs4yv7/AAAkmgFnIkWkVtpmXaSM9Ffxa?dl=0">
                <span>Press Kit</span>
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

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: #fff;
    display: block;
    list-style: none;
}

.bm-burger-bars {
    color: #fff;
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

    @media screen and (min-width: 414px) and (max-width: 450px) {
        &__menu > ul {
            display: none;
        }    
    }
    
    @media (min-width: 767.98px) {
        &__burger {
            display: none !important;
        }
        .bm-burger-bars {
            background-color: white;
        }
    }
}
</style>