<template>
	<footer class="footer">
		<section class="footerSection">
			<div class="container">
				<div class="footerTop">
					<a href="#" class="footerLogo"></a>
					<ul class="mediaLinks mediaLinks_footer">
						<li class="mediaLinks-item">
							<a href="#" class="mediaLinks-link"><i class="icon icon-instagram"></i>Instagram</a>
						</li>
						<li class="mediaLinks-item">
							<a href="#" class="mediaLinks-link"><i class="icon icon-facebook"></i>Facebook</a>
						</li>
					</ul>
				</div>

				<ul class="footerMenu">
					<li class="footerMenu-item"><a href="/#nannyToGo" class="footerMenu-link">{{ $t('NannyToGo') }}</a></li>
					<li class="footerMenu-item"><a href="/#nannyForFamily" class="footerMenu-link">{{ $t('NannyForFamily') }}</a></li>
					<li class="footerMenu-item"><a href="/#kidsWithIndividualNeeds" class="footerMenu-link">{{ $t('KidsWithIndividualNeeds') }}</a></li>

					<li class="footerMenu-item"><a href="/#autoDaddy" class="footerMenu-link">{{ $t('AutoDaddy') }}</a></li>
					<li class="footerMenu-item"><a href="/#babyBoxes" class="footerMenu-link">{{ $t('BabyBoxes') }}</a></li>
					<li class="footerMenu-item"><a href="/#kidsCosmetics" class="footerMenu-link">{{ $t('KidsCosmetics') }}</a></li>
				</ul>
			</div>
		</section>
		<section class="footerSection">
			<div class="container">
				<ul class="footerContacts">
					<li class="footerContacts-item">{{ $t('Address') }} {{ $t('AddressLine') }}</li>
					<li class="footerContacts-item">{{ $t('Phone') }} <a :href=phoneNumber class="footerContacts-itemLink">{{phoneLabel}}</a></li>
				</ul>
			</div>
		</section>
		<section class="footerSection">
			<div class="container">
				<ul v-if="false" class="footerLinks">
					<li class="footerLinks-item">
						<a href="#" class="footerLinks-link">Умови роботи сервісу</a>
					</li>
					<li>
						<a href="#" class="footerLinks-link">Угода користувача</a>
					</li>
				</ul>
				<div class="copyrights">&copy; Мама Рада 2019</div>
			</div>
		</section>
	</footer>
</template>

<script>
	import contact from '../config/contact';
	const { phones } = contact;
	const { phoneLabel, phoneNumber } = phones[0] || {};

	export default {
		name: 'Footer',
		data() {
			return {
				phoneLabel,
				phoneNumber,
			}
		}
	}
</script>

<style lang="scss">
	@import '../assets/styles/footer.scss';
</style>
