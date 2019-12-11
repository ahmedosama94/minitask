// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import '../stylesheets/application'

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");
require("jquery");

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

function ready() {
  console.log('ready');

  $('.color').click(function() {
    const id = $(this)[0].dataset.id;
    $.ajax({
      method: 'GET',
      url: `/colors/${id}/votes`
    }).done((data) => {
      $(`#color-${id}`).html(data.votes);
    });
  });

  $('.total').click(function() {
    let total = 0;

    for(const vote of $('.votes')) {
      total += parseInt(vote.innerText || '0');
    }

    $('#total').html(total);
  });
}

$(document).on('turbolinks:load', ready);
