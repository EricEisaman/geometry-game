if(window.config.login.fontFamily.length > 0){
  let link = document.createElement('link');
  //<link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet" type="text/css">
  link.rel="stylesheet";
  link.type="text/css";
  link.href=`https://fonts.googleapis.com/css?family=${window.config.login.fontFamily}`;
  document.querySelector('head').appendChild(link);
  document.querySelector('.login-background').style.fontFamily=`"${window.config.login.fontFamily}",sans-serif`;
  document.fonts.ready.then(()=>{
    $('.login').show();
    $('#un').focus();
  });
}else {
  $('.login').show();
  $('#un').focus();
}
document.querySelector('.login').style.color=window.config.login.fontColor;

$('.error-page').hide(0);

// $('.login-button , .no-access').click(function(){
//   $('.login').slideUp(500);
//   $('.error-page').slideDown(1000);
// });

$('.try-again').click(function(){
  $('.error-page').hide(0);
  $('.login').slideDown(1000);
  $('#un').focus();
});

$('.login-background').css('background',window.config.login.overlayColor);

$('#game-name').html(window.config.gameName);
if(window.config.login.backgroundColor != "")$('.login-form').css('background',window.config.login.formColor);



$('.login-button').click((e)=>{
  e.preventDefault();
  if($('#un').val()=="" || $('#pw').val()=="")return;
  window.socket.login({
    name:$('#un').val(),
    pw:$('#pw').val()
  });
  $('.login').slideUp(500);
  $('#un').val('');
  $('#pw').val('');
  if(window.config.releasePointerLockOnUI){
          let c = document.getElementsByTagName('canvas')[0];
          c.requestPointerLock();
        }
});

window.login.fail = msg=>{
  $('.try-again').html(msg);
  $('.error-page').slideDown(1000);
}

$('#pw').on('keydown',e=>{
  if(e.keyCode == 13 && $('#un').val() != '' && $('#pw').val() != ''){
   window.socket.login({
      name:$('#un').val(),
      pw:$('#pw').val()
    });
    $('.login').slideUp(500);
    $('#un').val('');
    $('#pw').val('');
    if(window.config.releasePointerLockOnUI){
          let c = document.getElementsByTagName('canvas')[0];
          c.requestPointerLock();
        }
  }
});