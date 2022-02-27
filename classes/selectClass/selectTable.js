import SelectWindow from "./selectClass";
const selectTable = new SelectWindow(
    "Выберите погрешность таблицы",
    "selectTableAcc",
    "Выберите значение",
    "Выбрать значение",
    ".volume .title",
    "0.05",
    "0.1",
    "0.2",
    "0.05",
    "0.1",
    "0.2",
    "",
    "",
    "",
).render()
export default selectTable