import getData from "../app.js";
function drawResistance(){
    let space = document.querySelector('.space');
    let ctx  = space.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle= '#ff8ba7';
    ctx.moveTo(150, 70);
    ctx.lineTo(222.22, 160)
    ctx.lineTo(150, 160);
    ctx.lineTo(150, 230);
    ctx.lineTo(20,230);
    ctx.lineTo(150, 70);
    ctx.moveTo(150, 160);
    ctx. lineTo(76.47, 160);

    ctx.fill(); 
    ctx.closePath();
    ctx.lineWidth=4;
    ctx.strokeStyle = '#33272a';
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle= '#594e4e';
    ctx.moveTo(150, 230);
    ctx.lineTo(150, 160);
    ctx.lineTo(222.22, 160);
    ctx.lineTo(280, 230);
    ctx.lineTo(150, 230);
    ctx.fill(); 
    ctx.closePath();
    ctx.lineWidth=4;
    ctx.strokeStyle = '#33272a';
    ctx.stroke();

    ctx.font ="bold 24px verdana";
    ctx.fillStyle= '#33272a';
    ctx.fillText("V",145, 140);
    ctx.fillText("I",90, 200);
    ctx.fillText("R",190, 200);
    ctx.textAling="start";
    ctx.fillText("R=V/I",110,280);

}
function calcResistance(){
    let result
    let variables = getData('#voltaje','#corriente')
    try {
        result = variables[0]/ variables[1]
        if((isNaN(result))){
            throw new Error('No es posible realizar la operacion por favor verifique los valores e intente de nuevo')
        }else{
            return result
        }
        
    } catch (error) {
        alert(error)
    }
    
    
}
export {drawResistance};
export {calcResistance};