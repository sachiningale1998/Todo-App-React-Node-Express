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

    return (
        <div>
            {
                items.map((item)=>{
                    return (
                        <div key={item.id}>{item.name}</div>
                    )
                })
            }
        </div>
    )
}

export default TodoList;