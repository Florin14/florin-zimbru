import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
import vointaWeb from "../assets/img/vointa-website.png";
import ecommerceWeb from "../assets/img/ecommerceShop.png";
import socialNetwork from "../assets/img/socialNetwork.jpg";

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const projectsData = [
  {
    id: 1,
    img: vointaWeb,
    title: "Football Team Website",
    desc: "Work in progress..",
    link: "",
    git: "https://github.com/Florin14/VointaTurtWebsite",
  },
  {
    id: 2,
    img: ecommerceWeb,
    title: "Ecommerce Shop",
    desc: "Work in progress..",
    link: "",
    git: "https://github.com/Florin14/ecommerce-shop-fe",
  },
  {
    id: 3,
    img: socialNetwork,
    title: "Social Network",
    desc: "",
    link: "",
    git: "https://github.com/Florin14/Social-Network",
  },
];
