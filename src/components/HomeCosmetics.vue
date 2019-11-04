<template>
	<div>
		<h2 class="homeSection-title">Детская косметика</h2>
		<ul class="kidsCosmetics">
			<li v-for="item in cosmeticsList" class="kidsCosmetics-item">
				<a :href="`/cosmetics/${item.id}`" class="kidsCosmetics-link">
					<div class="kidsCosmetics-imageBox">
						<img :src="item.previewUrl" :alt="item.title" class="kidsCosmetics-image" />
					</div>
					<div class="kidsCosmetics-content">
						<div class="kidsCosmetics-header">
							<h3 class="kidsCosmetics-title">{{item.title}}</h3>
							<span class="kidsCosmetics-price">₴{{item.price}}</span>
						</div>
						<div class="kidsCosmetics-description">
							<p class="kidsCosmetics-descriptionPara">{{item.description}}</p>
						</div>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';

  export default {
    name: 'Cosmetics',
    created() {
      this.$store.dispatch('cosmetics/fetchListData');
    },
	computed: {
	  ...mapState({
        cosmetics: state => {
          return state.cosmetics
		},
	  }),
      ...mapGetters({
        cosmeticsList: 'cosmetics/list'
      }),
	},
  }
</script>
