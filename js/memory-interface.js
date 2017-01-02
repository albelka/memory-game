var Game = require('./../js/memory.js').gameModule;

$(document).ready(function() {
  $('.clickable').submit(function(event){
    event.preventDefault();
    $(".frontcard").show();
    

  })
})
