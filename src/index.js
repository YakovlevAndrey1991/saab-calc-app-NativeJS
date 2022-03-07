import levelSelectWindow from "../classes/Selects/Level";
import tempSelectWindow from "../classes/Selects/Temperature";
import pressureSelectWindow from "../classes/Selects/Pressure";
import volumeSelectWindow from "../classes/Selects/Volume";

import inputLevel from "../classes/inputClass/inputLevel";
import spanLevel from "../classes/spanClass/spanLevel";

import inputTemp from "../classes/inputClass/inputTemp";
import spanTemp from "../classes/spanClass/spanTemp";

import inputPressure from "../classes/inputClass/inputPressure";
import spanPressure from "../classes/spanClass/spanPressure";
import spanDensity from "../classes/spanClass/spanDensity";
import inputHeightPressure from "../classes/inputClass/inputHeightPressure";

import spanDensityAcc from "../classes/spanClass/spanDensityAcc";
import spanAbsDensityAcc from "../classes/spanClass/spanAbsDensityAcc";

import inputVolume from "../classes/inputClass/inputVolume";
import spanVolume from "../classes/spanClass/spanVolume";

import spanWeight from "../classes/spanClass/spanWeight";
import spanWeightAcc from "../classes/spanClass/spanWeightAcc";
import showHideAnimation from "../modules/animation/showHideAnimation";
import SpanClass from "../classes/spanClass/SpanClass";
window.onload = function () {
    let preloader = document.getElementById('preloader')
    preloader.style.display = 'none';
}

const resultLevel = document.querySelector('.level span')
const resultTemp = document.querySelector('.temperature span')
const resultPressure = document.querySelector('.pressure span')
const resultAutoDensityCalc = document.querySelector('.resultAutoDensity span')
const resultDensityAcc = document.querySelector('.densityAcc span')
const resultAutoAbsDensityAccCalc = document.querySelector('.absDensityAcc span')
const resultVolumeAcc = document.querySelector('.volume span')
const resultWeight = document.querySelector('.currentWeight span')
const resultWeightAcc = document.querySelector('.weightAcc span')

let level, levelTransmitter,
    temp, tempTransmitter,
    pressureTransmitter, pressure, height, tempCorrection,
    density, densityAcc,
    volume, tableAcc,
    weight, weightAcc


let total1, total2, h, p


function levelCalc() {

    if (!levelTransmitter) {
        resultLevel.textContent = 'Уровнемер не выбран'
        return
    }
    if (levelTransmitter === '1') {
        resultLevel.textContent = ((1 * 100) / level).toFixed(4)

    }
    if (levelTransmitter === '2') {
        resultLevel.textContent = ((2 * 100) / level).toFixed(4)
    }
    if (levelTransmitter === '3') {
        resultLevel.textContent = ((3 * 100) / level).toFixed(4)
    }
    if (!level) {
        resultLevel.textContent = 'Значение уровня не введено!'
        return
    }
    h = resultLevel.textContent
    total1 = resultLevel.textContent
    densityAccCalc()
}

levelCalc()

function tempCalc() {

    if (!tempTransmitter) {
        resultTemp.textContent = 'Датчик не выбран'
        return
    }
    if (tempTransmitter === '0.5') {
        resultTemp.textContent = ((0.5 * 100) / temp).toFixed(4)
    }
    if (tempTransmitter === '0.25') {
        resultTemp.textContent = ((0.25 * 100) / temp).toFixed(4)
    }
    if (tempTransmitter === '0.15') {
        resultTemp.textContent = ((0.15 * 100) / temp).toFixed(4)
    }
    if (!temp) {
        resultTemp.textContent = 'Значение температуры не введено!'
        return
    }
}

tempCalc()

function pressureCalc() {

    if (!pressureTransmitter) {
        resultPressure.textContent = 'Датчик давления не выбран'
        return
    }
    if (pressureTransmitter === 'UFF' && tempCorrection === false) {
        resultPressure.textContent = Math.sqrt(((Math.pow((pressure / pressure), 2)) * (Math.pow(0.04, 2))))
    }
    if (pressureTransmitter === 'UFF' && tempCorrection === true) {
        resultPressure.textContent = Math.sqrt(((Math.pow((pressure / pressure), 2)) * (Math.pow(0.17, 2))))
    }
    if (pressureTransmitter === 'U') {
        resultPressure.textContent = ((0.025 * 100) / pressure).toFixed(4)
    }
    if (pressureTransmitter === 'C') {
        resultPressure.textContent = ((0.035 * 100) / pressure).toFixed(4)
    }
    if (!pressure) {
        resultPressure.textContent = 'Давление не введено!'
        return
    }
    p = resultPressure.textContent
    densityAccCalc()


}

pressureCalc()


function densAutoCalc() {

    if (!level) {
        resultAutoDensityCalc.textContent = 'Уровень не введен!'
        return
    }
    if (!pressure) {
        resultAutoDensityCalc.textContent = 'Давление не введено!'
        return
    } else {
        resultAutoDensityCalc.textContent = (1.21 + (((pressure) / ((level - height)) * 9.81) * 10)).toFixed(4)
    }
    density = resultAutoDensityCalc.textContent

    absDensityAcc()
    // weightCalc()
}

function weightCalc() {
    if (!density) {
        resultWeight.textContent = 'Плотность неизвестна'
        return
    }
    if (!volume) {
        resultWeight.textContent = 'Объем не введен'
        return;
    } else {
        resultWeight.textContent = ((volume * density) / 1000).toFixed(4)

    }
    weight = resultWeight.textContent
}

weightCalc()

function densityAccCalc() {
    if (!pressure) {
        resultDensityAcc.textContent = 'Давление не введено'
        return
    }
    if (levelTransmitter === 'Выберите уровнемер') {
        resultDensityAcc.textContent = 'Уровнемер не выбран'
        return
    }
    if (!level) {
        resultDensityAcc.textContent = 'Уровень не введен'
        return
    } else {
        resultDensityAcc.textContent = ((+h) + (+p)).toFixed(4)
    }
    densityAcc = resultDensityAcc.textContent
    absDensityAcc()
}


function absDensityAcc() {
    resultAutoAbsDensityAccCalc.textContent = ((density / 100) * densityAcc).toFixed(4)
}

function volumeAccCalc() {
    if (!tableAcc) {
        resultVolumeAcc.textContent = 'Погрешность таблицы не выбрана'
        return
    }
    if (tableAcc === '0.05') {
        resultVolumeAcc.textContent = (0.05 * volume).toFixed(4)
    }
    if (tableAcc === '0.1') {
        resultVolumeAcc.textContent = (0.1 * volume).toFixed(4)
    }
    if (tableAcc === '0.2') {
        resultVolumeAcc.textContent = (0.2 * volume).toFixed(4)
    }
    if (!volume) {
        resultVolumeAcc.textContent = 'Объем не введен'
        return
    }
}

volumeAccCalc()

function getChecked() {
    let tempCorrectionForm = document.querySelector('.tempCorrection')
    let chbox = document.querySelector('#tempCorrection')
    if (chbox.checked === false) {
        tempCorrection = false
    }
    tempCorrectionForm.addEventListener('change', () => {
        if (chbox.checked) {
            tempCorrection = true
        } else {
            tempCorrection = false
        }
        pressureCalc()
    })

}

getChecked()


function getRadioChecked() {
    const choose = document.querySelector('.form')
    let densRadio = document.getElementsByName('dens')
    let autoDens = document.querySelector('.wrapper__auto__dens')
    let handleDens = document.querySelector('.wrapper__handle__dens')

    choose.addEventListener('change', () => {
        densRadio.forEach((elem) => {
            if (elem.checked && elem.value === 'handle') {
                autoDens.style.display = 'none'
                handleDens.style.display = 'inline-flex'
            }
            if (elem.checked && elem.value === 'auto') {
                autoDens.style.display = 'inline-flex'
                handleDens.style.display = 'none'
            }
        })
    })

}

getRadioChecked()

function getDynamicInfo(selector) {
    const input = document.querySelector(selector)
    height = input.value
    input.addEventListener('input', () => {
        switch (input.getAttribute('id')) {
            case 'currentLevel':
                level = +input.value
                levelCalc()
                densityAccCalc()
                densAutoCalc()
                absDensityAcc()
                break
            case 'currentTemp':
                temp = +input.value
                tempCalc()
                break
            case 'currentPressure':
                pressure = input.value
                pressureCalc()
                densAutoCalc()
                densityAccCalc()
                absDensityAcc()
                weightCalc()
                break
            case 'currentVolume':
                volume = +input.value
                volumeAccCalc()
                weightCalc()
                break
            case 'heightPressureTransmitter':
                height = +input.value
                pressureCalc()
                densAutoCalc()
                densityAccCalc()
                break
        }
    })
}

function getStaticInfo(selector) {
    const transmitter = document.querySelector(selector)


    transmitter.addEventListener('change', () => {
        switch (transmitter.getAttribute('id')) {
            case 'selectLevel':
                levelTransmitter = transmitter.value
                levelCalc()
                break
            case 'selectTemp':
                tempTransmitter = transmitter.value
                tempCalc()
                break
            case 'selectPressure':
                pressureTransmitter = transmitter.value
                pressureCalc()
                break
            case 'selectTableAcc':
                tableAcc = transmitter.value
                volumeAccCalc()
                break

        }
    })
}








getDynamicInfo('#currentLevel')
getDynamicInfo('#currentTemp')
getDynamicInfo('#currentVolume')
getDynamicInfo('#currentPressure')
getDynamicInfo('#heightPressureTransmitter')

getStaticInfo('#selectLevel')
getStaticInfo('#selectTemp')
getStaticInfo('#selectPressure')
getStaticInfo('#selectTableAcc')

showHideAnimation('.level', '.level .container', 'level')
showHideAnimation('.temperature', '.temperature .container', 'temperature')
showHideAnimation('.chose__density_type', '.chose__density_type .container', 'chose__density_type')
showHideAnimation('.wrapper__auto__dens', '.wrapper__auto__dens .container', 'wrapper__auto__dens')
showHideAnimation('.volume', '.volume .container', 'volume')
showHideAnimation('.weight', '.weight .container', 'weight')


