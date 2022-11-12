<template>
    <h1>SingUp component</h1>
    <div class="container">

        <img class="logo" src="../assets/logo.png" alt="SingUp Logo" />

        <input type="text" name="name" v-model="name" placeholder="Enter your name" />
        <input type="email" name="email" v-model="email" placeholder="Enter your Email" />
        <input type="password" name="password" v-model="password" placeholder="Enter your password" />
        <button @click="callApi">Sing Up</button>
        <p>Alrady have an acount <RouterLink to="/SingIn">SingIn </RouterLink></p>
    </div>
    <div>{{ name }} || {{ email }} || {{ password }}
    </div>
</template>
<script>
import { ref } from 'vue';
import axios from 'axios';
import apiCall from '../apiCall.vue';
import router from '../router/router'
import { RouterLink } from 'vue-router';

export default {
    name: "SingUp",
    mounted() {
        if (localStorage.getItem("user-info") != null) {
            router.push("/");
        }
    },
    setup() {
        let name = ref("");
        let email = ref("");
        let password = ref("");
        async function callApi() {
            await axios.post("http://localhost:3000/user", {
                Headers: apiCall.HEADERS,
                name: name.value,
                email: email.value,
                password: password.value
            }).then((response) => {
                if (response.status == 201) {
                    // alert("User is loged in...");
                    localStorage.setItem("user-info", JSON.stringify(response.data));
                    console.log(localStorage.getItem("user-info"));
                  router.push("/")
                }
                else {
                    alert("Some thing is wrong....");
                }
                return "--||--";
            }).catch((error) => {
                console.log(error + "----Error Message");
            });
            console.log("------OK OK------");
        }
        return {
            name,
            email,
            password,
            callApi
        };
    },
    components: { RouterLink }
}
</script>
<style scoped>
h1 {
    margin:2% 35%;
}
.logo {
    width: 100px;
    display: block;
    margin: auto;
}

.container {
    background-color: skyblue;
    width: 50%;
    margin: auto;
    padding: 10px 0 50px 0;
    border-radius: 15px;

}

.container input {
    height: 35px;
    width: 70%;
    margin: 10px 15%;
    display: inline-block;
    border: 1px solid orange;
}

.container input:hover {
    border: 1px solid red;
}

.container button {
    width: 70%;
    padding: 10px;
    font-family: inherit;
    font-weight: 800;
    margin: 10px 15%;
    border: 1px solid wheat;
    background-color: rgb(206, 205, 203);
    border-radius: 15px;
}

.container button:hover {
    border: 1px solid rgb(235, 229, 229);
    background-color: rgb(173, 172, 169);
}
p {
    margin:10px 15%;
}
</style>