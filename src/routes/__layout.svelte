<script>
	import NavBar from "$lib/components/NavBar.svelte";
	import Footer from "$lib/components/footer.svelte";
	import Cookies from "$lib/components/cookies.svelte";
	
	import '@beyonk/gdpr-cookie-consent-banner/dist/style.css'; // optional, you can also define your own styles
  	import GdprBanner from '@beyonk/gdpr-cookie-consent-banner';

  function initAnalytics () {
    // do some stuff here
  }
</script>

<div>
<!-- NavBar  -->
<NavBar/>

<!-- Page Container -->
<div class="container">
	<slot />
</div>

<!-- Footer  -->
<Footer />

<!-- Cookies  -->
<Cookies />

<GdprBanner description="Ben arrivato! Ti preghiamo di considerare di consentirci di avere il tuo consenso per memorizzare i cookie"
			heading= 'Pagina dei Cookie'
			acceptLabel= 'Accetta tutti i cookie'
  			settingsLabel= 'Scegli i cookie'
  			closeLabel= 'Chiudi'
			showEditIcon= false
   on:analytics={initAnalytics} />
</div>