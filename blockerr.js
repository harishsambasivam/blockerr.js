module.exports = (function () {
  const timeoutIds = [];
  let canBlock = true;
  const globalWindow = typeof window !== "undefined" ? window : global;

  function blockMacroTaskQueue(seconds = null) {
    if (seconds) {
      console.log("Blocking started..."); 
      setTimeout(() => {
        canBlock = false;
        for (let timeoutId of timeoutIds) {
          globalWindow.clearInterval(timeoutId);
        }
        console.log("Stopped blocking... " ) ; 
      }, seconds * 1000);
    }
    timeoutIds.push(setTimeout(() => {
      if (canBlock) blockMacroTaskQueue(null);
    }, 0));
  }

  return {
    blockMacroTaskQueue
  }
})();
