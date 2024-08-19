chrome.storage.local.get('optionEnabled', function (result) {
  if(result.optionEnabled) {
    if (document.readyState == 'complete') {
      var timesRun = 0;
      var interval = setInterval(function(){
        timesRun += 1;

        document.getElementsByClassName("css-4ldqvw-DivLikeBtnWrapper")[0].click();  

        if(timesRun == 3000){
            clearInterval(interval);
        }
    }, 200); 
    }
  }
});