import SelectWindow from "./selectClass";
const selectTemp= new SelectWindow(
    "Выберите датчик",
    "selectTemp",
    "Выберите датчик",
    "Выберите датчик",
    '.temperature .title',
    "0.5",
    "0.25",
    "0.15",
    "2240S",
    "NLI/WLS",
    "Rosemount 565",
    "Rosemount 644",
    "Rosemount 765",
    "Rosemount 766"


).render()
export default selectTemp;