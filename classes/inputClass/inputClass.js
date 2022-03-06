export default class InputWindow {
    constructor(title, inputID, value, parentSelector) {
        this.title = title
        this.inputID = inputID
        this.value = value
        this.parent = document.querySelector(parentSelector)

    }

    render() {
        const element = document.createElement('div')

        element.innerHTML = `
         <div class="container">
            <p>${this.title}</p>
            <input id="${this.inputID}" value="${this.value}" type="number" placeholder="Введите значение" class="input">
        </div>
        `
        this.parent.append(element)
    }
}