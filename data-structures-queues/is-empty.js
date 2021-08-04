/* exported isEmpty */

function isEmpty(queue) {
  const copy =  queue;
if(copy.peek() === undefined){
  return true
} else {
  return false
}
}
