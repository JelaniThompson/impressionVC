<template>
    <div class="footer">
        <div class="footer__addressHomeContainer">
            <div class="footer_address">
                <div class="footer__addressText">
                    <img class="footer__addressIcon" src="@/assets/images/location-icon.png" alt="Impression Ventures Address Icon">
                    2300 Yonge St, PO Box 2398<br/> Toronto, ON M4P 1E4
                </div>
            </div>
            <div class="footer__phone">
                <div class="footer__phoneText">
                    <img src="@/assets/images/phone-icon.png" alt="Impression Ventures Phone Number" class="footer__phoneIcon">
                    (647) 725-3355
                </div>
            </div>
        </div>

        <div class="footer__pageLinks">
            <ul>
                <li><a class="footer__footerLink" href="/team">Team</a></li>
                <li><a class="footer__footerLink" href="/contact">Contact</a></li>
                <li><a class="footer__footerLink" href="https://www.dropbox.com/sh/5cw89k78yzs4yv7/AAAkmgFnIkWkVtpmXaSM9Ffxa?dl=0" target="_blank">Press Kit</a></li>
                <li>
                    <div class="footer__pitchButton">
                        Send Us Your Pitch Deck
                    </div>
                </li>
            </ul>
            <div class="footer__bottomRow">
                <div class="footer__socialButtonRow">
                    <img src="@/assets/images/email-icon.png" alt="Impression Ventures Email" class="footer__email">
                    <img src="@/assets/images/twitter-icon.png" alt="Impression Ventures Twitter" class="footer__twitter">
                    <img src="@/assets/images/medium-icon.png" alt="Impression Ventures Blog" class="footer__medium">
                </div>
            </div>
        </div>
        <div class="footer__copyright">
            © Copyright 2020 Impression Ventures, all rights reserved.
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    // font-family: 'Montserrat', sans-serif;
    max-height: 185px;
    height: 500px;
    width: 100vw;
    background-color: #1965BD;
    position: relative;
    &__addressHomeContainer {
        display: flex;
        flex-direction: column;
    }
    &__address {
        display: inline-flex;
        flex-wrap: nowrap;
    }
    &__addressIcon {
        margin-left: 40px;
        margin-right: 14px;
    }
    &__addressText {
        display: flex;
        align-items: center;
        color: #fff;
        text-align: left;
    }
    &__phoneText {
        display: flex;
        align-items: center;
        color: #fff;
        text-align: left;
        margin-top: 8px;
    }
    &__phoneIcon {
        margin-left: 40px;
        margin-right: 14px;
    }
    &__pageLinks {
        margin-left: 28%;
        margin-top: 20px;
        align-self: flex-start;
        flex-wrap: nowrap;
    }
    &__pageLinks > ul {
        color: #fff;
        display: inline-flex;
        align-items: center;
        list-style: none;
    }
    &__pageLinks > ul > li {
        display: inline-block;
        margin: 0 20px 0 20px;
    }
    &__pitchButton {
        background-color: #000;
        padding: 18px;
        border-radius: 4px;
        font-weight: 600;
    }
    &__socialButtonRow {
        display: inline-flex;
        justify-items: flex-end;
        margin-top: 20px;
        margin-bottom: 22px;
        margin-right: 55%;
        position: relative;
    }
    &__socialButtonRow > img {
        max-width: 30px;
        max-height: 30px;
        object-fit: contain;
        bottom: 0;
    }
    &__twitter {
        margin: 0 28px 0 28px;  
    }
    &__bottomRow {
        color: #fff;
        display: flex;
        justify-content: flex-end;
        position: absolute;
        right: 0;
        bottom: 0;
    }
    &__copyright {
        position: absolute;
        justify-self: center;
        bottom: 0;
        margin-bottom: 22px;
        color: #fff;
    }
    &__footerLink {
        text-decoration: none;
        color: white;
    }
    @media (max-width: 991.98px) {
        // height: 500px;
        // max-height: 185px;
        position: relative;
        &__addressText {
            width: 500px;
            margin-top: -5.5%;
            margin-left: -5%;
            position: absolute;
        }
        &__phoneText {
            margin-left: -5%;
            position: absolute;
        }
        &__bottomRow {
            position: absolute;
            right: 0;
            bottom: 0;
        }
    }
}
</style>