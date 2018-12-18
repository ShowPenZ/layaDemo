
// const scene = Laya.Scene;
// const handler = Laya.Handler;
// const Dialog = Laya.Dialog;
export default class dialogView extends Laya.Dialog {
    constructor() {
        super();
    }

    onEnable() {
        //点击注册
        // this.btndigClose.on(Laya.Event.CLICK, this, this.shutdown)
        //点击登录
        // this.btnLogin.on(Laya.Event.CLICK, this, this.onBtnLoginEvt)
        this.btndigClose.on(Laya.Event.CLICK, this, this.close)

    }
}



