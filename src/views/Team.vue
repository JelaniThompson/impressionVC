<template v-if="isFetching == false">
  <div class="Team">
      <Header/>
      <div class="Team__teamContainer">
        <div class="Team__titleContainer">
          <h1 class="Team__headerTitle">Who We Are</h1>
        </div>
          <div class="Team__coreTeamDisplayContainer">
            <div class="Team__coreTeamDisplayItem" v-for="(item, index) in coreArray" :key="index">
              <div class="Team__ItemAlignContainer">
                <div class="Team__overlay">
                  <div class="Team__imageContainer">
                    <img 
                      :src="item.fields.headshot.fields.file.url"
                      alt="Team Member Headshot"
                      class="Team__coreTeamDisplayHeadshot"
                      @mouseover="active(index)"
                      @mouseleave="active(null)"
                    />
                    <b><h2 class="Team__coreTeamDisplayName"> {{ item.fields.name }} </h2></b>
                    <h2 class="Team__coreTeamDisplayTitle"> {{ item.fields.title }} </h2>
                    <div class="Team__socialContainer">
                      <template :v-if="item.fields.linkedin && item.fields.twitter">
                        <a :href="item.fields.linkedin" target="_blank"><img src="../assets/images/linkedin.png" alt="LinkedIn Logo" class="Team__linkedin" width="30px" height="30px"></a>
                        <a :href="item.fields.twitter" target="_blank"><img src="../assets/images/Twitter_Logo_Blue.png" alt="Impression Ventures Twitter" class="Team__twitter" width="50px" height="50px"></a>
                      </template>
                    </div>
                  </div>

                  <p class="Team__bio">
                    {{ item.fields.bio.content[0].content[0].value }}
                    <template v-if="item.fields.bio.content[1]">
                        <p class="Team__secondParagraph">
                          {{ item.fields.bio.content[1].content[0].value }}
                        </p>
                    </template>
                    <template v-if="item.fields.bio.content[2]">
                        <p class="Team__secondParagraph">
                          {{ item.fields.bio.content[2].content[0].value }}
                        </p>
                    </template>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
  </div>
</template>

<script>
import { client } from '../contentfulConfig.js'

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Team',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      coreArray: [],
      advisorArray: [],
      isFetching: true,
      hover: false,
      currentlyActive: null,
    }
  },
  
  beforeMount() {
    this.fetchTeam()
  },

  methods: {
    fetchTeam() {
      console.log('Fetching');
      client.getEntries({ order: 'sys.createdAt' }).then(entries => {
        entries.items.forEach(entry => {
          if(entry.fields.coreTeam) {
            this.coreArray.push(entry)
          }
        })
      })
      this.isFetching = !this.isFetching;
      console.log(this.coreArray);
    },
    active(index) {
      this.currentlyActive = index;
    }
  },
}
</script>

<style lang="scss">
.Team {
  &__teamContainer {
    display: flex;
    flex-wrap: wrap;
  }
  &__headerTitle {
    justify-self: flex-start;
    margin-top: 4.77%;
  }
  &__titleContainer {
    width: 100%;
    justify-content: flex-start;
    justify-items: flex-start;
    left: 0;
    margin-left: 0;
  }
  &__coreTeamDisplayContainer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 5%;
  }
  &__coreTeamDisplayHeadshot {
    min-width: 240px;
    height: 240px;
    object-fit: fill;
    margin-left: 5%;
    border-radius: 100%;
    // New (for overlay)
    // display: block;
    // width: 100%;
    // height: auto;
  }
  &__coreTeamDisplayHeadshot:hover {
    opacity: 1;
  }
  &__coreTeamDisplayItem {
    display: inline-flex;
    margin-top: 29px;
    // flex: 1 0 25%;
  }
  &__coreTeamDisplayName {
    text-align: left;
    margin-top: 8%;
  }
  &__coreTeamDisplayTitle {
    text-align: left;
    font-weight: 300;
    margin-top: 2%;
  }
  &__ItemAlignContainer {
    text-align: left;
    position: relative;
  }
  &__socialContainer {
    display: flex;
    align-items: center;
  }
  &__bio {
    align-self: center;
    padding: 0 5% 0 5%;
    line-height: 2;
    font-size: 18px;
  }
  &__secondParagraph {
    margin-top: 3%;
  }
  &__page-overlay {
    position: absolute; /* Sit on top of the page content */
    display: none; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
  }
  
  &__overlay {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 29px;
    flex: 1 0 25%;
    border-bottom: #dedede 1px solid;
    margin: 29px auto 0 auto;
    width: 80%;
    padding-bottom: 5%;
    transition: .5s ease;
  }

  &__ItemAlignContainer {
    &:hover {
      &__overlay {
        opacity: 0.3;
      } 
    }
  }

  &__imageContainer {
    margin-right: 7%;
  }

  @media (max-width: 991.98px) {
    &__coreTeamDisplayHeadshot {
      min-width: 180px;
      height: 180px;
    }
    &__coreTeamDisplayName {
      font-size: 18px;
    }
    &__coreTeamDisplayTitle {
      font-size: 18px;
    }
  }
}
</style>