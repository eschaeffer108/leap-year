class Year {
  // your code, here
  constructor(date){
    this.date = date;
  }
  isLeapYear(){
  if ((year.date % 4 == 0) && (year.date % 100 != 0)) {
    return true;
  } else if
    (year.date % 400 == 0){
      return true;
    } else {
    return false;
  }
  }


}

let year = new Year(1999);
while (year.date < 2100) {
  year.date = year.date + 1;

if (year.isLeapYear(true)){
  console.log(year.date);
}

}
