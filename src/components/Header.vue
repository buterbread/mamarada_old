<template>
	<header class="header">
		<div class="container">
			<div class="headerWrapper">
				<div class="header-top">
					<a href="/" class="headerLogo">Мама Рада :)</a>

					<div>
						<a href="#" v-on:click="(e) => changeLang(e, 'ua')">укр</a>
						&nbsp;&nbsp;&nbsp;
						<a href="#" v-on:click="(e) => changeLang(e, 'ru')">рус</a>
					</div>

					<template v-if="false">
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
					</template>
				</div>

				<h1 class="headerTitle">{{ $t('Slogan') }}</h1>

				<ul class="headerMenu">
					<li class="headerMenu-item">
						<a href="#nannyToGo" class="headerMenu-link">{{ $t('NannyToGo') }}</a>
					</li>
					<li class="headerMenu-item">
						<a href="#nannyForFamily" class="headerMenu-link">{{ $t('NannyForFamily') }}</a>
					</li>
					<li class="headerMenu-item">
						<a href="#kidsWithIndividualNeeds" class="headerMenu-link">{{ $t('KidsWithIndividualNeeds') }}</a>
					</li>
					<li class="headerMenu-item">
						<a href="#autoDaddy" class="headerMenu-link">{{ $t('AutoDaddy') }}</a>
					</li>
					<li v-if="false" class="headerMenu-item">
						<a href="#babyBoxes" class="headerMenu-link">{{ $t('BabyBoxes') }}</a>
					</li>
					<li class="headerMenu-item">
						<a href="#kidsCosmetics" class="headerMenu-link">{{ $t('KidsCosmetics') }}</a>
					</li>
				</ul>

				<div class="header-bottom">
					<a :href="`tel:${phoneNumber}`" class="headerPhone">{{phoneLabel}}</a>
					<a :href="`tel:${phoneNumber}`" class="button headerCallButton">{{ $t('ToCall') }}</a>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	import contact from '../config/contact';
	const { phones } = contact;
	const { phoneLabel, phoneNumber } = phones[0] || {};

	export default {
		name: 'Header',
		methods: {
			changeLang(e, locale) {
				e.preventDefault();
				this.$i18n.locale = locale;
				this.$store.dispatch('languages/setLanguage', locale);
			}
		},
		data() {
			return {
				phoneLabel,
				phoneNumber,
			}
		}
	}
</script>

<style lang="scss">

</style>
