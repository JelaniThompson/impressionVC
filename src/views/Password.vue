<template>
    <div class="Password">
        <img src="../assets/images/ImpressionWordmarkLogo.png" alt="Impression Ventures Wordmark Logo" class="Password__logo" />
        <form class="Password__form" onsubmit="passwordRedirect()" v-on:submit.prevent="passwordRedirect">
            <input type="password" name="password" id="passwordForm" placeholder="Enter password" required/>
        </form>
        <input type="submit" @click="passwordRedirect()">
    </div>
</template>

<script>
export default {
    name: 'Password',
    methods: {
        passwordRedirect() {
            console.log('triggered');
            if(document.getElementById('passwordForm').value === 'ILikeMoney') {
                window.location.href = "https://drive.google.com/drive/folders/1UZPRwT-LPNBlcI3U2gFmPpisFDqrpn8p";
            }
        }
    }
}
</script>

<style lang="scss">
html {
    background-color: #1867c0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Password {
    background-color: #1965BD;
    width: 100%;
    height: 100%;
}
</style>