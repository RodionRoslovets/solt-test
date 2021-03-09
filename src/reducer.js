function reducer(state, action){
    switch (action.type){
        case 'INIT':
            let firstPeopleArray = action.payload.filter(item=>item.id < 20)
            return firstPeopleArray
        case 'LOADMORE':
            let lastIndex = state.length
            let otherPeople = [...state, ...action.payload.filter((item, index) => 
                index >= lastIndex  && index < lastIndex + 20 && index < action.payload.length ? item : null
            )]

            return otherPeople
        default:
            return state
    }
}

export default reducer