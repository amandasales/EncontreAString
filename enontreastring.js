const filme = {
    título: 'Cidade Dos Sonhos',
    ano: 2018,
    diretor: 'David Lynch',
    personagem: 'Beth'
}
exibirPropiedades(filme);
function exibirPropiedades(obj) {
    for (prop in obj)
    if(typeof prop === 'string')
        console.log(prop,obj[prop])
}