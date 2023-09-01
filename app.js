'use strict'
const contatos=[
    {
        nome:'Nuno',
        qtd:'3',
        msg:'to duro',
        tempo:'Agora mesmo',
        atendente:'Campos',
        imagem:'ana.jpg'
    }
]
function criarContatos(contato){
    const container=document.getElementById('container')
    const card=document.createElement('div')
    card.classList.add('card')
    const imagem=document.createElement('img')
    imagem.src=`./img/${contato.imagem}`
    imagem.alt=contato.nome
    const informacoes=document.createElement('div')
    informacoes.classList.add('informacoes')
    const contatoInfo=document.createElement('div')
    contatoInfo.classList.add('contato-info')
    const nome=document.createElement('p')
    nome.classList.add('nome')
    nome.textContent=contato.nome
    const qtd=document.createElement('p')
    qtd.classList.add('qtd')
    qtd.textContent=contato.qtd
    const msg=document.createElement('p')
    msg.classList.add('msg')
    msg.textContent=contato.mensagem
    const tempo=document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent=contato.tempo
    const atendente=document.createElement('p')
    atendente.classList.add('atendente')
    atendente.textContent=contato.atendente
    contatoInfo.replaceChildren(nome,qtd)
    informacoes.replaceChildren(contatoInfo,msg)
    card.replaceChildren(informacoes,imagem,tempo,atendente)
    container.appendChild(card)
}
contatos.forEach(criarContatos)