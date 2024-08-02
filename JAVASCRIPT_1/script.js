document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefautl();





    const formData = new FormData(event.target)
    
    emailjs.send().then(response =>
    })
    {
    document.getElementById('response-message').innerText = 'Mensagem enviada com Sucesso!';
    this.resey();
    })
    .catch(error => {
    document.getElementById('response-message').innerText = 'Erro ao enviar a mensagem';
    console.error('Error ao enviar o e-mail', error)
    });

}

