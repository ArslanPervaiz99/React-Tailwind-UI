export const products = [
  { id: 0, name: "Fresh Fruits", count: "9 Products", img: "/category_1.webp" },
  { id: 1, name: "Fresh Vegs", count: "5 Products", img: "/category_2.webp" },
  {
    id: 2,
    name: "Canned Goods",
    count: "14 Products",
    img: "/category_3.webp",
  },
  {
    id: 3,
    name: "Bread & Cookies",
    count: "19 Products",
    img: "/category_4.webp",
  },
  {
    id: 4,
    name: "Fishes",
    count: "10 Products",
    img: "/category_5.webp",
  },
  {
    id: 5,
    name: "Eggs & Dairy",
    count: "50 Products",
    img: "/category_6.webp",
  },
  {
    id: 6,
    name: "Soft Drinks",
    count: "30 Products",
    img: "/category_7.webp",
  },
  {
    id: 7,
    name: "Fresh Fruits",
    count: "9 Products",
    img: "/category_1.webp",
  },
];

export const fruitAndVegi = [
  { id: 0, name: "Crunchy Crisp", img: "/product_2.webp", price: "$149" },
  { id: 1, name: "Dried Mango", img: "/product_1.webp", price: "$499" },
  { id: 2, name: "Almond Organic", img: "/product_4.webp", price: "$199" },
  { id: 3, name: "Jewel Berries", img: "/product_3.webp", price: "$249" },
];
export const dairy = [
  { id: 0, name: "Crunchy Crisp", img: "/product_2.webp", price: "$149" },
  { id: 1, name: "Fresh Tomatos", img: "/product_5.webp", price: "$499" },
  { id: 2, name: "Almond Organic", img: "/product_4.webp", price: "$199" },
  { id: 3, name: "Jewel Berries", img: "/product_3.webp", price: "$249" },
];

export const blog = [
  {
    id: 1,
    title: "Healthy Food Healty Life",
    Comment: 8,
    date: "Sep 15, 2024",
    img: "/post_1.webp",
  },
  {
    id: 2,
    title: "Healthy Food Healty Life",
    Comment: 10,
    date: "Sep 16, 2024",
    img: "/post_2.webp",
  },
  {
    id: 3,
    title: "Healthy Food Healty Life",
    Comment: 5,
    date: "Sep 15, 2024",
    img: "/post_3.webp",
  },
];

import {
  LiaShippingFastSolid,
  LiaMoneyBillWaveSolid,
  LiaGiftSolid,
} from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import React from "react";
export const infoData = [
  {
    id: 1,
    title: "Free Shipping",
    icon: React.createElement(LiaShippingFastSolid),
  },
  {
    id: 2,
    title: "Best Price Guarentee",
    icon: React.createElement(LiaMoneyBillWaveSolid),
  },
  { id: 3, title: "Free Pickup", icon: React.createElement(LiaGiftSolid) },
  { id: 4, title: "Support 24/7", icon: React.createElement(FiPhoneCall) },
];
