<template>
    <div class="header">
        <div class="header__logo">
            <a href="/"><img src="@/assets/header/HeaderLogo.png" alt="Impression Ventures Logo"></a>
        </div>
        <div class="header__menu">
            <ul>
                <li><a href="/team">Team</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="https://www.dropbox.com/sh/5cw89k78yzs4yv7/AAAkmgFnIkWkVtpmXaSM9Ffxa?dl=0" target="_blank">Press Kit</a></li>
                <li>
                    <div class="header__pitchButton">
                        Send Us Your Pitch Deck
                    </div>
                </li>
            </ul>
        </div>
        <Slide right>
            <a href="/">
            <span>Home</span>
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
        margin-left: 87px;
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
    @media (max-width: 767.98px) {
        &__menu {
            display: none;
        }
    }
}
</style>