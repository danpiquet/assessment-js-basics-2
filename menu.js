///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
const pizza = {
    name: 'Little Italy',
    price: 25,
    category: 'entree',
    popularity: 10,
    rating: 9.3,
    tags: ['italian','delicious','exotic','adult']
}


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
//misinterpreted the ask...I thought you meant the properties when you said tags...made it too complex below
// const secondTag = Object.keys(pizza)
// console.log(secondTag[1])

//here is what I would have done had I understood that you wanted the object property tags' second value.
console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
const {price} = pizza
console.log(price)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
const {category} = pizza
console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
//made individual objects in foodArray. Misunderstood again
// const foodArr = [
//     {price: 20},
//     {category: 'entree'},
//     {popularity: 9},
//     {rating: 8},
//     {tags: ['crispy','thin','expensive','excellent','delicious']}
// ]

const foodArr = [
    {
    name: 'Pasta',
    price: 20,
    category: 'entree',
    popularity: 9,
    rating: 7.3,
    tags: ['italian','delicious','pasta','adult']
    },
    {
    name: 'Kids Pizza',
    price: 12,
    category: 'entree',
    popularity: 5,
    rating: 6,
    tags: ['italian','kids','simple','cheese']
    },
{
    name: 'Breadsticks',
    price: 8,
    category: 'appetizer',
    popularity: 7,
    rating: 6,
    tags: ['italian','appetizer','garlic','yummy']
    },
    {
    name: 'Soup',
    price: 15,
    category: 'entree',
    popularity: 9,
    rating: 7.3,
    tags: ['italian','delicious','foreign','soup']
    }
]
// console.log(foodArr)


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

const filteredFood = foodArr.filter(tag => tag.price)
// console.log(filteredFood)



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
//tried a clean run but decided to try a switch statement for fun. Didn't quite work it out
const filterByProperty = (property,number,type) => {
    const foodFilter = foodArr.filter((food) => {
        switch (type){
            case 'above':
                food[property] > number
                break;
            case 'below':
                food[property] < number
                break;
            default:
                "Please enter 'above' or 'below' for the type parameter"

        }

    })
    return foodFilter
}









// //code presented in class. Felt close to the solution but not quite there. Need more study on this particular problem.
// const filterByProperty = (property, number, type) => {
//     const foodFilter = foodArr.filter((food) => {
//         if(type === 'above'){
//             return food[property] > number
//         }else{
//             return food[property] < number
//         }
//     })
//     return foodFilter
// }


//my first attempts
// const filterByProperty = (property,number,type) => {
//     let filteredArray = []
//     foodArr.filter(type => {
//         if(type === 'above'){
//             filteredArray.push(foodArr.property > number)
//             return foodArr.property > number
//         }else {
//             return foodArr.property < number
//         }
// })
// console.log(filteredArray)
// }



/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
console.log(filterByProperty('popularity',8,'below'))