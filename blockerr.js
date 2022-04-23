module.exports = (function blockerr() {
    const timeoutIds = [];
    let canBlock = true;
    const globalWindow = typeof window !== "undefined" ? window : global;

    function blockMacroTaskQueue(seconds = null) {
        if (seconds) {
            console.log("Blocking started...");
            setTimeout(() => {
                canBlock = false;
                for (let i = 0; i < timeoutIds.length; i += 1) {
                    globalWindow.clearInterval(timeoutIds[i]);
                }
                console.log("Stopped blocking... ");
            }, seconds * 1000);
        }
        timeoutIds.push(setTimeout(() => {
            if (canBlock) blockMacroTaskQueue(null);
        }, 0));
    }

    return {
        blockMacroTaskQueue,
    };
}());
