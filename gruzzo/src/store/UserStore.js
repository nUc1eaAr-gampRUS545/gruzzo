import {makeAutoObservable} from "mobx";

class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {
            id:0,
            name:'',
            surname:"",
            avatar:"",
            email:""
        }
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = { id:user.id,
            name:user.name,
            surname:user.surname,
            avatar:user.avatar,
            email:user.email}
    }

    getIsAuth() {
        return this._isAuth
    }
    getUser() {
        return this._user
    }
}