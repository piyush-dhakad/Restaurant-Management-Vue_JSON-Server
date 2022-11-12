<template>
<Header />
    <div class="container">

    <div class="subContainer">
        <input type="text" name="name" v-model="restaurant.name" placeholder="Enter restaurant Name"/>
        <input type="number" name="contact" v-model="restaurant.contact" placeholder="Enter Contact"/>
        <input type="text" name="address"  v-model="restaurant.address" placeholder="Enter address"/>
        <button @click="addRestaurant">ADD</button>
    </div>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import router from '@/router/router';
import axios from 'axios';
export default {
    name:"AddResturant",
    mounted() {
        if (localStorage.getItem("user-info") == null) {
            router.push("/SingUP");
        }},
    setup(){
        let restaurant = {
            name:"",
            contact:"",
            address:""
        }
    async function addRestaurant(){

            if(restaurant.name.length != 0 && restaurant.contact.length != 0 && restaurant.address.length != 0)
            {
              await axios.post("http://localhost:3000/restaurants",
                restaurant
              ).then((res)=>{
                if(res.status == 201){
                    router.push("/")
                }
              }).catch((error)=>{
                console.log(error);
              })
            }else {
                console.log("error");
            }
        }
        return{
            restaurant,
            addRestaurant
        }
    },
    components:{
        Header
    }
}
</script>
<style scoped>
.container{
    width: 100%;
}
.subContainer
{
width:40%;
background-color:#74df72;
padding:20px;
margin: auto;
border-radius: 20px;
}
.subContainer input {
    width: 95%;
    margin: 6px auto;
    /* display: inline; */
    height: 34px;
    border-radius: 12px;
    padding:2px;
}
.subContainer button {
    display: block;
    background-color: darkgray;
    width: 97%;
    font-family: monospace;
    color: antiquewhite;
    padding: 10px;
    border-radius: 12px;
}
</style>