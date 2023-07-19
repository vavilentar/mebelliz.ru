const categoriesApp = {
	data() {
		return {
			categoriesList: [
				{
					name: 'Кухни',
					link: './pages/items/kitchens/index.html',
					img: "./img/furn-images/1.jpg",
					price: '25 840 ₽ за м./п'
				},
				{
					name: 'Прихожие',
					link: './pages/items/hallways/index.html',
					img: "./img/furn-images/2.jpg",
					price: '21 500 ₽ за м./п'
				},
				{
					name: 'Детские',
					link: './pages/items/children/index.html',
					img: "./img/furn-images/3.jpg",
					price: '85 000 ₽'
				},
				{
					name: 'Шкафы купе',
					link: './pages/items/wardrobes/index.html',
					img: "./img/furn-images/4.jpg",
					price: '25 000 ₽ за м./п'
				},
				{
					name: 'Спальни',
					link: './pages/items/bedroom/index.html',
					img: "./img/furn-images/5.jpg",
					price: '115 000 ₽'

				},
				{
					name: 'Гардеробные',
					link: './pages/items/dressing/index.html',
					img: "./img/furn-images/6.jpg",
					price: '18 600 ₽ за м./п'
				},
			]
		}
	}
}


const materialsApp = {
	data() {
		return {
			materialsList: [{
					name: ['Мебель', 'из ЛДСП'],
					descr: 'ЛДСП (ламинированная древесно-стружечная плита) - это материал, который используется для изготовления мебели. Он состоит из древесных стружек, связанных смолой и покрытых пленкой из меламина или пластика. ЛДСП является популярным материалом для изготовления мебели благодаря своей прочности, долговечности, устойчивости к влаге и механическим повреждениям, а также возможности выбора различных цветов и текстур.'
				},
				{
					name: ['Мебель', 'из МДФ'],
					descr: 'МДФ - это материал, который изготавливается из древесных волокон, смешанных с смолами и прессованных под высоким давлением и температурой. МДФ обладает высокой плотностью и прочностью, что делает его идеальным материалом для изготовления мебели. МДФ имеет высокую устойчивость к влаге и деформациям, что делает его идеальным материалом для изготовления кухонной мебели и ванной комнаты.'
				},
				{
					name: ['Мебель', 'из массива'],
					descr: 'Массив дерева - это материал, получаемый из цельных деревянных брусков, которые проходят специальную обработку и подготовку для изготовления мебели. Сначала дерево проходит процесс распила на доски нужной толщины и ширины. Затем доски проходят через станок для обработки кромок, чтобы получить ровные и гладкие края. Далее доски проходят через станок для шлифовки, чтобы удалить неровности и придать поверхности гладкость.'
				},
				{
					name: ['Столешницы', 'из камня'],
					descr: 'Камень - это твердый и прочный материал, который может использоваться в производстве мебели. Для изготовления столешниц из камня используются специальные технологии и оборудование.'
				},
			],
			materialsListShort: [
				'Сосна', 'Ель', 'Береза', 'Лиственница', 'Ясень', 'Бук'
			]
		}
	}
}

Vue.createApp(categoriesApp).mount('#categories_app');
Vue.createApp(materialsApp).mount('#materials_app');



// callbackSendBtn.addEventListener('click', () => {
// 	document.querySelector('.form-call').style = 'text-align: center;'
// 	document.querySelector('.form-call').innerHTML = `Спасибо за оставленную заявку! <br> Мы обязательно с Вами свяжемся!`
// })



// formWrapper.addEventListener('click', () => {
	// closeModal()
// })

const categoriesBtns = document.querySelectorAll('.category-btn');
const categoriesItems = document.querySelectorAll('.categories_app-item');
// const materialShortBtn = document.getElementById('material_other').addEventListener('click', (e) => {
// 	e.preventDefault();
// 	document.querySelector('.materials-short ').classList.toggle('material-short_hidden');
// })

