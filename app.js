'use strict'
const contatos=[
    {
        img:'paizao.PNG',
        nome:'Nicholas',
        qtd:'10',
        msg:'Deus te abençoe, paizão.',
        tempo:'Agora mesmo',
        atendente:'G. Campos',
    },
    {
        img:'nuno.PNG',
        nome:'Nuno',
        qtd:'4',
        msg:'Me faz um pix aí.',
        tempo:'Há 4 min',
        atendente:'G. Campos',
    },
    {
        img:'juan.PNG',
        nome:'Juan',
        qtd:'2',
        msg:'vamo pro Villa amanhã?',
        tempo:'Há 1 hora',
        atendente:'G. Campos',
    },
]
function criarContatos(contato){
    const container=document.getElementById('container')
    container.classList.add('container')

    const card=document.createElement('div')
    card.classList.add('card')

    const img=document.createElement('img')
    img.src=`./img/${contato.img}`
    img.alt=contato.nome

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
    msg.textContent=contato.msg

    const tempo=document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent=contato.tempo

    const atendente=document.createElement('p')
    atendente.classList.add('atendente')
    atendente.textContent=contato.atendente

    contatoInfo.replaceChildren(nome,qtd)
    informacoes.replaceChildren(contatoInfo,msg)
    card.replaceChildren(img,informacoes,tempo,atendente)
    container.appendChild(card)
}
contatos.forEach(criarContatos)