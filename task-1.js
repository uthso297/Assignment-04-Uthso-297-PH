function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0) {
        return "Invalid Input";
    }
    else if (expenses > income) {
        return "Invalid Input";
    }
    else {
        return (income - expenses) * 0.2;
    }
}