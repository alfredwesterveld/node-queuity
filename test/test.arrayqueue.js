"use strict"

const shouldBehaveLikeQueue = require("./test.queue.js")
const ArrayQueue = require("./../lib/arrayqueue")
shouldBehaveLikeQueue(ArrayQueue)
