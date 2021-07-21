document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('btnClickMe');

    GetDateTime();
    setInterval(GetDateTime, 1000);

    checkPageButton.addEventListener('click', function() {
  
      chrome.tabs.getSelected(null, function(tab) {
        window.open('https://github.com/iamrajthomas/');
      });
    }, false);
}, false);

function GetDateTime(){
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let date = currentDate.getDate();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();
    let datetimeGMTNode = document.getElementById('CurrentDateTime');
    
    datetimeGMTNode.innerText = 'Date: ' + date + '/' +  + month + '/' + year + ' - Time: ' + hour + ':' +  + minute + ':' + second + ' (IST)' ;
}
  