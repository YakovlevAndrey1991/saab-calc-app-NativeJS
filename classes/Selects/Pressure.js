import CreateSelectWindow from "../CreateSelect/CreateSelectWindow";
import CreateSelect from "../CreateSelect/CreateSelect";
import getResource from "../../utilites/getResource";

const pressureSelectWindow = new CreateSelectWindow(
    'Выберите датчик',
    'selectPressureWindow',
    '.wrapper-pressure-content'
).render()

const selectPressure = new CreateSelect(
    'selectPressure',
    '.selectPressureWindow'
).render()

export default pressureSelectWindow;
getResource('http://localhost:3000/pressure', '#selectPressure')