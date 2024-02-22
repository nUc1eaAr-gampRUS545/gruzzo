import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = true;
        this._userData = {}; // Изменено название свойства
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._userData = user; // Изменено название свойства
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._userData;
    }
}
