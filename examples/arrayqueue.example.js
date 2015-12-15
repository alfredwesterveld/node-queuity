"use strict"

const ArrayQueue = require("./../lib/arrayqueue")
const a1 = new ArrayQueue()
a1.offer("hello")
const item = a1.poll()
console.log(item)
