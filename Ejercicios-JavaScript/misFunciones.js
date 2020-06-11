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
    document.getElementsByName("sum_total") [0].innerHTML= Number(a) + Number(b);
}
function resta() {
    var a,b;
    a=document.getElementsByName("res_num1") [0].value;
    b=document.getElementsByName("res_num2") [0].value;
    document.getElementsByName("res_total") [0].innerHTML= Number(a) - Number(b);
}
function multiplicacion() {
    var a,b;
    a=document.getElementsByName("mul_num1") [0].value;
    b=document.getElementsByName("mul_num2") [0].value;
    document.getElementsByName("mul_total") [0].innerHTML= Number(a) * Number(b);
}
function divicion(){
    var a,b;
    a=document.getElementsByName("div_num1") [0].value;
    b=document.getElementsByName("div_num2") [0].value;
    if(b==0){
        alert("No se puede dividir por cero");
    }else {
        document.getElementsByName("div_total") [0].innerHTML= Number(a) / Number(b);
    }

}
function cargarweb() {
    var cantidad, unidad, url;
    cantidad=document.getElementById("distancia").value;
    unidad=document.getElementsByName("unidades")[0].value;
    url="segundaWeb.html#"+cantidad+"#"+unidad;
    window.open(url);

}
function resultado() {
    var url, unidad, cantidad;
    url=window.location.href.split("/")[5];
    cantidad=url.split("#")[1];
    unidad=url.split("#")[2];
    document.getElementById("dist").value=cantidad+" "+unidad;


}
function dibujarcc() {
    var canvas=document.getElementById("myCanvas");
    var contexto=canvas.getContext("2d");
    var ymax=canvas.height;
    var margen=5;
    var xmax= canvas.width;
    contexto.fillStyle="#49ff04";
    contexto.fillRect(0+margen,ymax-40-margen,40, 40)
    contexto.arc(xmax/2,ymax/2, 20,0,2*Math.PI);
    contexto.stroke();
    contexto.fillStyle="#d800ff";
    contexto.fill();

}
var bandera;


function dibujar(event) {
    var canvas=document.getElementById("canvas");
    var contexto=canvas.getContext("2d");

    var x=event.clientX;
    var y=event.clientY;
    console.log(x,y);
    canvas.onmousedown=function () {bandera=true};
    canvas.onmouseup=function () {bandera=false};
    if(bandera){
        contexto.fillRect(x,y,5,5);
        contexto.fill;
    }

}
function limpiar() {
    var canvas=document.getElementById("canvas");
    var contexto=canvas.getContext("2d");
    canvas.width= canvas.width;

}