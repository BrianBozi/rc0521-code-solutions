/* exported isEmpty */

function isEmpty(stack) {
  // so when if we pop all of toyStack and then peek() then well get undefined
  // so if we peek() into an empty stack it should be undefined.
  // then the else can be true since stack would not be empty
  if(stack.peek()===undefined){
    return true
  } else {
    return false
  }
  }
