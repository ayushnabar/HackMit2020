export class Course {
    constructor(preReq, units, name, prereqs, term) {
      this.preReq = preReq;
      this.units = units;
      this.name = name;
      this.prereqs = prereqs;
      this.term = term;
    }
  }