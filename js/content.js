chrome.extension.sendRequest({ method: "getName" }, function(response) {
  my = $('table tr td:contains(' + response.name +')');
  $('table tr').hide(); my.parents('tr').show();
});
