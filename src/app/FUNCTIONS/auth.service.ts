import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
/* 判断用户是否登陆 */
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  canActivate() {
    // 这里判断登录状态, 返回 true 或 false
    
    return true;
  }
}
