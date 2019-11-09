const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

let contactNames = []
const percorreArray  = () => {
  const { contatos: allContacts } = model.agenda;

  contactNames = allContacts.map(c => c.nome)
}
let dataAniversario = model.agenda.contato.dataNascimento;
const dataSplit = dataAniversario.split("/");
  let diaNasc = new Date(dataSplit[0]);
  let mesNasc = new Date(dataSplit[1])-1;

const calendarioSignos = (dia,mês) =>{
  console.log(mes,dia)
  if(diaNasc >= 20 && mesNasc == 1 || diaNasc <= 18 && mesNasc ==2){
    return "Aquario";
  } else if 
    (diaNasc >= 19 && mesNasc == 2 || diaNasc <= 20 && mesNasc ==3){
      return "Peixes";
  } else if 
    (diaNasc >= 21 && mesNasc == 3 || diaNasc <= 19 && mesNasc ==4){
      return "Áries";
  } else if 
    (diaNasc >= 20 && mesNasc == 4 || diaNasc <= 20 && mesNasc ==5){
      return "Touro";
  } else if 
    (diaNasc >= 21 && mesNasc == 5 || diaNasc <= 21 && mesNasc ==6){
      return "Gêmeos";
    } else if 
    (diaNasc >= 22 && mesNasc == 6 || diaNasc <= 22 && mesNasc ==7){
      return "Câncer";
    } else if 
    (diaNasc >= 23 && mesNasc == 7 || diaNasc <= 22 && mesNasc ==8){
      return "Leão";
    } else if 
    (diaNasc >= 23 && mesNasc == 8 || diaNasc <= 22 && mesNasc ==9){
      return "Virgem";
    } else if 
    (diaNasc >= 23 && mesNasc == 9 || diaNasc <= 22 && mesNasc ==10){
      return "Libra";
    } else if 
    (diaNasc >= 23 && mesNasc == 10 || diaNasc <= 20 && mesNasc ==11){
        return "Escorpião";
    } else if 
    (diaNasc >= 22 && mesNasc == 11 || diaNasc <= 21 && mesNasc ==12){
      return "Sagitário";
    } else if 
    (diaNasc >= 22 && mesNasc == 12 || diaNasc <= 19 && mesNasc ==01)
      return "Capricórnio"

    }


const add = (request, response) => {
  let contato = request.body
  contato.id = Math.random().toString(36).substr(-8)
  
  const isSaved = Boolean(contactNames.indexOf(contato.nome) >= 0 )
  
  if(isSaved ){
    console.log("pingou no 400")
    response.status(400).send("tá igual jumento")

  } else { 
      
    if(!contato.nome || !contato.dataNascimento || !contato.celular){
        console.log("pingou no 404")
        response.status(404).send("Dados inválidos")
      } else {
      contato.signo = calendarioSignos(mesNasc.getMonth(),diaNasc.getDay())
      
      model.agenda.contatos.push(contato);
      percorreArray();
      response.status(201).send("Criei um contatinho")
      
    }
  }
}

module.exports = {
  getAll,
  add
}
