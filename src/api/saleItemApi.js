import axios from "axios";

export const saleItem = (brand, category, keyword, type, view, page) => {
  const res = axios({
    method: "post",
    url: "http://3.34.200.65/sale-items",
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
