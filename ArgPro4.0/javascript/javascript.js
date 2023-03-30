const $form = document.querySelector('#form');
const $buttonMailto=document.querySelector('#opaco')
$form.addEventListener('submit', handleSubmit)
function handleSubmit(event){
event.preventDefault();
const form = new FormData(this);
console.log(form.get('name'));
$buttonMailto.setAttribute('href', 'mailto:email@hotmail.com?subjet=${form.get('name')}${form.get('email')}&body=${form.get('message))
$buttonMailto.click();
}