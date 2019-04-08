import NavConfig from '../config/pole-nav';
export default function (pole: number = 0): any[] {
    let navList = [];
    // 判断用户角色 0： 游客 || 1： 学生 || 2： 宿舍管理员 || 3： 系统管理员
    switch (pole) {
        case 0:
            navList = NavConfig['STUDENT'];
            break;
        case 1:
            navList = NavConfig['MANAGER'];
            break;
        case 2:
            navList = NavConfig['SYS_MANAGER'];
            break;
        default:
            navList = NavConfig['STUDENT'];
    }
    console.log(navList)
    return navList
}