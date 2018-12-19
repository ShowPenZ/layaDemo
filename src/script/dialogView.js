
export default class dialogView extends Laya.Dialog {
    constructor() {
        super();
        
    }

    onEnable() {
        console.log(this);
        const that = this;
        if (this.btndigClose) {
            this.btndigClose.on(Laya.Event.CLICK, this, this.close)
        }
        // this.btndigClose.on(Laya.Event.CLICK, this, this.close)
    }

    onOpened() {

    }
}



