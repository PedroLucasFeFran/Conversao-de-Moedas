function conversao(){
  //Variáveis Iniciais
    let selectInicial = document.getElementById("selectinicial");
    let selectFinal = document.getElementById("selectfinal");
    var opcaoEntrada = selectInicial.options[selectInicial.selectedIndex].value;
    var opcaoSaida = selectFinal.options[selectFinal.selectedIndex].value;
    var selectMestre = opcaoEntrada + opcaoSaida;
    var textoConversao = document.getElementById("textoativacao")
    var nota = document.getElementById("nota");
    var notaMobile = document.getElementById("nota-mobile")

    nota.style.display = "none";
    notaMobile.style.display = "none";
    textoConversao.style.display = "inline-block";
    textoConversao.style.textAlign = "left";

  //Chamada Ajax
    const ajax = new XMLHttpRequest();

    ajax.open('GET', 'https://economia.awesomeapi.com.br/last/'+opcaoEntrada+'-'+opcaoSaida+'');
    ajax.send();

    ajax.onload = function(){
      //Mais Variáveis
        var obj = JSON.parse(this.responseText);
        var realDolar = obj.BRLUSD
        var realEuro = obj.BRLEUR
        var realIene = obj.BRLJPY
        var dolarReal = obj.USDBRL
        var dolarEuro = obj.USDEUR
        var dolarIene = obj.USDJPY
        var euroReal = obj.EURBRL
        var euroDolar = obj.EURUSD
        var euroIene = obj.EURJPY
        var ieneReal = obj.JPYBRL
        var ieneDolar = obj.JPYUSD
        var ieneEuro = obj.JPYEUR
        var nomeMoedas = document.getElementById("name");
        var codigoMoedas = document.getElementById("code");
        var valorMoedas = document.getElementById("bid"); 
        var resultadoEntrada = document.getElementById("entrada").value || document.getElementById("entrada-mobile").value;

      //Moedas Formatadas
        const realFormatado = new Intl.NumberFormat("pt-BR",{
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2
        })

        const dolarFormatado = new Intl.NumberFormat("en-US",{
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2
          
        })

        const euroFormatado = new Intl.NumberFormat("de-DE",{
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 2
          
        })

        const ieneFormatado = new Intl.NumberFormat("jp-JA",{
          style: "currency",
          currency: "JPY",
          minimumFractionDigits: 2
          
        })

        //Erros
        let erro = document.getElementById("camponulo");
        let erroMobile = document.getElementById("camponulo-mobile");
        
        //Condições das Moedas
        if(selectMestre == "Escolha Uma MoedaEscolha Uma Moeda" || opcaoEntrada == "Escolha Uma Moeda" || opcaoSaida == "Escolha Uma Moeda"){
          erro.innerHTML = "Selecione as Moedas para a Conversão!"
          erroMobile.innerHTML = "Selecione as Moedas para a Conversão!"
          textoConversao.style.display = "none";
        }

        else if(resultadoEntrada == "" || null || undefined){
          erro.innerHTML = "Insira o Valor para a Conversão!"
          erroMobile.innerHTML = "Insira o Valor para a Conversão!"
          textoConversao.style.display = "none";
        }

        else if(selectMestre == "BRLUSD"){
          nomeMoedas.innerHTML = realDolar.name;
          codigoMoedas.innerHTML = realDolar.code + "/" + realDolar.codein
          valorMoedas.innerHTML = realFormatado.format(resultadoEntrada) + " = " +  dolarFormatado.format(realDolar.bid * resultadoEntrada);
          erro.style.display = "none";
          erroMobile.style.display = "none";  
        }//Real para Dólar
        
        else if(selectMestre == "BRLEUR"){
          nomeMoedas.innerHTML = realEuro.name;
          codigoMoedas.innerHTML = realEuro.code + "/" + realEuro.codein
          valorMoedas.innerHTML = realFormatado.format(resultadoEntrada) + " = "  + euroFormatado.format(realEuro.bid * resultadoEntrada)
          erro.style.display = "none";
          erroMobile.style.display = "none";
        }//Real para Euro

        else if(selectMestre == "BRLJPY"){
          nomeMoedas.innerHTML = realIene.name;
          codigoMoedas.innerHTML = realIene.code + "/" + realIene.codein
          valorMoedas.innerHTML = realFormatado.format(resultadoEntrada) + " = " +  ieneFormatado.format(realIene.bid * resultadoEntrada)
          erro.style.display = "none";
          erroMobile.style.display = "none";
        }//Real para Iene

        else if(selectMestre == "USDBRL"){ 
          nomeMoedas.innerHTML = dolarReal.name;
          codigoMoedas.innerHTML = dolarReal.code + "/" + dolarReal.codein
          valorMoedas.innerHTML = dolarFormatado.format(resultadoEntrada) + " = " +  realFormatado.format(dolarReal.bid * resultadoEntrada)
          erro.style.display = "none";
          erroMobile.style.display = "none";
        }//Dólar para Real

        else if(selectMestre == "USDEUR"){ 
          nomeMoedas.innerHTML = dolarEuro.name;
          codigoMoedas.innerHTML = dolarEuro.code + "/" + dolarEuro.codein
          valorMoedas.innerHTML = dolarFormatado.format(resultadoEntrada) + " = " +  euroFormatado.format(dolarEuro.bid * resultadoEntrada)
          erro.style.display = "none";
          erroMobile.style.display = "none";
        }//Dólar para Euro

        else if(selectMestre == "USDJPY"){ 
          nomeMoedas.innerHTML = dolarIene.name;
          codigoMoedas.innerHTML = dolarIene.code + "/" + dolarIene.codein
          valorMoedas.innerHTML = dolarFormatado.format(resultadoEntrada) + " = " +  ieneFormatado.format(dolarIene.bid * resultadoEntrada)
          erro.style.display = "none";
          erroMobile.style.display = "none";
        }//Dólar para Iene

        else if(selectMestre == "EURBRL"){ 
          nomeMoedas.innerHTML = euroReal.name;
          codigoMoedas.innerHTML = euroReal.code + "/" + euroReal.codein
          valorMoedas.innerHTML = euroFormatado.format(resultadoEntrada) + " = " +  realFormatado.format(euroReal.bid * resultadoEntrada)
          erro.style.display = "none";
          erroMobile.style.display = "none";
        }//Euro para Real

        else if(selectMestre == "EURUSD"){ 
          nomeMoedas.innerHTML = euroDolar.name;
          codigoMoedas.innerHTML = euroDolar.code + "/" + euroDolar.codein
          valorMoedas.innerHTML = euroFormatado.format(resultadoEntrada) + " = " +  dolarFormatado.format(euroDolar.bid * resultadoEntrada)
          erro.style.display = "none";
          erroMobile.style.display = "none";
        }//Euro para Dólar

        else if(selectMestre == "EURJPY"){ 
          nomeMoedas.innerHTML = euroIene.name;
          codigoMoedas.innerHTML = euroIene.code + "/" + euroIene.codein
          valorMoedas.innerHTML = euroFormatado.format(resultadoEntrada) + " = " +  ieneFormatado.format(euroIene.bid * resultadoEntrada)
          erro.style.display = "none";
          erroMobile.style.display = "none";
        }//Euro para Iene

        else if(selectMestre == "JPYBRL"){ 
          nomeMoedas.innerHTML = ieneReal.name;
          codigoMoedas.innerHTML = ieneReal.code + "/" + ieneReal.codein
          valorMoedas.innerHTML = ieneFormatado.format(resultadoEntrada) + " = " +  realFormatado.format(ieneReal.bid * resultadoEntrada)
          erro.style.display = "none";
          erroMobile.style.display = "none";
        }//Iene para Real

        else if(selectMestre == "JPYUSD"){ 
          nomeMoedas.innerHTML = ieneDolar.name;
          codigoMoedas.innerHTML = ieneDolar.code + "/" + ieneDolar.codein
          valorMoedas.innerHTML = ieneFormatado.format(resultadoEntrada) + " = " +  dolarFormatado.format(ieneDolar.bid * resultadoEntrada)
          erro.style.display = "none";
          erroMobile.style.display = "none";
        }//Iene para Dólar

        else if(selectMestre == "JPYEUR"){ 
          nomeMoedas.innerHTML = ieneEuro.name;
          codigoMoedas.innerHTML = ieneEuro.code + "/" + ieneEuro.codein
          valorMoedas.innerHTML = ieneFormatado.format(resultadoEntrada) + " = " +  euroFormatado.format(ieneEuro.bid * resultadoEntrada)
          erro.style.display = "none";
          erroMobile.style.display = "none";
        }//Iene para Euro

        else{
          textoConversao.style.display = "none";
          erro.innerHTML = "Selecione Moedas Diferentes!"
          erroMobile.innerHTML = "Selecione Moedas Diferentes!"
        }       
  }
}

var input = document.getElementById("entrada")

input.addEventListener("keyup", function(enter){
  if (enter.keyCode === 13){
      enter.preventDefault();
      conversao()
  }
})
