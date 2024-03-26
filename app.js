import {drawCurrent} from "./canvas_js/corriente.js";
import {calcCurrent} from './canvas_js/corriente.js'
import {drawVoltage} from "./canvas_js/voltaje.js";
import {calcVoltage} from "./canvas_js/voltaje.js";
import {calcResistance} from "./canvas_js/resistencia.js";
import {drawResistance} from "./canvas_js/resistencia.js";
let btn = document.querySelector('.submit-btn')
let clear = document.querySelector('.clear-btn')
let options = document.querySelector('#options')


function getOperation(){
    const ops={
        'corriente' : ['voltaje','resistencia','corriente'],
        'resistencia': ['voltaje','corriente', 'resistencia'],
        'voltaje':['corriente','resistencia','voltaje']
    
    }
    return ops
    
}

document.addEventListener("DOMContentLoaded",(e)=>{
    optionSelected();
    
});

options.addEventListener('change',optionSelected)

btn.addEventListener('click',(e)=>{
    let functions = getFunctions(document.querySelector('#options').value)
    let result = eval(functions[1])
    console.log(result)
    document.querySelector(`#${document.querySelector('#options').value}`).value = result
    clear.removeAttribute('disabled')
})

clear.addEventListener('click',(e)=>{
    let nameForm = document.querySelector('#options').value
    let object = getOperation()
    for(let index = 0; index < object[nameForm].length; index ++){
        document.querySelector(`#${object[nameForm][index]}`).value = ""
    }
    clear.setAttribute('disabled', "")
    btn.setAttribute('disabled',"")
})


function optionSelected(){
    let selected = document.querySelector('#options').value;
    document.querySelector('h2').innerText = `Calcular ${selected}`;
    genForm(selected, getOperation())
    genDraw(selected)
    btn.setAttribute('disabled','')
    
}

function genForm(nameForm, ops){
    let container = document.querySelector('.form-container')
    clearspaces('.form-container')
    clearspaces('.canva')
    let fatherDiv = document.createElement('div')
    for (let index = 0; index < 3; index++) {
        let label = document.createElement('label');
        label.setAttribute('for', ops[nameForm][index]);
        label.innerText = ops[nameForm][index];
        let div = document.createElement('div');
        div.setAttribute('class','form-input');
        let input = document.createElement('input')
        input.setAttribute('type','number')
        input.setAttribute('name',ops[nameForm][index])
        input.setAttribute('id', ops[nameForm][index])
        input.onblur = function(){onBlurTry(nameForm)}
        let template = 'Ingrese el valor '
        if(ops[nameForm][index] == 'voltaje'){
            template += 'del'
        }else{
            template +='de la'
        }
        if(ops[nameForm][index]!=nameForm){
            input.setAttribute('placeholder', `${template} ${ops[nameForm][index]}`)
        }else{
            input.setAttribute('disabled', "")
        }
        
        div.appendChild(input)
        fatherDiv.appendChild(label)
        fatherDiv.appendChild(div)
        container.appendChild(fatherDiv)
    }
   

}


function clearspaces(form){
    let container = document.querySelector(form)
    container.removeChild(container.firstChild)
}


function genDraw(nameForm){
    document.querySelector('.howto').innerText = `¿Como Calcular ${nameForm} ?`;
    let canvaSpace = document.querySelector('.canva')
    let canva = document.createElement('canvas')
    canva.setAttribute('width', '300')
    canva.setAttribute('height', '300')
    canva.setAttribute('class', 'space')
    canvaSpace.appendChild(canva)
    let functions = getFunctions(nameForm)
    eval(functions[0])
    
    
    
}

function getFunctions(name){
    const functions ={
        'corriente' : ['drawCurrent()','calcCurrent()'],
        'resistencia': ['drawResistance()','calcResistance()'],
        'voltaje':['drawVoltage()','calcVoltage()']
    }
    return functions[name]
}

export default function getData(inputA, inputB){
    let a = document.querySelector(inputA).value
    let b = document.querySelector(inputB).value
    let variables = [a,b]
    return variables

}

function onBlurTry(nameForm){
    let object = getOperation();
    if (document.querySelector(`#${object[nameForm][0]}`).value != '' && document.querySelector(`#${object[nameForm][1]}`).value != '') {
        btn.removeAttribute('disabled')
    }else{
        btn.setAttribute('disabled',"")
    }
    
}