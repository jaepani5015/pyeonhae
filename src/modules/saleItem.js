import { saleItem } from "../api/saleItemApi";

const GET_SALE_ITEM = "GET_SALE_ITEM";
const GET_SALE_ITEM_SUCCESS = "GET_SALE_ITEM_SUCCESS";
const GET_SALE_ITEM_ERROR = "GET_SALE_ITEM_ERROR";

export const getSaleAction = (brand, category, keyword, type, view, page) => async (dispatch) => {
  const payload = await saleItem(brand, category, keyword, type, view, page);

  dispatch({ type: GET_SALE_ITEM });
  try {
    dispatch({ type: GET_SALE_ITEM_SUCCESS, payload });
  } catch (e) {
    dispatch({ type: GET_SALE_ITEM_ERROR, error: e });
  }
};

const initalState = {
  data: [
    {
      id: null,
      brand: null,
      title: null,
      price: null,
      imageURL: null,
      rating: null,
      replyCount: null,
      viewCount: null,
      category: null,
      saleTypeList: [
        {
          salePeriod: null,
          saleType: null,
        }
      ]
    }
  ]
};

// data : action.payload.data.searchItemList
export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_SALE_ITEM:
      console.log("GET_SALE_ITEM");
      return { ...state }

    case GET_SALE_ITEM_SUCCESS: {
      console.log("GET_SALE_ITEM_SUCCESS");
      console.log(action.payload.data.searchItemList.forEach(e => typeof(e)));
      return {
        ...state,
        // map은 새로운 배열을 반환하기 때문에 data에 다시 배열이 들어간다..
        data: [...state.data, action.payload.data.searchItemList.forEach(e => e)]
      };
      // return { ...state }
    }

    case GET_SALE_ITEM_ERROR:
      console.log("GET_SALE_ITEM_ERROR");
      return state;

    default:
      return state;
  }
};

export default reducer;