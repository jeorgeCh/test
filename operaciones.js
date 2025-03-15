function suma(num1, num2){
    return num1+num2;
}
function resta(num1, num2){
    return num1-num2;
}
function multi(num1, num2){
    return num1*num2;
}
function division(num1, num2){
    if(num2==0) throw new Error("La division por 0 no es Posible");
    return num1/num2;
}
function potencia(num1, num2){
    return num1**num2;
}
module.exports={suma,resta,multi,division,potencia};