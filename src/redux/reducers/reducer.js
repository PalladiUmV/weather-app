const initialState = {
    data: [],
    modalData: [],
    loading: true,
    popup: false,
    cityName: 'Москва',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'FETCH_WEATHER_SUCCESS':
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case 'POPUP_CLOSE':
            return {
                ...state,
                modalData: [],
                popup: false,
            };
        case 'POPUP_OPEN':
            const index = action.payload;
            const { daily } = state.data;
            const newItem = daily.find((item, idx) => idx === index);
            console.log(newItem)
            return {
                ...state,
                modalData: [newItem],
                popup: true,
            }
        case 'SET_TITLE_CITY':
            return {
                ...state,
                cityName: action.payload,
            }

        default:
            return state;
    }
}

export default reducer;


