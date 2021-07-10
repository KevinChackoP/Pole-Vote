$(document).ready(function () {
  $.ajax({
    url: 'http://K_programs\poleVote(AJAX_testing)\poleVote.json\Application\chrome.exe --allow-file-access-from-files',
    type: 'GET',
    dataType: 'json',
    error : function(req) {
        alert("There is a problem");
    },
    success: function(data, status) {
      console.log(data);
    }
  });

  /*$.get('poleVote.json', function(data, status) {
    console.log(data);
  });*/

  /*$.get('poleVote.txt', function(data, status) {
    console.log(data);
  });*/

});
