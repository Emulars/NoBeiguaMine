<script lang="ts">
  import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons,} from "@smui/card";
  import Button, { Label } from "@smui/button";
  import IconButton, { Icon } from "@smui/icon-button";
  import MediaQuery from "$lib/Utility/MediaQuery.svelte";
  let clicked = 0;
</script>

<main>
  <!-- Desktop -->
  <MediaQuery query="(min-width: 1200px)" let:matches>
    {#if matches}
    <div class="root desktop">
      <div class="card-container">
        <Card>
          <PrimaryAction on:click={() => clicked++}>
            <Media class="card-media-16x9" aspectRatio="16x9"/>
            <Content class="mdc-typography--body2">
              <h2 class="mdc-typography--headline6" style="margin: 0;">
                A card with media.
              </h2>
              <h3
                class="mdc-typography--subtitle2"
                style="margin: 0 0 10px; color: #888;"
              >
                And a subtitle.
              </h3>
              It's all in this card. It's a veritable smorgasbord of card features.
            </Content>
          </PrimaryAction>
        </Card>
      </div>
    </div>
    {/if}
  </MediaQuery>

    <!-- Little Desktop -->
    <MediaQuery query="(min-width: 992px) and (max-width: 1199px)" let:matches>
      {#if matches}
      <div class="root ltt_desktop">
        <div class="card-container">
          <Card>
            <PrimaryAction on:click={() => clicked++}>
              <Media class="card-media-16x9" aspectRatio="16x9"/>
              <Content class="mdc-typography--body2">
                <h2 class="mdc-typography--headline6" style="margin: 0;">
                  A card with media.
                </h2>
                <h3
                  class="mdc-typography--subtitle2"
                  style="margin: 0 0 10px; color: #888;"
                >
                  And a subtitle.
                </h3>
                It's all in this card. It's a veritable smorgasbord of card features.
              </Content>
            </PrimaryAction>
          </Card>
        </div>
      </div>
      {/if}
    </MediaQuery>

  <!-- Tablet -->
  <MediaQuery query="(min-width: 601px) and (max-width: 991px)" let:matches>
      {#if matches}
      <div class="root tablet">
        <div class="card-container">
          <Card>
            <PrimaryAction on:click={() => clicked++}>
              <Media class="card-media-16x9" aspectRatio="16x9"/>
              <Content class="mdc-typography--body2">
                <h2 class="mdc-typography--headline6" style="margin: 0;">
                  A card with media.
                </h2>
                <h3
                  class="mdc-typography--subtitle2"
                  style="margin: 0 0 10px; color: #888;"
                >
                  And a subtitle.
                </h3>
                It's all in this card. It's a veritable smorgasbord of card features.
              </Content>
            </PrimaryAction>
          </Card>
        </div>
      </div>
      {/if}
  </MediaQuery>

  <!-- Mobile -->
  <MediaQuery query="(max-width: 600px)" let:matches>
      {#if matches}
      <div class="root mobile">
        <div class="card-container">
          <Card>
            <PrimaryAction on:click={() => clicked++}>
              <Media class="card-media-16x9" aspectRatio="16x9"/>
              <Content class="mdc-typography--body2">
                <h2 class="mdc-typography--headline6" style="margin: 0;">
                  A card with media.
                </h2>
                <h3
                  class="mdc-typography--subtitle2"
                  style="margin: 0 0 10px; color: #888;"
                >
                  And a subtitle.
                </h3>
                It's all in this card. It's a veritable smorgasbord of card features.
              </Content>
            </PrimaryAction>
          </Card>
        </div>
      </div>
      {/if}
  </MediaQuery> 
</main>


<style>
  * :global(.card-media-16x9) {
    background-image: url(https://dummyimage.com/600x400/000/fff);
  }
  
  * :global(.mdc-card){
    box-shadow: none;
  }

  .desktop :global(){
    display:flow-root;
    margin: 20px;
  }

  .ltt_desktop :global(){
    display :inline-flex;
    margin: 20px;
    justify-content: space-evenly;
  }

  .tablet :global(){
    display: grid;
    margin: 10px;
    justify-content: space-evenly;
  }

  .mobile :global(){
    display: flow-root;
    margin: 20px;
    justify-content: space-evenly;
  }
</style>
