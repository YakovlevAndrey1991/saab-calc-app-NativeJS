import InputWindow from "./inputClass";
const inputLevel = new InputWindow(
    "Введите значение уровня",
    "currentLevel",
    "",
    ".level .title"
).render()
export default inputLevel;