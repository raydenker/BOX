jQuery(document).ready(function () {
// lazy Image
  const imageObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const lazyImage = entry.target
            console.log("lazy loading ", lazyImage)
            lazyImage.src = lazyImage.dataset.src
            lazyImage.classList.remove("lzy_img");
            imgObserver.unobserve(lazyImage);
        }
    })
});
const arr = document.querySelectorAll('img.lzy_img')
arr.forEach((v) => {
    imageObserver.observe(v);
})

// Анимация цифр
if($('.counter_number').length){
  let show = true;
  let countbox = ".counter_number";  
  $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа      
      let w_height = $(window).height(); // Высота окна браузера
      let d_height = $(document).height(); // Высота всего документа
      let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками     
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.rev__count').css('opacity', '1');
          $('.counter_number').css('opacity', '1');
          $('.counter_number').spincrement({
              thousandSeparator: "",
              duration: 2000
          });
          show = false;
      }
  });
}

  if ($('.team__slider').length) {
    let elementOffset = $('.team__main').offset().left + document.querySelector('.team__main').offsetWidth + 30;

    console.log(elementOffset);
    let teamSlider = new Swiper('.team__slider', {
      spaceBetween: 30,
      // slidesPerView: 3,
      slidesPerView: 'auto',
      autoHeight: true,

      slidesOffsetBefore: elementOffset,
      slidesOffsetAfter: elementOffset,
      pagination: {
        el: '.team__pagination',
        clickable: true,

      },
      breakpoints: {
        300: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          autoplay: true,
        },
        575: {
          spaceBetween: 30,
          autoplay: false,
        },
      },
    });



    let slideChange,
      slideOffset = $('.team_wrapper').offset().left - 10;
    teamSlider.on('slideChangeTransitionEnd', function () {
      slideChange = $('.team_wrapper').offset().left;
      if (slideChange < slideOffset) {
        $('.team__main').addClass('team__main_change');
      } else {
        $('.team__main').removeClass('team__main_change');
      }
    });
    teamSlider.on('setTranslate', function () {
      slideChange = $('.team_wrapper').offset().left;
      if (slideChange < slideOffset) {
        $('.team__main').addClass('team__main_change');
      } else {
        $('.team__main').removeClass('team__main_change');
      }
    });
  }

  if ($('.doctor__slider').length) {
    let revSlider = new Swiper('.doctor__slider', {
      spaceBetween: 30,
      slidesPerView: 3,
      autoHeight: true,

      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },

    });
  }



  if ($('.rev__slider').length) {
    let revSlider = new Swiper('.rev__slider', {
      spaceBetween: 30,
      slidesPerView: 2,
      autoHeight: true,
      pagination: {
        el: '.rev_pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },

    });
  }
  if ($('.reward__list').length) {
    let revSlider = new Swiper('.reward__list', {
      spaceBetween: 30,
      slidesPerView: 7,
      autoHeight: true,
      loop: true,
      pagination: {
        el: '.rev_pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      breakpoints: {
        300: {
          centeredSlides: true,
          slidesPerView: 2,
          spaceBetween: 0,
        },
        400: {
          centeredSlides: false,
          slidesPerView: 4,
          spaceBetween: 30,
        },
        500: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        700: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
      },


    });
  }

  $('.menu__burger').click(function () {
    $('.nav').addClass('nav__open');
  });
  $('.close__menu').click(function () {
    $('.nav').removeClass('nav__open');
  });

  if ($('[data-fancybox="sertificate__gallary"]').length) {
    $('[data-fancybox="sertificate__gallary"]').fancybox({
      // Бесконечная прокрутка галереи
      loop: true,

    });
  }
  if ($('[data-fancybox="doctor_sertificate"]').length) {
    $('[data-fancybox="doctor_sertificate"]').fancybox({
      // Бесконечная прокрутка галереи
      loop: true,

    });
  }

  $('.nav__item_service').click(function (event) {
    let target = event.target;
    if (target.tagName == 'LI') {
      $(this).toggleClass('nav__item_service_open');
      $('.sub__menu').slideToggle();
    }
  });


  // $('.nav__item_service').find|('a').click(function () {
  //   $(this).toggleClass('nav__item_service_open');
  //   $('.sub__menu').slideToggle();
  // });


  $('[name="tel"]').mask("+38(099) 999-99-99")

});

//   if ($('.header__slider').length > 0) {
//     let swiper = new Swiper('.header__slider', {
//       slidesPerView: 1,
//       simulateTouch: false,
//       effect: 'fade',
//       speed: 1000,
//       navigation: {
//         nextEl: '.header_next',
//         prevEl: '.header_prev',
//       },

//     });
//   }


//   if ($('.service__slider').length > 0) {
//     let swiper = new Swiper('.service__slider', {
//       slidesPerView: 3,
//       loop: true,
//       spaceBetween: 15,
//       autoHeight: true,
//       navigation: {
//         nextEl: '.service_swiper_arrow_next',
//         prevEl: '.service_swiper_arrow_prev',
//       },
//       pagination: {
//         el: '.service_swiper_pagination',
//         clickable: true,
//         type: 'fraction',

//       },
//       breakpoints: {
//         300: {
//           slidesPerView: 1,
//           spaceBetween: 0,
//         },
//         700: {
//           slidesPerView: 2,
//           spaceBetween: 15,
//         },
//         992: {
//           slidesPerView: 3,
//           spaceBetween: 8,
//         },
//         1200: {
//           slidesPerView: 3,
//           spaceBetween: 15,
//         },


//       }
//     });
//   }

//   if ($('.filter__swiper').length) {
//     let galleryThumbs = new Swiper('.filter__swiper', {
//       slidesPerView: 'auto',
//       spaceBetween: 15,
//       pagination: {
//         el: '.swiper-pagination',
//         type: 'progressbar',
//       },
//     });
//   }

//   if ($('.service__swiper').length) {
//     let elementOffset = $('.service__title_single').offset().left;
//     let serviceWrapper = new Swiper('.service__swiper', {
//       slidesPerView: 'auto',
//       spaceBetween: 15,
//       slidesOffsetBefore: elementOffset,
//       // loop:false,
//       slidesOffsetAfter: elementOffset,
//       navigation: {
//         prevEl: '.service_prev',
//         nextEl: '.service_next',
//       },
//       breakpoints: {
//         300: {
//           slidesPerView: 1,
//           spaceBetween: 15,
//           slidesOffsetAfter: 0,
//           slidesOffsetBefore: 0,
//           autoHeight: true,
//         },
//         576: {

//           autoHeight: false,
//           slidesPerView: 'auto',
//           spaceBetween: 15,
//         },
//       }
//     });
//   }

//   if ($('.porfolio__swiper').length) {
//     let elementOffset = $('.portfolio__title').offset().left;
//     let serviceWrapper = new Swiper('.porfolio__swiper', {
//       slidesPerView: 'auto',
//       spaceBetween: 15,
//       slidesOffsetBefore: elementOffset,
//       // loop:false,
//       slidesOffsetAfter: elementOffset,
//       navigation: {
//         prevEl: '.portfolio__prev',
//         nextEl: '.portfolio__next',
//       },
//       breakpoints: {
//         300: {
//           slidesPerView: 1,
//           spaceBetween: 15,
//           slidesOffsetAfter: 0,
//           slidesOffsetBefore: 0,
//           autoHeight: true,
//         },
//         576: {

//           autoHeight: false,
//           slidesPerView: 'auto',
//           spaceBetween: 15,
//         },
//       }
//     });
//   }

//   if ($('.comments__thumbs').length) {
//     let galleryThumbs = new Swiper('.comments__thumbs', {
//       spaceBetween: 10,
//       slidesPerView: 3,
//       centeredSlides: true,
//       slideToClickedSlide: true,
//       // freeMode: true,
//       // watchSlidesVisibility: true,
//       // watchSlidesProgress: true,
//       loop: true,
//       navigation: {
//         nextEl: '.comments__next',
//         prevEl: '.comments__prev',
//       },
//       breakpoints: {
//         300: {
//           slidesPerView: 1,
//           spaceBetween: 0,
//         },
//         576: {

//           slidesPerView: 2,
//           spaceBetween: 10,
//           centeredSlides: false,
//         },
//         768: {

//           slidesPerView: 2,
//           spaceBetween: 10,
//           centeredSlides: false,
//         },
//         992: {
//           slidesPerView: 3,
//           spaceBetween: 10,
//           centeredSlides: true,
//         },

//       },
//       // thumbs: {
//       //   swiper: galleryTop,
//       // },
//     });
//     let galleryTop = new Swiper('.comments__swiper', {
//       spaceBetween: 10,
//       loop: true,
//       navigation: {
//         nextEl: '.comments__next',
//         prevEl: '.comments__prev',
//       },
//       thumbs: {
//         swiper: galleryThumbs,
//       },
//     });
//   }

//   if ($('.step__slider').length) {
//     let stepSlider = new Swiper('.step__slider', {
//       spaceBetween: 0,
//       slidesPerView: 1,
//       // loop: true,
//       setTransition: 4000,
//       navigation: {
//         nextEl: '.step__arrow_next',
//         prevEl: '.step__arrow_prev',
//       },
//       effect: 'fade',
//       autoHeight: true,
//       thumbs: {
//         swiper: stepThumbs,
//       },
//     });
//     let stepThumbs = new Swiper('.step__thumb', {
//       autoHeight: true,
//       spaceBetween: 0,
//       slidesPerView: 2,
//       loop: true,
//       centeredSlides: true,
//       navigation: {
//         nextEl: '.step__arrow_next',
//         prevEl: '.step__arrow_prev',
//       },
//       pagination: {
//         el: '.step__thumb_pagination',
//         clickable: true,
//         renderBullet: function (index, className) {
//           if (index < 9) {
//             return '<span class="' + className + '">' + 0 + (index + 1) + '</span>';
//           } else {
//             return '<span class="' + className + '">' + (index + 1) + '</span>';
//           }

//         },
//       },
//       breakpoints: {
//         300: {
//           slidesPerView: 2,
//           spaceBetween: 10,
//           centeredSlides: true,
//         },
//         567: {
//           slidesPerView: 2,
//           spaceBetween: 15,
//           centeredSlides: true,
//         },
//         768: {
//           // direction: 'vertical',
//           slidesPerView: 1,
//           spaceBetween: 0,
//           centeredSlides: true,
//         },
//         992: {
//           direction: 'vertical',
//           slidesPerView: 2,
//           spaceBetween: 0,
//           centeredSlides: true,
//         },

//       },
//       thumbs: {
//         swiper: stepSlider,
//       },

//     });

//   }




//   $('.about__btn').click(function () {
//     $('.about__text').toggleClass('about__text_open');
//     $(this).text($(this).text() == 'Скрыть' ? 'Подробнее' : 'Скрыть');
//   });

//   if ($("[data-fancybox='ach__gallary']").length) {
//     $("[data-fancybox='ach__gallary']").fancybox({});
//   }

//   if ($("[data-fancybox='news_gallary']").length) {
//     $("[data-fancybox='news_gallary']").fancybox({});
//   }


//   //Tabs Box
//   // if ($('.design').length) {
//   //   $('.design .tab-buttons .tab-btn').on('click', function (e) {
//   //     e.preventDefault();

//   //     // Плавная прокрутка

//   //     if ($(window).width() < 768) {

//   //       // return false;

//   //     };



//   //     let target = $($(this).attr('data-tab'));

//   //     if ($(target).is(':visible')) {
//   //       return false;
//   //     } else {
//   //       target.parents('.design').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
//   //       $(this).addClass('active-btn');
//   //       target.parents('.design').find('.tabs-content').find('.tab').fadeOut(0);
//   //       target.parents('.design').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
//   //       $(target).fadeIn(0);
//   //       $(target).addClass('active-tab animated fadeIn');
//   //       let margin = -50;
//   //       let scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
//   //       if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
//   //         $('html, body').animate({
//   //           scrollTop: $(scroll_el).offset().top + margin + "px"
//   //         }, 500); // анимируем скроолинг к элементу scroll_el
//   //       }
//   //     }
//   //   });
//   // }
//   $('.nav__item_region').click(function () {
//     $(this).find('.span__open').toggleClass('span__open_active');
//     $(this).toggleClass('menu__item_active');
//     $(this).find('.region__list').slideToggle();
//   });
//   $('.nav__item_service').click(function () {
//     $(this).find('.span__open').toggleClass('span__open_active');
//     $(this).toggleClass('menu__item_active');
//     $(this).find('.service__wrapper').slideToggle();
//   });


//   $('.burger__menu_mob').click(function () {
//     $('.menu__block').addClass('menu__block_open');
//   });
//   $('.close__menu').click(function () {
//     $('.menu__block').removeClass('menu__block_open');
//   });


//   $('.calc__btn').click(function () {
//     $('.calc__popap').fadeToggle();
//     $('.popup__bg').fadeToggle();
//     $('.close_popup').click(function () {
//       $('.calc__popap').fadeOut();
//       $('.popup__bg').fadeOut();      
//     });
//     $('.popup__bg').click(function () {
//       $('.calc__popap').fadeOut();
//       $('.popup__bg').fadeOut();      
//     });

//   });

//   $('.callback__btn, .btn__offer ').click(function () {
//     $('.consult_popup').fadeToggle();
//     $('.popup__bg').fadeToggle();
//     $('.close_popup').click(function () {
//       $('.consult_popup').fadeOut();
//       $('.popup__bg').fadeOut();      
//     });
//     $('.popup__bg').click(function () {
//       $('.consult_popup').fadeOut();
//       $('.popup__bg').fadeOut();      
//     });

//   });

//   /*
// swiper__service
//   */

//   if ($('.swiper__service').length) {
//     let serviceBlock = new Swiper('.swiper__service', {
//       freeMode: true,
//       // watchSlidesVisibility: true,
//       spaceBetween: 15,
//       slidesPerView: 2,
//       centeredSlides: true,
//       slideToClickedSlide: true,     
//     });

//   }



// if($('#panorama').length){
//   let viewer = pannellum.viewer('panorama', {
//     "default": {
//         "autoLoad": true,
//         "type": "equirectangular",
//         "firstScene": "scene1",
//         "sceneFadeDuration": 1000,
//     },
//     "scenes": {
//         "scene1": {
//             "type": "equirectangular",
//             "panorama": "../img/panorama1.jpg",
//             "autoRotate": -3,
//             "autoLoad": true,
//             "mouseZoom": false,
//             "autoRotateInactivityDelay": 200,
//             "showFullscreenCtrl": false,
//             "showControls": false,
//             "sceneFadeDuration": 1000,
//             "hfov":100,
//         },
//         "scene2": {
//             "type": "equirectangular",
//             "panorama": "../img/panorama2.jpg",
//             "autoLoad": true,
//             "autoRotate": 3,
//             "mouseZoom": false,
//             "autoRotateInactivityDelay": 200,
//             "showFullscreenCtrl": false,
//             "showControls": false,
//             "sceneFadeDuration": 1000,
//             "hfov":100,
//         },
//         "scene3": {
//             "type": "equirectangular",
//             "panorama": "../img/panorama3.jpg",
//             "autoLoad": true,
//             "autoRotate": 3,
//             "mouseZoom": false,
//             "autoRotateInactivityDelay": 200,
//             "showFullscreenCtrl": false,
//             "showControls": false,
//             "sceneFadeDuration": 1000,
//             "hfov":100,
//         },
//     }

// });
// }


// $(".header_swiper_arrow").click(function () {
//             let slideActive = document.querySelectorAll('.header__item');
//               for (let i = 0; i < slideActive.length; i++) { 
//                 if($(slideActive[i]).hasClass('swiper-slide-active')){
//                   let sceneActive;
//                   if(i == 1){
//                      sceneActive ="scene"+(i+1);
//                      console.log(sceneActive);
//                      viewer.loadScene(sceneActive);  
//                   } 
//                   else{
//                      sceneActive ="scene"+(i+1);
//                      console.log(sceneActive);
//                      viewer.loadScene(sceneActive);  
//                   }             
//                 }              
//             }

// });

//  jQuery(window).scroll(function () {
// if (jQuery(this).scrollTop() > 650) {
//       jQuery('.header__top').addClass('header__top_fixed');
//     } else {
//       jQuery('.header__top').removeClass('header__top_fixed');
//     }
//   });

//   // $('.burger__menu').mouseenter(function () {
//   //     $(this).next('.menu__list').addClass('menu__list_open');
//   //     $(this).next('.menu__list').mouseenter(function () {
//   //         $(this).stop().addClass('menu__list_open');
//   //     });
//   //     $(this).next('.menu__list').mouseleave(function () {
//   //         $(this).stop().removeClass('menu__list_open');
//   //     });
//   // });
//   // $('.menu__list').mouseleave(function () {
//   //     $(this).next('.menu__list').removeClass('menu__list_open');
//   // });






//   // let swiper = new Swiper('.comments__slide', {
//   //   // slidesPerView: 'auto',
//   //   slidesPerView: 1,
//   //   // centeredSlides: true,
//   //   spaceBetween: 30,
//   //   navigation: {
//   //     nextEl: '.portfolio_swiper_arrow_next',
//   //     prevEl: '.portfolio_swiper_arrow_prev',
//   //   },
//   // });

//   // WOW эффекты

//   // new WOW().init();


//   // $(".info__btn, .segments__btn, .work__btn, .review-section__btn, .rate__btn, .sale__btn, .offer__btn").click(function () {
//   //   $(".consultation").addClass("consultation_open");
//   //   $(".consultation").css({
//   //     'top': $(window).scrollTop() + 100
//   //   });
//   //   $('.popup__bg').fadeIn();
//   //   $('.popup__bg').click(function () {
//   //     $('.popup__bg').fadeOut();
//   //     $(".consultation").removeClass("consultation_open");
//   //   });
//   //   $('.consultation__close').click(function () {
//   //     $('.popup__bg').fadeOut();
//   //     $(".consultation").removeClass("consultation_open");
//   //   });
//   // });


//   // $('.review-section__link, .review-page__link').click(function () {
//   //   $(".message").addClass("consultation_open");
//   //   $(".message").css({
//   //     'top': $(window).scrollTop() + 100
//   //   });
//   //   $('.popup__bg').fadeIn();
//   //   $('.popup__bg').click(function () {
//   //     $('.popup__bg').fadeOut();
//   //     $(".message").removeClass("consultation_open");
//   //   });
//   //   $('.message__close').click(function () {
//   //     $('.popup__bg').fadeOut();
//   //     $(".message").removeClass("consultation_open");
//   //   });

//   // })


//   // Показ выпадающего меню

//   // if ($(window).width() < 992) {
//   //   $('.nav__item_service ').click(function () {
//   //     $('.nav__item_service >ul').toggleClass('nav__item_open');
//   //   });

//   // };

//   // // Показ меню
//   // $('.menu__burger').click(function () {
//   //   $('.nav').toggleClass('nav__menu_open');
//   //   $('.nav').toggleClass('nav__menu_close');


//   //   $('.block_white').toggleClass('block_white_open');
//   //   $('.block_white').toggleClass('block_white_clos');
//   //   jQuery('.menu__line_first').toggleClass('line__transform_first');
//   //   jQuery('.menu__line_second').toggleClass('line__transform_second');
//   //   jQuery('.menu__line_third').toggleClass('line__transform_third');
//   // });





//   // if ($('[data-fancybox="gallery"]').length) {
//   //   $('[data-fancybox="gallery"]').fancybox({
//   //     // Бесконечная прокрутка галереи
//   //     loop: true,
//   //     thumbs: {
//   //       autoStart: true
//   //     }
//   //   });
//   // }
//   // //Запуск обработки формы и валидации


//   // $('[data-submit]').on('click', function (event) {
//   //   event.preventDefault();
//   //   $(this).parent('form').submit();
//   // })
//   // $.validator.addMethod(
//   //   "regex",
//   //   function (value, element, regexp) {
//   //     let re = new RegExp(regexp);
//   //     return this.optional(element) || re.test(value);
//   //   },
//   //   "Пожалуйста, проверьте ввведённые поля"
//   // );

//   // // Функция валидации и вывода сообщений
//   // function valEl(el) {

//   //   el.validate({
//   //     rules: {
//   //       tel: {
//   //         required: true,
//   //         regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
//   //       },
//   //       name: {
//   //         required: true
//   //       }

//   //     },
//   //     messages: {
//   //       tel: {
//   //         required: 'Поле обязательно для заполнения',
//   //         regex: 'Телефон может содержать символы + - ()'
//   //       },
//   //       name: {
//   //         required: 'Поле обязательно для заполнения',
//   //       }
//   //     },

//   //     // Начинаем проверку id="" формы
//   //     submitHandler: function (form) {
//   //       $('#loader').fadeIn();
//   //       let $form = $(form);
//   //       let $formId = $(form).attr('id');
//   //       switch ($formId) {
//   //         // Если у формы id="plan-form" - делаем:
//   //         case 'consultation__form':
//   //           $.ajax({
//   //               type: 'POST',
//   //               url: $form.attr('action'),
//   //               data: $form.serialize(),
//   //             })
//   //             .always(function (response) {
//   //               setTimeout(function () {
//   //                 $('#loader').fadeOut();
//   //               }, 800);
//   //               setTimeout(function () {
//   //                 $('#overlay').fadeIn();
//   //                 $form.trigger('reset');
//   //                 jQuery('.thancks__text').fadeIn();
//   //               }, 1100);
//   //               $('#overlay').on('click', function (e) {
//   //                 $(this).fadeOut();
//   //               });
//   //               jQuery('.thancks__text').fadeIn();
//   //             });
//   //           break;
//   //           // Если у формы id="qwestion_form" - делаем:
//   //         case 'message__form':
//   //           $.ajax({
//   //               type: 'POST',
//   //               url: $form.attr('action'),
//   //               data: $form.serialize(),
//   //             })
//   //             .always(function (response) {
//   //               jQuery('.thancks__text').fadeIn();
//   //               setTimeout(function () {
//   //                 $('#loader').fadeOut();
//   //               }, 800);
//   //               setTimeout(function () {
//   //                 $('#overlay').fadeIn();
//   //                 $form.trigger('reset');
//   //                 jQuery('.thancks__text').fadeIn();
//   //               }, 1100);
//   //               $('#overlay').on('click', function (e) {
//   //                 $(this).fadeOut();

//   //               });

//   //             });
//   //           break;
//   //         case 'consult_form':
//   //           $.ajax({
//   //               type: 'POST',
//   //               url: $form.attr('action'),
//   //               data: $form.serialize(),
//   //             })
//   //             .always(function (response) {
//   //               setTimeout(function () {
//   //                 $('#loader').fadeOut();
//   //               }, 800);
//   //               setTimeout(function () {
//   //                 $('#overlay').fadeIn();
//   //                 $form.trigger('reset');
//   //                 jQuery('.thancks__text').fadeIn();
//   //               }, 1100);
//   //               $('#overlay').on('click', function (e) {
//   //                 $(this).fadeOut();
//   //               });
//   //               jQuery('.thancks__text').fadeIn();
//   //             });
//   //           break;
//   //       }
//   //       return false;
//   //     }
//   //   })
//   // }

//   // //Запускаем механизм валидации форм, если у них есть класс.js - form
//   // $('.js-form').each(function () {
//   //   valEl($(this));
//   // });
//   // jQuery(window).scroll(function () {

//   //   if (jQuery(this).scrollTop() > 200) {
//   //     jQuery('.head').addClass('fixed_color');
//   //   } else {
//   //     jQuery('.head').removeClass('fixed_color');
//   //   }
//   // });


// });