(function () {
  const timeoutIds = [];
  let canBlock = true;
  function blockMacroTaskQueue(seconds = null) {
    if (seconds) {
      setTimeout(() => {
        canBlock = false;
        for (let timeoutId of timeoutIds) {
          window.clearInterval(timeoutId);
        }
        console.log("Stopped blocking..."); 
      }, seconds * 1000);
    }
    console.log("Blocking started..."); 
    timeoutIds.push(setTimeout(() => {
      if (canBlock) blockTaskQueue();
    }, 0));
  }

  return {
    blockMacroTaskQueue
  }
})();