export default class txtInputView extends Laya.TextInput {
    constructor() {
        super();
    }

    onEnable() {
        this.parent.txtInputUserName.on(Laya.Event.FOCUS, this, this.onFocusUserName);
        this.parent.txtInputUserPwd.on(Laya.Event.FOCUS, this, this.onFocusPwd);

        this.parent.txtInputUserName.on(Laya.Event.BLUR, this, this.onBlurUserName);
        this.parent.txtInputUserPwd.on(Laya.Event.BLUR, this, this.onBlurPwd);
    }

    onFocusUserName() {
        if (this.parent.txtInputUserName.text && this.parent.txtInputUserName.text === '请输入用户名...') 
        this.parent.txtInputUserName.text = '';
        this.parent.txtInputUserName.italic = false;
    }

    onFocusPwd() {
        if (this.parent.txtInputUserPwd.text && this.parent.txtInputUserPwd.text === '请输入密码...') 
        this.parent.txtInputUserPwd.text = '';
        this.parent.txtInputUserPwd.type = 'password';
    }

    onBlurUserName() {

    }


    onBlurPwd() {

    }


}



