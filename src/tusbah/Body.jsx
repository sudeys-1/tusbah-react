import { useState } from "react"


function Body (){
    const [Count , setCount]=useState(0)
    
    
    return <div>
       <div>
        <div className="mt-[100px]">
            <h1  className="text-center text-[100px] ">{Count}</h1>
        </div>
        <div className="text-center mt-[50px]">


            <button onClick={()=> setCount(Count + 1)} 
                    className="p-[5px] bg-blue-600 text-white hover:bg-white hover:border-solid hover:text-blue-600 border-blue-600 border-[3px] rounded-[10px]  ">
                    increase 
            </button>



            {/* <button  onClick={()=> setCount(Count -1)} 
                    disabled = {Count ===0 }
                    className="p-[5px] ml-[30px] bg-blue-600 text-white hover:bg-white hover:border-solid hover:text-blue-600 border-blue-600 border-[3px] rounded-[10px]">
                    decrease  
            </button> */}



            <button onClick={()=>setCount (0)} 
                    disabled = {Count ===0 }
                    className="p-[5px] ml-[30px] bg-blue-600 text-white hover:bg-white hover:border-solid hover:text-blue-600 border-blue-600 border-[3px] rounded-[10px]">
                    Reset 
            </button>




        </div>
       </div>
    </div>
}

export default Body