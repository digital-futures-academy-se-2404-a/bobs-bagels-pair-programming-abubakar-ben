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

test1();

