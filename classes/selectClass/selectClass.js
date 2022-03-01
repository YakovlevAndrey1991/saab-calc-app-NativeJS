export default class SelectWindow {
    constructor(title, selectID, selectedValue, selectedValueTitle, parentSelector, value1, value2,value3, titleValue1, titleValue2, titleValue3, titleValue4, titleValue5,titleValue6) {
        this.title = title
        this.selectID = selectID
        this.parent = document.querySelector(parentSelector)
        this.selectedValue = selectedValue
        this.selectedValueTitle = selectedValueTitle
        this.value1 = value1
        this.value2 = value2
        this.value3 = value3
        this.titleValue1 = titleValue1
        this.titleValue2 = titleValue2
        this.titleValue3 = titleValue3
        this.titleValue4 = titleValue4
        this.titleValue5 = titleValue5
        this.titleValue6 = titleValue6
    }

    render() {
        const element = document.createElement('div');

        element.innerHTML = `
               <div class="container hide">
            <div class="content">
                <p>${this.title}</p>
            </div>
            <div class="content">
                <select class="select" id="${this.selectID}">
                    <option selected value="${this.selectedValue}">${this.selectedValueTitle}</option>
                    <option value="${this.value1}">${this.titleValue1}</option>
                    <option value="${this.value2}">${this.titleValue2}</option>
                    <option value="${this.value3}">${this.titleValue3}</option>
                    <option value="${this.value3}">${this.titleValue4}</option>
                    <option value="${this.value3}">${this.titleValue5}</option>
                    <option value="${this.value3}">${this.titleValue6}</option>
                </select>
            </div>
        </div>
       `
        this.parent.append(element)
    }
}