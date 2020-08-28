<template>
    <div class="container">
        <Header />
        <div class="Password">
            <div class="Password__contentContainer">
                <img src="../assets/images/ImpressionWordmarkLogo.png" alt="Impression Ventures Wordmark Logo" class="Password__logo" />
                <form class="Password__form" onsubmit="passwordRedirect()" v-on:submit.prevent="passwordRedirect">
                    <input type="password" name="password" id="passwordForm" placeholder="Enter password" required/>
                </form>
                <input type="submit" @click="passwordRedirect()">
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import { client } from '../contentfulConfig.js'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Password',
    data() {
        return {
            password: null,
        }
    },
    beforeMount() {
        this.getCurrentPassword();
    },
    methods: {
        passwordRedirect() {
            console.log('triggered');
            if(document.getElementById('passwordForm').value === this.password) {
                window.location.href = "https://drive.google.com/drive/folders/1hePgdKp2Nvr3bwwhYUWAZvcpNLA6C8_O";
            }
        },
        getCurrentPassword() {
          client.getEntries({ order: 'sys.createdAt'}).then(entries => {
            entries.items.forEach(entry => {
              if(entry.fields.password) {
                this.password = entry.fields.password;
              }
            })
          });
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="scss">
html {
    // background-color: #1867c0;
    // display: flex;
    justify-content: center;
    align-items: center;
}
.Password {
    background-color: #1965BD;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 600px;
}

@media (max-width: 991.98px) {
    html {
        background-color: #1867c0;
    }
}

@media (min-width: 1920px) and (max-width: 2560px) { 
    .Password {
        min-height: 1400px;
    }
}
</style>