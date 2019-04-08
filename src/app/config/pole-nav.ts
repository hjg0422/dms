/* 登陆角色对应的路由导航 */
export default {
    STUDENT: [
        {
            name: '个人信息', icon: 'project', children: [
                {
                    name: '我的资料', path: 'my-profile', icon: 'project', data: {
                        breadcrumb: '我的资料'
                    }
                },
                {
                    name: '修改信息', path: 'edit-my-profile', icon: 'project', data: {
                        breadcrumb: '修改信息'
                    }
                },
                {
                    name: '信息登入', path: 'edit-my-profile', icon: 'project', data: {
                        breadcrumb: '信息登入'
                    }
                }
            ], data: {
                breadcrumb: '首页'
            }
        },
        { name: '吐槽', path: 'home', icon: 'project' },
        {
            name: '功能', icon: 'project', children: [
                {
                    name: '吐槽', path: 'home', icon: 'project', data: {
                        breadcrumb: '吐槽'
                    }
                },
                {
                    name: '吐槽', path: 'home', icon: 'project', data: {
                        breadcrumb: '吐槽'
                    }
                },
                {
                    name: '吐槽', path: 'home', icon: 'project', data: {
                        breadcrumb: '吐槽'
                    }
                },
                {
                    name: '吐槽', path: 'home', icon: 'project', data: {
                        breadcrumb: '吐槽'
                    }
                },
                {
                    name: '查询', path: 'home', icon: 'project', data: {
                        breadcrumb: '吐槽'
                    }
                },
            ]
        },
        { name: '吐槽', path: 'home', icon: 'project' },
        { name: '查询', path: 'home', icon: 'project' },
        { name: '登录', path: 'login', icon: 'project' }],

    MANAGER: [
        { name: '首页', path: 'home', icon: 'project' },
        { name: '报修处理', path: 'home', icon: 'project' },
        { name: '消息发布', path: 'home', icon: 'project' },
        { name: '管理', path: 'home', icon: 'project' }
    ],
    SYS_MANAGER: [
        { name: '首页', path: 'home', icon: 'project' },
        { name: '吐槽管理', path: 'home', icon: 'project' },
        { name: '宿舍信息', path: 'home', icon: 'project' },
        { name: '系统管理', path: 'home', icon: 'project' },
        { name: '日志管理', path: 'home', icon: 'project' }
    ]

}