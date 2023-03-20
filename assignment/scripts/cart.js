console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
//Creating a universal variable called Basket setting it to empty
let basket = [];
// A function to add items using the item parameter into the basket
function addItem(item) {
    basket.push(item)
    return true;
}

// function to log each item in the basket using the for of loop
function listItem() {
    for (let each of basket) {
        console.log(each)
    }
}

// function used to empty a array
function empty() {
    basket = []
};

// constant for max number of items allowed in basket
const maxItems = 5
// function to check if the basket has reached its max amount of items 
// indicated by the maxItems constant
function isFull() {
    return (basket.length < maxItems) ? false : true
}

// function to check if the basket has enough room for another item if so
// an item is added using the item parameter
function updatedAddItem(item) {
    if (isFull() == false) {
        basket.push(item)
        return true;
    }
    else {
        return false
    }
}

// function with a item parameter that is then used in a index of
// command to find a matching item in basket which is then 
// spliced and converted from a number value to the item itself
// if the item can not be found the program is to return null
function removedItems(item) {
    return (basket.indexOf(item) >= 0) ? basket.splice(basket.indexOf(item), 1)[0] : null
}


//CONSOLE LOGS------------------------------------------------------------

// Used for the addItem function to console log the items added to basket 
console.log('should say true', addItem('item'))
// Used to display the items in the basket after add Items function
console.log(`Basket is now ${basket}`);
// Added 3 new items to the basket using the addItem function
addItem('salad')
addItem('fruit')
addItem('tomato')

// Used for the listitem function to log all the items in basket
console.log('should say undefined', listItem())


// Used for the isFull function to console log false if the basket has
// not reached max capacity and true if it has
console.log('should say false', isFull())

// Used for the updatedAddItems function to log the item added
console.log('should add item and say true', updatedAddItem('chicken'))
// Used for the updatedAddItems function to show whats in basket
console.log(`Basket is now ${basket}`);

// Used for the removedItem function to log the item removed
console.log('should have removed item', removedItems('item'))
// console log to show what is in the basket now after 
// removedItem function
console.log(`Basket is now ${basket}`);

















// for personal use
// function removedItems(item) {
//     if (basket.indexOf(item) >= 0) {
//         return basket.splice(basket.indexOf(item), 1)[0];
//     }
//     else {
//         return null;
//     }

// }