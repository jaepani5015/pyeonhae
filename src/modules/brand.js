const BRAND = 'BRAND';
const SEARCH = 'SEARCH';

export const inputBrandName = data => ({ type: BRAND, data });
export const inputSearchValue = data => ({ type: SEARCH, data });

const initialState = {
    selectBrand: "",
    searchValue: "",
}

export const changeBrandName = (state = initialState, action) => {
    switch (action.type) {
        case BRAND:
            return {
                ...state,
                selectBrand: action.data,
            };

        case SEARCH:
            return {
                ...state,
                searchValue: action.data,
            };
        default: return state;
    }
}

export default changeBrandName;