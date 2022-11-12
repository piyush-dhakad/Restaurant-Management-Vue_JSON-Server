<template>
    <Header />
    <div class="container">

        <!-- <h3>Home {{ this.user.name }}</h3> -->
        <table>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th></th>

            </tr>
            <tr v-for="rest in restaurants" v-bind:key="rest">
                <td>
                    {{ rest.id }}
                </td>
                <td>
                    {{ rest.name }}
                </td>
                <td>
                    {{ rest.contact }}
                </td>
                <td>
                    {{ rest.address }}
                </td>
                <td>
                    <button @click="deleteRestaurant(rest.id)">Delete</button>
                    <button @click="UpdateRestaurant(rest.id)">Update</button> 
                    
                    <!-- <RouterLink :to="/UpdateRestaurant/ + rest.id">Update</RouterLink> -->
                </td>

            </tr>
        </table>

    </div>
</template>
<script>
import axios from 'axios'

import { ref } from 'vue';
import Header from '@/components/Header.vue'
import router from '@/router/router';
export default {
    name: "Home-page",
    mounted() {
      
        if (localStorage.getItem("user-info") == null) {
            router.push("/SingUP");
        }
        this.getList();
    },
    setup() {
        let user = JSON.parse(localStorage.getItem("user-info"))[0];
        let restaurants = ref({});
        async function getList() {
    
            await axios.get("http://localhost:3000/restaurants").then((respons) => {
                restaurants.value = respons.data;
                
            }).catch((error) => {
                console.log(error + "--------error--------");
            });

        }

        function UpdateRestaurant(id){
            router.push("/UpdateRestaurant/" + id)
        }
        async function deleteRestaurant(id) {
           
            await axios.delete("http://localhost:3000/restaurants/"+id).then((respons) => {
                console.log(respons.status);
            if(respons.status == 200){
                getList();
            }
            }).catch((error) => {
                console.log(error + "--------error--------");
            });
        }
        return {
            user,
            restaurants,
            getList,
            deleteRestaurant,
            UpdateRestaurant
        };
    },
    components: {
        Header,
      
    }
}
</script>
<style scoped>
.container {
    width: 100%;
    top: 0;
    margin: auto;
}

h3 {
    display: inline-block;
    margin: 20px 10%;
}

table {
    width: 80%;
    margin: auto;
    font-family: arial, sans-serif;
    border-collapse: collapse;
}

td,
th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>