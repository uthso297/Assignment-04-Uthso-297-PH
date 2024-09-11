function calculateFinalScore(obj) {

    if (typeof obj !== 'object') {
        return "Invalid Input";
    }

    else {
        const { name, testScore, schoolGrade, isFFamily } = obj;
        if (typeof name === 'string' && typeof testScore === 'number' && typeof schoolGrade === 'number' && typeof isFFamily === 'boolean' && testScore <= 50 && schoolGrade <= 30) {
            let total = 0;
            if (isFFamily === true) {
                total = testScore + schoolGrade + 20;
                if (total >= 80) {
                    return true;
                }
            }
        }
        else {
            return false;
        }
    }
    return false;
}


