import React from 'react';
import emailjs from 'emailjs-com';
import './App.css';
// import instagram from './images/instagram.png';
// import gitHubd from './images/git.jpg';
function MyForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const templateParams = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

   
    emailjs
      .send('service_u496y2t', 'template_d6ht35v', templateParams, 'YGCJjMf6A1NCyjO0A')
      .then(
        (response) => {
          console.log('E-mail enviado com sucesso', response.text);
        },
        (error) => {
          console.error('Erro ao enviar o e-mail', error);
        }
      );

    
    e.target.reset();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nome" required />
      <input type="email" name="email" placeholder="E-mail" required />
      <textarea name="message" placeholder="Mensagem" required />

      <button className='enviar' type="submit">Enviar</button>
     
    </form>
  );
}

export default MyForm;