(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=5)})([,,,,,function(a,b,c){c(7),a.exports=c(6)},function(){},function(a,b,c){'use strict';c.r(b);var d=function(){for(var a,b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];return(a=console).info.apply(a,['%c[DEBUG]','color: #ffaa00'].concat(c))};(function(a){function b(a){var b=a.find('.js-videoIframe'),c=b.data('src');a.addClass('videoWrapperActive'),b.attr('src',c)}d('Ready'),a(document).ready(function(){a('.burger').click(function(){a('#header').toggleClass('active')}),a('#mainSlider').slick({infinite:!0,dots:!0,arrows:!0,customPaging:function(b,c){var d=a(b.$slides[c]).find('.item').data('title');return'<a class="pager__item"> '+d+' </a>'}}),a('#miss-slider').slick({infinite:!0,dots:!1,arrows:!0});var b=a('#news-slider'),c=a('.progress'),d=a('.slider__label');b.on('beforeChange',function(a,b,e,f){var g=100*(f/(b.slideCount-1));c.css('background-size',+g+'% 100%').attr('aria-valuenow',g),d.text(g+'% completed')}),a('#news-slider').slick({dots:!1,arrows:!0,slidesToShow:2,variableWidth:!0,swipeToSlide:!0,responsive:[{breakpoint:1280,settings:{variableWidth:!1}},{breakpoint:1025,settings:{slidesToShow:1,variableWidth:!1}}]}),a(document).on('click','.category-link',function(b){b.preventDefault(),a('html, body').animate({scrollTop:a(a.attr(this,'href')).offset().top},1e3)}),a('ul.tabs-list').on('click','li:not(.active)',function(){a(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs-content').removeClass('active').eq(a(this).index()).addClass('active')})}),a(document).on('click','.js-videoPoster',function(c){c.preventDefault();var d=a(this),e=d.closest('.js-videoWrapper');b(e)}),a('#back').hover(function(){a('.not-found').addClass('active')},function(){a('.not-found').removeClass('active')})})(window.jQuery)}]);