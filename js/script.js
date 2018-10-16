
if (matchMedia('(max-width: 1170px)').matches) {
  // ウィンドウサイズが1170px以下のとき
  
    //メニューボタン開閉
    $(function(){
      $('#menu-btn').click(function(){
        $(this).next('ul').slideToggle();
      });
    });

    $(function(){
      $('#menu-btn + ul a[href^=#]').click(function() {
        $('#menu-btn + ul').slideUp();
      });
    });

    //スムーズスクロール
    $(function(){
      $.smooziee({
        offset: -60,
        speed: 500
      });
    });
  
} else {
  // ウィンドウサイズが1171px以上のとき
  
    //スムーズスクロール
    $(function(){
      $.smooziee({
        offset: -80,
        speed: 500
      });
    });
  
}



//YouTube設定
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'PO0pdfw6vWM',
    wmode: 'transparent',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerReady(event) {
  event.target.playVideo();
  event.target.mute();
}
function onPlayerStateChange(event) {
}


//コンテンツhover
jQuery('.top-contents a').on('mouseenter touchstart', function(){
  jQuery(this).addClass('hover');
}).on('mouseleave touchend', function(){
  jQuery(this).removeClass('hover');
});


//SNSシェアボタン

$(function(){
  var currenturl = location.pathname;
  var target_facebook = document.getElementById('share_facebook');
  target_facebook.href = 'http://www.facebook.com/share.php?u=https://skyvillage.co.jp' + currenturl;
  var target_twitter = document.getElementById('share_twitter');
  target_twitter.href = 'http://twitter.com/share?url=https://skyvillage.co.jp' + currenturl;
  var target_line = document.getElementById('share_line');
  target_line.href = 'http://line.me/R/msg/text/https://skyvillage.co.jp' + currenturl;
});
