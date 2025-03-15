const{suma,resta,multi,division,potencia}=require("./operaciones.js");
//Prueba de Suma
test("Se debe sumar 23+8 y debe devolver 31", ()=>{
    expect(suma(23,8)).toBe(31)
});
//Prueba de resta
test("Se debe restar 10-12 y debe devolver -2", ()=>{
    expect(resta(10,12)).toBe(-2)
});
//Prueba de la multiplicación
test("Se debe multiplicar 8*5 y debe devolver 40", ()=>{
    expect(multi(8,5)).toBe(40)
});
//Prueba de la división
test("Debe mostrar error al dividir por 0", ()=>{
    expect(() => division(25, 0)).toThrow("La division por 0 no es Posible");
});
test("Se debe dividir 25/5 y debe devolver 5", ()=>{
    expect(division(25,5)).toBe(5)
});
//Prueba de la potenciación
test("Se debe elevar 4 a 3 y debe devolver 64", ()=>{
    expect(potencia(4,3)).toBe(64)
});

