import Home from "../components/Home"
import SingUp from "../components/SingUp"
import SingIn from '@/components/SingIn'
import AddRestaurant from "@/components/AddRestaurant"
import UpdateRestaurant from "@/components/UpdateRestaurant"
import {createRouter,createWebHistory} from "vue-router"

const routes =[
{
    name:"Home",
    component:Home,
    path:"/"
},
{
    name:"SingUp",
    component:SingUp,
    path:"/SingUp"
    
},
{
    name:"SingIn",
    component:SingIn,
    path:"/SingIn"
},
{
    name:"addRestaurant",
    component:AddRestaurant,
    path:"/AddRestaurant"
},
{
    name:"UpdateRestaurant",
    component:UpdateRestaurant,
    path:"/UpdateRestaurant/:id"
}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;