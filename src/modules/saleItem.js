import { saleItem } from "../api/saleItemApi";

const GET_SALE_ITEM = "GET_SALE_ITEM";
const GET_SALE_ITEM_SUCCESS = "GET_SALE_ITEM_SUCCESS";
const GET_SALE_ITEM_ERROR = "GET_SALE_ITEM_ERROR";

const RESET_ITEM = 'RESET_ITEM';

export const getSaleAction = (brand, category, keyword, type, view, page) => async (dispatch) => {
  console.log(`brand ${brand}, category ${category}, keyword ${keyword}, type ${type}, view ${view}, page ${page}`)
  const payload = await saleItem(brand, category, keyword, type, view, page);

  dispatch({ type: GET_SALE_ITEM });
  try {
    dispatch({ type: GET_SALE_ITEM_SUCCESS, payload });
  } catch (e) {
    dispatch({ type: GET_SALE_ITEM_ERROR, error: e });
  }
};

export const resetSaleItem = () => ({
  type: RESET_ITEM
});

const initalState = {
  loading : false,
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
    case RESET_ITEM:
      return {
        ...state,
        loading: false,
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
      }
    case GET_SALE_ITEM:
      console.log("GET_SALE_ITEM");
      return { ...state }

    case GET_SALE_ITEM_SUCCESS: {
      console.log("GET_SALE_ITEM_SUCCESS");
      return {
        ...state,
        loading: true,
        // map은 새로운 배열을 반환하기 때문에 data에 다시 배열이 들어간다..
        data: [...state.data, action.payload.data.searchItemList],
      };
    }

    case GET_SALE_ITEM_ERROR: {
      console.log("GET_SALE_ITEM_ERROR");
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;