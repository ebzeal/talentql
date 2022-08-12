/* eslint-disable no-plusplus */
/* eslint-disable require-jsdoc */
class AgeService {
  constructor(dob) {
    this.dob = dob;
  }

  getAge() {
    const today = new Date();
    const dobDate = new Date(+this.dob * 1000);

    let yearDiff = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - (dobDate.getMonth() + 1);
    const dayDiff = today.getDate() - dobDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 1)) {
      yearDiff--;
    }

    return yearDiff;
  }
}

export default AgeService;
