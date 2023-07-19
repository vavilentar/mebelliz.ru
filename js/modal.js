
const callbackSendBtn = document.getElementById('callback-send');
const callbackModal = document.getElementById('callback');	
const formWrapper = document.getElementById('form-wrapper');

function closeModal() {
	callbackModal.classList.add('callback-form_hidden');
	formWrapper.classList.add('callback-form_hidden');
}

function openModal() {
	callbackModal.classList.remove('callback-form_hidden')
	formWrapper.classList.remove('callback-form_hidden');
}

const callbackShowBtns = document.querySelectorAll('.callback-show').forEach(btn => {
	btn.addEventListener('click', () => {
		openModal()
	})
})

const closeFormBtn = document.getElementById('close-form_btn').addEventListener('click', () => {
	closeModal()
})

const hamBtn = document.getElementById('hamburger-btn').addEventListener('click', (e) => {
	document.querySelector('.menu').classList.toggle('menu-show')
})