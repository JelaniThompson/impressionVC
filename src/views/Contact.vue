<template>
  <div class="Contact">
    <Header />
    <div class="Contact__pitchContainer">
      <h1>How To Pitch Us</h1>
      <ol class="Contact__list">
        <li>Please review our investment policy and communicate why Impression Ventures would be a good partner for your business.</li>
        <li>Always include some supporting documents to your outreach (whether that be a pitch deck or a one page memo). This helps us get up to speed quicker and ask more intelligent questions.</li>
        <li>Please ensure that all materials and supporting documents include answers to the following questions:</li>
      </ol>
      <ul class="Contact__subList">
        <li><b>•</b> What is the problem that you are solving and how?</li>
        <li><b>•</b>  How will you monetize your product/service?</li>
        <li><b>•</b>  How do you plan on acquiring customers?</li>
        <li><b>•</b>  How large of a problem is this (be geographic specific)?</li>
        <li><b>•</b> Do you have any relevant traction</li>
        <li><b>•</b>  Why are you the right team to build this business?</li>
        <li><b>•</b>  What are your fundraising goals?</li>
      </ul>
      <a class="Contact__mailLink" href="mailto:info@impressionventures.com">
        <div class="Contact__sendButton">
          Send Us Your Pitch Deck
        </div>
      </a>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Contact',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
li {
  font-size: 24px;
  text-align: left;
  margin-top: 12px;
}
ul > li {
  margin-top: 4px;
}
.Contact {
  &__pitchContainer {
    padding: 50px 181px 50px 181px;
  }
  &__subList {
    list-style-type: none;
  }
  &__sendButton {
    background-color: #1965BD;
    font-weight: bold;
    color: #fff;
    position: relative;
    max-width: 300px;
    margin: 0 auto;
    padding: 40px 21px 40px 21px;
    font-size: 20px;
    border-radius: 6px;
    margin-top: 50px;
  }
  &__mailLink {
    text-decoration: none;
  }
}
</style>