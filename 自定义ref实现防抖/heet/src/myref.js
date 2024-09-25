


import {customRef }from 'vue'
export function usedebonceRef(value,delay=1000){
    return customRef((track,trigger)=>{
        let timer;               
        return {
            get(){
                track()
                return value;
            },
            set(val){
                clearTimeout(timer)
                timer=setTimeout(()=>{
                    value=val
                    trigger()
                },delay)
            }
        }
    })

}