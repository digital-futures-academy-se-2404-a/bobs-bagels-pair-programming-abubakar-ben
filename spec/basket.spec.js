import { assertEquals, assertFalse, assertTrue } from "./test-framework/test-framework.js";
import { Basket } from "../src/basket.js"
import { Item } from "../src/item.js";


function printResult(result, actual, expected) {
  console.log(result ? "Pass" : "Fail");
  !result && console.log(`Expected: ${expected}, Actual: ${actual}`);
}

function test1() {
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

  printResult(result,actual,true);
}



function test2() {

  console.log("\n***********");
  console.log("Test 2");
  console.log(`Adding item to basket and testing to see length change`);

  //Arrange
    const basket = new Basket();
    const item = new Item();
    const expected = basket.items.length + 1;
    let actual, result;

  //Act
  basket.addItem(item);
  actual = basket.items.length

  //Assert
  result = assertEquals(actual, expected);

  //Report
  printResult(result, actual, expected);
}

function test3() {
  console.log("\n***********");
  console.log("Test 3");
  console.log(`Check item added to basket is in basket`);

  //Arrange
  const basket = new Basket();
  const item = new Item();
  let actual, result;

  //Act
  basket.addItem(item);
  actual = basket.items.includes(item);

  //Assert
  result = assertTrue(actual);

  //Report
  printResult(result, actual, true);
}

function test4() {
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
  const allItems = [item, item1]
  const checkItems = (currentItem) => basket.items.includes(currentItem) 
  actual = allItems.every(checkItems)

  //Assert
  result = assertTrue(actual);

  //Report
  printResult(result, actual, true);
}

function test5() {
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
}

function test6() {
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
}

function testBasketIsFullWhenBasketIsFull() {
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
}


function testBasketIsFullWhenBasketIsNotFull() {
  console.log("\n***********");
  console.log("testBasketIsFullWhenBasketIsFull");
  console.log(`Test that basket is not full returns false when capacity is not reached`);
  //Arrange
  const basket = new Basket();
  const items = [
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
  actual = basket.isFull();

  //Assert
  result = assertFalse(actual);

  //Report
  printResult(result, actual, expected);
}

function testBasketIsFullWhenBasketIsEmpty() {
  console.log("\n***********");
  console.log("testBasketIsFullWhenBasketIsEmpty");
  console.log(
    `Test that basket is not full returns true when basket is empty`
  );
  //Arrange
  const basket = new Basket();

  let actual, result;

  //Act
  actual = basket.isFull();

  //Assert
  result = assertFalse(actual);

  //Report
  printResult(result, actual, false);
}

function testBasketIsFullWhenBasketLengthEqualToCapacity() {
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
}


function testAddItemWhenBasketIsFull() {
  console.log("\n***********");
  console.log("testAddItemWhenBasketIsFull");
  console.log(
    `Test that add item is not allowed when the basket is full`
  );
  //Arrange
  const basket = new Basket();
  const items = [new Item(), new Item(), new Item(), new Item(), new Item(), new Item(), new Item() ];
  for (const item of items) {
    basket.addItem(item);
  }

  const expected = false;

  let actual, result;

  //Act
  actual = basket.addItem(new Item())
 

  //Assert
  result = assertFalse(actual);

  //Report
  printResult(result, actual, expected);
}

test1();
test2();
test3();
test4();
test5();
test6();
testBasketIsFullWhenBasketIsFull();
testBasketIsFullWhenBasketIsNotFull();
testBasketIsFullWhenBasketIsEmpty();
testBasketIsFullWhenBasketLengthEqualToCapacity();
testAddItemWhenBasketIsFull();



