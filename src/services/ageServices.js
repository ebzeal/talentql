/* eslint-disable no-plusplus */
/* eslint-disable require-jsdoc */
class AgeService {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  getAge() {
    const today = new Date();

    let yearDiff = today.getFullYear() - this.year;
    const monthDiff = today.getMonth() - (this.month - 1);
    const dayDiff = today.getDate() - this.day;

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 1)) {
      yearDiff--;
    }

    return yearDiff;
  }
}

export default AgeService;
