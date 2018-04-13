import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/home'

 import Layout from '@/views/layout'

import Project from '@/views/backend/project'
import Doc from '@/views/backend/doc'
import Workbench from '@/views/backend/workbench'


//let Layout = (resolve) => {
//return require.ensure([], () => {
//  resolve(require('@/views/layout'))
//})
//}
//let Project = (resolve) => {
//return require.ensure([], () => {
//  resolve(require('@/views/backend/project'))
//})
//}

/*let Doc = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/views/backend/doc'))
  }, "abc")
}*//*
let Workbench = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/views/backend/workbench'))
  }, "abc")
}*/
//let Doc = (resolve) => {
//return import('@/views/backend/doc')
//}
//let Workbench = (resolve) => {
//return import('@/views/backend/workbench')
//}
//
//
//import Login from '@/components/login'



Vue.use(Router)

let router = new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			name:'HOME',
			component:Home
		}
	]
})

export default router
