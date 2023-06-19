const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiURL = 'http://numbersapi.com'

let favNum = 5;
function getNumFact(num) {
    axios
    .get(`${apiURL}/${num}?json`)
    
    .then ( res => {
        console.log('Fav Num Fact')
        console.log(res.data.text)
    })
    .catch(err => {
        console.log('Error', err)
    })
}

getNumFact(favNum);


let favNums = [ 3, 5, 7, 13 ]
$.getJSON(`${apiURL}/${favNums}?json`)
    .then(data => {
        console.log(data)
    })


Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${apiURL}/${favNum}?json`)
    })
)
    .then(facts => {
        facts.forEach(data => $('body').append(`<p>${data.text}</p>`))
    })
    .catch(err => {
        console.log('Error', err)
    })