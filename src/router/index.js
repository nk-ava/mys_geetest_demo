import Vue from "vue"
import verify from "../components/web.vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	routes: [{
		path: "/verification",
		name: 'geetest',
		component: verify
	}, {
		path: "/",
		name: 'home',
		redirect: "/verification"
	}]
})

export default router