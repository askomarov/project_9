
$(document).ready(function () {
	$('.slider').slick({
		arrows: true, 		// стрелочки - видно или нет
		// dots:true, 			 //пагинация - точки списков
		// adaptiveHeight:true,
		centerMode: true,
		slidesToShow: 1,		 //кол-во слайдов на экране
		slidesToScroll: 1,	 // кол-во слайдов для прокрутки
		// меняент отсчет в breakpoint на обратный, т.е при больше чем указано в настройках будет срабатывать
	});

});

$(document).ready(function () {
	$('.slider-quotes__body').slick({
		arrows: true, 		// стрелочки - видно или нет
		// dots:true, 			 //пагинация - точки списков
		// adaptiveHeight:true,
		centerMode: true,
		slidesToShow: 1,		 //кол-во слайдов на экране
		slidesToScroll: 1,	 // кол-во слайдов для прокрутки
		// меняент отсчет в breakpoint на обратный, т.е при больше чем указано в настройках будет срабатывать
	});

});




/*

		speed:1000, 		 //1000ms - 1 секунда
		easing:'ease', 		//тип анимации
		infinite:true, 		//бесконенчная прокрутка выкл/включена
		initialSlide:0,		 //слайд по умолчанию для показа (первый 0)
		autoplay:false,		 //включение автолистывания слайда
		autoplaySpeed:300,	 //время переключения в милисекунд
		pauseOnFocus:true, 	//задержка при наведении
		pauseOnHover:true,
		pauseOnDotsHover:true,
		draggable:true, 	//листание слайдов мышкой на ПК
		swipe:true, 		//листание на тачскрине,телефон, планшет
		touchTreshhold:10,  //кол-во образных часйтей которые надо пролистать чтоб слайд перелистнулся. увеличивая число уменьшается колво усилий
		touchMove:true,  	//возможность перетягивать слайды не перелистывая
		waitForAnimate:true, //возможность перелистывать слайды только после завершения анимации
		centerMode:false, 	 // активный слайд встает в центр
		variableWidth:false, //каждый слайд занимаем ширину своего содержимого (хорошо работает с включеным centrmode)
		rows:1,         	//ряды
		slidesPerRow:1,
		vertical:false,    //делает вертикальный слайд
		verticalSwiping:false, //смахивание по свайпу
		fade:false,   			//слайды появляются, а не двигаются

			responsive: [
    	{
      	breakpoint: 768,
      	settings: {
        	slidesToShow: 2,
        	slidesToScroll: 1,
        	infinite: true,
        	dots: true
      	}},{
      	breakpoint:480,
      	settings: {
      		slidesToShow: 1,
      		slidesToScroll: 1,
      		dots: false
      			}
      }],

      	mobileFirst:false,

   */;