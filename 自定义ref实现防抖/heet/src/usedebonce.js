export function usedebonce(func,delay=1000){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer=setTimeout(()=>{
            // func.call(this,...args)
            func(...args)
            console.log(this);
            
        },delay)
    };

}