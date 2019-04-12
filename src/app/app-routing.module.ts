import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMyProfileComponent } from './components/edit-my-profile/edit-my-profile.component';
import { InfomationComponent } from './components/pages/home/infomation/infomation.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { InformationListComponent } from './components/pages/home/information-list/information-list.component';
import { TutsauComponent } from './components/home/tutsau/tutsau.component';
/*
*根路由配置(cli——ng g m app-routing --m app --flat)
*/
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', }, // 路由重定向 pathMatch: 'full' | 'prefix'; 前者完全匹配，后者部分匹配（开头匹配）
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'information-list', component: InformationListComponent
  },
  {
    path: 'information/:id', component: InfomationComponent
  },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'edit-my-profile', component: EditMyProfileComponent },
  { path: 'tutsau', component: TutsauComponent },
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
