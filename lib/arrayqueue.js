const ArrayQueue = module.exports = function () {
    this.queue = []
}

ArrayQueue.prototype = {
    offer: function (item) {
        this.queue.push(item)
        return true
    },
    
    poll: function () {
        return this.queue.shift()
    },
    
    peek: function () {
        return this.queue[0]
    }
}
