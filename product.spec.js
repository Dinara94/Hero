import React from "react";
import Categories from "./src/modules/components/category/Categories.js";
import Product from "./src/modules/components/product/Product.js";
import fileName from "./src/modules/services/services.js";

const example = {
  id: 22386980,
  title: "Hand Painted Blue Flat Dish",
  brand: "Kiriko",
  price: 28,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
  image: "hand-painted-blue-flat-dish.jpg",
};

const products = [
    {
      id: 22386986,
      title: "Blue Stripe Stoneware Plate",
      brand: "Kiriko",
      price: 40,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      image: "blue-stripe-stoneware-plate.jpg"
    },
    {
      id: 22386980,
      title: "Hand Painted Blue Flat Dish",
      brand: "Kiriko",
      price: 28,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
      image: "hand-painted-blue-flat-dish.jpg"
    },
    {
      id: 22386989,
      title: "Heme",
      brand: "Dust & Form",
      price: 52,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
      image: "heme.jpg"
    },
    {
      id: 22386981,
      title: "Mashiko-Yaki Green Small Plate",
      brand: "Kiriko",
      price: 28,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      image: "mashiko-yaki-green-small-plate.jpg"
    },
    {
      id: 22386903,
      title: "Mashiko-Yaki Indigo Small Plate",
      brand: "Kiriko",
      price: 28,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      image: "mashiko-yaki-indigo-small-plate.jpg"
    },
    {
      id: 22386222,
      title: "Mashiko-Yaki Saucer",
      brand: "Kiriko",
      price: 18,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      image: "mashiko-yaki-saucer.jpg"
    }
  ]

const mockJsonPromise = Promise.resolve({list: products});
const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

describe("Categories component", () => {
  it("Categories rendering", () => {
    const component = shallow(<Categories />);
    const wrapper = component.find(".Categories-container");
    expect(wrapper.length).toBe(1);
  });

/*   it("should call fetch in useEffect", () => {
    expect(global.fetch).toHaveBeenCalledWith(`${fileName}.json`);
  });
}); */

describe("Product component", () => {
  it("render with props", () => {
    const component = shallow(<Product key={12346} item={example} />);
    expect(component).toMatchSnapshot();
  });

  it("render with default props", () => {
    const result = Product.defaultProps.item;
    expect(result).toStrictEqual({});
  });

  it("should change layout when hovered", () => {
    const component = shallow(<Product key={12346} item={example} />);
    const wrapper = component.find("img");
    wrapper.simulate("mouseenter");
    expect(component).toMatchSnapshot();
  });
});
