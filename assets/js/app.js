const message1 = "Happy Valentine’s Day!";
const message2 = "I love my Big Cat. You make me so happy!";
const reset = () => {
  $('.message1').fadeOut(800);
  $('.message2').fadeOut(800);
  setTimeout(reload, 800);
}

const reload = () => {
  location.reload();
}

$(document).ready(function(){

  $(function () {
    $("button").one("click", function() {
    $('.message1').append(message1);
    $('.message1').textillate({
      loop: false,
      in: {
        effect: 'fadeIn'
        }
    })

    $('.message1').on('inAnimationEnd.tlt', function() {
      $('.message2').append(message2);
      $('.message2').textillate({
        loop: false,
        in: {
          effect: 'fadeIn'
        }
      })
    });

    $('.message2').on('inAnimationEnd.tlt', function() {
      setTimeout(reset, 1000);
    });
  })
})

});

