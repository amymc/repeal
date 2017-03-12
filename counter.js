function Counter(el) {
  this.el = el;
  this.getDaysBetween();
  this.renderInitalState();
  this.calculateUpdateInterval();

  setInterval(this.updateTotal.bind(this), this.updateInterval);
}

Counter.prototype.calculateUpdateInterval = function() {
  // dividing by 10 as approx 10 women travel each day
  this.updateInterval = this.millisecondsPerDay / 10;
};

Counter.prototype.getDaysBetween = function() {
  this.millisecondsPerDay = 24 * 60 * 60 * 1000;
  this.daysBetween = (new Date() - new Date('January 1, 2016 00:00:00')) / this.millisecondsPerDay;
};

Counter.prototype.renderInitalState = function() {
  // 154865 is total number from 1983 to 2015 (inclusive) as per https://www.ifpa.ie/Hot-Topics/Abortion/Statistics
  var numBefore2016 = 154865;
  // multiplying by 10 as approx 10 women travel each day
  var numSince2016 = Math.floor(this.daysBetween * 10);
  this.total = numBefore2016 + numSince2016;

  this.el.innerHTML = this.total.toLocaleString();
};

Counter.prototype.updateTotal = function() {
  this.total++;
  this.el.innerHTML = this.total.toLocaleString();
};

var repealCounter = new Counter(document.getElementById('counter'));
