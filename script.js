document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        // Your code here
    }, 2000); // 2000 milliseconds (2 seconds) as an example
    
    getCurrentTime();

    setInterval(getCurrentTime, 1000);
});

function getCurrentTime() {
    const now = new Date();
    const options = {
        timeZone: 'Europe/Paris',
        hour12: false, 
        hour: '2-digit',
        minute: '2-digit',
    };
  
    var statusElement = document.getElementsByClassName("mytime")[0];
    statusElement.textContent = now.toLocaleString('en-US', options);
}