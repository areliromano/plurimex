// Cálculo de los puntos obtenidos en el examen

function calificar() {
    var resultado = 0
    for (var i = 0; i < 5; i++) {
        //console.log(document.frmExamen.pregunta1[i].value);
        if (document.frmExamen.pregunta1[i].checked == true) {
            resultado = resultado + parseInt(document.frmExamen.pregunta1[i].value);
        }
    }
    for (var i = 0; i < 5; i++) {
        //console.log(document.frmExamen.pregunta2[i].value);
        if (document.frmExamen.pregunta2[i].checked == true) {
            resultado = resultado + parseInt(document.frmExamen.pregunta2[i].value);
        }
    }
    for (var i = 0; i < 5; i++) {
        //console.log(document.frmExamen.pregunta3[i].value);
        if (document.frmExamen.pregunta3[i].checked == true) {
            resultado = resultado + parseInt(document.frmExamen.pregunta3[i].value);
        }
    }
    for (var i = 0; i < 5; i++) {
        //console.log(document.frmExamen.pregunta4[i].value);
        if (document.frmExamen.pregunta4[i].checked == true) {
            resultado = resultado + parseInt(document.frmExamen.pregunta4[i].value);
        }
    }
    for (var i = 0; i < 5; i++) {
        //console.log(document.frmExamen.pregunta5[i].value);
        if (document.frmExamen.pregunta5[i].checked == true) {
            resultado = resultado + parseInt(document.frmExamen.pregunta5[i].value);
        }
    }
    for (var i = 0; i < 5; i++) {
        //console.log(document.frmExamen.pregunta6[i].value);
        if (document.frmExamen.pregunta6[i].checked == true) {
            resultado = resultado + parseInt(document.frmExamen.pregunta6[i].value);
        }
    }
    for (var i = 0; i < 5; i++) {
        //console.log(document.frmExamen.pregunta7[i].value);
        if (document.frmExamen.pregunta7[i].checked == true) {
            resultado = resultado + parseInt(document.frmExamen.pregunta7[i].value);
        }
    }
    for (var i = 0; i < 5; i++) {
        //console.log(document.frmExamen.pregunta8[i].value);
        if (document.frmExamen.pregunta8[i].checked == true) {
            resultado = resultado + parseInt(document.frmExamen.pregunta8[i].value);
        }
    }
    for (var i = 0; i < 5; i++) {
        //console.log(document.frmExamen.pregunta9[i].value);
        if (document.frmExamen.pregunta9[i].checked == true) {
            resultado = resultado + parseInt(document.frmExamen.pregunta9[i].value);
        }
    }
    for (var i = 0; i < 5; i++) {
        //console.log(document.frmExamen.pregunta10[i].value);
        if (document.frmExamen.pregunta10[i].checked == true) {
            resultado = resultado + parseInt(document.frmExamen.pregunta10[i].value);
        }
    }
    //alert(resultado);                                            
    //resultado=65;

    document.getElementById("lblResultado").textContent = "Resultado: " + resultado + " Puntos";
    //console.log=(resultado);
    switch (true) {
        case (resultado < 50):
            //console.log("angry");
            
            document.getElementById("myModalLabel").textContent = "EN SERIO!? en verdad estudias!?";
            document.getElementById("carita").src = "img/angry.png";
            break;
        case (resultado >= 50 && resultado < 60):
            document.getElementById("myModalLabel").textContent = "VEO EN TU FUTURO... Taquero!";
            document.getElementById("carita").src = "img/sad.png";
            break;
        case (resultado >= 60 && resultado < 70):
            document.getElementById("myModalLabel").textContent = "PANZASTESSS!";
            document.getElementById("carita").src = "img/goofy.png";
            break;
        case (resultado >= 70 && resultado < 80):
        document.getElementById("myModalLabel").textContent = "ANIMO! te funciono el tin marín";
            document.getElementById("carita").src = "img/fine.png";
            break;
        case (resultado >= 80 && resultado < 90):
            document.getElementById("myModalLabel").textContent = "AGUAS! te van a secuestrar los aliens!";
            document.getElementById("carita").src = "img/wii.png";
            break;
        case (resultado >= 90 && resultado < 100):
            document.getElementById("myModalLabel").textContent = "CHOCALAS! naa muy lento..";
            document.getElementById("carita").src = "img/happy.png";
            break;
        case (resultado == 100):
            document.getElementById("myModalLabel").textContent = "TE QUEMASTE! las pestañas NEEERRRDDD!";
            document.getElementById("carita").src = "img/winner.png";
            break;
        case (resultado > 100):
            document.getElementById("myModalLabel").textContent = "SUENA TU CEL?? La NASA te llama!!"; 
            document.getElementById("carita").src = "img/surprised.png";
            break;
        default:
            //console.log("default");
            document.getElementById("carita").src = "img/face.png";
            break;
    }

    return false
} 
