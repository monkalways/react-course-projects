const reducer = (accumulator, currentValue) => accumulator + currentValue;
const getExpensesTotal = (expenses) => expenses ? expenses.map(expense => expense.amount).reduce(reducer, 0) : 0;

export default getExpensesTotal;