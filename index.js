export class Item{
    

}

export class Basket{
    items =  []

    
    addItem(item) {
        this.items.push(item);
        return true
    }
}
