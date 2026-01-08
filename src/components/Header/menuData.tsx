import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Tổng quan",
    path: "#home",
    newTab: false,
  },

  {
    id: 2,
    title: "Tính năng AI",
    path: "#video",
    newTab: false,
  },
  {
    id: 3,
    title: "Tính năng LMS",
    path: "#brands",
    newTab: false,
  },
  {
    id: 4,
    title: "Báo giá",
    path: "#pricing",
    newTab: false,
  },
  {
    id: 5,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "So sánh",
        path: "#about",
        newTab: false,
      },
      {
        id: 42,
        title: "Story",
        path: "#story",
        newTab: false,
      },
      {
        id: 43,
        title: "Vấn đề",
        path: "#features",
        newTab: false,
      },
      {
        id: 44,
        title: "Video",
        path: "#media",
        newTab: false,
      },
      {
        id: 45,
        title: "Review",
        path: "#testimonials",
        newTab: false,
      },
      {
        id: 46,
        title: "Hệ sinh thái",
        path: "#blog",
        newTab: false,
      },


    ],
  },
];
export default menuData;
