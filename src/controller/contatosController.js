const model = require("../model/contatoSchema");

const getAll = (request, response) => {
  model.find((error, contatos) => {
    if(error){
      return response.status(500).send(error)
    } else {
      return response.status(200).send(contatos)
    }
  })

  //console.log(request.url);
 // response.status(200).send(model.agenda);
};

let contactNames = []
const percorreArray  = () => {
  const { contatos: allContacts } = model.agenda;
  
  contactNames = allContacts.map(c => c.nome)
}


const add = (request, response) => {
  const contatoBody = request.body
  const contato = new model(contatoBody)

  contato.save((error) => {
    if(error){
      return response.status(400).send(error)
    }else {
      return response.status(201).send(contato)
    }
  })


  }
  const getName = (request, response) => {
    const nomeP = request.params.nome
    const regex = new RegExp(nomeP)
    // const filtro = {nome: nomeP}
    const filtro = {nome: regex}

    model.find(filtro , (error, contatos) => {
      if(error){
        return response.status(500).send(error)
      } else {
        if(contato.lenght > 0){
        return response.status(200).send(contatos)
        }
      }
    })
  }
  const getById = (request, response) => {
    const id = request.params.id

    model.findById(id, (error, contato) =>{
      if(error){
        return response.status(500).send(error)
      } else {
        if(contato){
        return response.status(200).send(contato)
        }else{
          return response.status(404).send("Contato não encontrado")
        }
      }
    })
  }

  // let contato = request.body
  // contato.id = Math.random().toString(36).substr(-8)
  
  // const isSaved = Boolean(contactNames.indexOf(contato.nome) >= 0 )
  
  // if(isSaved ){
  //   console.log("pingou no 400")
  //   response.status(400).send("tá igual jumento")

  // } else { 
      
  //   if(!contato.nome || !contato.dataNascimento || !contato.celular){
  //       console.log("pingou no 404")
  //       response.status(404).send("Dados inválidos")
  //     } else {

      
  //     model.agenda.contatos.push(contato);
  //     percorreArray();
  //     response.status(201).send("Criei um contatinho")
      



module.exports = {
  getAll,
  add,
  getName,
  getById
}
