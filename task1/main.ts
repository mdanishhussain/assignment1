let result:number =0;
let a:number =1;
let b:number =2;


function doDivision(firstNo:number,secondNo:number){
    window.alert("Div "+(firstNo/secondNo));
}
function doMultiplication(firstNo:number,secondNo:number){
    window.alert("Mult "+(firstNo/secondNo));
}
function doAddition(firstNo:number,secondNo:number){
    window.alert("Add "+(firstNo+secondNo));
}
function doSubstraction(firstNo:number,secondNo:number){
    window.alert("Sub "+(firstNo-secondNo));
}
doAddition(a,b);
doSubstraction(a,b);
doMultiplication(a,b);
doDivision(a,b);