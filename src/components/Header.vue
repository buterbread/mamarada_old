<template>
	<header class="header">
		<div class="container">
			<div class="headerWrapper">
				<div class="header-top">
					<a href="/" class="headerLogo">Мама Рада :)</a>

					<ul class="mediaLinks mediaLinks_header">
						<li class="mediaLinks-item">
							<a href="#" class="mediaLinks-link"><i class="icon icon-instagram"></i>Instagram</a>
						</li>
						<li class="mediaLinks-item">
							<a href="#" class="mediaLinks-link"><i class="icon icon-facebook"></i>Facebook</a>
						</li>
					</ul>

					<a href="#" class="sandwichMenu">
						<i class="sandwichMenu-bar"></i>
						<i class="sandwichMenu-bar"></i>
						<i class="sandwichMenu-bar"></i>
					</a>
				</div>

				<h1 class="headerTitle">Обученные и проверенные няни и домохозяйки</h1>

				<ul class="headerMenu">
					<li class="headerMenu-item">
						<a href="#nannyToGo" class="headerMenu-link">Няни на выезд</a>
					</li>
					<li class="headerMenu-item">
						<a href="#nannyForFamily" class="headerMenu-link">Подбор няни в семью</a>
					</li>
					<li class="headerMenu-item">
						<a href="#kidsWithIndividualNeeds" class="headerMenu-link">Детям с индивидуальными потребностями</a>
					</li>
					<li class="headerMenu-item">
						<a href="#autoDaddy" class="headerMenu-link">Автопапа</a>
					</li>
					<li class="headerMenu-item">
						<a href="#babyBoxes" class="headerMenu-link">Бебибоксы</a>
					</li>
					<li class="headerMenu-item">
						<a href="#kidsCosmetics" class="headerMenu-link">Детская косметика</a>
					</li>
				</ul>

				<div class="header-bottom">
					<a :href="phoneHref" class="headerPhone">{{phoneLabel}}</a>
					<a :href="phoneHref" class="button headerCallButton">Дзвонити</a>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				phoneLabel: '+38 067 524 79 39',
				phoneHref: 'tel:+380675247939',
			}
		}
	}
</script>

<style lang="scss">

</style>
