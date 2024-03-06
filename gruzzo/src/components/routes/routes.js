import {createRouter, createWebHashHistory} from "vue-router";
import MainProject from "../pages/MainProject.vue";
import RegisterForm from "@/components/pages/Authorization/Regis.vue";
import AuthUser from "@/components/pages/Authorization/AuthUser.vue";
import ProfileUser from "../pages/ProfileUser.vue";
const routes=[
    {
        path:"/",
        component: MainProject
    },
    {
        path:"/login",
        component: AuthUser
    },
    {
        path:"/register",
        component: RegisterForm
    },
    {
        path:"/profile",
        component: ProfileUser
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
});
export default router;