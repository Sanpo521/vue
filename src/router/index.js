import Vue from "vue";
import Router from 'vue-router';
import router from '.'

import Home from '../components/Home'
import Index from "../components/Index"
import CxList from "../components/cx/List";
import CxContent from "../components/cx/Content";
import ZcHome from "../components/zc/Home";
import ZcList from "../components/zc/List";
import ZcListEx from "../components/zc/ListEx";
import ZcContent from "../components/zc/Content";
import CgSearch from "../components/cg/Search";
import CgResult from "../components/cg/Result";
import CgList from "../components/cg/List";
import CgContent from "../components/cg/Content";
import WxSearch from "../components/wx/Search";
import WxResult from "../components/wx/Result";
import WxList from "../components/wx/List";
import WxContent from "../components/wx/Content";

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            name:'home',
            component: Home,
            meta:{
                label: '首页',
                title: '哈尔滨科技智汇社区',
                menuShow:true,
                submenuShow:false
            }
        },
        {
            path: '/wx',
            name:'wxHome',
            component: Index,
            redirect: {name: 'wxSearch'},
            meta:{
                label: '文献检索',
                title: '全网文献检索',
                menuShow:true,
                submenuShow:false,
                activeMenu:"/wx"
            },
            children:[{
                path:"search",
                name:'wxSearch',
                component: WxSearch,
                meta:{
                    label: '',
                    title: '全网文献检索',
                    menuShow:false,
                    submenuShow:false,
                    activeMenu:"/wx",
                    // keepAlive:true,
                    // isBack: false
                }
            },{
                path:"result",
                name:'wxResult',
                component: WxResult,
                redirect: {name: 'wxList'},
                meta:{
                    label: '查询结果列表',
                    title: '全网文献检索',
                    menuShow:false,
                    submenuShow:false,
                    activeMenu:"/wx",
                    keepAlive:true,
                    isBack: false
                },
                children:[{
                    path:"list",
                    name:'wxList',
                    component: WxList,
                    meta:{
                        label: '',
                        title: '全网文献检索',
                        menuShow:false,
                        submenuShow:false,
                        activeMenu:"/wx",
                        keepAlive:true,
                        isBack: false
                    }
                },{
                    path:"content",
                    name:'wxContent',
                    component: WxContent,
                    meta:{
                        label: '文章内容',
                        title: '全网文献检索',
                        menuShow:false,
                        submenuShow:false,
                        activeMenu:"/wx",
                        keepAlive:false,
                        isBack: false
                    }
                }]
            }]
        },
        {
            path: '/cx',
            name:'cxHome',
            component: Index,
            redirect: {name: 'cxList'},
            meta:{
                label: '创新能力',
                title: '哈尔滨科技创新能力评价',
                menuShow:true,
                submenuShow:false,
                activeMenu:"/cx"
            },
            children:[{
                path:"",
                name:'cxList',
                component: CxList,
                meta:{
                    label: '',
                    title: '哈尔滨科技创新能力评价',
                    menuShow:false,
                    submenuShow:false,
                    activeMenu:"/cx"
                }
            },{
                path:"content",
                name:'cxContent',
                component: CxContent,
                meta:{
                    label: '文章内容',
                    title: '哈尔滨科技创新能力评价--文章内容',
                    menuShow:false,
                    submenuShow:false,
                    activeMenu:"/cx"
                }
            }]
        },
        {
            path: '/cg',
            name:'cgHome',
            component: Index,
            redirect: {name: 'cgSearch'},
            meta:{
                label: '成果查询',
                title: '黑龙江科技项目创新成果',
                menuShow:true,
                submenuShow:false,
                activeMenu:"/cg",
                // keepAlive:true,
                // isBack: false
            },
            children:[{
                path:"search",
                name:'cgSearch',
                component: CgSearch,
                meta:{
                    label: '',
                    title: '黑龙江科技项目创新成果',
                    menuShow:false,
                    submenuShow:false,
                    activeMenu:"/cg",
                    // keepAlive:true,
                    // isBack: false
                }
            },{
                path:"result",
                name:'cgResult',
                component: CgResult,
                redirect: {name: 'cgList'},
                meta:{
                    label: '查询结果列表',
                    title: '黑龙江科技项目创新成果',
                    menuShow:false,
                    submenuShow:false,
                    activeMenu:"/cg",
                    keepAlive:true,
                    isBack: false
                },
                children:[{
                    path:"list",
                    name:'cgList',
                    component: CgList,
                    meta:{
                        label: '',
                        title: '黑龙江科技项目创新成果',
                        menuShow:false,
                        submenuShow:false,
                        activeMenu:"/cg",
                        keepAlive:true,
                        isBack: false
                    }
                },{
                    path:"content",
                    name:'cgContent',
                    component: CgContent,
                    meta:{
                        label: '文章内容',
                        title: '黑龙江科技项目创新成果',
                        menuShow:false,
                        submenuShow:false,
                        activeMenu:"/cg",
                        keepAlive:false,
                        isBack: false
                    }
                }]
            }]
        },
        {
            path: '/zc',
            name:'zcIndex',
            component: Index,
            redirect: {name: 'zcHome'},
            meta:{
                label: '政策法规',
                title: '哈尔滨市科技政策汇编',
                menuShow:true,
                submenuShow:true,
                activeMenu:"/zc"
            },
            children:[{
                path:"hrb",
                name:'zcHome',
                component: ZcHome,
                redirect: {name: 'zcList'},
                meta:{
                    label: '哈尔滨市科技政策汇编',
                    title: '哈尔滨市科技政策汇编',
                    menuShow:false,
                    submenuShow:false,
                    activeMenu:"/zc"
                },
                children:[{
                    path:"list",
                    name:'zcList',
                    component: ZcList,
                    meta:{
                        label: '',
                        title: '哈尔滨市科技政策汇编',
                        menuShow:false,
                        submenuShow:false,
                        activeMenu:"/zc"
                    }
                },{
                    path:"content",
                    name:'zcContent',
                    component: ZcContent,
                    meta:{
                        label: '文章内容',
                        title: '哈尔滨市科技政策汇编--文章内容',
                        menuShow:false,
                        submenuShow:false,
                        activeMenu:"/zc"
                    }
                }]
            },{
                path:"hrbex",
                name:'zcHomeEx',
                component: ZcHome,
                redirect: {name: 'zcListEx'},
                meta:{
                    label: '新冠肺炎疫情防控期间哈尔滨市科技相关政策',
                    title: '新冠肺炎疫情防控期间哈尔滨市科技相关政策',
                    menuShow:false,
                    submenuShow:false,
                    activeMenu:"/zc"
                },
                children:[{
                    path:"list",
                    name:'zcListEx',
                    component: ZcListEx,
                    meta:{
                        label: '',
                        title: '新冠肺炎疫情防控期间哈尔滨市科技相关政策',
                        menuShow:false,
                        submenuShow:false,
                        activeMenu:"/zc"
                    }
                },{
                    path:"content",
                    name:'zcContentEx',
                    component: ZcContent,
                    meta:{
                        label: '文章内容',
                        title: '新冠肺炎疫情防控期间哈尔滨市科技相关政策--文章内容',
                        menuShow:false,
                        submenuShow:false,
                        activeMenu:"/zc"
                    }
                }]
            }]
        },
    ]
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
