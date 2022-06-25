<script lang="ts">
	import NavBar from "$lib/components/NavBar.svelte";
	import Footer from "$lib/components/footer.svelte";
</script>


<!-- NavBar  -->
<NavBar/>

<!-- Page Container -->
<div class="container">
	<slot />
</div>

<!-- Footer  -->
<Footer />

<style>


</style>
