<template>
<Header/>
    <div class="container">
        <div class="subContainer">
            <input type="text" name="name" v-model="restaurant.name" placeholder="Enter restaurant Name" />
            <input type="number" name="contact" v-model="restaurant.contact" placeholder="Enter Contact" />
            <input type="text" name="address" v-model="restaurant.address" placeholder="Enter address" />
            <button @click="update">Update</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { ref } from 'vue'
import router from '@/router/router'
import Header from '@/components/Header.vue'
export default {
    name: "UpdateResturant",
    setup() {
        let restaurant = ref({
            name: "",
            contact: "",
            address: ""
        });
       async function update() {
                
                if (restaurant.value.name.length != 0 && restaurant.value.contact.length != 0 && restaurant.value.address.length != 0) {
                
                await axios.put(`http://localhost:3000/restaurants/${restaurant.value.id}`,
                    restaurant.value
                ).then((res) => {
                    if (res.status == 200) {
                        router.push("/")
                    }
                }).catch((error) => {
                    console.log(error);
                })
            } else {
                console.log("error");
            }

        }
        return {
            restaurant,
            update
        }
    },
    mounted() {
        if (localStorage.getItem("user-info") == null) {
            router.push("/SingUP");
        }
        axios.get(`http://localhost:3000/restaurants/${this.$route.params.id}`).then((res) => {
            this.restaurant = res.data
        }).catch((error) => {
            console.log(error)
        })

    },
    components:{
        Header
    }
}
</script>
<style scoped>
.container {
    width: 100%;
}

.subContainer {
    width: 40%;
    background-color: #74df72;
    padding: 20px;
    margin: auto;
    border-radius: 20px;
}

.subContainer input {
    width: 95%;
    margin: 6px auto;
    /* display: inline; */
    height: 34px;
    border-radius: 12px;
    padding: 2px;
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