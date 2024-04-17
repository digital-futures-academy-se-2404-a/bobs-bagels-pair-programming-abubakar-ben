export class Item{
    

}

export class Basket {
  items = [];

  addItem(item) {
    this.items.push(item);
    return true;
  }

    removeItem(itemToRemove) {
 
        for (let i = 0; i < this.items.length; i++){
            
            const item = this.items[i];
            if (item !== itemToRemove) continue;
            
            this.items = this.items.filter((item) => item !== itemToRemove);
            return item;
            
        }
        return null;
      
    }

}
