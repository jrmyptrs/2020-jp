const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.clientX - 15,
    y: e.clientY - 15
  })
  TweenMax.to($smallBall, .1, {
    x: e.clientX - 4,
    y: e.clientY - 4
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}

document.addEventListener("DOMContentLoaded", function() {

  const wrap = document.querySelector('.jp-container__wrap');
  const nav = document.querySelector('.jp-nav');

  document.getElementById('toggleNav').addEventListener('click', function () {
    if (this.classList.contains('toggled')) {
      this.classList.remove('toggled');
      nav.classList.remove("open");
      wrap.classList.remove("shifted");
    } else {
      this.classList.add('toggled');
      nav.classList.add("open");
      wrap.classList.add("shifted");
    }
  });

  $(document).keyup(function(e) {
    if (e.key === "Escape" && nav.classList.contains('open')) {
      const btn = document.querySelector('button.toggle-nav');
      btn.click()
    }
  });

  var figure = $(".video-hover").hover( hoverVideo, hideVideo );

  function hoverVideo(e) {
    let currentVideo = $(this).data("hover");
    $('#'+currentVideo).addClass('active').get(0).play();
    $('.jp-hero__video').addClass('playing');
  }

  function hideVideo(e) {
    let currentVideo = $(this).data("hover");
    $('#'+currentVideo).removeClass('active').get(0).pause();
    $('.jp-hero__video').removeClass('playing');
  }
});
