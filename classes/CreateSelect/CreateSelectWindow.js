class CreateSelectWindow {
    constructor(title, rootClass, parentSelector) {
        this.title = title
        this.rootClass = rootClass
        this.parentSelector = document.querySelector(parentSelector)
    }

    render() {
        const windowContent = document.createElement('div')
        windowContent.classList.add('container', 'show')
        windowContent.innerHTML = `
        <div class="content"><p>${this.title}</p></div>
        <div class="content ${this.rootClass}"></div>
        `
        this.parentSelector.append(windowContent)
    }
}
export default CreateSelectWindow;