import CreateSelectWindow from "../CreateSelect/CreateSelectWindow";
import CreateSelect from "../CreateSelect/CreateSelect";
import getResource from "../../utilites/getResource";


const levelSelectWindow = new CreateSelectWindow(
    'Выберите уровнемер',
    'selectLevelWindow',
    '.wrapper-level-content'
).render()

const selectLevel = new CreateSelect(
    'selectLevel',
    '.selectLevelWindow'
).render()

getResource('http://localhost:3000/level', '#selectLevel')

export default levelSelectWindow