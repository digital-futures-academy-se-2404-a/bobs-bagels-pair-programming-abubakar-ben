import { assertEquals, assertFalse, assertTrue } from "./test-framework/test-framework.js";
import { Basket } from "../src/basket.js"
import Item from "../src/item.js";


function printResult(result, actual, expected) {
  console.log(result ? "Pass" : "Fail");
  !result && console.log(`Expected: ${expected}, Actual: ${actual}`);
}

const tests = [];

tests.push(() => {
  console.log("\n***********");
  console.log("Test 1");
  console.log(`Add item to empty basket`);


  //Arrange
  const basket = new Basket();
  const itemToAdd = new Item();


  let actual, result;

  //Act
  actual = basket.addItem(itemToAdd);

  //Assert
  result = assertTrue(actual);

  //Report

  printResult(result, actual, true);
});

tests.push(() => {
  console.log("\n***********");
  console.log("Test 2");
  console.log(`Adding item to basket and testing to see length change`);

  //Arrange
  const basket = new Basket();
  const item = new Item();
  const expected = basket.getItemsLength() + 1;
  let actual, result;

  //Act
  basket.addItem(item);
  actual = basket.getItemsLength();

  //Assert
  result = assertEquals(actual, expected);

  //Report
  printResult(result, actual, expected);
})

tests.push(() => {
  console.log("\n***********");
  console.log("Test 3");
  console.log(`Check item added to basket is in basket`);

  //Arrange
  const basket = new Basket();
  const item = new Item();
  let actual, result;

  //Act
  basket.addItem(item);
  actual = basket.hasItem(item);

  //Assert
  result = assertTrue(actual);

  //Report
  printResult(result, actual, true);
});

tests.push(() => {
  console.log("\n***********");
  console.log("Test 4");
  console.log(`Check multiples item added to basket is in basket`);

  //Arrange
  const basket = new Basket();
  const item = new Item();
  const item1 = new Item();
  let actual, result;

  //Act
  basket.addItem(item);
  basket.addItem(item1);
  const allItems = [item, item1];
  const checkItems = (currentItem) => basket.hasItem(currentItem);
  actual = allItems.every(checkItems);

  //Assert
  result = assertTrue(actual);

  //Report
  printResult(result, actual, true);
})

tests.push(() => {
  console.log("\n***********");
  console.log("Test 5");
  console.log(`Removing item from empty basket`);

  //Arrange
  const basket = new Basket();
  const itemToRemove = new Item();
  const expected = null;

  let actual, result;

  //Act
  actual = basket.removeItem(itemToRemove);

  //Assert
  result = assertEquals(actual, expected);

  printResult(result, actual, expected);
})

tests.push(() => {
  console.log("\n***********");
  console.log("Test 6");
  console.log(`Removing item from basket with item in it`);
  //Arrange
  const basket = new Basket();
  const item = new Item();
  basket.addItem(item);
  const expected = item;

  let actual, result;

  //Act
  actual = basket.removeItem(item);

  //Assert
  result = assertEquals(actual, expected);

  //Report
  printResult(result, actual, expected);
})

tests.push(() => {
  console.log("\n***********");
  console.log("testBasketIsFullWhenBasketIsFull");
  console.log(`Test that basket is full returns true when capacity is reached`);
  //Arrange
  const basket = new Basket();
  const items = [
    new Item(),
    new Item(),
    new Item(),
    new Item(),
    new Item(),
    new Item(),
  ];
  for (const item of items) {
    basket.addItem(item);
  }

  const expected = true;

  let actual, result;

  //Act
  actual = basket.isFull();

  //Assert
  result = assertTrue(actual);

  //Report
  printResult(result, actual, expected);
})


tests.push(() => {
  console.log("\n***********");
  console.log("testBasketIsFullWhenBasketIsFull");
  console.log(
    `Test that basket is not full returns false when capacity is not reached`
  );
  //Arrange
  const basket = new Basket();
  const items = [new Item(), new Item(), new Item(), new Item()];
  for (const item of items) {
    basket.addItem(item);
  }

  const expected = false;

  let actual, result;

  //Act
  actual = basket.isFull();

  //Assert
  result = assertFalse(actual);

  //Report
  printResult(result, actual, expected);
})

tests.push(() => {
  console.log("\n***********");
  console.log("testBasketIsFullWhenBasketIsEmpty");
  console.log(`Test that basket is not full returns true when basket is empty`);
  //Arrange
  const basket = new Basket();

  let actual, result;

  //Act
  actual = basket.isFull();

  //Assert
  result = assertFalse(actual);

  //Report
  printResult(result, actual, false);
})

tests.push(() => {
   console.log("\n***********");
   console.log("testBasketIsFullWhenBasketLengthEqualToCapacity");
   console.log(
     `Test that basket is full returns true when item count is equal to max capacity`
   );
   //Arrange
   const basket = new Basket();
   const items = [new Item(), new Item(), new Item(), new Item(), new Item()];
   for (const item of items) {
     basket.addItem(item);
   }

   const expected = true;

   let actual, result;

   //Act
   actual = basket.isFull();

   //Assert
   result = assertTrue(actual);

   //Report
   printResult(result, actual, expected);
})

tests.push(() => {
   console.log("\n***********");
   console.log("testAddItemWhenBasketIsFull");
   console.log(`Test that add item is not allowed when the basket is full`);
   //Arrange
   const basket = new Basket();
   const items = [
     new Item(),
     new Item(),
     new Item(),
     new Item(),
     new Item(),
     new Item(),
     new Item(),
   ];
   for (const item of items) {
     basket.addItem(item);
   }

   const expected = false;

   let actual, result;

   //Act
   actual = basket.addItem(new Item());

   //Assert
   result = assertFalse(actual);

   //Report
   printResult(result, actual, expected);
})

tests.push(() => {
  console.log("\n***********");
  console.log("call addItem with a value not of type Item");

  //Arrange
  const basket = new Basket();
  const expected = false;
  const invalidArgument = null

  let actual, result;

  //Act
  basket.addItem(invalidArgument);
 actual = basket.hasItem(invalidArgument);
  //Assert
  result = assertFalse(actual);

  //Report
  printResult(result, actual, expected);
});

tests.push(() => {
  
})

for (const test of tests) {
  test();
}





