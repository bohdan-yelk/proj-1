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

  $(".burger").click(function() {
    $('#header').toggleClass("active")
  })

  $('#mainSlider').slick({
    infinite: true,
    dots: true,
    arrows: true,
    customPaging : function(slider, i) {
      var title = $(slider.$slides[i]).find('.item').data('title');
      return '<a class="pager__item"> '+title+' </a>';
  }
  })

  /* --------  Apply global listeners  -------- */
})(window.jQuery)
