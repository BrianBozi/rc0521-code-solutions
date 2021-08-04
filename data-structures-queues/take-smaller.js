/* exported takeSmaller */

function takeSmaller(queue) {
let low = -Infinity;
const first = queue.dequeue()

if(first === 'undefined'){
  return undefined
}

const remove = queue.dequeue()
if(typeof remove === 'undefined'){
  // queue.dequeue(first)
  // queue.enqueue(remove)
  return first
}

if( first < remove){
    // queue.dequeue(first)
    queue.enqueue(remove)
  return first
}
if( first === remove ){
  queue.enqueue(remove)
  return first
}
if(first > remove){
  queue.enqueue(first)
 return remove
}


}
