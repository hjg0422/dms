export class SessionStorage {
    public sessionStorage: any;
    constructor() {
        if (!window.sessionStorage) {
            throw new Error('您的浏览器不支持sessionStorage');
        } else {
            this.sessionStorage = window.sessionStorage;
        }
    }
    public set(key: string, value: string): void {
        this.sessionStorage.setItem(key, value)
    }
    public get(key: string) {
        return this.sessionStorage.getItem(key)
    }
    public setObject(key: string, value: any): void {
        this.sessionStorage.setItem(key, value);
    }
    public getObject(key: string): any {
        return this.sessionStorage.getItem(key);
    }
}