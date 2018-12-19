export default class dialogLabel extends Laya.Label {
    constructor(props) {
        super();
        this.propsValue = props;
        console.log('props',this.propsValue)
    }

    onEnable() {
        console.log(this);
     
    }
    
}



