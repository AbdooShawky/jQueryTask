
$(function () {
    let x = $("#menu").innerWidth();
    $("#menu").css("left", `-${x}px`);
    $("#sideToggle").click(function () {



        let menu = $("#menu").css("left");

        if (menu < "0px") {

            $("#sideToggle").animate({ marginLeft: `${x}px` }, 500);
            $("#menu").animate({ left: `0px` }, 500);
        }
        else {

            $("#sideToggle").animate({ marginLeft: `0px` }, 500);
            $("#menu").animate({ left: `-${x}px` }, 500);
        }

        //$("#menu").css("left", );

    });

    $(".fa-times").click(function () {


        $("#menu").animate({ left: `-${x}px` }, 500);
        $("#sideToggle").animate({ marginLeft: `0px` }, 500);

    });

    $(".accord .para").not($(".accord .para").eq(0)).hide();

    $(".accord h2").click(function () {


        $(this).parent().siblings().children().not("h2").slideUp(); // to close other paragraphs

        $(this).siblings().slideToggle();


    });

    function event() {
        let eventDate = new Date("03/05/2021");
        let dateNow = new Date();
        let currentTime = dateNow.getTime();
        let eventTime = eventDate.getTime();
        let countDown = eventTime - currentTime;

        let s = Math.floor(countDown / 1000);
        let m = Math.floor(s / 60);
        let h = Math.floor(m / 60);
        let d = Math.floor(h / 24);
        let math = h;
        h %= 24;
        m %= 60;
        s %= 60;
        $("#days").text(d);
        $("#hours").text(h);
        $("#min").text(m);
        $("#seconds").text(s);
    }

    setInterval(function () {


        event();
    }, 1000);


    function reminderChar() {
        let counter = 100;
        $("#charReminder").text(counter);
        $("#msg").keydown(function (e) {

           // console.log(e);
            if( counter > 0 && e.keyCode != 8)
            {
                counter--;

                $("#charReminder").text(counter);
            }
            if( counter <= 0 && e.keyCode!=8)
            {

                counter -- ;
                
                $("#charReminder").text("your available character finished ");

            }
            
            if( e.keyCode == 8  && counter < 100 )
            {
                
                counter ++ ;
                if(counter > 0)
                {
                    $("#charReminder").text(counter);
                }
               
                
            }
            //  if( counter <= 0 && e.keyCode == 8)
            // {
           
            //     counter ++ ;
            //     $("#charReminder").text(counter);
            // }
            
        });

    }
    reminderChar();





});
