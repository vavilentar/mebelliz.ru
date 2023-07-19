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
					material: 'Дуб',
					photo: './photos/dressing (1).jpg'
				},
				{
					name: 'Шкаф',
					material: 'Дуб',
					photo: './photos/dressing (2).jpg'
				},
				{
					name: 'Шкаф',
					material: 'Дуб',
					photo: './photos/dressing (3).jpg'
				},
				{
					name: 'Шкаф',
					material: 'Дуб',
					photo: './photos/dressing (4).jpg'
				},
				{
					name: 'Шкаф',
					material: 'Дуб',
					photo: './photos/dressing (5).jpg'
				},
				{
					name: 'Шкаф',
					material: 'Дуб',
					photo: './photos/dressing (6).jpg'
				},
			]
		}
	}
}

Vue.createApp(collection).mount('#collection');
