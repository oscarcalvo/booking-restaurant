interface Array<T> {
  remove(element: T);
  sumBy<T>(this: T[], selector: (x: T) => number): number;
}
interface Date {
  addDays(days: number): Date;
  addMinutes(minutes: number): Date;
  addHours(hours: number): Date;
  addMiliseconds(miliseconds: number): Date;
  toFinalOfDay(): Date;
  withoutTime(): Date;
}
interface String {
  toBoolean(): boolean;
}
Array.prototype.remove = function (element) {
  let index = this.indexOf(element, 0);
  if (index > -1) {
    this.splice(index, 1);
  }
};
Array.prototype.sumBy = function sumBy<T>(
  this: T[],
  selector: (x: T) => number
) {
  return this.reduce((pre, cur) => pre + selector(cur), 0);
};

Date.prototype.addDays = function (days: number): Date {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};
Date.prototype.addMinutes = function (minutes: number): Date {
  return this.addMiliseconds(minutes * 60000);
};
Date.prototype.addHours = function (hours: number): Date {
  return this.addMinutes(hours * 60);
};
Date.prototype.addMiliseconds = function (miliseconds: number): Date {
  var dat = new Date(this.getTime() + miliseconds);
  return dat;
};
Date.prototype.toFinalOfDay = function (): Date {
  let aux: Date = this.addDays(1);
  return new Date(aux.getFullYear(), aux.getMonth(), aux.getDate());
};

String.prototype.toBoolean = function (): boolean {
  return <boolean>JSON.parse(this.toString());
};

Date.prototype.withoutTime = function () {
  var d = new Date(this);
  d.setHours(0, 0, 0, 0);
  return d;
};
