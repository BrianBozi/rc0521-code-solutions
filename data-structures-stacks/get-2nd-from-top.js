/* exported get2ndFromTop */

function get2ndFromTop(stack) {
if(stack.peek()  === undefined){
  return undefined
}
// else if(stack.pop().peek() === undefined){
//   return undefined
// }
else {

  const last = stack.pop()
  const secondLast = stack.pop()
  stack.push(secondLast)
  stack.push(last)
  return secondLast
}

}
