import {createRouter, createWebHashHistory} from "vue-router";
import MainProject from "@/components/pages/Main.vue";
import RegisterForm from "@/components/pages/Authorization/Regis.vue";
import AuthForm from "@/components/pages/Authorization/Auth.vue";
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
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
});
export default router;