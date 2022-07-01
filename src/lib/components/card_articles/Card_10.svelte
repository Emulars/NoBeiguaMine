<script lang="ts">
    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons,} from "@smui/card";
    import MediaQuery from "$lib/Utility/MediaQuery.svelte";

    function clickinner() {
        // Target refers to the clicked element
        window.location.href = "./Art/Article_10";
    };

    const title = "10.	TITANIO SUL BEIGUA, IL SINDACO DI SASSELLO: “IL PARCO POTREBBE PERDERE IL RICONOSCIMENTO DELL’UNESCO”";
    const subTitle = "12 Marzo 2022";
    const content = "Il sindaco di Sassello, Daniele Buschiazzo, ha parlato dei rischi derivanti da una possibile apertura della miniera di titanio presente nel Parco del Beigua: tra questi anche il pericolo di essere rimossi tra i siti riconosciuti dall’Unesco.";
</script>
  
  <main>
    <!-- Desktop -->
    <MediaQuery query="(min-width: 1200px)" let:matches>
      {#if matches}
      <div class="root desktop" >
        <div class="card-container">
            <Card>
                <PrimaryAction on:click={() => clickinner()}>
                    <Media class="card-media-16x9" aspectRatio="16x9" />
                    <Content class="mdc-typography--body2">
                        <h3 style="margin: 0;">
                            {title}
                        </h3>
                        <span
                            class="date"
                            style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                            >{subTitle}</span
                        >
                        <h5
                            class="mdc-typography--subtitle2"
                            style=" color: #888;"
                        >
                            {content}
                        </h5>
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
                <PrimaryAction on:click={() => clickinner()}>
                    <Media class="card-media-16x9 " aspectRatio="16x9" />
                    <Content class="mdc-typography--body2">
                        <h3 style="margin: 0;">
                            {title}
                        </h3>
                        <span
                            class="date"
                            style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                            >{subTitle}</span
                        >
                        <h5
                            class="mdc-typography--subtitle2"
                            style=" color: #888;"
                        >
                            {content}
                        </h5>
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
                <PrimaryAction on:click={() => clickinner()}>
                    <Media class="card-media-16x9" aspectRatio="16x9" />
                    <Content class="mdc-typography--body2">
                        <h3 style="margin: 0;">
                            {title}
                        </h3>
                        <span
                            class="date"
                            style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                            >{subTitle}</span
                        >
                        <h5
                            class="mdc-typography--subtitle2"
                            style=" color: #888;"
                        >
                            {content}
                        </h5>
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
                <PrimaryAction on:click={() => clickinner()}>
                    <Media class="card-media-16x9" aspectRatio="16x9" />
                    <Content class="mdc-typography--body2">
                        <h3 style="margin: 0;">
                            {title}
                        </h3>
                        <span
                            class="date"
                            style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                            >{subTitle}</span
                        >
                        <h5
                            class="mdc-typography--subtitle2"
                            style=" color: #888;"
                        >
                            {content}
                        </h5>
                    </Content>
                </PrimaryAction>
            </Card>
          </div>
        </div>
        {/if}
    </MediaQuery> 
  </main>
  
  <style>
    .date {
        background-color: #a2d5ab;
        width: 120px;
        color: white;
        padding: 4px 4px 4px 4px;
    }

    h3 {
        color: #39aea9;
        padding-bottom: 0.5em;
    }
    h5{
        width: 90%;
    }

    * :global(.mdc-card){
        box-shadow: none;
    }

    * :global(.card-media-16x9) {
        background-image: url(../../../images/card/card_10.jpg);
      background-size:cover;
      filter: brightness(80%);
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
 