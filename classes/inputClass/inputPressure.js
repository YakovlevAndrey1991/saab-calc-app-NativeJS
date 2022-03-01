import InputWindow from "./inputClass";
const inputPressure = new InputWindow(
    "Давление в Па",
    "currentPressure",
    "",
    ".wrapper-pressure-content"
).render()
export default inputPressure