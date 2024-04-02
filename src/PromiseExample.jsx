import React from 'react'

export default function PromiseExample() {
    // const count = false
    // let countvalue = new Promise(function(resolve,reject){
    //     if(count){
    //         resolve("There is a count value ")
    //     }
    //     else{
    //         reject("Error in counting")
    //     }
    // })
    // console.log(countvalue)

    // countvalue.then(function(value){
    //     console.log("promise reolved",value)
    // }).catch(function(error){
    //     console.log("Promise rejected",error)
    // })


    async function xyz() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 5000)
        });

        let result = await promise;
        console.log("5 sec is over",result)
        alert(result);
    }

  return (
    <div>
        <button onClick={()=>xyz()}>Promise</button>
        promise example
    </div>
  )
}
