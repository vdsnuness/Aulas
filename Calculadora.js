alert("Seja bem vindo!")

function Calculadora(){
    var valor1 = parseInt(document.getElementById("ivalor1").value);
    var valor2 = parseInt(document.getElementById("ivalor2").value);

    var op = document.querySelector('input[name=calc]:checked').value;
    
    if(op=="soma"){
        var resposta = valor1 + valor2;
    }

    if(op=="sub"){
        var resposta = valor1 - valor2;
    }

    if(op=="mult"){
        var resposta = valor1 * valor2;
    }

    if(op=="div"){
        var resposta = valor1 / valor2;
    }


    alert("A soma é " + resposta);
}