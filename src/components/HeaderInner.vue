<template>
	<header class="header header--inner">
		<div class="container">
			<div class="headerWrapper">
				<div class="header-top">
					<a href="/" class="headerLogo">Мама Рада :)</a>

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
		data() {
			return {}
		}
	}
</script>

<style lang="scss">

</style>
