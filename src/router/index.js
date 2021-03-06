import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Main from '@/components/Main'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Userinfo from '@/components/Userinfo'

import Resource from '@/components/Resource'
import Warehouse from '@/components/resource/Warehouse'
import Car from '@/components/resource/Car'
import Grade from '@/components/resource/Grade'
import outfireTeam from '@/components/resource/outfireTeam'
import Equipment from '@/components/resource/Equipment'
import forestRespGrid from '@/components/resource/forestRespGrid'
import fireStation from '@/components/resource/fireStation'
import OBtower from '@/components/resource/OBtower'
import controlCenter from '@/components/resource/controlCenter'
import List from '@/components/resource/List'

import Patrol from '@/components/Patrol'
import User from '@/components/Patrol/User'


import FireWarning from '@/components/fireWarning'
import Plan from '@/components/fireWarning/Plan'

import Weather from '@/components/Weather'
import monitoringManagement from '@/components/weather/monitoringManagement'
import Chart from '@/components/weather/Chart'
import Analyse from '@/components/weather/Analyse'

import Video from '@/components/Video'
import Plane from '@/components/video/Plane'
import monitorVideo from '@/components/video/monitorVideo'
import Recode from '@/components/video/Recode'

import fireSciencManagement from '@/components/fireSciencManagement'
import Position from '@/components/fireSciencManagement/Position'

import outFireConduct from '@/components/outFireConduct'

import Loss from '@/components/Loss'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            children: [{
                    path: '/',
                    name: 'Main',
                    component: Main
                },
                {
                    path: 'weather',
                    name: 'Weather',
                    component: Weather,
                    children: [{
                        path: 'monitoringManagement',
                        name: 'monitoringManagement',
                        component: monitoringManagement,
                        children: [{
                            path: 'chart',
                            name: 'Chart',
                            component: Chart
                        }]

                    }, {
                        path: 'analyse',
                        name: 'Analyse',
                        component: Analyse
                    }]
                },
                {
                    path: 'video',
                    name: 'Video',
                    component: Video,
                    children: [{
                        path: 'plane',
                        name: 'Plane',
                        component: Plane
                    }, {
                        path: 'monitorVideo',
                        name: 'monitorVideo',
                        component: monitorVideo
                    }, {
                        path: 'recode',
                        name: 'Recode',
                        component: Recode
                    }]
                },
                {
                    path: 'userinfo',
                    name: 'Userinfo',
                    component: Userinfo
                },
                {
                    path: 'loss',
                    name: 'Loss',
                    component: Loss
                },
                {
                    path: 'outFireConduct',
                    name: 'outFireConduct',
                    component: outFireConduct
                },
                {
                    path: 'fireSciencManagement',
                    name: 'fireSciencManagement',
                    component: fireSciencManagement,
                    children: [{
                        path: 'position',
                        name: 'Position',
                        component: Position
                    }]

                },
                {
                    path: 'fireWarning',
                    name: 'FireWarning',
                    component: FireWarning,
                    children: [{
                        path: 'plan',
                        name: 'Plan',
                        component: Plan
                    }]

                },
                {
                    path: 'patrol',
                    name: 'Patrol',
                    component: Patrol,
                    children: [{
                        path: 'user',
                        name: 'User',
                        component: User
                    }]

                },
                {
                    path: 'resource',
                    name: 'Resource',
                    component: Resource,
                    children: [{
                        path: 'warehouse',
                        name: 'Warehouse',
                        component: Warehouse
                    },{
                        path: 'car',
                        name: 'Car',
                        component: Car
                    },{
                        path: 'grade',
                        name: 'Grade',
                        component: Grade
                    },{
                        path: 'outfireTeam',
                        name: 'outfireTeam',
                        component: outfireTeam
                    },{
                        path: 'equipment',
                        name: 'Equipment',
                        component: Equipment
                    },{
                        path: 'forestRespGrid',
                        name: 'forestRespGrid',
                        component: forestRespGrid
                    },{
                        path: 'fireStation',
                        name: 'fireStation',
                        component: fireStation
                    },{
                        path: 'OBtower',
                        name: 'OBtower',
                        component: OBtower
                    },{
                        path: 'controlCenter',
                        name: 'controlCenter',
                        component: controlCenter
                    },{
                        path: 'list',
                        name: 'List',
                        component: List
                    }]

                }
            ]
        },
        {
            path: 'signin',
            name: 'Signin',
            component: Signin
        },
        {
            path: 'signup',
            name: 'Signup',
            component: Signup
        }
    ]
})