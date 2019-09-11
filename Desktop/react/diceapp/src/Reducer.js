


const initialState = {
    number:1
}

export default (state = initialState,action) => {
    switch (action.type) {

    case "CLICK":
        return {...state,number:action.payload}

    default:
        return state
    }
}
