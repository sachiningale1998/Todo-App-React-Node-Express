import React, { useEffect, useState } from 'react';
import axios from 'axios'
const TodoList = ()=>{

    const [items, setItems] = useState(null);

    useEffect(()=>{
        axios.get('http://localhost:3002/api/items')
        .then((res)=>{
           console.log(res.data.items);
            setItems(res.data.items)
            
            
        })
    },[]);
    if(items===null){
        return <div>Loading...</div>
    }

    const handleSubmit=()=>{
        axios.post('')
    }

    return (
        <div style={{display:'block',margin:'0 40%'}}>
            {
                items.map((item)=>{
                    return (
                        <div key={item.id}>{item.name}</div>
                    )
                })
            }
            <br/>
            <form onSubmit={handleSubmit} >
                <input placeholder="Enter task" />
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    )
}

export default TodoList;