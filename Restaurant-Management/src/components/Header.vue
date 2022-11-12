<template>
    <div class="container">
        <div class="header">
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/AddRestaurant">Add Restorent</RouterLink>
                </li>

                <li @click="logout">
                    <RouterLink to="#">Logout</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

import { RouterLink } from 'vue-router';
import router from '@/router/router';
export default {
    name: "HeaderPage",
    components: { RouterLink },

    mounted() {
        if (localStorage.getItem("user-info") == null) {
            router.push("/SingUP");
        }
    },

    setup() {
        function logout() {
            localStorage.clear();
            router.push('/SingIn');
        }
        return { logout }
    }
}
</script>
<style scoped>
ul {
    list-style: none;
}

.header {
    background-color: rgb(68, 233, 106);
    width: 100%;
}

.header ul li {
    display: inline-block;
    margin: 30px
}

.header ul li a:-webkit-any-link {
    color: black;
    font-weight: 800;
    font-size: large;
    font-style: normal;
    text-decoration: none;
}
</style>