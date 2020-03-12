interface Counter {
  (star: number): string
  intervar: number
  reset(): void
}

function getCounter(): Counter {
  let Counter = (function (star: number) {

  }) as Counter

  Counter.intervar = 10
  Counter.reset = function () {

  }
  return Counter
}

// let c = getCounter()
// c(10)
// c.reset()
// c.intervar = 5.0
