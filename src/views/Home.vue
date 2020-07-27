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
            <div class="home__circle-container">
              <div class="home__circle"/>
                <h2 class="home__fintech-header home__circle-header">
                  Fintech Specialists
                </h2>
                <p class="home__fintech-paragraph home__circle-paragraph">
                  Our firm only backs fintech startups and has been doing so since 2013.
                </p>
            </div>
            <div class="home__circle-container">
              <div class="home__circle home__seed-circle"/>
                <h2 class="home__seed-header home__circle-header">
                  Late Seed and Early Series A
                </h2>
                <p class="home__seed-paragraph home__circle-paragraph">
                  We back startups in their late seed / early series A rounds with initial investments ranging from $1-2.5M. At minimum, a startup must have a finished complete product for us to consider participating in a round
                </p>
            </div>
            <div class="home__circle-container">
              <div class="home__circle home__lead-circle"/>
                <h2 class="home__seed-header home__circle-header">
                  Lead Investors
                </h2>
                <p class="home__lead-paragraph home__circle-paragraph">
                  We lead all of our initial investments with simple, founder friendly term sheets
                </p>
            </div>
            <div class="home__circle-container">
              <div class="home__circle home__active-circle"/>
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
      <div class="home__portfolioContainer">
        <h1 class="home__portfolioTitle">Portfolio</h1>
        <div class="home__fundFilter">
          <!-- Fund I default selected. Dynamically add and remove fundIsSelected class -->
          <div class="home__fundItem home__fundI home__fundIsSelected">Fund I</div> 
          <div class="home__fundItem home__fundII">Fund II</div>
          <div class="home__fundItem home__fundIII">Fund III</div>
        </div>
        <template v-if="isFetching == false">
          <div class="home__portfolioImageContainer">
            <img
              v-for="(post, index) in portfolioArray"
              :src="post.fields.logo.fields.file.url"
              :key="post.fields.logo.fields.file.url + '_' + index"
              class="home__portfolioImage"
            />
          </div>
         <div class="home__pitchButton">
          Send Us Your Pitch Deck
         </div>
        </template>
      </div>

      <!-- Slider section -->
      <div class="home__sliderContainer">
        <h1 class="home__testimonialsTitle">Testimonials</h1>
        <template v-if="isFetching == false">
          <!-- <div v-for="(post, index) in testimonialsArray"></div> -->
          <flickity ref="flickity" :options="flickityOptions">
            <div v-for="(item, index) in testimonialsArray" :key="index" class="home__testimonialsSlider">
              <div class="home__contentContainer">
                <div class="home__textContainer">
                  <div class="home__sliderQuote">{{ item.fields.quote }}</div>
                  <div class="home__sliderTeam">{{ item.fields.name }}</div>
                </div>
                <img :src="item.fields.image.fields.file.url" alt="Impression Ventures Slider Image" class="home__sliderImage">
              </div>
            </div>
          </flickity>
        </template>
      </div>

      <!-- News Section -->
      <div class="home__newsContainer">
        <h1 class="home__newsTitle">News</h1>
        <div v-for="(item, index) in newsArray" :key="index" class="home__newsSection">
          <div class="home__newsContainer">
            <div class="home__textContainer">
              <div class="home__newsItemContainer">
                <div class="home__storyLink">
                  <h3 class="home__newsDate">{{ item.fields.date }}</h3>
                  <h1 class="home__newsStoryTitle">{{ item.fields.title }}</h1>
                  <p class="home__readMore">Read More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// const axios = require('axios');
import Flickity from 'vue-flickity';
const contentful = require("contentful");
let client = contentful.createClient({
  space: "oodmiydgatbo",
  accessToken: "HkkwCwWrfXiNy0ZYE3ggtBhEBLL_Kmo6BtqYwzarydg"
});

// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Flickity
  },
  
  data () {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true 
        // any options from Flickity can be used
      },
      info: null,
      isFetching: true,
      portfolioArray: [],
      testimonialsArray: [],
      newsArray: [],
    }
  },
      
  beforeMount() {
    this.getPortfolioCompany();
    this.getTestimonials();
    this.getNews();
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
    }
  },
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
    justify-content: space-between;
  }
  &__circle-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    max-width: 373px;
    margin-top: -5%;
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
    // padding: 0 20px 0 20px;
  }
  &__circle {
    width: 118px;
    height: 115px;
    // flex-basis: 100%;
    border-radius: 100%;
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
  }
  &__fintech-paragraph {
    width: 100%;
    max-width: 262px;
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
    font-size: 38px;
    width: 100%;
  }
  &__fundFilter {
    display: inline-flex;
    justify-content: space-between;
    max-width: 499px;
    width: 100%;
    white-space: nowrap;
    border-left: solid 1px white;
  }

  &__fundItem {
    font-size: 32px;
    font-weight: 500;
    line-height: 39px;
  }

  &__fundIsSelected {
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
    align-self: center;
    justify-content: center;
    margin-top: 117px;
  }
  &__portfolioImage {
    width: 200px;
    height: 200px;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 4px;
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
  }
  &__testimonialsTitle {
    margin-top: 117px;
  }
  &__sliderQuote {
    text-align: left;
    // max-width: 70%;
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
  }
  &__textContainer {
    // margin-right: 88.24px;
    flex-wrap: wrap;
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
    min-height: 720px;
    width: 100%;
    position: relative;
  }
  &__newsTitle {
    justify-self: center;
    margin: 117px auto 0px auto;
    flex-direction: row;
  }
  &__newsStoryTitle {
    width: 50%;
    text-align: left;
    font-weight: 500;
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
    margin-top: -30%;
    // max-width: 756px;
    // max-width: 51%;
  }
  &__readMore {
    align-self: flex-start;
    color: #1965BD;
    font-weight: 500;
    font-size: 18px;
  }
  &__newsDate {
    align-self: flex-start;
    color: #1965BD;
  }
}
</style>