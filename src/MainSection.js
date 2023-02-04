import React, { useState } from 'react'
import Inbox from './Inbox'
import Next from './Next'
import Today from './Today'

const list = [
    { number: 1, title: "Let's Do it ", date: new Date("04/12/1999") },
    { number: 2, title: "My Birthday", date: new Date("02/18/1999") },
    { number: 3, title: "Your's Birthady", date: new Date("05/05/1999") }
]

export default function MainSection(props) {
    const [filteredList, setFilteredList] = useState(list)
    const addToList = (obj) => {
        list.push(obj)
        setFilteredList(list)
    }
    return (
        <div className='main-section'>
            {props.active === "INBOX" && (
                <Inbox list={filteredList} append={addToList} />
            )}
            {props.active === "TODAY" && <Today list={filteredList} />}
            {props.active === "NEXT" && <Next list={filteredList} />}
        </div>
    )
}