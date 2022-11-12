<template>
    <h1>SingIn component</h1>
    <div class="container">
        <p>{{  msg  }}</p>
        <input type="email" name="email" v-model="email" placeholder="Enter your Email" />
        <input type="password" name="password" v-model="password" placeholder="Enter your password" />
        <button @click="callApi">Sing In</button>
        <p>Create New acount <RouterLink to="/SingUp">SingUp </RouterLink>
        </p>
        <p>{{ email }} || {{ password }}</p>
    </div>
    <div> 
    </div>
</template>
<script>
import { ref } from 'vue';
import axios from 'axios';
import apiCall from '../apiCall.vue';
import router from '../router/router'

export default {
    name: 'SingUp',
    mounted() {
        if (localStorage.getItem("user-info") != null) {
            router.push('/');
        }
    },

    setup() {

        let email = ref("");
        let password = ref("");
        let msg = ref("");
        async function callApi() {
            let basepath = "http://localhost:3000/user?email=test@gmail.com&password=pswd";
            basepath = basepath.replace("test@gmail.com", this.email);
            basepath = basepath.replace("pswd", this.password)

            await axios.get(basepath, {
                Headers: apiCall.HEADERS,
            }).then((response) => {
                if (response.status == 200 && response.data.length != 0) {

                    console.log("successfully");
                    localStorage.setItem("user-info", JSON.stringify(response.data));
                    console.log(localStorage.getItem("user-info"));
                    router.push("/");

                } else {
                    console.log("User not found.");
                    msg.value = "User not found.";
                }

            }).catch((error) => {
                console.log(error + "----Error Message");

            })
            console.log("------OK OK------");
        }
        return {

            email,
            password,
            msg,
            callApi
        }

    }

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