<template>
  <div class="home">
    <Header />
      <div class="home__textContainer">
        <img class="home__heroImage" src="../assets/images/TorontoBlue.png">
        <p class="home__text">We're a venture firm that invests in game-changing Fintech companies</p>
      </div>

      <!-- Black Text Box -->
      <div class="home__blackTextBlock">
        <div class="home__blackTextBlockTextContainer">
          <p class="home__blackTextBlockTitle">With you every step of the way</p>
          <p class="home__blackTextBlockParagraph">This is about you, the founders, not us. We know, we’re tech startup founders ourselves. There is no better type of partner. We only invest in Fintech. We write cheques leading the late-seed / early Series A round. Focus is a necessary prerequisite for success. We lean in and get our hands dirty when and where you want us to. We don’t tell you what to do, we tell you what we would do.</p>
        </div>
      </div>
      
      <!-- Trudeau Image -->
      <div class="home__trudeauWealthsimple">
        <img src="../assets/images/TrudeauWealthSimple.png" alt="Trudeau at Wealthsimple" class="home__trudeauWealthSimpleImage">
      </div>

      <!-- Investment Policy -->
      <div class="home__investmentPolicyContainer">
        <h1 class="home__investmentPolicyTitle">Investment Policy</h1>
        <div class="home__investPolicyNumberGroup">
          <div class="home__contentRow">
            <div class="home__circle"></div>
            <div class="home__circle"></div>
            <div class="home__circle"></div>
            <div class="home__circle"></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  &__heroImage {
    object-fit: cover;
  }
  &__textContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__text {
    position: absolute;
    color: #fff;
    max-width: 1009px;
    width: 100%;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 54px;
    line-height: 66px;
  }
  &__blackTextBlock {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: #000;
    width: 50%;
    height: 720px;
    max-width: 720px;
    max-height: 720px;
    left: 0;
    position: relative; // For text inside of it
  }
  &__blackTextBlockTitle {
    color: #fff;
    position: relative;
    font-weight: bold;
    font-size: 38px;
    line-height: 46px;
    justify-self: center;
    align-self: center;
  }
  &__blackTextBlockParagraph {
    color: #fff;
    position: relative;
    align-self: center;
    text-align: left;
    max-width: 619px;
    font-size: 24px;
    line-height: 29px;
  }
  &__trudeauWealthsimple {
    width: 50%;
    max-height: 720px;
  }
  &__investmentPolicyContainer {
    display: flex;
    flex-wrap: wrap;
    background-color: #1965BD;
    min-height: 720px;
    width: 100%;
    position: relative;
    justify-content: center;
  }
  &__investmentPolicyTitle {
    color: #fff;
    margin-top: 117px;
    font-size: 38px;
    width: 100%;
  }
  &__investPolicyNumberGroup {
    min-height: 340px;
    max-width: 1309px;
    margin-top: 85px;
    width: 100%;
  }
  &__contentRow {
    display: flex;
    justify-content: space-around;
  }
  &__circle {
    width: 118px;
    height: 115px;
    border-radius: 100%;
    border: 5px solid #fff;
  }
}
</style>