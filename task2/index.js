function getDayInfo (date) {
    let days = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    let dates = date.substring(6) + ' ' + date.substring(3, 5) + ' ' + date.substring(0, 2);
    let rDate = new Date(dates);
    let month = rDate.getMonth();
    let dayMonth = rDate.getDate();
    let dayWeek = rDate.getDay();
    let firstDayMonth = new Date(dates.substring(0, 8) + '01');
    let WeekDayMonth = firstDayMonth.getDay();
    let count = 0;
    if (dayWeek > 0 && dayWeek < WeekDayMonth) {
        count = 1;
    }
    let week = Math.ceil(dayMonth / 7) + count;
    let final = days[dayWeek] + ','+ week + ' неделя ' + months[month] + ',' + rDate.getFullYear() + ' года';
    return final
    
}
document.write(getDayInfo('06.03.2022'));


