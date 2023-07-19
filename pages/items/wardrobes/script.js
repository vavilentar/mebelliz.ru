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
					name: 'Шкаф',
					photo: './photos/wardrobe (1).jpg'
				},
				{
					name: 'Шкаф',
					photo: './photos/wardrobe (2).jpg'
				},
				{
					name: 'Шкаф',
					photo: './photos/wardrobe (3).jpg'
				},
				{
					name: 'Шкаф',
					photo: './photos/wardrobe (4).jpg'
				},
				{
					name: 'Шкаф',
					photo: './photos/wardrobe (5).jpg'
				},
				{
					name: 'Шкаф',
					photo: './photos/wardrobe (6).jpg'
				},
				{
					name: 'Шкаф',
					photo: './photos/wardrobe (7).jpg'
				},
				{
					name: 'Шкаф',
					photo: './photos/wardrobe (8).jpg'
				},
			]
		}
	}
}

Vue.createApp(collection).mount('#collection');
