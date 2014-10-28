/* More Javascript will be added eventually, HTML+CSS were designed for it to be simple as possible. */

var calendar = {
  months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], // Months are in spanish, but can be localized later to be in every language.
  today: new Date(),
  setDay: function(day) {
    document.getElementById("today").id = "";
    document.getElementById("days").children[day-1].id = "today";
  }, //Changes id today on css to another li element.
  setMonth: function(month) {
    // Change month name
    document.getElementById("month").childNodes[0].data = this.months[month];
  },
  setYear: function(year) {
    document.getElementById("year").childNodes[0].data = year;
  }
}

//console.log(calendar.today);
//logs to console the new "Date()" object

calendar.setDay(calendar.today.getDate());
//this passes to setDay, the day (number) using getDate.
calendar.setMonth(calendar.today.getMonth());
//this passes to setMonth the month (number between 0-11) to setMonth

calendar.setYear(calendar.today.getFullYear());
// this passes to setYear the 4ditits of a year using getFullYear.
