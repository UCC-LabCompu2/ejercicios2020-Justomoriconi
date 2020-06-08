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