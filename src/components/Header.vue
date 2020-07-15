<template>
    <div class="header">
        <div class="header__logo">
            <img src="@/assets/header/HeaderLogo.png" alt="Impression Ventures Logo">
        </div>
        <div class="header__menu">
            <ul>
                <li>Portfolio</li>
                <li>Team</li>
                <li>Contact</li>
                <li>Press Kit</li>
                <li>
                    <div class="header__pitchButton">
                        Send Us Your Pitch Deck
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: 'Montserrat', sans-serif;
    max-height: 90px;
    height: 100%;
    width: 100vw;
    top: 0;
    background-color: #000;
    position: absolute;
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
}
</style>