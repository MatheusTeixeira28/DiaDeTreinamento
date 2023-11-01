const nome = 'Matheus Pinto Teixeira'
const listaTreino = ["Maratona", "Triathlon", "Pentathlon"]

function getEventoAleatorio() {
    let number = getRandomArbitrary(0, 3)
    
    if(number === 0){
        return listaTreino[0]
    }  
    else if(number === 1) {
        return listaTreino[1]
    } 
    else if (listaTreino === 2) {
        return listaTreino[2]
    }
}

function getDiasTreino(evento) {
    if(evento === listaTreino[0]) {
        return '50 dias'
    } 
    else if(evento === listaTreino[1]) {
        return '100 dias'
    }
    else if(evento === listaTreino[2]) {
        return '200 dias'
    }
}

function logEvento(nome, evento) {
    console.log(`${nome} participará do evento: ${evento}`)
}

function logTempo(nome, dias) {
    console.log(`${nome} se prepará por ${dias}`)
}

function getRandomArbitrary(min, max) {
    console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min)
}

function init() {
    let evento = getEventoAleatorio()
    let dias = getDiasTreino(evento)

    logEvento(nome, evento)
    logTempo(nome, dias)

}   
init()