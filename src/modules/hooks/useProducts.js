import { useCallback, useEffect, useState } from "react";
import { getData } from "../services/services";

export default function () {
  const [list, setList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  const refresh = useCallback(() => {
    getData().then((list) => setList(list));
  }, []);

  const findSelected = useCallback((id) => {
    getData().then((list) => {
      setSelectedProduct(list.filter((item) => item.id == id)[0]);
    });
  }, []);

  useEffect(refresh, [refresh]);

  return {
    list,
    findSelected,
    selectedProduct,
    setSelectedProduct,
    refresh,
  };
}
