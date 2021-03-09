import React, { useState, useEffect } from 'react'
import style from './peopleListItem.module.css'
import { InView } from 'react-intersection-observer'

const PeopleListItem = ({name, surname}) => {
    let [classes, setClasses] = useState(`${style.peopleListItem}`)
    useEffect(()=>{
            setClasses(`${style.peopleListItem} ${style.peopleListItem_active}`)        
    }, [])
    return ( 
        <li className={classes}>
            <InView onChange={inView => 
                inView ? setClasses(`${style.peopleListItem} ${style.peopleListItem_active} ${style.peopleListItem_visible}`) 
                : null}>

                    <p>Name: <span>{name}</span></p>
                    <p>Surname: <span>{surname}</span></p>
            </InView>
        </li>
     );
}
 
export default PeopleListItem;