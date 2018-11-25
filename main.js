document.addEventListener('DOMContentLoaded', init);

function init(){
    //lists with names months
    monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    //define current date
    let now = new Date();
    curYear = now.getFullYear();
    curMonth = now.getMonth();
    curDay = now.getDay();
    curDate = now.getDate();

    //define elements on the page
    elWrapDays = document.querySelector('#wrapperDays');
    elYear =  document.querySelector('#divYear');
    elMonth = document.querySelector('#divMonth');
    elMonthNext = document.querySelector('#btnMonthNext');
    elMonthBack = document.querySelector('#btnMonthBack');
    elYearNext = document.querySelector('#btnYearNext');
    elYearBack = document.querySelector('#btnYearBack');

    //fill elements on the page
    elYear.innerHTML = curYear;
    elMonth.innerHTML = monthsList[curMonth];

    // var for counting days in month
    var firstDay;
    //var for counting cells in calendar
    var i; 

    fillCalendar(curYear, curMonth);

    //functions for changing month or year
    elMonthNext.addEventListener('click', function() {
        monthNextClick();
        fillCalendar(curYear, curMonth, firstDay, i);
    });

    elMonthBack.addEventListener('click', function() {
        monthBackClick();
        fillCalendar(curYear, curMonth, firstDay, i);
    });

    elYearNext.addEventListener('click', function() {
        yearNextClick();
        fillCalendar(curYear, curMonth, firstDay, i);
    });

    elYearBack.addEventListener('click', function() {
        yearBackClick();
        fillCalendar(curYear, curMonth, firstDay, i);
    });

    addStilyForToday();
}

function getDaysInMonth(month, year) {
    month = month + 1;
    return new Date(year, month, 0).getDate();
}

function fillCalendar (year, month, firstDay, i){
    elWrapDays.innerHTML = '';
    countDays = getDaysInMonth(curMonth, curYear);
    firstDay = 1;
    i = 0;
    pushDate = document.createElement('tr');
    while (new Date(year, month, firstDay).getDay() > i+1 && i+1 % 7 !== 0) {
        var dateNow = document.createElement('td');
        pushDate.appendChild(dateNow);
        i++;
       }

    while (firstDay <= countDays) {
        if (i % 7 === 0) {
            elWrapDays.appendChild(pushDate);
            var pushDate = document.createElement('tr');
            var dateNow = document.createElement('td');
            pushDate.appendChild(dateNow);
            dateNow.innerHTML = firstDay;
            i++;
            firstDay++;
        } else {var dateNow = document.createElement('td');
            pushDate.appendChild(dateNow);
            dateNow.innerHTML = firstDay;
            i++;
            firstDay++;
        }
    }

    while ( i % 7 !== 0) {
        var dateNow = document.createElement('td');
        pushDate.appendChild(dateNow);
        i++;
    }
    elWrapDays.appendChild(pushDate);
}

function monthNextClick() {
    if (curMonth !== 11) {
        curMonth = curMonth + 1; 
    } else { curMonth = 0;
        yearNextClick();
    }
    elMonth.innerHTML = monthsList[curMonth];
}

function monthBackClick() {
    if (curMonth !== 0) {
        curMonth = curMonth - 1;
    } else {
        curMonth = 11;
        yearBackClick();
    }
    elMonth.innerHTML = monthsList[curMonth];
}

function yearNextClick() {
    curYear = curYear + 1;
    elYear.innerHTML = curYear;
}

function yearBackClick() {
    curYear = curYear - 1;
    elYear.innerHTML = curYear;
}
