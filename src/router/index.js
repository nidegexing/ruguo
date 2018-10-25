import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '../pages/MainPage'
import QuestionDetail from '../pages/QuestionDetail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: MainPage
        }, {
            path: '/question/:id',
            name: 'question',
            component: QuestionDetail
        }
    ]
})
