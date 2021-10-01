const request = require("postman-request"), url = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonByName = (name, callback) =>{
    request({url: (url + name), json: true}, (error, {body = {}}) =>{
        if(error){
            return callback(error, undefined);
        }

        callback(undefined, body);
    })
}

module.exports = {
    getPokemonByName,
}