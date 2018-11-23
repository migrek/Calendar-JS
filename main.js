document.addEventListener('DOMContentLoaded', init);

function init(){
    //lists whith names monthes
    monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    //difine current date
    var now = new Date();
    curYear = now.getFullYear();
    curMonth = now.getMonth();
    curDay = now.getDay();
    curDate = now.getDate();

    //difine elements on the page
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

    curDaysInMonth = daysInMonth(curMonth, curYear);
    fillCalendar(curYear, curMonth,curDaysInMonth);

    elMonthNext.addEventListener('click', function() {
        monthNextClick();
    });

    elMonthBack.addEventListener('click', function() {
        monthBackClick()
    });

    elYearNext.addEventListener('click', function() {
        yearNextClick()
    });

    elYearBack.addEventListener('click', function() {
        yearBackClick()
    });
};

function daysInMonth(month, year) {
   return new Date(year, month, 0).getDate();
};

function fillCalendar (year, month, countDays){
    firstDay = 1;
    i = 0;
    var pushDate = document.createElement('tr');
    while (new Date(year, month, firstDay).getDay() > i+1 && i+1 % 7 != 0) {
        let dateNow = document.createElement('td');
        pushDate.appendChild(dateNow);
        i++;
       } 

    while (firstDay < countDays) {
        if (i % 7 == 0) {
            elWrapDays.appendChild(pushDate);
            var pushDate = document.createElement('tr');
            let dateNow = document.createElement('td');
            pushDate.appendChild(dateNow);
            dateNow.innerHTML = firstDay;
            i++;
            firstDay++;
        }
        let dateNow = document.createElement('td');
        pushDate.appendChild(dateNow);
        dateNow.innerHTML = firstDay;
        i++;
        firstDay++;
    } ;

    while ( i % 7 != 0) {
        let dateNow = document.createElement('td');
        pushDate.appendChild(dateNow);
        i++;
    }
    elWrapDays.appendChild(pushDate);
       
       
   
     /*  if (i % 7 != 0 && firstDay+1<countDays) {
            let dateNow = document.createElement('td');
            pushDate.appendChild(dateNow);
            dateNow.innerHTML = firstDay;
        i++;} else if (i % 7 == 0) {
            elWrapDays.appendChild(pushDate);
            var pushDate = document.createElement('tr');
            let dateNow = document.createElement('td');
            pushDate.appendChild(dateNow);
            dateNow.innerHTML = firstDay;
            i++;
        } 
    };*/
};


function monthNextClick() {
    if (curMonth != 11) {
    curMonth = curMonth + 1;
    elWrapDays.innerHTML = '';
    elMonth.innerHTML = monthsList[curMonth];
    curDaysInMonth = daysInMonth(curMonth, curYear);
    fillCalendar(curYear, curMonth,curDaysInMonth)
    }  else { curMonth = 0;
        elMonth.innerHTML = monthsList[curMonth];
        curYear = curYear + 1;
        elYear.innerHTML = curYear;
        elWrapDays.innerHTML = '';
        fillCalendar(curYear, curMonth,curDaysInMonth);
    }
}

function monthBackClick() {
    if (curMonth != 0) {
        curMonth = curMonth - 1;
        elMonth.innerHTML = monthsList[curMonth];
        elWrapDays.innerHTML = '';
        curDaysInMonth = daysInMonth(curMonth, curYear);
        fillCalendar(curYear, curMonth,curDaysInMonth);
    } else { curMonth = 11;
        elMonth.innerHTML = monthsList[curMonth];
        curYear = curYear - 1;
        elYear.innerHTML = curYear;
        elWrapDays.innerHTML = '';
        curDaysInMonth = daysInMonth(curMonth, curYear);
        fillCalendar(curYear, curMonth,curDaysInMonth);
    };
};

function yearNextClick() {
    curYear = curYear + 1;
    elYear.innerHTML = curYear;
    elWrapDays.innerHTML = '';
    curDaysInMonth = daysInMonth(curMonth, curYear);
    fillCalendar(curYear, curMonth, curDaysInMonth);
};

function yearBackClick() {
    curYear = curYear - 1;
    elYear.innerHTML = curYear;
    elWrapDays.innerHTML = '';
    curDaysInMonth = daysInMonth(curMonth, curYear);
    fillCalendar(curYear, curMonth, curDaysInMonth);
};