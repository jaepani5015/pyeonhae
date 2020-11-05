import { saleItem, saleItem2, saleItem3} from "../api/saleItemApi";

const GET_SALE_ITEM = "GET_SALE_ITEM";
const GET_SALE_ITEM_SUCCESS = "GET_SALE_ITEM_SUCCESS";
const GET_SALE_ITEM_ERROR = "GET_SALE_ITEM_ERROR";

export const getSaleAction = () => async (dispatch) => {
  const payload = await saleItem();

  dispatch({ type: GET_SALE_ITEM });
  try {
    dispatch({ type: GET_SALE_ITEM_SUCCESS, payload });
  } catch (e) {
    dispatch({ type: GET_SALE_ITEM_ERROR, error: e });
  }
};

export const getSaleAction2 = () => async (dispatch) => {
  const payload = await saleItem2();

  dispatch({ type: GET_SALE_ITEM });
  try {
    dispatch({ type: GET_SALE_ITEM_SUCCESS, payload });
  } catch (e) {
    console.log("catch");
    dispatch({ type: GET_SALE_ITEM_ERROR, error: e });
  }
};

export const getSaleAction3 = () => async (dispatch) => {
  const payload = await saleItem3();

  dispatch({ type: GET_SALE_ITEM });
  try {
    dispatch({ type: GET_SALE_ITEM_SUCCESS, payload });
  } catch (e) {
    console.log("catch");
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

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_SALE_ITEM:
      console.log("GET_SALE_ITEM");
      return state;

    case GET_SALE_ITEM_SUCCESS:
      console.log("GET_SALE_ITEM_SUCCESS");
      return {
        ...state,
        data : action.payload.data.searchItemList,
      };

    case GET_SALE_ITEM_ERROR:
      console.log("GET_SALE_ITEM_ERROR");
      return state;

    default:
      return state;
  }
};

export default reducer;