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
					name: 'Кухня',
					material: 'Дуб',
					photo: './photos/kitchen (1).jpg'
				},
				{
					name: 'Кухня',
					material: 'Дуб',
					photo: './photos/kitchen (2).jpg'
				},
				{
					name: 'Кухня',
					material: 'Дуб',
					photo: './photos/kitchen (3).jpg'
				},
				{
					name: 'Кухня',
					material: 'Дуб',
					photo: './photos/kitchen (4).jpg'
				},
				{
					name: 'Шкаф',
					material: 'Дуб',
					photo: './photos/kitchen (5).jpg'
				},
				{
					name: 'Кухня',
					material: 'Дуб',
					photo: './photos/kitchen (6).jpg'
				},
				{
					name: 'Кухня',
					material: 'Дуб',
					photo: './photos/kitchen (7).jpg'
				},
				{
					name: 'Кухня',
					material: 'Дуб',
					photo: './photos/kitchen (8).jpg'
				},
				{
					name: 'Кухня',
					material: 'Дуб',
					photo: './photos/kitchen (9).jpg'
				},
				{
					name: 'Кухня',
					material: 'Дуб',
					photo: './photos/kitchen (10).jpg'
				},
				// {
				// 	name: 'Кухня',
				// 	material: 'Дуб',
				// 	photo: './photos/kitchen (11).jpeg'
				// },
				// {
				// 	name: 'Кухня',
				// 	material: 'Дуб',
				// 	photo: './photos/kitchen (12).jpeg'
				// },
				// {
				// 	name: 'Кухня',
				// 	material: 'Дуб',
				// 	photo: './photos/kitchen (13).jpeg'
				// },
				// {
				// 	name: 'Кухня',
				// 	material: 'Дуб',
				// 	photo: './photos/kitchen (14).jpeg'
				// },
				// {
				// 	name: 'Кухня',
				// 	material: 'Дуб',
				// 	photo: './photos/kitchen (15).jpeg'
				// },
				// {
				// 	name: 'Кухня',
				// 	material: 'Дуб',
				// 	photo: './photos/kitchen (16).jpeg'
				// },
				// {
				// 	name: 'Кухня',
				// 	material: 'Дуб',
				// 	photo: './photos/kitchen (17).jpeg'
				// },
				// {
				// 	name: 'Кухня',
				// 	material: 'Дуб',
				// 	photo: './photos/kitchen (18).jpeg'
				// },
			]
		}
	}
}

Vue.createApp(collection).mount('#collection');
