function sendNotification(email) {
    let count = 0;
    for (const char of email) {
        if (char === '@') {
            count++;
        }
    }
    if (email.includes('@')) {
        if (count === 1) {
            let first = '';
            let last = '';
            for (let i = 0; i < email.length; i++) {
                if (email[i] === '@') {
                    break;
                }
                first += email[i];
            }
            for (let i = email.indexOf('@'); i < email.length; i++) {
                if (email[i] === '@') {
                    continue;
                }
                last += email[i];
            }
            return first + ' sent you an email from ' + last;
        }
        else {
            return false;
        }
    }
    else {
        return "Invalid Email";
    }
}


