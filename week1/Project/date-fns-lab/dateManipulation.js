const {addDays, format} = require('date-fns');

function manipulateDate() {
    const currentDate = new Date();
    const futureDate = addDays(currentDate, 7);

    console.log('Current Date:', format(currentDate, 'MMMM dd, yyyy'));
    console.log('Date 7 days from now:', format(futureDate, 'MMMM dd, yyyy'));   
}

manipulateDate();