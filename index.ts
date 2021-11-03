
function print(text:string){
  console.log(text)
}

function gerarCadeiaDNARandomica(){
  const length = 1000;
  const characters: string = "ACGT";
  var charactersLength = characters.length;
  var result = "";
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  if(result.length > length){
    print(`[ERROR] Tamanho (${result.length}) inadequado do resultado`);
    return "";
  }
  return result; 
}

function contagemDNA(cadeiaDNAString:string){
  let countA = 0;
  let countC = 0;
  let countG = 0;
  let countT = 0;
  for (var s of cadeiaDNAString) {
    switch(s){
      case "A":
        countA += 1;
        break
      case "C":
        countC += 1;
        break
      case "G":
        countG += 1;
        break
      case "T":
        countT += 1;
        break      
      default:
        print("[Erro] Cadeia não Identificada");  
    }
  }  
  return `${countA} ${countC} ${countG} ${countT}`;  
}

function main(){
  print("Iniciando Geração de Cadeia de DNA")
  const cadeiaDNAString = gerarCadeiaDNARandomica()
  print("Processando Cadeia de DNA")
  print(contagemDNA(cadeiaDNAString))
  print("Processamento Finalizado!")
}


main();