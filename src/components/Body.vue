<template>
	<div class="body">
		<div class="container">
			<div class="prices">
				<div class="pricesBlock" id="nannyToGo">
					<h2 class="pricesBlock-title">
						<strong class="pricesBlock-titleText">Няня на выезд деткам от года</strong>
						<span class="pricesBlock-titlePrice">
							от <strong class="pricesBlock-titlePriceAmount">₴150</strong> час
						</span>
					</h2>

					<div class="pricesBlock-description">
						<section class="pricesBlock-descriptionSection">
							<h3 class="pricesBlock-descriptionTitle">Денний час – ₴150</h3>
							<p class="pricesBlock-descriptionPara">з 8:00 до 22:00, робочі дні</p>
						</section>
						<section class="pricesBlock-descriptionSection">
							<h3 class="pricesBlock-descriptionTitle">Нічний час – ₴200</h3>
							<p class="pricesBlock-descriptionPara">з 22:00 до 8:00, робочі дні</p>
						</section>
						<section class="pricesBlock-descriptionSection">
							<h3 class="pricesBlock-descriptionTitle pricesBlock-descriptionTitle_inline">Вихідні – ₴200</h3>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<h3 class="pricesBlock-descriptionTitle pricesBlock-descriptionTitle_inline">Свята – ₴250</h3>
						</section>
						<section class="pricesBlock-descriptionSection">
							<h3 class="pricesBlock-descriptionTitle"><strong>Няня на сутки и более - расчет индивидуально</strong></h3>
						</section>
					</div>

					<a :href=phoneHref class="button pricesBlock-orderButton">Дзвонити</a>
				</div>

				<div class="pricesBlock">
					<h2 class="pricesBlock-title">
						<strong class="pricesBlock-titleText">Няня на выезд для новорожденных</strong>
						<span class="pricesBlock-titlePrice">
							от <strong class="pricesBlock-titlePriceAmount">₴200</strong> час
						</span>
					</h2>
					<div class="pricesBlock-description">
						<section class="pricesBlock-descriptionSection">
							<h3 class="pricesBlock-descriptionTitle">Денний час – ₴200</h3>
							<p class="pricesBlock-descriptionPara">з 8:00 до 22:00, робочі дні</p>
						</section>
						<section class="pricesBlock-descriptionSection">
							<h3 class="pricesBlock-descriptionTitle">Нічний час – ₴250</h3>
							<p class="pricesBlock-descriptionPara">з 22:00 до 8:00, робочі дні</p>
						</section>
						<section class="pricesBlock-descriptionSection">
							<h3 class="pricesBlock-descriptionTitle pricesBlock-descriptionTitle_inline">Вихідні – ₴300</h3>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<h3 class="pricesBlock-descriptionTitle pricesBlock-descriptionTitle_inline">Свята – ₴300</h3>
						</section>
					</div>

					<a :href=phoneHref class="button pricesBlock-orderButton">Дзвонити</a>
				</div>

				<div class="pricesBlock" id="nannyForFamily">
					<h2 class="pricesBlock-title">
						<strong class="pricesBlock-titleText">Подбор няни на полную занятость</strong>
						<span class="pricesBlock-titlePrice">
							<strong class="pricesBlock-titlePriceAmount">₴10000</strong>
						</span>
					</h2>

					<div class="pricesBlock-description">
						<section class="pricesBlock-descriptionSection">
							<h3 class="pricesBlock-descriptionTitle">от 6 часов в день, пять дней в неделю</h3>
						</section>
					</div>

					<a :href=phoneHref class="button pricesBlock-orderButton">Дзвонити</a>
				</div>

				<div class="pricesBlock">
					<h2 class="pricesBlock-title">
						<strong class="pricesBlock-titleText">Подбор няни на частичную занятость</strong>
						<span class="pricesBlock-titlePrice">
							100% от первой зарплаты няни за первый месяц работы
						</span>
					</h2>

					<div class="pricesBlock-description">
						<section class="pricesBlock-descriptionSection">
							<h3 class="pricesBlock-descriptionTitle">до 6 часов в день, несколько дней в неделю</h3>
						</section>
					</div>

					<a :href=phoneHref class="button pricesBlock-orderButton">Дзвонити</a>
				</div>

				<div class="pricesBlock" id="autoDaddy">
					<h2 class="pricesBlock-title">
						<strong class="pricesBlock-titleText">Автопапа</strong>
						<span class="pricesBlock-titlePrice">
							от <strong class="pricesBlock-titlePriceAmount">₴350</strong> час
						</span>
					</h2>
					<div class="pricesBlock-description">
						<section class="pricesBlock-descriptionSection">
							<h3 class="pricesBlock-descriptionTitle">до 10 км с учетом ожидания один час - ₴350</h3>
						</section>
						<section class="pricesBlock-descriptionSection">
							<h3 class="pricesBlock-descriptionTitle">от 10 км - расчет проводится индивидуально</h3>
						</section>

						<section class="pricesBlock-descriptionSection">
							<h3 class="pricesBlock-descriptionTitle"><strong>Ожидание более часа +50 грн за каждых полчаса</strong></h3>
						</section>
					</div>

					<a :href=phoneHref class="button pricesBlock-orderButton">Дзвонити</a>
				</div>

				<div class="pricesBlock" id="kidsWithIndividualNeeds">
					<h2 class="pricesBlock-title">
						<strong class="pricesBlock-titleText">Тьютор для детей с индивидуальными потребностями</strong>
						<span class="pricesBlock-titlePrice">
							от <strong class="pricesBlock-titlePriceAmount">₴250</strong> час
						</span>
					</h2>

					<a :href=phoneHref class="button pricesBlock-orderButton">Дзвонити</a>
				</div>

			</div>

			<section class="homeSection" id="babyBoxes">
				<h2 class="homeSection-title">Бебибоксы</h2>
			</section>

			<section class="homeSection" id="kidsCosmetics">
				<h2 class="homeSection-title">Детская косметика</h2>
			</section>

			<section class="homeSection">
				<h2 class="homeSection-title">Как оформить заявку на выезд няни</h2>
				<ul class="howToOrder">
					<li class="howToOrder-item">
						<span>
							<a :href=phoneHref class="howToOrder-itemLink">позвонить</a> или написать нам (сообщение, вайбер, мессенджер)
						</span>
					</li>
					<li class="howToOrder-item">Уточнить возраст ребенка и ваш адрес</li>
					<li class="howToOrder-item">Назначить время, когда вам необходима помощь</li>
					<li class="howToOrder-item">Отдыхать :)</li>
				</ul>
			</section>

			<section class="homeSection">
				<h2 class="homeSection-title">Умови роботи сервісу:</h2>
				<ul class="termsOfService">
					<li class="termsOfService-item">Сервис “Мама рада” работает круглосуточно и без выходных</li>
					<li class="termsOfService-item">Минимальное время для выезда няни - три часа</li>
					<li class="termsOfService-item">Возможен выезд няни в день оформления заказа</li>
					<li class="termsOfService-item">Отмену заказ просим производить не менее чем за три часа до начала работы няни</li>
					<li class="termsOfService-item">Если у ребенка выявлены признаки заболевания, просим сообщать родителей при оформлении заявки для корректного подбора няни</li>
					<li class="termsOfService-item">Если няня опаздывает более чем на 15 минут, предоставляем скидку 15%</li>
					<li class="termsOfService-item">Если выезд няни заканчивается после 22.00, просим для няни вызвать такси</li>
					<li class="termsOfService-item">При выезде няни за город стоимость часа работы няни увеличивается на 20%</li>
				</ul>
			</section>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'Body',
		data() {
			return {
				phoneLabel: '067-524-79-39',
				phoneHref: `tel:+380675247939`,
			}
		}
	}
</script>

<style lang="scss">

</style>
