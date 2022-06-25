<script>
    import mid from "../images/2.jpg";
    import Logoh1 from "../images/LWhite.png";
</script>

<div class="Heroimg">
    <img class="description" src={mid} alt="Description" />
    <div class="Herotxt">
        <h1><img class="logoh1" src={Logoh1} alt="logop1" /></h1>
        <p class="mdc-typography--subtitle1">
            Scoperto nel 1970,il giacimento di titanio prensente nel Parco del
            Beigua <br /> presenta un'enorme minaccia per l'ambiente e per gli
            abitanti della zona. <br />
            E' in corso da anni una battaglia legale per un'eventuale apertura
            <br />
            della miniera che causerebbe gravi problemi alla popolazione e<br />
            alla biodiversita presenti nella zona.
        </p>
    </div>
</div>

<style>
    .Heroimg {
        width: 100%;
        margin: 0px;
        height: 40%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    .logoh1 {
        width: 235px;
    }

    .Herotxt {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        width: 80%;
    }
    .Herotxt,p {
        font-family: "Roboto Light", sans-serif;
        font-size: medium;
    }

    .description {
        width: 100%;
        height: 40%;
        margin: 0px;
        filter: brightness(40%);
    }
    /*     
    @media only screen and (min-width: 600px) {
        .description {
            width: 100%;
            background-position: center;
            background-size: cover;
            filter: brightness(70%);
            position: relative;
        }
        .Heroimg {
        width: 100%;
        margin: 0px;
        height: 40%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        
        }
        .logoh1{
            width: 110px;
        }
    }
    @media only screen and (min-width: 768px) {
        .description {
            width: 100%;
            height: 40%;
            margin: 0px;
        }
        .Heroimg {
        width: 100%;
        margin: 0px;
        height: 40%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        
    }
    .Heroimg {
        width: 100%;
        margin: 0px;
        height: 40%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        
        }
        .logoh1{
            width: 110px;
        }
    } */

    /* Extra small devices (phones, 600px and down) */
    /*@media only screen and (max-width: 600px) {...}*/

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (max-width: 600px) {
        .Heroimg {
        width: 100%;
        height: 900px;
        }
        
        .description{
            width: 100%;
            height: 900px;
            background: transparent no-repeat center;
            background-size: cover;
            position: relative;
            object-fit: cover;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        .Heroimg {
        width: 100%;
        height: 900px;
        }
        
        .description{
            width: 100%;
            height: 900px;
            background: transparent no-repeat center;
            background-size: cover;
            position: relative;
            object-fit: cover;
        }
    } 

    /* Large devices (laptops/desktops, 992px and up) */
    /*@media only screen and (min-width: 992px) {...}*/

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    /*@media only screen and (min-width: 1200px) {...}*/
</style>
