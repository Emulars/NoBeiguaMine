<script lang="ts">
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
  } from "@smui/card";
  import Button, { Label } from "@smui/button";
  import IconButton, { Icon } from "@smui/icon-button";
  let clicked = 0;
</script>

<div class="card-container">
  <Card>
    <PrimaryAction on:click={() => clicked++}>
      <Media class="card-media-16x9" aspectRatio="16x9" />
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
    <Actions>
      <ActionButtons>
        <Button on:click={() => clicked++}>
          <Label>Action</Label>
        </Button>
        <Button on:click={() => clicked++}>
          <Label>Another</Label>
        </Button>
      </ActionButtons>
      <ActionIcons>
        <IconButton
          on:click={() => clicked++}
          toggle
          aria-label="Add to favorites"
          title="Add to favorites"
        >
          <Icon class="material-icons" on>favorite</Icon>
          <Icon class="material-icons">favorite_border</Icon>
        </IconButton>
        <IconButton
          class="material-icons"
          on:click={() => clicked++}
          title="Share">share</IconButton
        >
        <IconButton
          class="material-icons"
          on:click={() => clicked++}
          title="More options">more_vert</IconButton
        >
      </ActionIcons>
    </Actions>
  </Card>
</div>

<style>
  * :global(.card-media-16x9) {
    background-image: url(https://place-hold.it/320x180?text=16x9&fontsize=23);
  }
  

  @media only screen and (max-width: 600px) {
    * :global() {
      display: flow-root;
      margin: 20px;
      justify-content: space-evenly;
    }
  }

  
  @media only screen and (min-width: 600px) {
    * :global() {
      display: flow-root;
      margin: 10px;
      justify-content: space-evenly;
    }
  }

 
  @media only screen and (min-width: 768px) {
    * :global() {
      display: grid;
      justify-content: space-evenly;
    }
  }

 
  @media only screen and (min-width: 992px) {
    * :global() {
      display :inline-flex;
      margin: 20px;
      justify-content: space-evenly;
    }
  }

 
  @media only screen and (min-width: 1200px) {
    * :global() {
      display:flow-root;
      margin: 20px;
    }
  }
</style>
