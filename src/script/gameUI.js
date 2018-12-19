import dialogViews from './dialogView.js'

const scene = Laya.Scene;
const handler = Laya.Handler;
const Dialog = Laya.Dialog;

export default class GameUI extends Laya.Scene {
    constructor() {
        super();
        //设置单例的引用方式，方便其他类引用
        GameUI.instance = this;
    }

    /**
     * 生命周期初始
     */
    onEnable() {
        //点击注册
        this.btnReg.on(Laya.Event.CLICK, this, this.onBtnRegEvt, ['对不起，注册功能暂未开放！'])
        //点击登录
        this.btnLogin.on(Laya.Event.CLICK, this, this.onBtnLoginEvt, ['对不起，登录功能暂未开放！'])
    }

    /**
     * 注册事件
     * @param {*} param 
     */
    onBtnRegEvt(param) {
        // this.loadScene("nomalDigReg.scene");
        scene.load('nomalDigReg.scene', handler.create(this, this.onAssetLoaded, [param]))
    }

    /**
     * 登录事件
     * @param {*} param 
     */
    onBtnLoginEvt(param) {
        scene.load('nomalDigReg.scene', handler.create(this, this.onAssetLoaded, [param]))
    }

    /**
     * 页面装载完成后打开并且传值给页面
     * @param {*} param 
     */
    onAssetLoaded(param) {
        scene.open('nomalDigReg.scene', false, handler.create(this, (e) => {
            // console.log(e)
            this.layaDigView = e;
            this.layaDigView.dialogLabel.text = param
        }));
    }

    /**
     * 取消监听
     */
    resetListen() {
        this.btnReg.off(Laya.Event.CLICK, this, this.onBtnRegEvt)
        this.btnLogin.off(Laya.Event.CLICK, this, this.onBtnLoginEvt)
    }
}



