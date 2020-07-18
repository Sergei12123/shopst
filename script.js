let q=0, b=0;
let a=[0,0,0,0];
let c=[[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]];
let f=[0,0,0,0];
let qw=[0,0,0,0,0];
let tovari=[];
let kolt=0;
let itg=0;
let buyt='';
tovari[0]={
  id:0,
  name:'Кольцевая лампа 26 см ',
  kol:0,
  price:2990
}
tovari[1]={
  id:1,
  name:'Кольцевая лампа 36 см',
  kol:0,
  price:3990

}
tovari[2]={
  id:2,
  name:'Кольцевая лампа-осьминог',
  kol:0,
  price:1490

}
tovari[3]={
  id:3,
  name:'Кольцевая-прищепка',
  kol:0,
  price:490

}
 $(document).ready(function(){
   $('.obertkaotovi').toggle();
   $('.lin1').toggle();
   $('.lin3').toggle();

   $('.obertkamiddostavka1').toggle();
   $('.kortov0,.kortov1,.kortov2,.kortov3').hide();
   $('.obertkamidoplata1').toggle();
   $('.a0,.a1,.a2,.a3,.a4').toggle();

   let imgi=document.querySelectorAll('#img1,#img2,#img3');
   let pnulli=document.querySelectorAll('.p0');


   for(let i=0;i<imgi.length;i++)
    {
      $(pnulli[i]).css("background-color","#ffea7e");
      $(imgi[i]).toggle();
    }
    $("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
        setTimeout(function(){
          $(id).click();
          $(id).mouseover();
        },500);

    });






    $('.otov').mouseover(function(){

      if(q==0)
      {
        b=1;
        q=1;
        $(this).animate({width:329},200);
        $(this).children('#lin1').delay(200).slideToggle();
        $(this).children('#lin3').delay(200).slideToggle();

      }

    });
    $('.otov').mouseout(function(event) {
      e = event.toElement || event.relatedTarget;
        if (e.parentNode == this ||
                         e == this) {
      return;
  }
      if(q!=2&&b==1)
      {
        q=0;
        $(this).delay(500).animate({width:170},300);

        $(this).children('#lin1').slideToggle();
        $(this).children('#lin3').slideToggle();
      }
    });


    $('.otov').click(function(){


      if(q==1)
      {
        q=2;
        $(this).next().slideDown(300);
        $(this).parent().parent().animate({height:821},300);
        $(this).parent().animate({height:620},300);
        $(this).children('#lin1').slideUp(300);
        $(this).children('#lin3').slideUp(300);
      }
      else
      {
        if(q==2)
        {
          q=1;
          $(this).next().slideUp(300);
          $(this).parent().parent().animate({height:579},300);
          $(this).parent().animate({height:365},300);
          $(this).children('#lin1').slideDown(300);
          $(this).children('#lin3').slideDown(300);
        }
      }


    });
    $('.arrow-2').click(function(){

        let timg=this.parentElement.parentElement.parentElement.id;
        let nimgid,imgid,pidn,pid;
        let numt=Number(timg.substring(timg.length-1,timg.length));
        for(let i=0;i<4;i++)
        {
          if(c[numt][i]==1)
          {
            c[numt][i]=0;
            c[numt][(i+1)%4]=1;
            nimgid='#img'+String((i+1)%4);
            imgid='#img'+String(i);
            pidn='.obertkap'+String((i+1)%4);
            pid='.obertkap'+String(i);
            break;
          }
        }
        $(this).parent().parent().children('.polosi').children(pidn).children().css("background-color",'#ffea7e');

        $(this).parent().parent().children('.polosi').children(pid).children().css("background-color",'black');
        $(this).parent().parent().children(imgid).toggle('slide', {
            direction: 'left'
        }, 300);
        $(this).parent().parent().children(nimgid).toggle('slide', {
          direction: 'right'
        }, 300,function(){
        });
    });



    $('.arrow-1').click(function(){

        let timg=this.parentElement.parentElement.parentElement.id;
        let nimgid,imgid,pidn,pid;
        let numt=Number(timg.substring(timg.length-1,timg.length));
        for(let i=0;i<4;i++)
        {
          if(c[numt][i]==1)
          {
            c[numt][i]=0;
            c[numt][(i-1)<0?3:(i-1)]=1;
            nimgid='#img'+String((i-1)<0?3:(i-1));
            imgid='#img'+String(i);
            pidn='.obertkap'+String((i-1)<0?3:(i-1));
            pid='.obertkap'+String(i);
            break;
          }
        }
        $(this).parent().parent().children('.polosi').children(pidn).children().css("background-color",'#ffea7e');

        $(this).parent().parent().children('.polosi').children(pid).children().css("background-color",'black');
        $(this).parent().parent().children(imgid).toggle('slide', {
            direction: 'right'
        }, 300);
        $(this).parent().parent().children(nimgid).toggle('slide', {
          direction: 'left'
        }, 300,function(){
        });
    });


    $('.obertkap0,.obertkap1, .obertkap2, .obertkap3').click(function(){


      let timg=this.parentElement.parentElement.parentElement.id;
     let numt=Number(timg.substring(timg.length-1,timg.length));
      let nump=Number(this.id.substring(this.id.length-1,this.id.length));

     a[numt]=nump;

      $(this).children().css("background-color","#ffea7e");
      for(let i=0;i<4;i++)
      {

        if(c[numt][i]==1)
         {
            let nimgid='#img'+String(nump);
            let imgid='#img'+String(i);
            if(i!=nump)
            {

              let pidp=".obertkap"+String(i);
              c[numt][i]=0;
              $(this).parent().children(pidp).children().css("background-color","black");
            }
            if(i<nump)
            {

              $(this).parent().parent().children(imgid).toggle('slide', {
                  direction: 'left'
              }, 300);

              $(this).parent().parent().children(nimgid).toggle('slide', {
                  direction: 'right'
              }, 300,function(){
              });
            }
            if(i>nump)
            {
              $(this).parent().parent().children(imgid).toggle('slide', {
                  direction: 'right'
              }, 300);

              $(this).parent().parent().children(nimgid).toggle('slide', {
                  direction: 'left'
              }, 300,function(){
              });
            }
       }
     }
      c[numt][nump]=1;


    });

      $('.obertkap0,.obertkap1, .obertkap2, .obertkap3').hover(function(){
      $(this).children().css("background-color","#ffea7e")
    },function(){
      let timg=this.parentElement.parentElement.parentElement.id;
      let numt=Number(timg.substring(timg.length-1,timg.length));
      let nump=Number(this.id.substring(this.id.length-1,this.id.length));
      if(c[numt][nump]==1)
      {
        return;
      }
    $(this).children().css("background-color","black")
  });



      $('.topfaq,.topgarant').hover(function(){
        $(this).css({'background-color':'white','border-color':'white','color':'black'});
      },function(){

        if(f[Number(this.id)]==1)
        {
          return;
        }
        $(this).css({'background-color':'black','border-color':'black','color':'white'});
      });



      $('.topoplata,.topdostavka').hover(function(){

        $(this).css({'background-color':'white'});
        $(this).children().css({'color':'black'});
      },function(){

        if(f[Number(this.id)]==1)
        {
          return;
        }
        $(this).css({'background-color':'black'});
        $(this).children().css({'color':'white'});
      });



      $('.topgarant').click(function(){

        if(f[1]==1)
        {
          f[1]=0;

          $('.pochtalogo,.cdeklogo,.peklogo').delay(600).animate({width:'0'},0);
          $('.obertkamiddostavka1').toggle('slide', {
              direction: 'left'
          }, 300);
          $('.middostavka3').delay(300).animate({height:'0', right:'0'},300);
          $('.dostavkatext').delay(300).animate({height:'0'},300);

            $('.middostavka2').delay(300).animate({height:'0',marginLeft:'0'},300);
            setTimeout(function(){
              $('.topdostavka').css({'background-color':'black'});
              $('.topdostavka').children().css({'color':'white'});

              $('.middostavka').css('height','0');
            },600);


        }
        if(f[2]==1)
        {


          f[2]=0;
          $('.oplatatext').delay(300).animate({height:'0'},300);
          $('.midoplata2').delay(300).animate({height:'0',marginRight:'0'},300);
          $('.mastercardlogo,.visalogo,.mirlogo,.nallogo').delay(600).animate({width:'0'},0);
          $('.obertkamidoplata1').toggle('slide', {
              direction: 'right'
          }, 300);
          $('.midoplata3').delay(300).animate({height:'0',left:'0'},300);
          setTimeout(function(){
            $('.midoplata').css('height','0')
            $('.topoplata').css({'background-color':'black'});
            $('.topoplata').children().css({'color':'white'});
          },600);
        }
        if(f[3]==1)
        {
          f[3]=0;

          $('.midfaq').delay(300).animate({
            borderLeftWidth:'0',
            borderBottomWidth:'0'

          },300);

          $('.midfaq1').delay(300).animate({
            height:"0"
          },300);
          $('.midfaqimg').animate({
            width:"0"
          },300);
          setTimeout(function(){
            $('.allmidfaq').css('height','0');
            $('.topfaq').css({'background-color':'black','color':'white','border-color':'black'});

          },600);

        }
        if(f[0]==0)
        {
            f[0]=1;
            setTimeout(function(){$('.allmidgarant').css('height','100%')},600);
            $('.midgarant').delay(600).animate({
              borderRightWidth:'1005px',
              borderBottomWidth:'1005px'

            },300);

            $('.midgarant1').delay(600).animate({
              height:"1050px"
            },300);
            $('.textgarant').delay(600).animate({height:'100vh'},300);
            $('.obertkaimggarant').delay(900).animate({width:'200vw'},300);
            $('.zakazzvonka').children('#but').css({'background-color':'black','color':'white'});

        }

      });

      $('.topgarant').click();


      $('.topdostavka').click(function(){

        if(f[0]==1)
        {

          f[0]=0;

          $('.obertkaimggarant').animate({width:0},300);
          $('.midgarant1').delay(300).animate({
            height:0
          },300);
          $('.midgarant').delay(300).animate({
            borderRightWidth:0,
            borderBottomWidth:0
          },300);
          $('.textgarant').delay(300).animate({height:'0'},300);
          setTimeout(function(){
            $('.topgarant').css({'background-color':'black','border-color':'black','color':'white'});
            $('.allmidgarant').css('height','0');
          },600);

        }
        if(f[2]==1)
        {


          f[2]=0;
          $('.oplatatext').delay(300).animate({height:'0'},300);
          $('.midoplata2').delay(300).animate({height:'0',marginRight:'0'},300);
          $('.mastercardlogo,.visalogo,.mirlogo,.nallogo').delay(600).animate({width:'0'},0);
          $('.obertkamidoplata1').toggle('slide', {
              direction: 'right'
          }, 300);
          $('.midoplata3').delay(300).animate({height:'0',left:'0'},300);
          setTimeout(function(){
            $('.midoplata').css('height','0')
            $('.topoplata').css({'background-color':'black'});
            $('.topoplata').children().css({'color':'white'});
          },600);
        }
        if(f[3]==1)
        {
          f[3]=0;

          $('.midfaq').delay(300).animate({
            borderLeftWidth:'0',
            borderBottomWidth:'0'

          },300);

          $('.midfaq1').delay(300).animate({
            height:"0"
          },300);
          $('.midfaqimg').animate({
            width:"0"
          },300);
          setTimeout(function(){
            $('.allmidfaq').css('height','0');
            $('.topfaq').css({'background-color':'black','color':'white','border-color':'black'});

          },600);

        }
        if(f[1]==0)
        {
          setTimeout(function(){$('.middostavka').delay(600).css('height','100%')},600);

          f[1]=1;
          $('.middostavka2').delay(600).animate({height:'100%',marginLeft:'46vh'},300);
          $('.pochtalogo,.cdeklogo,.peklogo').delay(600).animate({width:'10vw'},300);
          $('.obertkamiddostavka1').delay(900).toggle('slide', {
              direction: 'left'
          }, 300);
          $('.middostavka3').delay(600).animate({height:'100%',right:'-46vh'},300);
          $('.dostavkatext').delay(600).animate({height:'100vh'},300);


        }

      });




      $('.topoplata').click(function(){
        if(f[0]==1)
        {

          f[0]=0;

          $('.obertkaimggarant').animate({width:0},300);
          $('.midgarant1').delay(300).animate({
            height:0
          },300);
          $('.midgarant').delay(300).animate({
            borderRightWidth:0,
            borderBottomWidth:0
          },300);
          $('.textgarant').delay(300).animate({height:0},300);
          setTimeout(function(){
            $('.topgarant').css({'background-color':'black','border-color':'black','color':'white'});
            $('.allmidgarant').css('height','0');
          },600);
        }
        if(f[1]==1)
        {
          f[1]=0;

          $('.pochtalogo,.cdeklogo,.peklogo').delay(600).animate({width:'0'},0);
          $('.obertkamiddostavka1').toggle('slide', {
              direction: 'left'
          }, 300);
          $('.middostavka3').delay(300).animate({height:'0', right:'0'},300);
          $('.dostavkatext').delay(300).animate({height:'0'},300);

            $('.middostavka2').delay(300).animate({height:'0',marginLeft:'0'},300);
            setTimeout(function(){
              $('.topdostavka').css({'background-color':'black'});
              $('.topdostavka').children().css({'color':'white'});

              $('.middostavka').css('height','0');
            },600);


        }

        if(f[3]==1)
        {
          f[3]=0;

          $('.midfaq').delay(300).animate({
            borderLeftWidth:'0',
            borderBottomWidth:'0'

          },300);

          $('.midfaq1').delay(300).animate({
            height:"0"
          },300);
          $('.midfaqimg').animate({
            width:"0"
          },300);
          setTimeout(function(){
            $('.allmidfaq').css('height','0');
            $('.topfaq').css({'background-color':'black','color':'white','border-color':'black'});

          },600);

        }
        if(f[2]!=1)
        {
          setTimeout(function(){$('.midoplata').delay(600).css('height','100%')},600);

          f[2]=1;
          $('.oplatatext').delay(600).animate({height:'100%'},300);
          $('.midoplata2').delay(600).animate({height:'100%',marginRight:'46vh'},300);
          $('.mastercardlogo,.visalogo,.mirlogo,.nallogo').delay(600).animate({width:'10vw'},300);
          $('.obertkamidoplata1').delay(900).toggle('slide', {
              direction: 'right'
          }, 300);
          $('.midoplata3').delay(600).animate({height:'100%',left:'-46vh'},300);


        }
      });



      $('.topfaq').click(function(){
        if(f[0]==1)
        {

          f[0]=0;

          $('.obertkaimggarant').animate({width:0},300);
          $('.midgarant1').delay(300).animate({
            height:0
          },300);
          $('.midgarant').delay(300).animate({
            borderRightWidth:0,
            borderBottomWidth:0
          },300);
          $('.textgarant').delay(300).animate({height:0},300);
          setTimeout(function(){
            $('.topgarant').css({'background-color':'black','border-color':'black','color':'white'});
            $('.allmidgarant').css('height','0');
          },600);
        }
        if(f[1]==1)
        {
          f[1]=0;

          $('.pochtalogo,.cdeklogo,.peklogo').delay(600).animate({width:'0'},0);
          $('.obertkamiddostavka1').toggle('slide', {
              direction: 'left'
          }, 300);
          $('.middostavka3').delay(300).animate({height:'0', right:'0'},300);
          $('.dostavkatext').delay(300).animate({height:'0'},300);

            $('.middostavka2').delay(300).animate({height:'0',marginLeft:'0'},300);
            setTimeout(function(){
              $('.topdostavka').css({'background-color':'black'});
              $('.topdostavka').children().css({'color':'white'});

              $('.middostavka').css('height','0');
            },600);


        }
        if(f[2]==1)
        {


          f[2]=0;
          $('.oplatatext').delay(300).animate({height:'0'},300);
          $('.midoplata2').delay(300).animate({height:'0',marginRight:'0'},300);
          $('.mastercardlogo,.visalogo,.mirlogo,.nallogo').delay(600).animate({width:'0'},0);
          $('.obertkamidoplata1').toggle('slide', {
              direction: 'right'
          }, 300);
          $('.midoplata3').delay(300).animate({height:'0',left:'0'},300);
          setTimeout(function(){
            $('.midoplata').css('height','0')
            $('.topoplata').css({'background-color':'black'});
            $('.topoplata').children().css({'color':'white'});
          },600);
        }
        if(f[3]==0)
        {
          f[3]=1;
          setTimeout(function(){$('.allmidfaq').css('height','100%')},600);
          $('.midfaq').delay(600).animate({
            borderLeftWidth:'92vh',
            borderBottomWidth:'92vh'

          },300);

          $('.midfaq1').delay(600).animate({
            height:"92vh"
          },300);
          $('.midfaqimg').delay(900).animate({
            width:"75vw"
          },300);


        }
      });
      $(".q1,.q2,.q3,.q4,.q0").click(function() {
          let numq=Number(this.id.slice(-1));



          for(let i=0;i<5;i++)
          {
            if(qw[i]==1)
            {

              if(i!=numq)
              {
                qw[i]=0;
                qw[numq]=1;
                $('.a'+String(i)).slideUp(300);
                $('.q'+String(i)).children('.arrow-4').toggleClass("open");
                $(this).next().slideDown(300);
                $(this).children('.arrow-4').toggleClass("open");
                return;
              }
              if(i==numq)
              {
                qw[numq]=0;

                $(this).next().slideUp(300);
                $(this).children('.arrow-4').toggleClass("open");
                return;
              }
            }

          }

          qw[numq]=1;
          $(this).next().slideDown(300);
          $(this).children('.arrow-4').toggleClass("open");


      });
      $('.buy').click(function(){
        let kortov='.kortov'+this.parentElement.id.slice(-1);

        if(tovari[Number(this.parentElement.id.slice(-1))].kol==0)
        {

          $(kortov).show();
        }

        $(kortov).children('.pluskortov').click();


        let nt=this.parentElement.id.slice(-1);
      });









      $('.minikorz').click(function(){
		      $('.maxkorz').show();
		        return false;
      });
      $(document).keydown(function(e) {
		      if (e.keyCode === 27)
          {
			         e.stopPropagation();
			         $('.maxkorz').hide();
		      }
	    });

    	$('.maxkorz').click(function(e) {
    		if ($(e.target).closest('.korz').length == 0) {
    			$(this).hide();
    		}
    	});

      $('.pluskortov').click(function(){

        tovari[Number(this.parentElement.id.slice(-1))].kol++;
        itg=0;
        for(let i=0;i<tovari.length;i++)
        {
          itg+=tovari[i].kol*tovari[i].price;
        }

        $('.itogoleft').text('Итого: '+String(itg)+'₽');
        $(this).prev().children('.topkolprice').children().text(String(tovari[Number(this.parentElement.id.slice(-1))].kol));
        $(this).prev().children('.botkolprice').text(String(tovari[Number(this.parentElement.id.slice(-1))].price*tovari[Number(this.parentElement.id.slice(-1))].kol)+'₽');
        kolt=0;
        for (let i=0;i<tovari.length;i++)
        {
          kolt+=tovari[i].kol;
        }
        $('.kolp').text(String(kolt));
      })
      $('.minkortov').click(function(){
        if(tovari[Number(this.parentElement.id.slice(-1))].kol>0)
        {
          tovari[Number(this.parentElement.id.slice(-1))].kol--;
        }
        itg=0;
        for(let i=0;i<tovari.length;i++)
        {
          itg+=tovari[i].kol*tovari[i].price;
        }

        $('.itogoleft').text('Итого: '+String(itg)+'₽');
        $(this).next().children('.topkolprice').children().text(String(tovari[Number(this.parentElement.id.slice(-1))].kol));
        $(this).next().children('.botkolprice').text(String(tovari[Number(this.parentElement.id.slice(-1))].price*tovari[Number(this.parentElement.id.slice(-1))].kol)+'₽');
        kolt=0;
        for (let i=0;i<tovari.length;i++)
        {
          kolt+=tovari[i].kol;
        }
        $('.kolp').text(String(kolt));

      })
      $('p input').click(function(){
        let itg=0;
        for(let i=0;i<tovari.length;i++)
        {
          buyt+=String(tovari[i].name)+" "+String(tovari[i].kol)+"шт // ";
          itg+=tovari[i].kol*tovari[i].price;
        }
        buyt+=itg;
         $("input[type=hidden]").val(buyt);
      });

      $(window).on('scroll', function() {
        if( window.innerWidth >= 1800 ){
          var scrollCoef = 0.0035;

        	$('.minikorz').css({
        		opacity: 9 - $(window).scrollTop() * scrollCoef
        	})
        }

});




});
