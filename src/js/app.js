'use strict'

/**
 * Uncomment @babel/polyfill if you use some features from ES5+ (for IE11 compatibility)
 * E.g. Promise, Map, Set and so on
 */
// import '@babel/polyfill'

/**
 * Import utils
 */
import { log } from './utils'

/**
 * jQuery code
 */
;($ => {
  log('Ready')

  $(document).ready(function() {

  // mobile menu

  $(".burger").click(function() {
    $('#header').toggleClass("active")
  })

  //main slider

  $('#mainSlider').slick({
    infinite: true,
    dots: true,
    arrows: true,
    customPaging : function(slider, i) {
      var title = $(slider.$slides[i]).find('.item').data('title');
      return '<a class="pager__item"> '+title+' </a>';
  }
  })

  $('#miss-slider').slick({
    infinite: true,
    dots: false,
    arrows: true
  })

  //news-slider and scroll bar 

  let $slider = $('#news-slider')
  let $progressBar = $('.progress')
  let $progressBarLabel = $( '.slider__label' );

  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    let calc = ((nextSlide) / (slick.slideCount-1)) * 100

    $progressBar.css('background-size', + calc + '% 100%').attr('aria-valuenow', calc)

    $progressBarLabel.text(calc + '% completed')
  })

  $('#news-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 2,
    variableWidth: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          variableWidth: false
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          variableWidth: false
        }
      }
    ]
  })

  // anchor links 
  
  $(document).on('click', '.category-link', function (event) {
    event.preventDefault()

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000)
  })

  //tabs 

  $('ul.tabs-list').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active')
  })

  })

  // custom youtube play-button

  $(document).on('click','.js-videoPoster',function(e) {
    e.preventDefault()
    var poster = $(this)
    var wrapper = poster.closest('.js-videoWrapper')
    videoPlay(wrapper)
  })
  

  function videoPlay(wrapper) {
    var iframe = wrapper.find('.js-videoIframe')
    var src = iframe.data('src')
    wrapper.addClass('videoWrapperActive')
    iframe.attr('src',src)
  }

  /* --------  Apply global listeners  -------- */
})(window.jQuery)
