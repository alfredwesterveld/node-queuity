"use strict"

const assert = require("assert")
const implement = require("implement")
const Queue = require("./../lib/queue")

exports = module.exports = function (testedQueue) {
    implement(testedQueue, Queue) // first make sure interface is implemented.
    
    describe("Queue", function () {
        beforeEach("create Queue", function () {
            this.queue = new testedQueue()
        })
        
        it("Should be able to push", function (done) {
            this.queue.offer("a")
            done()
        })
        
        it("Should be able to push multiple", function (done) {
            this.queue.offer("a")
            this.queue.offer("b")
            done()
        })
        
        it("Should be able to poll item which has been offered", function (done) {
            this.queue.offer("a")
            const element = this.queue.poll()
            assert.equal(element, "a")
            done()
        })
        
        it("Should be able to poll item which has been offered first", function (done) {
            this.queue.offer("a")
            this.queue.offer("b")
            let element = this.queue.poll()
            assert.equal(element, "a")
            element = this.queue.poll()
            assert.equal(element, "b")
            done()
        })

        
        it("Should return undefined when polling empty queue", function (done) {
            const element = this.queue.poll()
            assert.equal(element, undefined)
            done()
        })
        
        it("Should be able to peek queue which does not delete element", function (done) {
            this.queue.offer("a")
            let element = this.queue.peek()
            assert.equal(element, "a")
            element = this.queue.peek() // again
            assert.equal(element, "a")
            done()
        })
        
        it("Should peek queue multiple offered elements too", function (done) {
            this.queue.offer("a")
            this.queue.offer("b")
            let element = this.queue.peek()
            assert.equal(element, "a")
            element = this.queue.peek() // again
            assert.equal(element, "a")
            done()
        })
    })
}
