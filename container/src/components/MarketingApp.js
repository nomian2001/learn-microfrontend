import {mount} from 'marketing/App';
import React, {useRef, useEffect} from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current)
    },[])


    return <div ref={ref} />
}