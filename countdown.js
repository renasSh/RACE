function getTimeUntilThursday11PM() {
    const now = new Date();
    const target = new Date();
    
    // Set the target day to the next Thursday
    target.setDate(target.getDate() + (4 + 7 - target.getDay()) % 7);
    
    // Set the time to 11 PM
    target.setHours(23, 0, 0, 0);
  
    // Calculate the difference in time
    let diff = target.getTime() - now.getTime();
  
    // If the target time has already passed this week, set it for the next Thursday
    if (diff < 0) {
      target.setDate(target.getDate() + 7);
      diff = target.getTime() - now.getTime();
    }
  
    return diff;
  }
  
  function updateTimer() {
    const countdownElement = document.getElementById('timer');
    const timeLeft = getTimeUntilThursday11PM();
  
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    countdownElement.textContent = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
  
    setTimeout(updateTimer, 1000);
  }
  
  updateTimer();
  