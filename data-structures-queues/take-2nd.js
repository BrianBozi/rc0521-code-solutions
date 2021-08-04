/* exported take2nd */

function take2nd(queue) {
  // get the item to first leave the queue
const first = queue.dequeue()
// if the "first" is udefined then it means its empty
if(typeof first === 'undefined'){
  return undefined
}

// well return 2nd item, remove it and then add the fitst to the queue
const remove = queue.dequeue()
if(typeof remove === 'undefined'){
  return first
}
else{
  queue.enqueue(first)
  return remove

}
}
