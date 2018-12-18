const scene = Laya.Scene;
const handler = Laya.Handler;
const Dialog = Laya.Dialog;
export default class GameUI extends Laya.Scene {
    constructor() {
        super();
        //设置单例的引用方式，方便其他类引用
        GameUI.instance = this;
    }

    onEnable() {
        //点击注册
        this.btnReg.on(Laya.Event.CLICK, this, this.onBtnRegEvt)
        //点击登录
        this.btnLogin.on(Laya.Event.CLICK, this, this.onBtnLoginEvt)
    }

    //登录事件
    onBtnRegEvt() {
        console.log('Register')
        // this.loadScene("nomalDigReg.scene");
        scene.load('nomalDigReg.scene', handler.create(this, this.onAssetLoaded))
    }

    onBtnLoginEvt() {
        console.log('Login')
    }

    //场景加载完后打开
    onAssetLoaded() {
        scene.open('nomalDigReg.scene');
    }
    
    //取消监听
    resetListen() {
        this.btnReg.off(Laya.Event.CLICK, this, this.onBtnRegEvt)
        this.btnLogin.off(Laya.Event.CLICK, this, this.onBtnLoginEvt)
    }
}



