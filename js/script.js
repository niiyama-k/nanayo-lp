$(function () {
  $('.l-header__nav__btn').on("click", function () {
      console.log("Click")
      $('.l-header__nav__list').toggleClass('open');  // メニューにopenクラスをつけ外しする
  });
});