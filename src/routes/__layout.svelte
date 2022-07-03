<script lang="ts">
	import NavBar from "$lib/components/NavBar.svelte";
	import Footer from "$lib/components/footer.svelte";
	import Cookies from "$lib/components/cookies.svelte";

	// Mix Panel import
	import mixpanel from 'mixpanel-browser';
	// Enabling the debug mode flag is useful during implementation,
	// but it's recommended you remove it for production

	// Cookie Banner
	const choices = {
      necessary: {
          label: "Necessary cookies",
          description: "Used for cookie control. Can't be turned off.",
          value: true
      },
      tracking: false,
      analytics: {
          label: "Analytics cookies",
          description: "Used to control Google Analytics, a 3rd party tool offered by Google to track user behavior.",
          value: true
      },
      marketing: false
  	}

	import GdprBanner from '@beyonk/gdpr-cookie-consent-banner'
	import '@beyonk/gdpr-cookie-consent-banner/dist/style.css' // import optional styles

	const banner_text = "Questo sito utilizza i cookies per semplificare e personalizzare l'esperienza di navigazione. Continuando a navigare su questo sito web o cliccando sul tasto 'Accept cookies' si accetta l'utilizzo dei cookies. <a href='./privacy&policy'>Informativa sulla privacy</a>";
	var activate_banner = true;

	function initAnalytics () {
    	// do something with segment.io or google analytics etc
		mixpanel.init('675938c9f0ea1a0f06864f1347ce196f', {debug: true}); 
		mixpanel.track('Sign up');
  	}

	function disableBanner(){
		activate_banner = false;
	}
</script>

<!-- NavBar  -->
<NavBar/>

<!-- Page Container -->
<div class="container">
	<slot />
</div>

<Footer />
<Cookies />
{#if activate_banner}
	<GdprBanner cookieName="cookie_banner" 
				heading = "GDPR Notice"
				description={banner_text} 
				acceptLabel= 'Conferma preferenze'
  				settingsLabel= 'Preferenze'
  				closeLabel= 'Chiudi finestra'
				choices={choices}
				showEditIcon= false
				on:analytics={initAnalytics} 
				on:click={disableBanner}/>
{/if}
<style>

</style>