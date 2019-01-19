// based on lodash implementation of debounce, with the optional config removed

export function debounce(func, delay) {
    let lastArgs;
    let lastCallTime;
    let lastThis;
    let result;
    let timerId;

    delay = Number(delay) || 0;

    const invokeFunc = (time) => {
        const args = lastArgs;
        const thisArg = lastThis;

        lastArgs = undefined;
        lastThis = undefined;
        lastInvokeTime = time;
        return func.apply(thisArg, args);
    }

    function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, delay);
        return result;
    }

    const remainingDelay = () => delay - timeSinceLastCall;

    const shouldInvoke = (time) => {
        const timeSinceLastCall = time - lastCallTime;

        return (lastCallTime === undefined || (timeSinceLastCall >= delay) || timeSinceLastCall < 0);
    }

    const timerExpired = () => {
        const time = Date.now();
        if (shouldInvoke(time)) return trailingEdge(time);

        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingDelay());
      }

    const trailingEdge = (time) => {
        timerId = undefined;

        if (lastArgs) return invokeFunc(time);

        lastArgs = undefined;
        lastThis = undefined;
        return result;
    }

    const cancel = () => {
        if (timerId !== undefined) clearTimeout(timerId);

        lastInvokeTime = 0;
        lastArgs = undefined;
        lastCallTime = undefined;
        lastThis = undefined;
        timerId = undefined;
    }

    const flush = () => timerId === undefined ? result : trailingEdge(Date.now());

    function debounced() {
        const time = Date.now();
        const isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
            if (timerId === undefined) return leadingEdge(lastCallTime);
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, delay);
        }
        return result;
    }

    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
