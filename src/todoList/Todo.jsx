import '../App.css';
import React, { useState } from 'react'

function Todo() {
    const [activity, setactivity] = useState("");
    const [listData, setlistData] = useState([]);
    function addActivity(){
        // setlistData([...listData, activity]);
        // console.log(listData);
        setlistData((listData)=>{
            const updatedList = [...listData, activity];
            console.log(updatedList);
            setactivity('');
            return updatedList;
        })

    }

    function removeActivity (i){
        const updateListData = listData.filter((elem, id)=>{
            return i!= id;
        })

        setlistData(updateListData);

    }

    function deleateAll (){
        setlistData([])
    } 


  return (
    <div>
       <div id='container'>
          <h1 id='todoText'>Todo list</h1>
          <div id='todoContainer'>
          <input
          id='inputData' 
          type="text" 
          placeholder="todo List" 
          value={activity}
          onChange={e => setactivity(e.target.value)}
        />
        <button id='addBtntodo' onClick={addActivity}>Add Todo</button>
          </div>
            <h2 id='paraText'>Here is your list</h2>
            {listData!=[] && listData.map((data, i) =>{
                return(
                    <div>
                       <div id='storeDatalist'  key={i}>
                           <h2 id='storeData'>{data}</h2> 
                           <button id='addBtn' onClick={()=>removeActivity(i)}>Deleate</button>
                       </div>
                    </div>
                )
            })}
            {
                listData.length>=1 &&<button id='alldeleateBtn' onClick={deleateAll}>Deleate Todo</button>
            }
       </div>
    
    </div>
  )
}

export default Todo


