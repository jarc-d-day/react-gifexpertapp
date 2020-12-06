// 78. Custom Hook // 79. useFetchGifs

// POR CONVENCION, LOS HOOKS Y LOS CUSTOM HOOKS DEBEN EMPEZAR CON LA FRASE 'use'

//import React from 'react' // no es necesaria, a menos que uds regresen jsx

import { useState, useEffect } from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // LOS EFECTOS NO PUEDEN SER ASYNC
    useEffect( () => {
        getGifs(category)
        .then(imgs => {
            setState({
                data: imgs,
                loading: false
            });

        })

    }, [ category ]);

    return state;
}
