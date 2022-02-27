export default class SpanClass {
    constructor(title, divClass, parentSelector) {
        this.title = title
        this.divClass = divClass
        this.parent = document.querySelector(parentSelector)
    }

    render() {
        const element = document.createElement('div')

        element.innerHTML = `
        <div class="container show">
            <p>${this.title}</p>
            <div class=${this.divClass}>
                <span></span>
            </div>
        </div>
        `
        this.parent.after(element)
    }
}