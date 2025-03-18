const{suma,resta,multi,division,potencia}=require("../operaciones.js");

//Pruebas de Suma
test("Se debe sumar 23+8 y debe devolver 31", ()=>{
    expect(suma(23,8)).toBe(31)
});
test('Debe retornar un número negativo si la suma es negativa', () => {
    expect(suma(-2, -3)).toBe(-5);
});

test('Debe manejar la suma con ceros correctamente', () => {
    expect(suma(0, 5)).toBe(5);
});
//Prueba de resta
test("Se debe restar 10-12 y debe devolver -2", ()=>{
    expect(resta(10,12)).toBe(-2)
});
//Pruebas de la multiplicación
test("Se debe multiplicar 8*5 y debe devolver 40", ()=>{
    expect(multi(8,5)).toBe(40)
});
test("Si se multiplica por 0 debe retornar 0", ()=>{
    expect(multi(0,5)).toBe(0)
});
//Prueba de la división
test("Debe mostrar error al dividir por 0", ()=>{
    expect(() => division(25, 0)).toThrow("La division por 0 no es Posible");
});
test("Se debe dividir 25/5 y debe devolver 5", ()=>{
    expect(division(25,5)).toBe(5)
});
//Pruebas de la potenciación
test("Se debe elevar 4 a 3 y debe devolver 64", ()=>{
    expect(potencia(4,3)).toBe(64)
});
test("Si se eleva cualquier numero a 0 debe devolver 1", ()=>{
    expect(potencia(12,0)).toBe(1)
});
