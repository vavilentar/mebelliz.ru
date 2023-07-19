$('form').submit(function(e) {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "../../../mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");


		$('form').trigger('reset');
		document.querySelector('.form-call').style = 'text-align: center;'
		document.querySelector('.form-call').innerHTML = `Спасибо за оставленную заявку! <br> Мы обязательно с Вами свяжемся!`
	});

	return false;
});

const collection = {
	data() {
		return {
			collectionList: [
				{
					name: 'Детская комната',
					photo: './photos/children (1).jpg'
				},
				{
					name: 'Детская комната',
					photo: './photos/children (5).jpg'
				},
				{
					name: 'Детская комната',
					photo: './photos/children (2).jpg'
				},
				{
					name: 'Детская комната',
					photo: './photos/children (3).jpg'
				},
				{
					name: 'Детская комната',
					photo: './photos/children (6).jpg'
				},
				{
					name: 'Детская комната',
					photo: './photos/children (7).jpg'
				},
				{
					name: 'Детская комната',
					photo: './photos/children (8).jpg'
				},
			]
		}
	}
}

Vue.createApp(collection).mount('#collection');
