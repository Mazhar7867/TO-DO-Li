import React, { useEffect, useState } from 'react'

function App() {
//  let title = ""
 const [title , setTitle] = useState("")

 const [listItems , setListItems] = useState([])
return(
  <div className='flex justify-center pt-3'>
    <form onSubmit={(event)=>{
      event.preventDefault()
    }}>
      <h1 className='justify-center flex font-bold text-3xl mt-3 mb-5 '>TO-DO-LIST</h1>
      <div>
        <input value={title}
        onChange={(event)=>{
         setTitle(event.target.value)
        }}
        
        className='border border-gray-500 mr-3  w-[300px]'/>



        <button 
         onClick={()=>{
                  setListItems([...listItems , title]);
                  setTitle("")
                }}
        
        className='border border-gray-400 rounded-md py-1 px-2 bg-sky-500 text-white font-medium'>Add me</button>
      </div>

      <div>
        <ul>
          {
            listItems.map((element)=>{
              return(
                <li className='w-[380px] bg-gray-400  mt-4 h-10 rounded-md flex justify-center items-center gap-2'> {element} </li>
              )
            })
          }
        </ul>
      </div>
    </form>
  </div>
)

}

export default App