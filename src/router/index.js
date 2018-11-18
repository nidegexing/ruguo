import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '../pages/MainPage'
import QuestionDetail from '../pages/QuestionDetail'
import WelcomePage from '../pages/WelcomePage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'welcome-page',
            component: WelcomePage
        }, {
            path: '/main-page',
            name: 'main-page',
            component: MainPage
        }, {
            path: '/question/:id',
            name: 'question',
            component: QuestionDetail
        }
    ]
})
