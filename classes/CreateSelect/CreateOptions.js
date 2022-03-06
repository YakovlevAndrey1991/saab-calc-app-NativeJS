class AddOption {
    constructor(title, value, parentID) {
        this.title = title
        this.value = value
        this.parent = document.querySelector(parentID)
    }

    render() {
        const option = document.createElement('option')
        option.innerHTML = `${this.title}`
        option.value = this.value

        this.parent.append(option)
    }
}
export default AddOption;