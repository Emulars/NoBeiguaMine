<script lang="ts">
	import Button from "@smui/button";
	import type { TopAppBarComponentDev } from "@smui/top-app-bar";
	import TopAppBar, {Row,Section,Title,AutoAdjust,} from "@smui/top-app-bar";
	let topAppBar: TopAppBarComponentDev;
    import MediaQuery from "$lib/Utility/MediaQuery.svelte";
	import Logo from "../../images/LBlack.png";
    import Insta from "../../images/instagram.png";

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
            <TopAppBar bind:this={topAppBar} variant="fixed" style="box-shadow: 0 2px 10px -2px rgb(0 0 0 / 20%); padding: 8px 150px;">
                <Row>
                    <!-- LOGO -->
                    <Section style="width:50%">
                        <a href="https://mountainresistance.vercel.app/"><img class="LogoP" src={Logo} alt="My logo" /></a>
                    </Section>
            
                    <!-- MENU -->
                    <Section align="end" style="width:50%" toolbar>
                        <a href="https://www.instagram.com/mountain_resistance_/" target="_blank" rel="noopener noreferrer">
                            <img
                            style="height: 20px; width:20px; margin-right:10px;"
                            src={Insta}
                            alt="instagram"
                            />
                        </a>
                        <Button aria-label="" href="/articles">
                            <span>Articoli</span>
                        </Button>
                        <Button aria-label="" href="/timeline">
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
            <TopAppBar bind:this={topAppBar} variant="fixed" style="box-shadow: 0 2px 10px -2px rgb(0 0 0 / 20%);">
                <Row>
                    <!-- LOGO -->
                    <Section style="margin-left: 60px;">
                        <a href="https://mountainresistance.vercel.app/"><img class="LogoP" src={Logo} alt="My logo" /></a>
                    </Section>
            
                    <!-- MENU -->
                    <Section align="end" toolbar>
                        <a href="https://www.instagram.com/mountain_resistance_/" target="_blank" rel="noopener noreferrer">
                            <img
                            style="height: 20px; width:20px; margin-right:10px;"
                            src={Insta}
                            alt="instagram"
                            />
                        </a>
                        <Button aria-label="" href="/articles">
                            <span>Articoli</span>
                        </Button>
                        <Button aria-label="" href="/timeline">
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
            <TopAppBar bind:this={topAppBar} variant="fixed" style="box-shadow: 0 2px 10px -2px rgb(0 0 0 / 20%);">
                <Row>
                    <!-- LOGO -->
                    <Section style="margin-left: 60px;">
                        <a href="https://mountainresistance.vercel.app/"><img class="LogoP" src={Logo} alt="My logo" /></a>
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
                            <a href="https://www.instagram.com/mountain_resistance_/" target="_blank" rel="noopener noreferrer">
                                <img
                                style="height: 20px; width:20px; margin-right:10px;"
                                src={Insta}
                                alt="instagram"
                                />
                            </a>
                            <Button aria-label="" href="/articles">
                                <span>Articoli</span>
                            </Button>
                            <Button aria-label="" href="/timeline">
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