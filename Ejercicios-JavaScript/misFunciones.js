/**
 * Conversion de unidas de metros, yardas, pies y pulgadas.
 * Descripción
 * @method cambiarunidades
 * @param (string) id - El id de los inputs de metros, yardas, pies y pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas, pies y pulgadas.
 * @return
 */
function cambiarunidades(id, valor) {
    if(isNaN(valor)){
        alert("Valor invalido");
        document.unidades.unid_metro.value="";
        document.unidades.unid_pulgada.value="";
        document.unidades.unid_pie.value="";
        document.unidades.unid_yarda.value="";
    }else if(id=="metro"){
        document.unidades.unid_pulgada.value=39.3701*valor;
        document.unidades.unid_pie.value=3.28084*valor;
        document.unidades.unid_yarda.value=1.10*valor;
    }else if(id=="pulgada"){
        document.unidades.unid_metro.value=0.025*valor;
        document.unidades.unid_pie.value=0.09*valor;
        document.unidades.unid_yarda.value=0.03*valor;
    }else if(id=="pie"){
        document.unidades.unid_pulgada.value=12*valor;
        document.unidades.unid_metro.value=0.305*valor;
        document.unidades.unid_yarda.value=0.333*valor;
    }else if(id=="yarda"){
        document.unidades.unid_pulgada.value=36*valor;
        document.unidades.unid_pie.value=3*valor;
        document.unidades.unid_metro.value=0.914*valor;
    }
}
function convertirGR(id) {
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad =(rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}
function mostrar_ocultar(valormo){
    if(valormo=="val_mostrar"){
        document.getElementById("divmo").style.display='block';
    }else if(valormo=="val_ocultar"){
        document.getElementById("divmo").style.display='none';
    }
}
function suma() {
    var a,b;
    a=document.getElementsByName("sum_num1") [0].value;
    b=document.getElementsByName("sum_num2") [0].value;
    document.getElementsByName("sum_total") [0].value= Number(a) + Number(b);
}
function resta() {
    var a,b;
    a=document.getElementsByName("res_num1") [0].value;
    b=document.getElementsByName("res_num2") [0].value;
    document.getElementsByName("res_total") [0].value= Number(a) - Number(b);
}
function multiplicacion() {
    var a,b;
    a=document.getElementsByName("mul_num1") [0].value;
    b=document.getElementsByName("mul_num2") [0].value;
    document.getElementsByName("mul_total") [0].value= Number(a) * Number(b);
}
function divicion(){
    var a,b;
    a=document.getElementsByName("div_num1") [0].value;
    b=document.getElementsByName("div_num2") [0].value;
    if(b==0){
        alert("No se puede dividir por cero");
    }else {
        document.getElementsByName("div_total") [0].value= Number(a) / Number(b);
    }

}