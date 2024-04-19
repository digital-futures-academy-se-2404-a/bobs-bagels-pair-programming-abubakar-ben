
export class Basket {
  items = [];
  maxSize = 5

  addItem(item) {
    if (this.isFull()) return false;
    this.items.push(item);
    return true;
  }

  removeItem(itemToRemove) {
    const originalLength = this.items.length;
    this.items = this.items.filter((item) => item !== itemToRemove);
    return this.items.length === originalLength ? null : itemToRemove;
  }

  isFull(){
    if(this.items.length >= this.maxSize){
        return true
    }
    return false;
  }
}
