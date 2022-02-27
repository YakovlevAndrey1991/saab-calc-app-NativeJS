import InputWindow from "./inputClass";
const inputPressure = new InputWindow(
    "Давление в Па",
    "currentPressure",
    "",
    ".wrapper__auto__dens .title"
).render()
export default inputPressure