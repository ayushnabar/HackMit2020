export class Course {
    constructor(preReq, units, name, prereqs) {
      this.preReq = preReq;
      this.units = units;
      this.name = name;
      this.prereqs = prereqs;
    }
  }