//Higher Order Functions
  //Does 1 or both of the following...
    //-Takes 1 or more functions as an argument (parameter)
    //Returns a function as the result

import {posts} from "posts.js"

//.forEach()
//same as a for loop, iterates once
posts.forEach(post => {
  console.log(post)
});
//returns each post once
console.clear()


//.filter()
//used for boolean values, must pass through criteria to be returned
const filteredPosts = posts.filter((post)=> post.userId === 1)
console.log(filteredPosts)
//returns all the posts with a userId of 1

//.map()
//applies function to ALL elements of array, returns new array
const mappedPosts = posts.map((post)=>{
  post.id * 10
})
console.log(mappedPosts)
//multiplies all the post's ids by 10 and returns

//.reduce()
//applies function to return a single value
//parameter is (accumulator, currentValue), accumulator is all outputs so far and currentValue is is the item being iterated over
const reducedPostsValue = posts.reduce((sum, post) =>{
  return sum + post
})
console.log(reducedPostsValue)
//returns total sum of all posts
