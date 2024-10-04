import characters from './data.js';

const log = console.log;

characters.forEach(function (char) {
    log(char.name);
});

function buildContent(){
    document.querySelector('main').innerHTML = characters.map(function(char){
        //char represents each object from characters
        return `<h2>${char.name}</h2><p>${char.personality}</p>`;
    }).join('');
    //take each character object and turn it into an HTML string
    //join all the strings together
    //assign that one string as the innerHTML of the main tag
}

function clearContent(){ //clears all the content in the main tag
    document.querySelector('main').innerHTML = '';
}
clearContent();
buildContent();
