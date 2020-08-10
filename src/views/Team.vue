<template>
  <div class="Team">
    <Header/>
      <template v-if="isFetching == false">
      <div class="Team__teamContainer">
        <div class="Team__titleContainer">
          <h1 class="Team__headerTitle">Team</h1>
        </div>
          <div class="Team__coreTeamDisplayContainer">
            <div class="Team__coreTeamDisplayItem" v-for="(item, index) in coreArray.reverse()" :key="index">
              <div class="Team__ItemAlignContainer">
                <img :src="item.fields.headshot.fields.file.url" alt="Team Member Headshot" class="Team__coreTeamDisplayHeadshot"/>
                <b><h2 class="Team__coreTeamDisplayName"> {{ item.fields.name }} </h2></b>
                <h2 class="Team__coreTeamDisplayTitle"> {{ item.fields.title }} </h2>
              </div>
            </div>
          </div>
        </div>
      </template>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const contentful = require("contentful");
let client = contentful.createClient({
  space: "oodmiydgatbo",
  accessToken: "HkkwCwWrfXiNy0ZYE3ggtBhEBLL_Kmo6BtqYwzarydg"
});

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
    }
  },
  methods: {
    fetchTeam() {
      console.log('Fetching');
      client.getEntries().then(entries => {
        entries.items.forEach(entry => {
          if(entry.fields.coreTeam) {
            this.coreArray.push(entry)
          }
        })
      })
      this.isFetching = !this.isFetching;
      console.log(this.coreArray);
    }
  },
  beforeMount() {
    this.fetchTeam()
  }
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
  }
  &__coreTeamDisplayItem {
    display: flex;
    justify-content: center;
    margin-top: 29px;
    flex: 1 0 25%;
  }
  &__coreTeamDisplayName {
    text-align: left;
  }
  &__coreTeamDisplayTitle {
    text-align: left;
    font-weight: 300;
  }
  &__ItemAlignContainer {
    text-align: left;
  }
}
</style>