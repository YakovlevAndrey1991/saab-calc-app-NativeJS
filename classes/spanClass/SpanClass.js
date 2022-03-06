export default class SpanClass {
    constructor(title, divClass, parentSelector, cssClass) {
        this.title = title
        this.divClass = divClass
        this.parent = document.querySelector(parentSelector)
        this.cssClass = cssClass
    }

    render() {
        const element = document.createElement('div')

        element.innerHTML = `
        <div class="container ${this.cssClass}">
            <p>${this.title}</p>
            <div class=${this.divClass}>
                <span></span>
            </div>
        </div>
        `
        this.parent.append(element)
    }
}