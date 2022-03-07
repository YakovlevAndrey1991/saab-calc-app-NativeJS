class CreateSelect {
    constructor(id, parent) {
        this.id = id
        this.parent = document.querySelector(parent)
    }

    render() {
        const select = document.createElement('select')
        select.classList.add('select')
        select.id = this.id
        // select.innerHTML = `<option value="Выберите уровнемер">Выберите датчик</option>`
        this.parent.append(select)
    }
}
export default CreateSelect