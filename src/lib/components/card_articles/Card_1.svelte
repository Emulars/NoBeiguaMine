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
    import mnt from "../../../images/beiglarge.jpg";

    function clickinner() {
        // Target refers to the clicked element
        window.location.href = "./Art/Article_1";
        //
    }
</script>

<div class="card-container">
    <Card>
        <PrimaryAction on:click={() => clickinner()}>
            <Media class="card-media-16x9" aspectRatio="16x9" />
            <Content class="mdc-typography--body2">
                <h3 style="margin: 0;">
                    PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA<br />
                    NATURALE CHE SI AFFACCIA SULLA COSTA LIGURE
                </h3>
                <span
                    class="date"
                    style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                    >09 Maggio 2022</span
                >
                <h5
                    class="mdc-typography--subtitle2"
                    style=" color: #888;"
                >
                    Alla scoperta del Parco del Beigua, una delle zone più
                    affascinanti della Liguria affacciata sul Mediterraneo e
                    caratterizzata da una spiccata biodiversità.
                </h5>
            </Content>
        </PrimaryAction>
    </Card>
</div>

<style>
    .date {
        background-color: #a2d5ab;
        margin: 0;
        width: 120px;
        color: white;
    }
    * :global(.card-media-16x9) {
        background-image: url(../../../images/beiglarge.jpg);
        background-size: auto;
        height: 200px;
        width: 100%;
        filter: brightness(80%);
    }
    h3 {
        color: #39aea9;
    }
    h5{
        width: 90%;
    }
    .card-container{
        margin:20px;
        width: 70%;
        height: 10%;
    }
    /* @media only screen and (max-width: 600px) {
        * :global() {
            display: flow-root;
            margin: 30px;
            justify-content: space-evenly;
        }
    }
    @media only screen and (min-width: 600px) {
        * :global() {
            display: flow-root;
            margin: 30px;
            justify-content: space-evenly;
        }
    }

    @media only screen and (min-width: 768px) {
        * :global() {
            display: flow-root;
            justify-content: space-evenly;
            margin: 80px;
        }
    }

    @media only screen and (min-width: 992px) {
        * :global() {
            display: flow-root;
            margin: 50px;
            justify-content: space-evenly;
        }
    }

    @media only screen and (min-width: 1200px) {
        * :global() {
             display: inline-flex; 
            margin: 30px;
        }
    } */
</style>
