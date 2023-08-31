const { format } = require('date-fns');

const currentDate = new Date();
const formattedDate = format(currentDate, 'MMMM d, yyyy');

console.log(`Today's date is ${formattedDate}`);