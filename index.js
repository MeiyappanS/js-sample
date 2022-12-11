var curDate = [];

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
Date.prototype.removeDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() - days);
  return date;
};
function getDates(startDate, stopDate) {
  var dateArray = new Array();
  var currentDate = startDate;

  while (currentDate <= stopDate) {
    dateArray.push(new Date(currentDate));
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
}
function toShortFormat(datesx) {
  let monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let day = datesx.getDate();

  let monthIndex = datesx.getMonth();
  let monthName = monthNames[monthIndex];

  return (
    (day.toString().length == 1 ? '0' + day.toString() : day.toString()) +
    '-' +
    monthName.toString()
  );
}
function toShortFormat1(datesx) {
  let monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let day = datesx.getDate();
  let monthIndex = datesx.getMonth();
  let monthName = monthNames[monthIndex];

  return monthName.toString() + ' ' + day.toString();
}
function setDater(datStatTime) {
  return (
    toShortFormat(new Date(datStatTime)) +
    '-' +
    new Date(datStatTime).getFullYear()
  );
}
function setDater2(datStatTime) {
  return (
    toShortFormat1(new Date(datStatTime)) +
    ', ' +
    new Date(datStatTime).getFullYear()
  );
}

function setDater1(datStatTime) {
  var dateConv = parseInt(datStatTime.getMonth()) + parseInt(1);
  curDate =
    (datStatTime.getFullYear().toString().length == 1
      ? '0' + datStatTime.getFullYear()
      : datStatTime.getFullYear()) +
    '-' +
    (dateConv.toString().length == 1
      ? '0' + dateConv.toString()
      : dateConv.toString()) +
    '-' +
    (datStatTime.getDate().toString().length == 1
      ? '0' + datStatTime.getDate()
      : datStatTime.getDate());

  return curDate;
}

function getWeeks(datStatTime) {
  var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  datStatTime = new Date(datStatTime).getDay();
  return week[datStatTime];
}


var iter = 0;
var actDates = [];
var no = '{{ATTR.No}}';
//var no = 'No';
if (no == 'No') {
  var dateCo = parseInt('0');
  var dateTo = '';
} else {
  //var dateCo = parseInt('${payLoad.indexADates!'0'}');
  var dateCo = parseInt('5');
  var dateTo = '13-Dec-2022';
}
if (dateCo >= 5) {
  iter = iter + dateCo;
  var datesDis = getDates(
    new Date(dateTo).addDays(1),
    new Date().addDays(parseInt(iter + 6))
  );
  iter = iter + 6;
} else {
  iter = iter + 5;
  var datesDis = getDates(new Date(), new Date().addDays(parseInt(iter)));
}
var disp = '';
actDates = datesDis.map((x) => ({
  slots: setDater1(new Date(x)),
  dateConv: toShortFormat(x),
  iters: iter,
  dateConv1: setDater(x),
  dateConv2: setDater2(x),
  indexB: disp,
  week: getWeeks(x),
}));
/*
if (parseInt(dateCo + 1) >= 5) {
  var checkTr1 = [
    {
      dateConv: 'Previous 6 days',
      dateConv1: setDater(new Date(actDates[0].dateConv1).removeDays(7)),
      dateConv2: actDates[0].dateConv2,
      iters: iter - 12,
      slots: actDates[0].slots,
      indexB: '1',
    },
  ];
  var checkTr = [
    {
      dateConv: 'Next 6 days',
      dateConv1: actDates[actDates.length - 1].dateConv1,
      dateConv2: actDates[actDates.length - 1].dateConv2,
      iters: iter,
      slots: actDates[actDates.length - 1].slots,
      indexB: '1',
    },
  ];
  checkTr1 = checkTr1.concat(actDates);

  actDates = checkTr1;

  actDates = actDates.concat(checkTr);
} else {
  var checkTr = [
    {
      dateConv: 'Next 6 days',
      dateConv1: actDates[actDates.length - 1].dateConv1,
      dateConv2: actDates[actDates.length - 1].dateConv2,
      iters: iter,
      slots: actDates[actDates.length - 1].slots,
      indexB: '1',
    },
  ];
  actDates = actDates.concat(checkTr);
}
*/
console.log(actDates);
return { sloyDis: actDates };
