<?php
/**
 * The template for displaying archive pages
 * Template Name: Архив Услуг
 *
 */

get_header();
?>
   <!-- 
        *************
        services section
        *************
     -->
     <section class="services service_page" id="service_page">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="services__title ">
                        Наши услуги
                    </h2>
                    <p class="services__offer">
                        Помагают сохранить здоровье и красоту вашей улыбки, без боли и нервов
                    </p>
                </div>
                <div class="col-12">
                    <div class="row services__list">
                        <div class="col-lg-4 col-sm-6">
                            <div class="services__item">
                                <p class="services__number">
                                    01
                                </p>
                                <div class="services__wrapimg">
                                    <img src="img/services_icon1.svg" alt="" class="services__icon">
                                </div>
                                <h4 class="services__subtitle">
                                    Гигиенические<br> процедуры
                                </h4>
                                <p class="services__info">
                                    Гигиеническая чистка и отбеливание зубов по инновационным технологиям

                                </p>
                                <a href="service-single.html" class="services__link">
                                    Подробнее
                                </a>
                            </div>

                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="services__item">
                                <p class="services__number">
                                    02
                                </p>
                                <div class="services__wrapimg">
                                    <img src="img/services_icon2.svg" alt="" class="services__icon">
                                </div>
                                <h4 class="services__subtitle">
                                    Детская<br> стоматология
                                </h4>
                                <p class="services__info">
                                    Лечения зубок деткам любого возраста
                                </p>
                                <a href="service-single.html" class="services__link">
                                    Подробнее
                                </a>
                            </div>

                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="services__item">
                                <p class="services__number">
                                    03
                                </p>
                                <div class="services__wrapimg">
                                    <img src="img/services_icon3.svg" alt="" class="services__icon">
                                </div>
                                <h4 class="services__subtitle">
                                    Хирургическая стоматология
                                </h4>
                                <p class="services__info">
                                    Имплантация, лечение воспалений, удаление зубов...
                                </p>
                                <a href="service-single.html" class="services__link">
                                    Подробнее
                                </a>
                            </div>

                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="services__item">
                                <p class="services__number">
                                    04
                                </p>
                                <div class="services__wrapimg">
                                    <img src="img/services_icon4.svg" alt="" class="services__icon">
                                </div>
                                <h4 class="services__subtitle">
                                    Все виды<br> ортодонтии
                                </h4>
                                <p class="services__info">
                                    Исправление прикуса, брекеты, пластины, капы
                                </p>
                                <a href="service-single.html" class="services__link">
                                    Подробнее
                                </a>
                            </div>

                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="services__item">
                                <p class="services__number">
                                    05
                                </p>
                                <div class="services__wrapimg">
                                    <img src="img/services_icon5.svg" alt="" class="services__icon">
                                </div>
                                <h4 class="services__subtitle">
                                    Терапевтическое лечение
                                </h4>
                                <p class="services__info">
                                    Лечение кариеса, реставрация зубов, восстановление зубов...
                                </p>
                                <a href="service-single.html" class="services__link">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="services__item">
                                <p class="services__number">
                                    06
                                </p>
                                <div class="services__wrapimg">
                                    <img src="img/services_icon6.svg" alt="" class="services__icon">
                                </div>
                                <h4 class="services__subtitle">
                                    Ортопедическое лечение
                                </h4>
                                <p class="services__info">
                                    Протезирование, импланты, временные конструкции...
                                </p>
                                <a href="service-single.html" class="services__link">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>


    <!-- 
        *************
        team section
        *************
     -->
    <!-- <section class="team" id="team">
        <div class="team__content">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-lg-3">
                        <div class="team__main">
                            <h2 class="team__title">
                                Наши врачи - специалисты
                                с опытом
                            </h2>
                            <p class="team__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat convallis elit quis
                                laoreet. Maecenas malesuada enim vel posuere efficitur. Phasellus gravida, arcu eget
                                molestie
                                laoreet, ex eros mollis purus, ut sagittis velit turpis at sem.
                            </p>
                            <a href="" class="team__link">
                                Узнать о нас больше
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-container team__slider">
            <div class="swiper-wrapper team_wrapper">
                <div class="swiper-slide team__slide">
                    <div class="team__item">
                        <img src="img/team.jpg" alt="" class="team__img">
                        <div class="team__info">
                            <span class="team__name">
                                Петр Иванович
                            </span>
                            <span class="team__experience">
                                Стаж: 10 лет
                            </span>
                        </div>
                        <a href="doctor-single.html" class="team__link team__link_wh">
                            <span>Узнать больше</span>
                        </a>

                    </div>
                </div>
                <div class="swiper-slide team__slide">
                    <div class="team__item">
                        <img src="img/team.jpg" alt="" class="team__img">
                        <div class="team__info">
                            <span class="team__name">
                                Петр Иванович
                            </span>
                            <span class="team__experience">
                                Стаж: 10 лет
                            </span>
                        </div>
                        <a href="doctor-single.html" class="team__link team__link_wh">
                            <span>Узнать больше</span>
                        </a>

                    </div>
                </div>
                <div class="swiper-slide team__slide">
                    <div class="team__item">
                        <img src="img/team.jpg" alt="" class="team__img">
                        <div class="team__info">
                            <span class="team__name">
                                Петр Иванович
                            </span>
                            <span class="team__experience">
                                Стаж: 10 лет
                            </span>
                        </div>
                        <a href="doctor-single.html" class="team__link team__link_wh">
                            <span>Узнать больше</span>
                        </a>

                    </div>
                </div>
                <div class="swiper-slide team__slide">
                    <div class="team__item">
                        <img src="img/team.jpg" alt="" class="team__img">
                        <div class="team__info">
                            <span class="team__name">
                                Петр Иванович
                            </span>
                            <span class="team__experience">
                                Стаж: 10 лет
                            </span>
                        </div>
                        <a href="doctor-single.html" class="team__link team__link_wh">
                            <span>Узнать больше</span>
                        </a>

                    </div>
                </div>
                <div class="swiper-slide team__slide">
                    <div class="team__item">
                        <img src="img/team.jpg" alt="" class="team__img">
                        <div class="team__info">
                            <span class="team__name">
                                Петр Иванович
                            </span>
                            <span class="team__experience">
                                Стаж: 10 лет
                            </span>
                        </div>
                        <a href="doctor-single.html" class="team__link team__link_wh">
                            <span>Узнать больше</span>
                        </a>

                    </div>
                </div>
                <div class="swiper-slide team__slide">
                    <div class="team__item">
                        <img src="img/team.jpg" alt="" class="team__img">
                        <div class="team__info">
                            <span class="team__name">
                                Петр Иванович
                            </span>
                            <span class="team__experience">
                                Стаж: 10 лет
                            </span>
                        </div>
                        <a href="doctor-single.html" class="team__link team__link_wh">
                            <span>Узнать больше</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
        <a href="doctors.html" class="team__all">
            Все доктора
        </a>
    </section> -->

    <!-- 
        *************
        beauty section
        *************
     -->
    <section class="beauty" id="beauty">
        <div class="container">
            <h3 class="beauty__title">
                Здоровые зубы – залог красоты и долгой жизни!
            </h3>
            <div class="beauty__info">
                <p>
                    В стоматологической клинике гарантируют оперативную сверхточную диагностику и профессиональное
                    лечение. У нас предоставлены услуги разного вида, начиная с профилактики, гигиены, отбеливания,
                    заканчивая более серьезными процедурами – имплантацией, протезированием зубов.
                </p>
                <p>
                    Вы можете полностью доверить свое здоровье профессионалам – ортодонтам, ортопедам,
                    хирургам-имплантологам, терапевтам, которые позаботятся о здоровье ваших зубов и гарантируют
                    качественное, быстрое лечение. Владелец клиники и опытный имплантолог, челюстно-лицевой хирург
                    Кирилл Беспалов заботится о каждом своем клиенте!
                </p>
            </div>
        </div>
    </section>
    <!-- 
    *************
form-section
*************
 -->
    <section class="form-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p class="contacts__offer contacts__offer_other">
                        Запишись на <span>бесплатную консультацию</span> в один клик!
                    </p>
                </div>
                <div class="col-md-6">
                    <form class="contacts__form">
                        <input type="tel" name="tel" placeholder="Ваш телефон" class="contacts__input">
                        <button class="contacts__btn btn">
                            Записаться
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>


<?php get_footer();