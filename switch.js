const dateNow = new Date().getDay();

let currentDayName;
switch (dateNow) {
    case 0:
    currentDayName = 'Sunday';
    break;
        case 1:
        currentDayName = 'Monday';
        break;
        case 2:
            currentDayName = 'Tuesday';
            break;
        case 3:
            currentDayName = 'Wednesday';
            break;
        case 4:
            currentDayName = 'Thursday';
            break;
        case 5:
            currentDayName = 'Friday';
            break;
        case 6:
            currentDayName = 'Saturday';
            break;
            default:
                currentDayName = 'Unknown'
}

console.log('Today is ' + currentDayName)