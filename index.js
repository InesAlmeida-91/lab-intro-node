class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a,b){return a-b}); 
    this.length++;
  }

  get(pos) {
    if(pos < 0 || pos >= this.length){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if(this.length === 0) {
      return 0
    } else {
      const sum = this.items.reduce((accumulator, currentValue) => accumulator + currentValue);
      return sum
    }
  }

  avg() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum()/ this.length
    }
  }
}

module.exports = SortedList;

const sortedlist = new SortedList;