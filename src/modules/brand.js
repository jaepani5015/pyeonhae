const BRAND = 'BRAND';
const SEARCH = 'SEARCH';

export const inputBrandName = data => ({ type: BRAND, data });
export const inputSearchValue = data => ({ type: SEARCH, data });

const initialState = {
    // 초기 selectBrand를 CU로 초기화 시켜 Event.js에서 제품 요청을 2번 하지 않도록 설정
    // selectBrand값이 변경되지 않았으니 리렌더링 될 조건이 없어진다.
    selectBrand: "CU",
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