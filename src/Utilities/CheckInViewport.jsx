import {h} from 'preact'
import {useEffect, useState, useContext} from 'preact/hooks'
import {ThemeContext} from '../ThemeContext.jsx'

function checkInViewport(Ref) {
    const {scrollY, setInViewport} = useContext(ThemeContext)
    const rect = Ref.current?.getBoundingClientRect()

    useEffect(() => {
    if(
        Math.abs(rect?.top) >= 0 &&
        rect?.left >= 0 &&
        rect?.bottom <= (window.innerHeight || Ref.current?.clientHeight) &&
        rect?.right <= (window.innerWidth || Ref.current?.clientWidth)
    ) {
        setInViewport(Ref.current?.id)
    } 
    }, [scrollY])
}

export default checkInViewport
