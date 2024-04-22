import Item from "./item.js"
export class Basket {

  #items = [];
  #maxSize = 5


  //getItems = () => this.#items.map[(item) => item];

  hasItem = (item) => this.#items.includes(item) 

  getItemsLength = () => this.#items.length

  addItem(item) {
    if (this.isFull() || !(item instanceof Item) ) return false;
    this.#items.push(item);
    return true;
  }

  removeItem(itemToRemove) {
    const originalLength = this.#items.length;
    this.#items = this.#items.filter((item) => item !== itemToRemove);
    return this.#items.length === originalLength ? null : itemToRemove;
  }

  isFull(){
    if(this.#items.length >= this.#maxSize){
        return true
    }
    return false;
  }
}
