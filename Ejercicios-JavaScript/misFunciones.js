/**
 * Conversion de unidas de metros, yardas, pies y pulgadas.
 * Descripción
 * @method cambiarunidades
 * @param (string) id - El id de los inputs de metros, yardas, pies y pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas, pies y pulgadas.
 * @return
 */
function cambiarunidades(id, valor) {
    var metro, pie, pulgada, yarda;
    if(valor.includes(",")){
        valor=valor.replace(",",".");
    }
    if(isNaN(valor)){
        alert("Valor invalido");
        metro="";
        pie="";
        yarda="";
        pulgada="";
    }else if(id=="metro"){
        metro=valor;
        pulgada=39.3701*valor;
        pie=3.28084*valor;
        yarda=1.10*valor;
    }else if(id=="pulgada"){
        pulgada=valor;
        metro=0.025*valor;
        pie=0.09*valor;
        yarda=0.03*valor;
    }else if(id=="pie"){
        pie=valor;
        pulgada=12*valor;
        metro=0.305*valor;
        yarda=0.333*valor;
    }else if(id=="yarda"){
        yarda=valor;
        pulgada=36*valor;
        pie=3*valor;
        metro=0.914*valor;
    }

    document.unidades.unid_metro.value=Math.round(metro*100)/100;
    document.unidades.unid_yarda.value=Math.round(yarda*100)/100;
    document.unidades.unid_pie.value=Math.round(pie*100)/100;
    document.unidades.unid_pulgada.value=Math.round(pulgada*100)/100;
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