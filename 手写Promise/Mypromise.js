class Mypromise {
    static #PENDING = 'pending'
    static #FULFILLED = 'fulfilled'
    static #REJECTED = 'rejected'
    #state = Mypromise.#PENDING
    #value = null
    #handler = []
    constructor(executor) {
        const resolve = (val) => {
            this.#setstate(Mypromise.#FULFILLED, val)
            console.log("成功");

        }
        const reject = (reason) => {
            this.#setstate(Mypromise.#REJECTED, reason)
            console.log("失败");

        }
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    #runtask() {
        if(this.#state !== Mypromise.#PENDING){
            this.#handler.forEach(cb => cb())
            this.#handler = []
        }

    }
    #setstate(state, value) {
        if (this.#state !== Mypromise.#PENDING) return
        this.#state = state
        this.#value = value
        this.#runtask()
    }
    then(onFulfilled, onRejected) {
        return new Mypromise((resolve, reject) => {
            // pending状态执行的函数
            this.#handler.push(() => {
                try {
                    if (this.#state === Mypromise.#FULFILLED) {
                        const res= onFulfilled(this.#value)
                        resolve(res)
                    } else if (this.#state === Mypromise.#REJECTED) {
                        const res= onRejected(this.#value)
                        resolve(res)
                    }
                } catch (error) {
                    reject(error)
                }

            })  
            this.#runtask()
        })
    }
}
const p = new Mypromise((resolve, reject) => {

    resolve(22)
    // reject(33)
})
p.then(
    (res) => {
        console.log('resolve1122')
        return 2
    },
    (err) => {
        console.log('reject')
    }
)
