<script>
    import Button from "@smui/button";
    import Card from "./card_articles/card.svelte";
    import mont3 from "../../images/3.jpg";
	import mont4 from "../../images/4.jpg";
</script>

<div class="laycard">
    <!-- Cards -->
    <div
        class="mdc-typography--headline3 News"
        style="text-align:center; padding-top:30px; padding-bottom:15px; font-family:'Oswald Regular',sans-serif;"
    >
        - Articoli -
    </div>
    <div class="cards">
        <!--CARDS-->
       <Card/>    
        <Card />
    </div>
    <div class="Articoli_more">
        <div class="buttom">
            <a class="text_b" href="/articles">MOSTRA ALTRI</a>
        </div>
    </div>
</div>

<style>
    .Card{
        background:url({mont3});
    }
    .laycard {
        width: 100%;
        justify-content: center;
    }
    .cards {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        border: 0ch;
    }
    .Articoli_more {
        text-align: center;
        padding-bottom: 15px;
    }
    .buttom {
        
        background-color: #E5EFC1;
        border: none;
        color: rgb(0, 0, 0);
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 2px 1px;
        cursor: pointer;
        padding-bottom: 15px;
    }
    .text_b{
        font-family:'Oswald',sans-serif;
        text-decoration: none;
        color: black;
    }
    .text_b,a:visited{
        color:black;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        .laycard {
            
            width: 100%;
        }
        .cards {
            display: flex;
            flex-direction: column;
            margin: 10px;
            justify-content: space-evenly;
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        .laycard {
            
            width: 100%;
        }
        .cards {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
    }

    /* Large devices (laptops/desktops, 992px and up)  */
    @media only screen and (min-width: 992px) {
        .laycard {
           
            width: 100%;
        }
        .cards {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up)  */
    @media only screen and (min-width: 1150px) {
        .laycard {
            
            width: 100%;
        }
        .cards {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }
    }
</style>
