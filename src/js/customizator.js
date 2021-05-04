export default class Customizator {
    constructor() {

    }

    render() {
        this.btnBlock = document.createElement('div');
        this.colorPicker = document.createElement('input');
        let scaleInputS = document.createElement('input'),
            scaleInputM = document.createElement('input'),
            panel = document.createElement('div');
        
        panel.append(this.btnBlock, this.colorPicker);

    }
}