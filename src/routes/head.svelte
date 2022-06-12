<script>
    import mid from "../images/2.jpg";
    import Logoh1 from "../images/LWhite.png";
</script>

<div class="Heroimg">
    <img class="description" src={mid} alt="Description" />
    <div class="Herotxt">
        <h1><img class= "logoh1" src={Logoh1} alt="logop1" style="width:235px;" /></h1>
        <p>
            Scoperto nel 1970,il giacimento di titanio prensente nel Parco del
            Beigua presenta un'enorme minaccia per l'ambiente e per gli abitanti
            della zona. E' in corso da anni una battaglia legale per
            un'eventuale apertura della miniera che causerebbe gravi problemi
            alla popolazione e alla biodiversita presenti nella zona.
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

    .Herotxt {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        width: 80%;
    }
    .Herotxt,p{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: medium;
    }
 
    .description {
            width: 100%;
            height: 40%;
            margin: 0px;
            filter:brightness(40%);
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
        .center,
        p {
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
        }
        .center,
        img {
            width: 100px;
            height: 60px;
        }
    }
    @media only screen and (min-width: 768px) {
        .description {
            width: 100%;
            height: 40%;
            margin: 0px;
        }
    } */

    /* Extra small devices (phones, 600px and down) */
    /*@media only screen and (max-width: 600px) {...}*/

    /* Small devices (portrait tablets and large phones, 600px and up) */
    /*@media only screen and (min-width: 600px) {...}*/

    /* Medium devices (landscape tablets, 768px and up) */
    /*@media only screen and (min-width: 768px) {...}*/

    /* Large devices (laptops/desktops, 992px and up) */
    /*@media only screen and (min-width: 992px) {...}*/

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    /*@media only screen and (min-width: 1200px) {...}*/
</style>
