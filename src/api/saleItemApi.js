import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_URL_BACK;

export const saleItem = (brand, category, keyword, type, view, page) => {
  const res = axios({
    method: "post",
    url: "/sale-items",
    data: {
      brand: brand,
      category: category,
      keyword: keyword,
      type: type,
      view: view,
      page: page,
    },
  });
  return res;
};
