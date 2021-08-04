/* exported postpone */

function postpone(queue) {
if(queue.peek()===undefined){
  return
} else {
  const postponed = queue.dequeue()
  return queue.enqueue(postponed)
}
}
