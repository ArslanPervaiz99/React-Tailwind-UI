import {
  blackImg,
  blueImg,
  greenImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  pinkImg,
  whiteImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A18 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 11,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 16 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 16 Pro in Pink",
    color: ["#CB7CAC", "#c97aab", "#6f6c64"],
    img: pinkImg,
  },
  {
    id: 2,
    title: "iPhone 16 Pro in Teal",
    color: ["#79aeb5", "#4c9e92", "#a6cdca"],
    img: greenImg,
  },

  {
    id: 3,
    title: "iPhone 16 Pro in Ultramarine",
    color: ["#92a4e4", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 4,
    title: "iPhone 16 Pro in White ",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 5,
    title: "iPhone 16 Pro in Black",
    color: ["#4e4e4e", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.3"', value: "small" },
  { label: '6.9"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
