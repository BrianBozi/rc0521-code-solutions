let count= 3;

function countdown (count){

  let interval = setInterval(()=> {
    console.log(count)
    count--;

    if (count < 0){
      clearInterval(interval)
      console.log("Blast off!")
    }
  }, 1000)
}

countdown(count)
