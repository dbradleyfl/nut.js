"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function timeout(updateIntervalMs, maxDurationMs, action) {
    return new Promise((resolve, reject) => {
        let interval;
        let timerCleaned = false;
        function executeInterval() {
            action().then(validateResult).catch(handleRejection);
        }
        function validateResult(result) {
            if (!result) {
                interval = setTimeout(executeInterval, updateIntervalMs);
            }
            else {
                cleanupTimer();
                resolve(result);
            }
        }
        function handleRejection() {
            if (!timerCleaned) {
                interval = setTimeout(executeInterval, updateIntervalMs);
            }
        }
        function cleanupTimer() {
            timerCleaned = true;
            if (maxTimeout) {
                clearTimeout(maxTimeout);
            }
            if (interval) {
                clearTimeout(interval);
            }
        }
        const maxTimeout = setTimeout(() => {
            cleanupTimer();
            reject(`Action timed out after ${maxDurationMs} ms`);
        }, maxDurationMs);
        executeInterval();
    });
}
exports.timeout = timeout;
//# sourceMappingURL=poll-action.function.js.map