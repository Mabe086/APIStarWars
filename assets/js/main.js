const url = 'https://swapi.dev/api/people'

const consultarAPI = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(resp => resp.json()).then(data => {
            console.log(data);
            resolve(data)
        })
    })
}

function* generador1(){
    yield consultarAPI(`${url}/1?format=json`).then(resp => $("#lista1").append(`<div>${resp.name}</div>`));
    yield consultarAPI(`${url}/2?format=json`).then(resp => $("#lista1").append(`<div>${resp.name}</div>`));
    yield consultarAPI(`${url}/3?format=json`);
    yield consultarAPI(`${url}/4?format=json`);
    yield consultarAPI(`${url}/5?format=json`);
}

function* generador2(){
    yield console.log(6);
    yield console.log(7);
    yield console.log(8);
    yield console.log(9);
    yield console.log(10);
    yield console.log(11);
}

function* generador3(){ 
    yield console.log(12);
    yield console.log(13);
    yield console.log(14);
    yield console.log(15);
    yield console.log(16);
    yield console.log(17);
}


const g1 = generador1()
const g2 = generador2()
const g3 = generador3()

$(document).ready(function(){
    $("#card1").mouseenter(function() {
        g1.next()
    })

    $("#card2").mouseenter(function() {
        g2.next()
    })

    $("#card3").mouseenter(function() {
        g3.next();
    })
})