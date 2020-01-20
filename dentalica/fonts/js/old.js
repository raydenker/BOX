 // // Убираем видео
  // let iframe = document.querySelector('iframe');
  // if ($(window).width() < 991) {
  //   iframe.innerHTML = '';
  // }


  // // Обработка форм 
  // // Внесение текста в инпут формы

  // // let inpQwestion = document.querySelector('.qwestion_hidden'),
  // //   inpPlan = document.querySelector('.plan__hidden');
  // // $('a.contact__btn_header').click(function () {
  // //   let parent = $(this).attr('data-target');
  // //   console.log(parent);
  // //   inpQwestion.value = parent;
  // // })
  // // $('a.offer__btn').click(function () {
  // //   let parent = $(this).attr('data-target');
  // //   console.log(parent);
  // //   inpPlan.value = parent;
  // // })
  // // $('a.what__btn').click(function () {
  // //   let parent = $(this).attr('data-target');
  // //   console.log(parent);
  // //   inpPlan.value = parent;
  // // })



  // //Запуск обработки формы и валидации


  // $('[data-submit]').on('click', function (event) {
  //   event.preventDefault();
  //   $(this).parent('form').submit();
  // })
  // $.validator.addMethod(
  //   "regex",
  //   function (value, element, regexp) {
  //     let re = new RegExp(regexp);
  //     return this.optional(element) || re.test(value);
  //   },
  //   "Пожалуйста, проверьте ввведённые поля"
  // );

  // // Функция валидации и вывода сообщений
  // function valEl(el) {

  //   el.validate({
  //     rules: {
  //       tel: {
  //         required: true,
  //         regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
  //       },
  //       name: {
  //         required: true
  //       }

  //     },
  //     messages: {
  //       tel: {
  //         required: 'Поле обязательно для заполнения',
  //         regex: 'Телефон может содержать символы + - ()'
  //       },
  //       name: {
  //         required: 'Поле обязательно для заполнения',
  //       }
  //     },

  //     // Начинаем проверку id="" формы
  //     submitHandler: function (form) {
  //       $('#loader').fadeIn();
  //       let $form = $(form);
  //       let $formId = $(form).attr('id');
  //       switch ($formId) {
  //         // Если у формы id="plan-form" - делаем:
  //         case 'plan-form':
  //           $.ajax({
  //               type: 'POST',
  //               url: $form.attr('action'),
  //               data: $form.serialize(),
  //             })
  //             .always(function (response) {
  //               setTimeout(function () {
  //                 $('#loader').fadeOut();
  //               }, 800);
  //               location.href = 'http://quiz.andrey-kochurov.ru/new';
  //             });
  //           break;
  //           // Если у формы id="qwestion_form" - делаем:
  //         case 'qwestion_form':
  //           $.ajax({
  //               type: 'POST',
  //               url: $form.attr('action'),
  //               data: $form.serialize(),
  //             })
  //             .always(function (response) {
  //               setTimeout(function () {
  //                 $('#loader').fadeOut();
  //               }, 800);
  //               location.href = 'http://quiz.andrey-kochurov.ru/new';
  //             });
  //           break;
  //       }
  //       return false;
  //     }
  //   })
  // }

  // //Запускаем механизм валидации форм, если у них есть класс.js - form
  // $('.js-form').each(function () {
  //   valEl($(this));
  // });
  // // Маска телефона
  // $('[name="tel"]').mask("+3(809) 999-9999");

  // // Плавная прокрутка
  // jQuery('.go-up, .menu__link, .logo, .contact__btn, .offer__btn, .step__btn, .what__btn').click(function () { // ловим клик по ссылке с классом go_to
  //   let scroll_el = jQuery(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
  //   if (jQuery(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
  //     jQuery('html, body').animate({
  //       scrollTop: jQuery(scroll_el).offset().top
  //     }, 500); // анимируем скроолинг к элементу scroll_el
  //   }
  //   return false; // выключаем стандартное действие
  // });
  // // WOW эффекты

  // new WOW().init();
  
  // // Parallax


  // if ($(window).width() > 991) {
  //   let scene = document.getElementById('scene');
  //   let parallaxInstance = new Parallax(scene);
  //   let scene1 = document.getElementById('scene_show');
  //   let parallaxInstance1 = new Parallax(scene1);
  //   let scene2 = document.getElementById('scene_step');
  //   let parallaxInstance2 = new Parallax(scene2);
  //   let scene3 = document.getElementById('scene_what');
  //   let parallaxInstance3 = new Parallax(scene3);
  //   let scene4 = document.getElementById('scene_reviews');
  //   let parallaxInstance4 = new Parallax(scene4);
  // }


  // // swiper slaider
  // let swiper = new Swiper('.swiper-container', {

  //   loop: true,
  //   slidesPerView: 2,
  //   spaceBetween: 40,
  //   centeredSlides: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 10,
  //     },
  //     640: {
  //       slidesPerView: 1,
  //       spaceBetween: 0,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //       spaceBetween: 10,
  //     },
  //     992: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     1024: {
  //       slidesPerView: 2,
  //       spaceBetween: 30,
  //     },
  //   }
  // });

  // //  Счётчик

  // function CountdownTimer(elm, tl, mes) {
  //   this.initialize.apply(this, arguments);
  // }
  // CountdownTimer.prototype = {
  //   initialize: function (elm, tl, mes) {
  //     this.elem = document.getElementById(elm);
  //     this.tl = tl;
  //     this.mes = mes;
  //   },
  //   countDown: function () {
  //     let timer = '';
  //     let today = new Date();
  //     let day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
  //     let hour = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  //     let min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
  //     let sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
  //     let me = this;

  //     if ((this.tl - today) > 0) {
  //       timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">Дня</div><span class="number day">' + day + '</span></span>';
  //       timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">Часы</div><span class="number hour">' + hour + '</span></span>';
  //       timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">Минуты</div><span class="number min">' + this.addZero(min) + '</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">Секунд</div><span class="number sec">' + this.addZero(sec) + '</span></span>';
  //       this.elem.innerHTML = timer;
  //       tid = setTimeout(function () {
  //         me.countDown();
  //       }, 10);
  //     } else {
  //       this.elem.innerHTML = this.mes;
  //       return;
  //     }
  //   },
  //   addZero: function (num) {
  //     return ('0' + num).slice(-2);
  //   }
  // }

  // function CDT() {

  //   // Set countdown limit
  //   let tl = new Date('2019/10/08 23: 00: 00');

  //   // You can add time's up message here
  //   let timer = new CountdownTimer('CDT', tl, '<span class="number-wrapper"><div class="line"></div><span class="number end">Время вышло</span></span>');
  //   timer.countDown();
  // }
  // window.onload = function () {
  //   CDT();
  // }

  // // Cлайдер круговой

  // $.fn.rotateSlider = function (opt) {
  //   let $this = this,
  //     itemClass = opt.itemClass || 'rotateslider-item',
  //     arrowClass = opt.arrowClass || 'js-rotateslider-arrow',
  //     $item = $this.find('.' + itemClass),
  //     $arrow = $this.find('.' + arrowClass),
  //     itemCount = $item.length;

  //   let defaultIndex = 0;
  //   changeIndex(defaultIndex);

  //   $arrow.on('click', function () {
  //     let action = $(this).data('action'),
  //       nowIndex = $item.index($this.find('.now'));

  //     if (action == 'next') {
  //       if (nowIndex == itemCount - 1) {
  //         changeIndex(0);
  //       } else {
  //         changeIndex(nowIndex + 1);
  //       }
  //     } else if (action == 'prev') {
  //       if (nowIndex == 0) {
  //         changeIndex(itemCount - 1);
  //       } else {
  //         changeIndex(nowIndex - 1);
  //       }
  //     }
  //   });

  //   function sliderRotate() {
  //     let action = 'next',
  //       nowIndex = $item.index($this.find('.now'));

  //     if (action == 'next') {
  //       if (nowIndex == itemCount - 1) {
  //         changeIndex(0);
  //       } else {
  //         changeIndex(nowIndex + 1);
  //       }
  //     }
  //   }

  //   setInterval(sliderRotate, 5000);

  //   function changeIndex(nowIndex) {
  //     // clern all class
  //     $this.find('.now').removeClass('now');
  //     $this.find('.next').removeClass('next');
  //     $this.find('.prev').removeClass('prev');
  //     if (nowIndex == itemCount - 1) {
  //       $item.eq(0).addClass('next');
  //     }
  //     if (nowIndex == 0) {
  //       $item.eq(itemCount - 1).addClass('prev');
  //     }

  //     $item.each(function (index) {
  //       if (index == nowIndex) {
  //         $item.eq(index).addClass('now');
  //       }
  //       if (index == nowIndex + 1) {
  //         $item.eq(index).addClass('next');
  //       }
  //       if (index == nowIndex - 1) {
  //         $item.eq(index).addClass('prev');
  //       }
  //     });
  //   }


  // };
  // $('#slider').rotateSlider({

  // });

  
  // // Появление кнопок меню и Вверх при скролле

  // jQuery(window).scroll(function () {

  //   if (jQuery(this).scrollTop() > 200) {
  //     jQuery('.top__menu').addClass('sticky');
  //   } else {
  //     jQuery('.top__menu').removeClass('sticky');
  //   }
  // });


  // //Mеню

  // jQuery('.menu__burger').click(function () {
  //   $(".overlay").toggleClass("open_menu");
  //   // this line ▼ prevents content scroll-behind
  //   $("body").toggleClass("locked");
  //   jQuery('.menu__line_first').toggleClass('line__transform_first');
  //   jQuery('.menu__line_second').toggleClass('line__transform_second');
  //   jQuery('.menu__line_third').toggleClass('line__transform_third');

  //   $(".overlay").click(function () {
  //     $(".overlay").removeClass("open_menu");
  //     jQuery('.menu__line_first').removeClass('line__transform_first');
  //     jQuery('.menu__line_second').removeClass('line__transform_second');
  //     jQuery('.menu__line_third').removeClass('line__transform_third');

  //   });
  //   $(".menu__link").click(function () {
  //     $(".overlay").removeClass("open_menu");
  //     jQuery('.menu__line_first').removeClass('line__transform_first');
  //     jQuery('.menu__line_second').removeClass('line__transform_second');
  //     jQuery('.menu__line_third').removeClass('line__transform_third');
  //   });

  // });

  // $('[data-fancybox="gallery"]').fancybox({

  //   // Бесконечная прокрутка галереи
  //   loop: true,
  //   thumbs: {
  //     autoStart: true
  //   }

  // });