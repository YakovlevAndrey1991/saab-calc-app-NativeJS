import CreateSelectWindow from "../CreateSelect/CreateSelectWindow";
import CreateSelect from "../CreateSelect/CreateSelect";
import getResource from "../../utilites/getResource";


const volumeSelectWindow = new CreateSelectWindow(
    'Выберите значение',
    'selectVolumeWindow',
    '.wrapper-volume-content'
).render()

const selectLevel = new CreateSelect(
    'selectTableAcc',
    '.selectVolumeWindow'
).render()

getResource('http://localhost:3000/volume', '#selectTableAcc')

export default volumeSelectWindow