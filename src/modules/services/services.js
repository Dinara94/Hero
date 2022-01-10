export const fileName = "products";

export function getData() {
  return fetch(`${fileName}.json`).then((res) => res.json());
}
