<script>
    import Button, { Label, Icon } from "@smui/button";
    import Nav from "./__layout.svelte";
    import Card from "./card.svelte";
    import mid from "C://Users/Giorg/Desktop/WEBDESIGN/2.jpg";
</script>

<div class="midi">
    <img class="mioo" src={mid} alt="Hero" />
</div>

<style>
    .mioo{
        width: 100%;
        height: 20%;
    }
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        * :global() {
            display: flow-root;
         
            margin-bottom: 10px;
            margin: 0;
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        * :global() {
            display: flow-root;
            width: 100%;
            height: 60%;
            margin-bottom: 10px;
            margin: 0;
        }   
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        * :global() {
            display: flow-root;
            width: 100%;
            height: 60%;
            margin-bottom: 10px;
            margin: 0;
        }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        * :global() {
            display: flow-root;
            
            width: 100%;
            height: 60%;
            margin-bottom: 10px;
            margin: 0;
        }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        .mioo {
            width: 100%;
            height: 40%;
            margin: 0px;
        }
    }
</style>
