<script lang="ts">
	import Button from "@smui/button";
	import type { TopAppBarComponentDev } from "@smui/top-app-bar";
	import TopAppBar, {Row,Section,Title,AutoAdjust,} from "@smui/top-app-bar";
	let topAppBar: TopAppBarComponentDev;
    import MediaQuery from "$lib/Utility/MediaQuery.svelte";
	import Logo from "../../images/LBlack.png";

    import { createEventDispatcher } from 'svelte';
    let shown = false;
	let dispatch = createEventDispatcher();

    export function show() {
        shown = !shown;
        dispatch('show', shown);
    }
</script>

<svelte:options accessors={true}/>

<main>
    <!-- DESKTOP -->
    <MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
        <div class="root desktop">
            <TopAppBar bind:this={topAppBar} variant="standard" style="box-shadow: 0 2px 10px -2px rgb(0 0 0 / 20%);">
                <Row>
                    <!-- LOGO -->
                    <Section>
                        <a href="http://localhost:3000/"><img class="LogoP" src={Logo} alt="My logo" /></a>
                    </Section>
            
                    <!-- MENU -->
                    <Section align="end" toolbar>
                        <Button aria-label="" href="/articles">
                            <span>Articoli</span>
                        </Button>
                        <Button aria-label="" href="/timeline_parallax">
                            <span>Cronistoria</span>
                        </Button>
                    </Section>
                </Row>
            </TopAppBar>
            
            <AutoAdjust {topAppBar}>
                <div class="container">
                    <slot />
                </div>
            </AutoAdjust>
        </div>
        {/if}
    </MediaQuery>


    <!-- TABLET -->
    <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
        {#if matches}
        <div class="root tablet">
            <TopAppBar bind:this={topAppBar} variant="standard" style="box-shadow: 0 2px 10px -2px rgb(0 0 0 / 20%);">
                <Row>
                    <!-- LOGO -->
                    <Section>
                        <a href="http://localhost:3000/"><img class="LogoP" src={Logo} alt="My logo" /></a>
                    </Section>
            
                    <!-- MENU -->
                    <Section align="end" toolbar>
                        <Button aria-label="" href="/articles">
                            <span>Articoli</span>
                        </Button>
                        <Button aria-label="" href="/timeline_parallax">
                            <span>Cronistoria</span>
                        </Button>
                    </Section>
                </Row>
            </TopAppBar>
            
            <AutoAdjust {topAppBar}>
                <div class="container">
                    <slot />
                </div>
            </AutoAdjust>
        </div>
        {/if}
    </MediaQuery>


    <!-- MOBILE -->
    <MediaQuery query="(max-width: 480px)" let:matches>
        {#if matches}
        <div class="root mobile">
            <TopAppBar bind:this={topAppBar} variant="standard" style="box-shadow: 0 2px 10px -2px rgb(0 0 0 / 20%);">
                <Row>
                    <!-- LOGO -->
                    <Section>
                        <a href="http://localhost:3000/"><img class="LogoP" src={Logo} alt="My logo" /></a>
                    </Section>
            
                    <!-- MENU -->
                    <Section align="end" toolbar>
                    <Button id="icon" on:click={show}>
                        <i class="fa fa-bars"></i>
                    </Button>
               
                    </Section>
                </Row>
                {#if shown}
                    <Row>
                        <Section align="end" toolbar>
                            <Button aria-label="" href="/articles">
                                <span>Articoli</span>
                            </Button>
                            <Button aria-label="" href="/timeline_parallax">
                                <span>Cronistoria</span>
                            </Button>
                        </Section>
                    </Row>
                {/if}
            </TopAppBar>
            
            <AutoAdjust {topAppBar}>
                <div class="container">
                    <slot/>
                </div>
            </AutoAdjust>
        </div>
        {/if}
    </MediaQuery> 


</main>


<style>
.root {
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
}

.desktop .LogoP {
    width: 69px;
    align-items: center;
}

.tablet .LogoP{
    width: 69px;
    align-items: center;
}

.mobile .LogoP{
    margin-left: -25px;
    width: 60px;
    align-items: center;
}

/* Style the hamburger menu */
#icon .Button{
  align-items: center;
  width: 60px;
  display: block;
  position:fixed;
}

.span {
    font-family: "Oswald Bold", sans-serif;
    color:'#557B83';
}

</style>