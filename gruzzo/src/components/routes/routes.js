import {createRouter, createWebHashHistory} from "vue-router";
import MainProject from "../pages/MainProject.vue";
import RegisterForm from "@/components/pages/Authorization/Regis.vue";
import AuthForm from "@/components/pages/Authorization/Auth.vue";
import ProfileUser from "../pages/ProfileUser.vue";
const routes=[
    {
        path:"/",
        component: MainProject
    },
    {
        path:"/login",
        component: AuthForm
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