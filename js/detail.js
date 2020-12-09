
  //ハンバーガーメニューの開閉
  $('.burger-btn').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $('.burger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');
  });


  /*スライド画像部分の定義*/
  const slider = new Swiper ('#slider', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplay:3000
  });
  /*スライド画像サムネイル部分の定義*/
  const thumbs = new Swiper('#thumbs', {
    centeredSlides: true,
    spaceBetween: 10,
    slidesPerView: "auto",
    touchRatio: 0.2,
    slideToClickedSlide: true
  });
  /*それぞれの動作に合わせて動く*/
  slider.params.control = thumbs;
  thumbs.params.control = slider;
