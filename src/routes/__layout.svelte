<script lang="ts">
	import NavBar from "$lib/components/NavBar.svelte";
	import Footer from "$lib/components/footer.svelte";
	import Cookies from "$lib/components/cookies.svelte";
</script>


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

<style>


</style>
