import Vue from "vue"
import Router from "vue-router"
import BootstrapVue from "bootstrap-vue"

import LandingPage from "@/components/LandingPage"
import ProfilePage from "@/components/ProfilePage"
import CoursePage from "@/components/CoursePage"
import Sandbox from "@/components/Sandbox"
import Login from "@/components/Login"
import Signup from "@/components/Signup"

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "SKB.CMS",
      component: LandingPage
    },
    {
      path: "/profile",
      name: "skbprofile",
      component: ProfilePage
    },
    {
      path: "/courseview",
      name: "skbcourse",
      component: CoursePage
    },
    {
      path: "/sandbox",
      name: "sandbox",
      component: Sandbox
    },
    {
      path: "/login",
      name: "skblogin",
      component: Login
    },
    {
      path: "/signup",
      name: "skbsignup",
      component: Signup
    }
  ]
})
