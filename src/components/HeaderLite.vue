<template>
	<header class="header header--inner">
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
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'HeaderLite',
		methods: {
			changeLang(e, locale) {
				e.preventDefault();
				this.$i18n.locale = locale;
				this.$store.dispatch('locales/setLocale', locale);
			}
		},
		data() {
			return {}
		}
	}
</script>

<style lang="scss">

</style>
