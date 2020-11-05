import axios from "axios";

export const saleItem = () => {
  const res = axios({
    method: "post",
    url: "http://3.34.200.65/sale-items",
    data: {
      brand: "CU GS25 SEVEN_ELEVEN",
      category: "",
      keyword: "",
      type: ["1+1", "2+1"],
      view: "1",
      page: "1",
    },
  });

  return res;
};

export const saleItem2 = () => {
  const res = axios({
    method: "post",
    url: "http://3.34.200.65/sale-items",
    data: {
      brand: "CU GS25 SEVEN_ELEVEN",
      category: "",
      keyword: "",
      type: ["1+1", "2+1"],
      view: "1",
      page: "2",
    },
  });
  return res;
};


export const saleItem3 = () => {
  const res = axios({
    method: "post",
    url: "http://3.34.200.65/sale-items",
    data: {
      brand: "CU GS25 SEVEN_ELEVEN",
      category: "",
      keyword: "",
      type: ["1+1", "2+1"],
      view: "1",
      page: "3",
    },
  });
  return res;
};


export const saleItem5 = (brand, category, keyword, type, view, page) => {
  const res = axios({
    method: "post",
    url: "http://3.34.200.65/sale-items",
    data: {
      brand: "CU GS25 SEVEN_ELEVEN",
      category: "",
      keyword: "",
      type: ["1+1", "2+1"],
      view: "1",
      page: "1",
    },
  });
  return res;
};
