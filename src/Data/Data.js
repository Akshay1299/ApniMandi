// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilListUl,
  UilBlogger,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilPlus,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilListUl,
    heading: "Users",
  },
  {
    icon: UilBlogger,
    heading: "Products",
  },
  {
    icon: UilPackage,
    heading: 'Customers'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
  {
    icon: UilPlus,
    heading: " Add Product",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Total Orders",
    color: {
      backGround: "white",
      // boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "2512",
    png: UilClipboardAlt,
    series: [
      {
        name: "Total Registered NGO's",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Total Revenue",
    color: {
      backGround: "white"
    },
    barValue: 80,
    value: "₹14,270",
    png: UilUsdSquare,
    series: [
      {
        name: " NGO Donations",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Profit Earned",
    color: {
      backGround: "white",
      
    },
    barValue: 60,
    value: "₹4,750",
    png: UilUsdSquare,
    // png: UilClipboardAlt,
    series: [
      {
        name: "Donations",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
// export const UpdatesData = [
//   {
//     img: img1,
//     name: "Andrew Thomas",
//     noti: "has ordered Apple smart watch 2500mh battery.",
//     time: "25 seconds ago",
//   },
//   {
//     img: img2,
//     name: "James Bond",
//     noti: "has received Samsung gadget for charging battery.",
//     time: "30 minutes ago",
//   },
//   {
//     img: img3,
//     name: "Iron Man",
//     noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
//     time: "2 hours ago",
//   },
// ];
