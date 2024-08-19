chrome.storage.local.get('optionEnabled', function (result) {
  $('#toggleButton').html(result.optionEnabled ? 'Turn Off' : 'Turn On');

  // set badget text
  chrome.action.setBadgeText({ text: result.optionEnabled ? 'ON' : 'OFF' });
})

$('#toggleButton').on('click', function () {
  chrome.tabs.reload(function(){});
  chrome.storage.local.get('optionEnabled', function (result) {
      chrome.storage.local.set({ optionEnabled: !(result.optionEnabled) }, function () {
        $('#toggleButton').html(result.optionEnabled ? 'Turn On' : 'Turn Off');
        chrome.action.setBadgeText({ text: result.optionEnabled ? 'OFF' : 'ON' });
      });
  })
});
