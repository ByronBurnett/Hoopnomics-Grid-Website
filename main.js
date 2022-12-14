//Button Click Event

const buttons = document.querySelectorAll('button');


for (i of buttons){  
 i.addEventListener('click', () => {

  console.log('you clicked me');

 });

}


// Form Submit Button

const form = document.querySelector('body > main > div:nth-child(3) > form');
//const username = document.querySelector('#username');
//const email = document.querySelector('#email');


form.addEventListener('submit', e => {

 e.preventDefault();
 console.log(form.username.value, form.email.value);


});


const popup = document.querySelector('.popup');
const button = document.querySelector('.Button');
const contact = document.querySelector('.major-form');


button.addEventListener('click', () => {

popup.style.display = 'flex';

//SetTimeout for popup
setTimeout(() => {
    
    popup.style.display = 'none';

  }, 2000)


});

contact.addEventListener('submit', e => { 

e.preventDefault();

console.log(contact.firstname.value, contact.lastname.value, contact.email.value, contact.phone.value, contact.message.value );

contact.reset();

})







