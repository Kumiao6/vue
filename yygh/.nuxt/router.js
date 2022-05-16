import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _802200e8 = () => interopDefault(import('../pages/order/index.vue' /* webpackChunkName: "pages/order/index" */))
const _597d647a = () => interopDefault(import('../pages/patient/index.vue' /* webpackChunkName: "pages/patient/index" */))
const _78859623 = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _e213e54e = () => interopDefault(import('../pages/hospital/booking.vue' /* webpackChunkName: "pages/hospital/booking" */))
const _2696d7c7 = () => interopDefault(import('../pages/hospital/schedule.vue' /* webpackChunkName: "pages/hospital/schedule" */))
const _298c849a = () => interopDefault(import('../pages/order/show.vue' /* webpackChunkName: "pages/order/show" */))
const _46fbbf5c = () => interopDefault(import('../pages/patient/add.vue' /* webpackChunkName: "pages/patient/add" */))
const _284d66c8 = () => interopDefault(import('../pages/patient/show.vue' /* webpackChunkName: "pages/patient/show" */))
const _c755cfe6 = () => interopDefault(import('../pages/weixin/callback.vue' /* webpackChunkName: "pages/weixin/callback" */))
const _fc13a710 = () => interopDefault(import('../pages/hospital/detail/_hoscode.vue' /* webpackChunkName: "pages/hospital/detail/_hoscode" */))
const _06aa7d5e = () => interopDefault(import('../pages/hospital/notice/_hoscode.vue' /* webpackChunkName: "pages/hospital/notice/_hoscode" */))
const _e7ff82ac = () => interopDefault(import('../pages/hospital/_hoscode.vue' /* webpackChunkName: "pages/hospital/_hoscode" */))
const _ce751966 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/order",
    component: _802200e8,
    name: "order"
  }, {
    path: "/patient",
    component: _597d647a,
    name: "patient"
  }, {
    path: "/user",
    component: _78859623,
    name: "user"
  }, {
    path: "/hospital/booking",
    component: _e213e54e,
    name: "hospital-booking"
  }, {
    path: "/hospital/schedule",
    component: _2696d7c7,
    name: "hospital-schedule"
  }, {
    path: "/order/show",
    component: _298c849a,
    name: "order-show"
  }, {
    path: "/patient/add",
    component: _46fbbf5c,
    name: "patient-add"
  }, {
    path: "/patient/show",
    component: _284d66c8,
    name: "patient-show"
  }, {
    path: "/weixin/callback",
    component: _c755cfe6,
    name: "weixin-callback"
  }, {
    path: "/hospital/detail/:hoscode?",
    component: _fc13a710,
    name: "hospital-detail-hoscode"
  }, {
    path: "/hospital/notice/:hoscode?",
    component: _06aa7d5e,
    name: "hospital-notice-hoscode"
  }, {
    path: "/hospital/:hoscode?",
    component: _e7ff82ac,
    name: "hospital-hoscode"
  }, {
    path: "/",
    component: _ce751966,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
