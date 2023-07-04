// import logo from './logo.svg';
import './App.css';
import perfil from './imagens/perfil.jpg'
import github from './imagens/github.png'
import instagram from './imagens/instagram.png'
import whatsApp from './imagens/whatsaap.jpg'
import temperatura from './imagens/temperatura.jpg'
import tarefas from './imagens/tarefas.png'
import p from './imagens/P.png'

import React, {useEffect, useState } from 'react';
import MyForm from './Mensagem.js'; 

function App() {
    const [modal, setModal] = useState(false);
    const [modalquem, setModalquem] = useState(false);
    const [modalcontato, setModalcontato] = useState(false);
    const [data, setData] = useState([])
  
    const abrirModal = () => {
        setModal(!modal);
    };
    const abrirModalquem = () => {
        setModalquem(!modalquem);
    };
    
    const abrirModalcontato = () => {
        setModalcontato(!modalcontato);
    };
    useEffect(()=>{

        fetch('data.json')
        .then(a => a.json())
        .then(b => {
            console.log(b)
            setData(b)})
        
    },[])
  return (
    
    <div className="App"> 
    {
      modal?
      <div className='projetos'>
        <div className='flex'>
        <div className='quemsoueu'>
            <p> <b> Eu tenho 28 anos, estou cursando o primeiro semestre de Análise e Desenvolvimento de Sistemas, atualmente trabalho em uma empresa de confecção de camisetas, onde minha função é à criação gráfica. Meu objetivo é me especializar como designer e aprimorar meu conhecimento em desenvolvimento de sistemas. </b> </p>
        </div>
        
        </div>
          
            </div>
      
      :
      <div></div>
  }
  {
    modalcontato?
    <div className='contentContato'> 
        <MyForm></MyForm>
    </div>
    :
    <div></div>
}
   {
      modalquem?
      <div className='projetos'>
        <div className='flex'>
        <div className='projeto' style={{backgroundImage: `url(${temperatura})`}}><a href={data[0]?.link}>Temperatura</a></div>
        <div className='projeto' style={{backgroundImage: `url(${tarefas})`}}><a href={data[1]?.link}>Lista de Tarefas</a></div>
        <div className='projeto' style={{backgroundImage: `url(${p})`}}><a href="#">Aguarde...</a></div>
        </div>
          
            </div>
      
      :
      <div></div>
  }
  <header className="header">
        <ul>
            <li onClick={()=>abrirModal()}>quem sou eu</li>
            <li onClick={()=>abrirModalquem()}>projetos</li>
            <li onClick={()=>abrirModalcontato()}>e-mail</li>
        </ul>
    
    </header>
    <div className="flex">
        <div className="container">
            <div className="perfil" style={{backgroundImage: `url(${perfil})`}}>

            </div>
        
        </div>
        <div className="informacoes">
            <div className="texto">
                <h1>
                    Olá, Meu nome é Thayla 
                </h1>
                <ul>
                    <li>html</li>
                    <li>css</li>
                    <li>javascript</li>
                </ul>
                <div className="contatos">
                    <a href="https://github.com/ThaylaPrass"target="_blank" className="contato" style={{backgroundImage: `url(${github})`}}></a>
                    <a href="https://www.instagram.com/thaylaprass/"target="_blank" className="contato" style={{backgroundImage: `url(${instagram})`}}></a>
                    <a href="https://wa.me/5566999979405"target="_blank" className="contato" style={{backgroundImage: `url(${whatsApp})`}}></a>
                </div>
    
            </div>
    
        </div>
    </div>
    </div>
  );
}

export default App;
