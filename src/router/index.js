import Vue from "vue"
import Router from "vue-router"
import BootstrapVue from "bootstrap-vue"

import LandingPage from "@/components/LandingPage"
import ProfilePage from "@/components/ProfilePage"
import CoursePage from "@/components/CoursePage"
import Sandbox from "@/components/Sandbox"
import LoginPage from "@/components/LoginPage"
import SignupPage from "@/components/SignupPage"

import VueSession from "vue-session"

import fontawesome from "@fortawesome/fontawesome"
import freeSolid from "@fortawesome/fontawesome-free-solid/"
import FontAwesomeIcon from "@fortawesome/vue-fontawesome"

fontawesome.library.add(freeSolid)

Vue.use(VueSession)
Vue.use(Router)
Vue.use(BootstrapVue)
Vue.component("fa-icon", FontAwesomeIcon)

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
      path: "/course",
      name: "skbcoursedetail",
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
      component: LoginPage
    },
    {
      path: "/signup",
      name: "skbsignup",
      component: SignupPage
    }
  ]
})
