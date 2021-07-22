import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    
//    const categories =['One punch' , 'Samurai x', 'Dragon ball'];




    const [categories, setCategories] = useState(['WWE'])
    
    /* const handleAdd = () => {

            //setCategories([...categories,'Roman Reigns']);
            setCategories (cats => [...cats, 'Roman Reigns']);
            //console.log(categories);
    }
    console.log(categories); */
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories ={setCategories}/>
            <hr/>
            <ol>
                
                {
                categories.map(category =>(
                    <GifGrid key={category} category={category}/>
                ))
                }
            </ol>
                
        </div>
    )
}




