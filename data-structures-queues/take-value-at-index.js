/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  // console.log("BEG print", queue.print())
  // console.log("beg INDEX", index - 1)

const first = queue.dequeue()
console.log("FIRST", first)
  if (typeof first === 'undefined') {
    return undefined
  }
  const indexValue = index - 2
  let i = 0;
  queue.enqueue(first)
  console.log("index",indexValue)
  // const cycle2 = queue.dequeue()
  // console.log("peek",queue.peek())
  // console.log("print", queue.print())
  while(i <= indexValue){
    // console.log("looping this many times",i)
    queue.enqueue(queue.dequeue())

    // console.log("in the loop",queue.print())
    i++
  }
  return queue.dequeue()
}
