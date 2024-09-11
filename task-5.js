function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) === false || typeof serialNumber !== 'number') {

        return "Invalid Input";
    }
    else {
        if (serialNumber > waitingTimes.length) {
            let total = 0;
            let avg = 0;
            for (let i = 0; i < waitingTimes.length; i++) {
                total += waitingTimes[i];
            }
            avg = total / waitingTimes.length;
            let average = Math.round(avg);
            serialNumber = serialNumber - waitingTimes.length - 1;
            return average * serialNumber;
        }
        else {
            return false;
        }
    }

}