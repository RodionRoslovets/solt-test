import React from 'react'
import PeopleListItem from '../peopleListItem/peopleListitem'

const PeopleList = ({people}) => {
    let newPeople = people.map(human=>(
        <PeopleListItem 
            key={human.id}
            id={human.id}
            name={human.name}
            surname={human.surname}
        />
    ))
    return ( 
        <ul>
            {newPeople}
        </ul>
     );
}
 
export default PeopleList;