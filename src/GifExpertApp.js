
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['Lindsay Lohan'])

    // const handleAdd = () =>
    // {
    //     // 2 formas de agregar elementos a una constante array
    //     //setcategories( [...categories, 'Hunter X Hunter'] );

    //     setcategories(cats => [...cats, 'Hunter X Hunter']);
    // }

    return (
        <>           
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>
                
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category = { category }
                        />
                    )) 
                }
            </ol>
        </>
    )
}
