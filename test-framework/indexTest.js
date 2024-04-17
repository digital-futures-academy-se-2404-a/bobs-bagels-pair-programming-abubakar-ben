import { assertEquals, assertFalse, assertTrue } from "./testFramework.js";
import {Basket, Item} from "../index.js"
console.log('Testing test');

function test1() {
    //Arrange
    const basket = new Basket();
    const itemToAdd = new Item();


    let actual, result;

    //Act
    actual = basket.addItem(itemToAdd);

    //Assert
    result = assertTrue(actual);

    //Report
    console.log(`\nAdd item to empty basket`);
    console.log(`Test passed: ${result}`);
}

function test2() {
    //Arrange
    const basket = new Basket();
    const itemToRemove = new Item();
    const expected = null

    let actual, result;

    //Act
    actual = basket.removeItem(itemToRemove);

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`\n removing item from empty basket`);
    console.log(`Test passed: ${result}`);
}

function test3() {
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
  console.log(`\n removing item from basket with item in it`);
  console.log(`Test passed: ${result}`);
}


test1();
test2();
test3();

