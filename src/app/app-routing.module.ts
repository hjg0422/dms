import { EditMyProfileComponent } from './components/edit-my-profile/edit-my-profile.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
/* 
*根路由配置(cli——ng g m app-routing --m app --flat)
*/
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', }, // 路由重定向 pathMatch: 'full' | 'prefix'; 前者完全匹配，后者部分匹配（开头匹配）
  {
    path: 'login', component: LoginComponent, data: {
      breadcrumb: '登录'
    }
  },
  {
    path: 'home', component: HomeComponent, data: {
      breadcrumb: '主页'
    }
  }, {
    path: 'my-profile', component: MyProfileComponent, data: {
      breadcrumb: '个人信息'
    }
  },
  {
    path: 'edit-my-profile', component: EditMyProfileComponent, data: {
      breadcrumb: '个人信息'
    }
  },
  { path: '**', component: NotfoundComponent },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true, enableTracing: true }) // 启动hash路由
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
