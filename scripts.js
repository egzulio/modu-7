$(function(){
var carouselList = $('.slides');
  
    
function changeRightSlide(){
    carouselList.animate({'margin-left': -800}, 500, moveFirstSlide);
  };

function changeLeftSlide(){
    moveLastSlide();
    carouselList.animate({'margin-left': 0}, 500);
  };

function moveFirstSlide(){
    var firstItem = carouselList.find('li:first');
    var lastItem = carouselList.find('li:last');
    $('.carousel2 li.active').removeClass('active').next().add('.carousel2 li:first').last().addClass('active');
    lastItem.after(firstItem);
    carouselList.css({marginLeft: 0});
  };

function moveLastSlide(){
    var firstItem = carouselList.find('li:first');
    var lastItem = carouselList.find('li:last');
    $('.carousel2 li.active').removeClass('active').prev().add('.carousel2 li:last').first().addClass('active');
    firstItem.before(lastItem);
    carouselList.css({marginLeft: -800});
  };
    
    
    
    
       $('.right-btn').click(function(){
    changeRightSlide();
  });

  $('.left-btn').click(function(){
    changeLeftSlide();
  });