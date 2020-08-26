<template>

  <div class="home">
      <loading :active.sync="isFetching" 
        :can-cancel="false" 
        :on-cancel="onCancel"
        :is-full-page="fullPage">
      </loading>
    <Header />
     
      <div class="home__textContainer">
        <img class="home__heroImage" src="../assets/images/TorontoBlue2.png">
        <p class="home__text">We invest in <span><vue-typer erase-style='clear' :text='["game-changing fintech companies across North America", "fintech founders \n challenging the status quo", "leading fintech \n technology"]'></vue-typer></span></p>
      </div>

      <!-- Black Text Box -->
      <div class="home__blackTextBlock">
        <div class="home__blackTextBlockTextContainer">
          <!-- <b><p class="home__blackTextBlockTitle">With You Each Step of the Way</p></b> -->
          <!-- <b><p class="home__blackTextBlockParagraph">This is about you - <u>the founders</u>. We lean in and get our hands dirty when and where you want us.</p></b> -->
          <img src="@/assets/images/WithYouEachStep.png" alt="With You Each Step of the Way" class="home__withYou">
      </div>

      </div>
      

      <!-- Investment Policy -->
      <div class="home__investmentPolicyContainer">
        <h1 class="home__investmentPolicyTitle">What We Invest In</h1>
        <div class="home__investPolicyNumberGroup">
          <div class="home__contentRow">
            <div class="home__circle-container">
              <div class="home__circle">
                <img src="@/assets/images/dollar.png" alt="circle dollar" class="home__circleIcon">
              </div>
              <div class="titleParaContainer">
                <h2 class="home__fintech-header home__circle-header">
                  FinTech Specialist
                </h2>
                <p class="home__seed-paragraph home__circle-paragraph">
                  Our firm only backs startups that are changing the bread and butter of the financial services industry. Whether you are supporting financial transactions, making insurance products more accessible, or helping consumers make better financial choices, we would love to talk to you.
                </p>
              </div>
            </div>
            <div class="home__circle-container">
              <div class="home__circle home__seed-circle">
                <img src="@/assets/images/bar.png" alt="circle seed" class="home__circleIcon">
              </div>
              <div class="titleParaContainer">
                <h2 class="home__seed-header home__circle-header">
                  Late Seed and Early Series A
                </h2>
                <p class="home__seed-paragraph home__circle-paragraph">
                  We invest in late Seed and early Series A rounds. Our initial investments range from $1M-$2M into $2M+ rounds. We support high-growth startups that must demonstrate a complete product for us to participate in the round.
                </p>
              </div>
            </div>
            <div class="home__circle-container">
              <div class="home__circle home__lead-circle">
                <img src="@/assets/images/person.png" alt="circle lead" class="home__circleIcon">
              </div>
              <div class="home__titleParaContainer">
               <h2 class="home__seed-header home__circle-header">
                  Lead Investors
                </h2>
                <p class="home__lead-paragraph home__circle-paragraph">
                  We lead (or co-lead) our initial investments with simple, founder-friendly term sheets. We want to position our portfolio companies for successful future growth without complicated strings attached.
                </p>
              </div>
            </div>
            <div class="home__circle-container">
              <div class="home__circle home__active-circle">
                <img src="@/assets/images/active.png" alt="circle active" class="home__circleIcon">
              </div>
                <h2 class="home__active-header home__circle-header">
                  Active Investors
                </h2>
                <p class="home__seed-paragraph home__circle-paragraph">
                  Borrowing from our years of accumulated experience and our connections within financial services, we like to roll-up our sleeves and help our founders build excellent businesses.
                </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Portfolio Section -->
      <!--
        1. Have value for checking currently selected fund ✅
        2. Update that value with the fund number on click ✅
        3. If Contentful fund # matches, recreate array (or just show it from different arrays) ✅
        4. Assign active class based on truth of active fund variable
      -->
      <div class="home__portfolioContainer">
        <template v-if="isFetching == false">
          <h1 class="home__portfolioTitle">Portfolio</h1>
          <div class="home__fundFilter">
            <!-- Use a guard expression for conditional rendering -->
            <div class="home__fundItem home__all">All |</div>
            <div
              v-for="(item, index) in fundList"
              class="home__fundListing home__fundItem"
              :class="fundSelected && fundSelected"
              @click="updateFund(index + 1)"
              :key="item"
            >
            &nbsp; Fund {{ item }} | &nbsp;
            </div>
            <div class="home__fundItem home__exits">Exits</div>
          </div>
      </template>


        <template v-if="isFetching == false">
          <div class="home__portfolioImageContainer">
            <img
              v-for="(post, index) in selectedFundArray"
              :src="post.fields.logo.fields.file.url"
              :key="post.fields.logo.fields.file.url + '_' + index"
              @click="openURL(post.fields.link)"
              class="home__portfolioImage"
            />
          </div>
         <a class="home__mailLink" href="mailto:info@impressionventures.com">
          <div class="home__pitchButton">
            Send Us Your Pitch Deck
          </div>
        </a>
        </template>
      </div>

      <!-- Slider section -->
      <div class="home__sliderContainer">
        <h1 class="home__testimonialsTitle">Testimonials</h1>
        <template v-if="isFetching == false">              
          <agile v-if="(testimonialsArray.length > 0)" :autoplay-speed="7000" :speed="3000" :dots="false" :navButtons="false" autoplay>
            <div v-for="(item, index) in testimonialsArray" :key="index" class="slide"> 
              <!-- home__testimonialsSlider ^ above -->
              <div class="home__contentContainer">
                <div class="home__textContainer">
                <div class="home__sliderQuote">{{ item.fields.quote }}</div>
                <div class="home__sliderTeam">{{ item.fields.name }}</div>
              </div>
              <img :src="item.fields.image.fields.file.url" alt="Impression Ventures Slider Image" class="home__sliderImage">
            </div>
          </div>
          </agile>
        </template>
      </div>

      <!-- News Section -->
      <div class="home__newsContainer">
        <h1 class="home__newsTitle">Media</h1>
        <h1 class="home__featuredTitle">
          Featured
        </h1>
        
          <div class="home__newsContainer">
            <div v-for="(item, index) in newsArray" :key="index" class="home__newsSection">
            <div class="home__newsItemContainer">
              <div class="home__storyLink">
                <h3 class="home__newsDate">{{ item.fields.date }}</h3>
                <h1 class="home__newsStoryTitle">{{ item.fields.title }}</h1>
                <p class="home__readMore"><a :href="item.fields.link" target="_blank">Read More</a><img class="home__rightArrow" src="../assets/images/arrow-right.png" alt="Right Arrow"/></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home__networkContainer">
        <h1 class="home__networkTitle">
          Our Ecosystem
        </h1>
        <div class="home__networkImageContainer">
          <img src="@/assets/images/ecosystem/package-lock.png" alt="Holt Accelerator Logo" class="networkImageItem">
          <img src="@/assets/images/ecosystem/creative-destruction-lab.png" alt="Creative Destruction Lab Logo" class="networkImageItem">
          <img src="@/assets/images/ecosystem/acceleprise.png" alt="Acceleprise Logo" class="networkImageItem">
          <img src="@/assets/images/ecosystem/nexcubed.jpeg" alt="Nex Cubed Logo" class="networkImageItem">
          <img src="@/assets/images/ecosystem/techstars.jpg" alt="Techstars Logo" class="networkImageItem">
          <img src="@/assets/images/ecosystem/dmz.png" alt="Ryerson DMZ Logo" class="networkImageItem">
          <img src="@/assets/images/ecosystem/500startups.jpg" alt="500 Startups Logo" class="networkImageItem">
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.157302335472!2d-79.4017364845009!3d43.70727995695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b333cd1040c05%3A0xc42640fdd25816c1!2sImpression%20Ventures!5e0!3m2!1sen!2sca!4v1595959831225!5m2!1sen!2sca" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      <div class="home__footerContainer">
        <Footer/>
      </div>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'
import { VueTyper } from 'vue-typer'

import { client } from '../contentfulConfig.js'

// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import ImpressionWordmark from '../assets/images/ImpressionVenturesWordmark.png'

// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'Home',
  computed: {
    logo() {
      return ImpressionWordmark;
    }
  },
  components: {
    Header,
    Loading,
    VueTyper,
    agile: VueAgile,
    Footer
  },
  data () {
    return {
      fundList: ['I', 'II', 'III'],
      fundIClicked: true,
      fundIIClicked: false,
      fundIIIClicked: false,
      selectedFundArray: [],
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true 
        // any options from Flickity can be used
      },
      info: null,
      isFetching: false,
      loading: true,
      portfolioArray: [],
      testimonialsArray: [],
      newsArray: [],
    }
  },
      
  beforeMount() {
    this.isFetching = true;
    setTimeout(() => {
      this.isFetching = false;
    }, 5000);
    this.getPortfolioCompany();
    this.getTestimonials();
    this.getNews();
    this.updateFund(1);
  },

  methods: {
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
    },
    getPortfolioCompany() {
      console.log('Fetching');
      client.getEntries().then(entries => {
        entries.items.forEach(entry => {
          if(entry.fields.logo) {
            this.portfolioArray.push(entry);
          }
        });
      });
      this.isFetching = !this.isFetching;
      console.log(this.portfolioArray);
    },
    getTestimonials() {
      client.getEntries().then(entries => {
        entries.items.forEach(entry => {
          if (entry.fields.quote) {
            this.testimonialsArray.push(entry);
          }
        });
      })
      console.log(this.testimonialsArray);
      // this.posts.fields.image and .name and .quoteIx
    },
    getNews() {
      client.getEntries().then(entries => {
        entries.items.forEach(entry => {
          if (entry.fields.date) {
            this.newsArray.push(entry);
          }
        });
      });
      console.log(this.newsArray);
    },
    updateFund(fund) {
      this.selectedFundArray = [];
      client.getEntries().then(entries => {
        entries.items.forEach(entry => {
          if (entry.fields.fundNumber == fund) {
            this.selectedFundArray.push(entry);
          }
        });
      });
      console.log(this.selectedFundArray);
    },
    openURL(url) {
      // For opening the url
      let newWindow = window.open(url, '_blank');
      newWindow.focus();
    }
    
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
}
.vue-typer {
  .custom.char {
    color: #fff; 
    position: relative;
  }
}
.slide > img {
  max-width: 600px;
  height: 600px;
  object-fit: contain;
  // margin-top: -8%;
}
.agile__actions {
  display: none;
} 
.agile__slide {
  margin-top: 0.5%;
}
.home {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  &__heroImage {
    background-size: cover;
    width: 100%;
    // object-fit: cover;
    max-width: 100%;
  }
  &__textContainer {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  &__text {
    position: absolute;
    color: #fff;
    max-width: 1071px;
    width: 100%;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 54px;
    line-height: normal;
    margin: 0 auto;
  }
  &__blackTextBlock {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: #000;
    // padding: 5% 0 5% 0;
    min-height: 860px;
    width: 100%;
    left: 0;
    position: relative; // For text inside of it
  }
  &__blackTextBlockTitle {
    color: #fff;
    position: relative;
    font-weight: bold;
    font-size: 2.5em;
    line-height: 46px;
    justify-self: center;
    align-self: center;
  }
  &__blackTextBlockParagraph {
    color: #fff;
    position: relative;
    align-self: center;
    text-align: left;
    max-width: 627px;
    font-size: 24px;
    line-height: 29px;
  }
  &__withYou {
    width: 60%;
    align-self: center;
  }
  &__carousel {
    width: 50%;
    max-height: 720px;
  }
  &__slide {
    position: relative;
    width: 50%;
    background: #42b983;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 100px;
  }
  &__investmentPolicyContainer {
    display: flex;
    flex-wrap: wrap;
    background-color: #1965BD;
    min-height: 720px;
    width: 100%;
    position: relative;
    justify-content: center;
    padding-bottom: 5%;
  }

  &__investmentPolicyTitle {
    color: #fff;
    margin-top: 117px;
    font-size: 38px;
    width: 100%;
  }
  &__investPolicyNumberGroup {
    min-height: 340px;
    margin-top: 85px;
    width: 100%;
  }
  &__contentRow {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0px 2% 0px 2%;
  }
  &__circle-container {
    display: flex;
    flex-wrap: wrap;
    /* position: relative; */
    justify-content: center;
    align-content: flex-start;
    max-width: 500px;
    /* margin-top: 5%; */
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
  }
  &__circle {
    display: flex;
    width: 118px;
    height: 115px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    border: 5px solid #fff;
  }
  &__circle-header {
    color: #fff;
    line-height: 29px;
    font-weight: bold;
    width: 100%;
    margin-top: 23px;
    white-space: nowrap;
  }
  &__circle-paragraph {
    color: #fff;
    line-height: 22px;
    font-size: 18px;
    text-align: left;
    position: relative;
    margin: 0;
    padding: 5% 0 5% 0;
    word-wrap: break-all;
    // hyphens: auto;
    min-width: 300px;
    white-space: inherit;
  }
  &__fintech-paragraph {
    width: 100%;
    // max-width: 262px;
  }

  &__portfolioContainer {
    flex-wrap: wrap;
    background-color: #fff;
    min-height: 720px;
    width: 100%;
    position: relative;
    justify-content: center;
  }
  &__portfolioTitle {
    color: #000;
    margin-top: 117px;
    margin-bottom: 2%;
    font-size: 38px;
    width: 100%;
  }
  &__fundFilter {
    display: inline-flex;
    justify-content: space-evenly;
    max-width: 499px;
    width: 100%;
    white-space: nowrap;
    border-left: solid 1px white;
  }

  &__fundItem {
    font-size: 32px;
    font-weight: 500;
    line-height: 39px;
    // margin-left: 1.5%;
    padding: 0 1.5% 0 1.5%;
    &:hover {
      cursor: pointer;
    }
  }
  
  &__fundListing-FundI--isSelected {
    color: #1965BD;
    font-weight: 600;
  }
  &__fundListing-FundII--isSelected {
    color: #1965BD;
    font-weight: 600;
  }
  &__fundListing-FundIII--isSelected {
    color: #1965BD;
    font-weight: 600;
  }
  &__fundI {
    padding-right: 44px;
    border-right: 1px solid black;
  }
  &__fundII {
    padding-right: 44px;
    padding-left: 42px;
    border-right: 1px solid black;
  }
  &__fundIII {
    padding-left: 42px;
  }
  &__portfolioImageContainer {
    display: flex;
    flex-wrap: wrap;
    align-self: center;
    justify-content: center;  
    margin-top: 5%;
  }
  &__portfolioImage {
    width: 200px;
    height: 200px;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 4px;
    padding: 10px;
    &:hover {
      cursor: pointer;
    }
  }
  &__pitchButton {
    align-content: center;
    background-color: #1965BD;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    padding: 35px;
    border-radius: 6px;
    width: 19%;
    margin: 117px auto 128px auto;
  }
  &__sliderContainer {
    flex-wrap: wrap;
    background-color: #000;
    color: #fff;
    min-height: 720px;
    width: 100%;
    position: relative;
    // justify-content: center;
  }
  &__contentContainer {
    display: inline-flex;
    margin-top: 5%;
  }
  &__testimonialsTitle {
    margin-top: 117px;
  }
  &__sliderQuote {
    text-align: left;
    max-width: 643.78px;
    font-size: 32px;
    position: relative;
  }
  &__sliderImage {
    justify-self: flex-end;
    right: 0;
    position: relative;
    margin-left: 88.24px;
    border-radius: 100%;
    height: 300px;
    width: 300px;
    object-fit: cover;
  }
  &__textContainer {
    flex-direction: column;
  }
  &__sliderTeam {
    align-self: flex-start;
    margin-top: 5%;
    font-weight: bold;
    font-size: 32px;
  }
  &__testimonialsSlider {
    margin-top: 0.5%;
  }
  &__newsContainer {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    background-color: #fff;
    color: #000;
    padding-bottom: 3%;
    width: 100%;
    position: relative;
  }
  &__newsTitle {
    justify-self: center;
    margin: 117px auto 0px auto;
    flex-direction: row;
  }
  &__featuredTitle {
    color: #1965BD;
    margin-top: 175px;
    margin-left: 123px;
    position: absolute;
    z-index: 99;
    left: 0;
  }
  &__newsStoryTitle {
    width: 50%;
    text-align: left;
    font-weight: 500;
    margin-top: 0.5%;
  }

  &__newsItemContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 103.01px;
  }

  &__storyLink {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    flex-direction: column;
    // max-width: 1488.48px;
    // max-width: 80%;
    // margin-top: -30%;
    margin-bottom: 3%;
    &:nth-of-type(1) {
      margin-top: 1%;
    }
  }

  &__readMore {
    align-self: flex-start;
    width: 50%;
    text-decoration: none;
    text-align: left;
    font-weight: 500;
    font-size: 18px;
    border-bottom: 1px solid #000;
    margin-top: 1.5%;
  }

  &__readMore > a {
    text-decoration: none;
    color: #1965BD;
    &:visited {
      color: #1965BD;
    }
  }

  &__newsDate {
    align-self: flex-start;
    color: #1965BD;
    font-size: 24px;
    font-weight: 300;
  }

  &__blackTextBlockTextContainer {
    width: 100%;
    // margin: 3% auto -3% auto;
  }

  &__blackTextBlockParagraph {
    margin: 3% auto -3% auto;
  }

  &__rightArrow {
    max-width: 38px;
    max-height: 38px;
    // align-self: flex-end;
    margin-top: -10%;
    margin-bottom: 1.5%;
    margin-left: 90%;
  }
  &__networkContainer {
    flex-wrap: wrap;
    background-color: #fff;
    // min-height: 720px;
    width: 100%;
    position: relative;
    justify-content: center;
  }
  &__networkTitle {
    color: #000;
  }
  &__networkImageContainer > img {
    width: 15%;
    padding: 5%;
  }
  &__footerContainer {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  .agile__slides {
    align-items: flex-start;
  }
  &__mailLink {
    text-decoration: none;
  }

  // Responsive shiz http://devfacts.com/media-queries-breakpoints-2020/

  @media (max-width: 359px) {
    &__investmentPolicyTitle {
      font-size: 1.5em;
    }
    &__circle-header {
      font-size: 1em;
    }
    &__withYou {
      width: 85% !important;
    }
    &__fundItem {
      font-size: 0.9em !important;
      padding: 0 1.5% 0 0.5% !important;
    }
  }
  
  @media screen and (min-width: 414px) and (max-width: 450px) {
    .slide > img {
      width: 250px !important;
      height: 250px !important;
    }
    &__fundFilter {
      width: 90%;
    }
    &__fundItem {
      font-size: 24px;
    }
    &__portfolioImageContainer > &__portfolioImage {
      width: 70px !important;
      height: 70px !important;
    }
    &__pitchButton {
      margin: 32px auto 64px auto !important;
      width: 50% !important;
    }
    &__portfolioContainer {
      min-height: 0px;
    }
    &__contentContainer {
      margin-bottom: 64px;
    }
    &__blackTextBlockTitle {
      font-size: 1.3em !important;
    }
    &__newsStoryTitle {
      font-size: 1.5em;
    }
    &__sliderTeam {
      font-size: 1.5em;
    }
    &__investmentPolicyTitle {
      font-size: 2em;
    }
  }

  @media (max-width: 575.98px) {
    .slide > img {
      width: 400px;
      height: 400px;
    }
    &__fundFilter {
      justify-content: space-evenly;
    }
    &__fundItem {
      font-size: 1.3em;
    }
    &__text {
      font-size: 1em !important;
      width: 76%;
    }
    &__withYou {
      width: 100%;
    }
    &__blackTextBlock {
      min-height: 500px;
    }
    &__portfolioImageContainer > &__portfolioImage {
      width: 120px;
      height: 120px;
      margin-bottom: 5%;
    }
    &__contentContainer {
      flex-wrap: wrap;
      flex-direction: column-reverse;
    }
    &__sliderContainer {
      padding-bottom: 15%;
    }
    &__sliderImage {
      margin: 0 auto !important;
      justify-self: center;
    }
    &__sliderQuote {
      font-size: 1.5em;
      padding: 0 6% 0 6%;
      margin-top: 8%;
      margin-left: 0 !important;
      word-break: break-all;
    }
    &__sliderTeam {
      margin-left: auto !important;
      margin: 5% auto 0% auto;
    }
    &__featuredTitle {
      display: none;
    }
    &__newsContainer {
      justify-content: center;
    }
    &__newsItemContainer {
      margin-right: 0;
    }
    &__newsStoryTitle {
      margin: 0 auto;
      width: 100%;
      font-size: 1.5em;
    }
    &__storyLink {
      width: 80%;
      margin: 0 auto;
    }
    &__networkContainer {
      min-height: 0;
    }
    &__pitchButton {
      width: 67% !important;
      margin-top: 18px 0 18px 0 !important;
    }
    &__readMore {
      width: 100%;
      text-decoration: none;
    }
  }


  
  @media (min-width: 575.98px) and (max-width: 650px) {
    &__featuredTitle {
      visibility: hidden;
    }
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) { // 767.98
    &__blackTextBlock {
      width: 100%;
      max-width: 100%;
    }
    &__text {
      font-size: 1.8em;
    }
    &__blackTextBlockContainer {
      margin-bottom: -3%;
      width: 100%;
    }
    &__blackTextBlockTitle {
      font-size: 2em;
    }
    &__blackTextBlockParagraph {
      // margin: 10% 5% 0 10%;
      margin: 0 auto;
    }
    &__carousel {
      width: 100%;
    }
    &__portfolioImage {
      width: 180px;
      height: 180px;
      margin-bottom: 8%;
    }
    &__sliderImage {
      width: 200px;
      height: 200px;
    }
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) { 
    &__contentRow {
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    &__circle-container {
      margin-top: 0%;
      margin-bottom: 8%;
    }
    &__circle-paragraph {
      margin-top: 4%;
    }
    &__withYou {
      width: 80% !important;
    }
    &__text {
      font-size: 2.5em;
      width: 86%;
      margin: 0;
    }
    &__pitchButton {
      margin: 68px auto 68px auto;
    }
    &__sliderQuote {
      font-size: 24px;
      margin-left: 12%;
      margin-top: 8%;
    }
    &__sliderTeam {
      margin-left: 12%;
    }
    &__sliderImage {
      margin: 8% 5% 0 5%;
    }
    &__storyLink {
      margin-bottom: 3%;
    }
    &__newsDate {
      margin-top: 3%;
    }
    &__networkTitle {
      margin-top: 5%;
    }
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    &__blackTextBlockContainer {
      display: flex;
      flex-direction: column;
      justify-self: center;  
    }
    &__blackTextBlockParagraph {
      margin: 5% auto 0 auto;
    }
    &__pitchButton {
      width: 22%;
    }
    &__portfolioTitle {
      margin-bottom: 3.5%;
    }
  }

  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2)  and (orientation: portrait)  {
    &__contentContainer {
      padding: 0 5% 0 5%;
    }
    &__text {
      width: 78%;
      font-size: 2.5em;
    }
  }
}
</style>