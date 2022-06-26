<script lang="ts">
    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons,} from "@smui/card";
    import Button, { Label } from "@smui/button";
    import IconButton, { Icon } from "@smui/icon-button";
    import MediaQuery from "$lib/Utility/MediaQuery.svelte";
    import mnt from "../../../images/beiglarge.jpg";

    function clickinner() {
        // Target refers to the clicked element
        window.location.href = "./Art/Article_1";
        //
    };
</script>
  
  <main>
    <!-- Desktop -->
    <MediaQuery query="(min-width: 1200px)" let:matches>
      {#if matches}
      <div class="root desktop">
        <div class="card-container">
            <Card>
                <PrimaryAction on:click={() => clickinner()}>
                    <Media class="card-media-16x9" aspectRatio="16x9" />
                    <Content class="mdc-typography--body2">
                        <h3 style="margin: 0;">
                          GIACIMENTO DI PIAMPALUDO, LA POPOLAZIONE INSORGE: 25.000 FIRME PER OPPORSI ALL’APERTURA
                        </h3>
                        <span
                            class="date"
                            style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                            >27 Aprile 2022</span
                        >
                        <h5
                            class="mdc-typography--subtitle2"
                            style="color: #888;"
                        >
                        La popolazione ligure si oppone all’apertura della miniera di titanio presente nel Beigua, 25.000 persone firmano la petizione: “È una scelta sbagliata, rischi ambientali evidenti”.
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
                    <Media class="card-media-16x9" aspectRatio="16x9" />
                    <Content class="mdc-typography--body2">
                        <h3 style="margin: 0;">
                          GIACIMENTO DI PIAMPALUDO, LA POPOLAZIONE INSORGE: 25.000 FIRME PER OPPORSI ALL’APERTURA
                        </h3>
                        <span
                            class="date"
                            style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                            >27 Aprile 2022</span
                        >
                        <h5
                            class="mdc-typography--subtitle2"
                            style="color: #888;"
                        >
                        La popolazione ligure si oppone all’apertura della miniera di titanio presente nel Beigua, 25.000 persone firmano la petizione: “È una scelta sbagliata, rischi ambientali evidenti”.
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
                          GIACIMENTO DI PIAMPALUDO, LA POPOLAZIONE INSORGE: 25.000 FIRME PER OPPORSI ALL’APERTURA
                        </h3>
                        <span
                            class="date"
                            style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                            >27 Aprile 2022</span
                        >
                        <h5
                            class="mdc-typography--subtitle2"
                            style="color: #888;"
                        >
                        La popolazione ligure si oppone all’apertura della miniera di titanio presente nel Beigua, 25.000 persone firmano la petizione: “È una scelta sbagliata, rischi ambientali evidenti”.
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
                          GIACIMENTO DI PIAMPALUDO, LA POPOLAZIONE INSORGE: 25.000 FIRME PER OPPORSI ALL’APERTURA
                        </h3>
                        <span
                            class="date"
                            style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                            >27 Aprile 2022</span
                        >
                        <h5
                            class="mdc-typography--subtitle2"
                            style="color: #888;"
                        >
                        La popolazione ligure si oppone all’apertura della miniera di titanio presente nel Beigua, 25.000 persone firmano la petizione: “È una scelta sbagliata, rischi ambientali evidenti”.
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
     .card-container{
        margin:20px;
        width: 70%;
        height: 10%;
    }
    .date {
        background-color: #a2d5ab;
        margin: 0;
        width: 120px;
        color: white;
    }
    * :global(.card-media-16x9) {
        background-image: url(../../../images/beiglarge.jpg);
        background-size: auto;
      
        filter: brightness(80%);
    }
    h3 {
        color: #39aea9;
    }
    h5{
        width: 90%;
    }
    * :global(.card-media-16x9) {
      background-image: url(../../../images/2.jpg);
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
 
