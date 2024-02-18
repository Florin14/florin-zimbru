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

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        tooltip:
          "Embarked on my ReactJS journey through an internship, mastering the basics. Progressed to advanced projects with NextJS during a subsequent internship. Currently, contributing full-time in real-world ReactJS development.",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        tooltip:
          "In my initial exposure to React Redux, I grasped fundamental concepts, delving into slices and thunks. A foundational experience that laid the groundwork for advanced state management in applications.",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Next Js",
        tooltip:
          "Next.js became integral to my development journey during my second internship and inaugural full-time job. Exploring its versatile applications significantly enriched my skills and understanding of web development.",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      {
        name: "HTML",
        tooltip:
          "Introduced to HTML in high school, it laid the groundwork for my web development journey. The experience provided a solid foundation, sparking my passion for creating on the web.",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        tooltip:
          "Introduced to CSS in high school, my initial exposure laid the groundwork for web development. W3Schools played a pivotal role, providing a solid foundation in CSS fundamentals.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "SASS",
        tooltip:
          "In my first internship, I delved into SASS, transforming my CSS approach. Unveiling a new realm of structured and efficient styling, it revolutionized my coding experience.",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "JavaScript",
        tooltip:
          "Introduced to JavaScript in high school, struggled to grasp it initially. First real interaction during an internship, where challenges turned into valuable learning experiences, shaping my understanding and skills.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Material UI",
        tooltip:
          "Started with MUI during my first internship, and it's been a constant in every project since. The seamless experience and versatility make it my go-to UI framework.",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Python",
        tooltip:
          "Acquired Python proficiency at university, honed skills during second internship, and now apply them adeptly in full-time development, showcasing a solid understanding and proficiency in Python programming.",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Flask",
        tooltip:
          "Flask has been integral to my development journey since my second internship. Its simplicity and versatility make it my go-to framework, consistently applied in various work projects.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png",
      },
      {
        name: "FastAPI",
        tooltip:
          "Embracing FastAPI in the past 6 months has been transformative. It's modern approach to building APIs, automatic documentation, and high performance have streamlined my work, enhancing project efficiency.",
        image: "https://cdn.worldvectorlogo.com/logos/fastapi.svg",
      },
      // {
      //   name: "Springboot",
      //   image:
      //     "data:image/png;base64,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",
      // },
      {
        name: "Postgresql",
        tooltip:
          "I proficiently managed databases with PostgreSQL at work, ensuring data integrity and optimal performance. Streamlined queries, resolved issues, and contributed to a robust and reliable system.",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        tooltip:
          "Utilized MongoDB extensively at work and university, gaining valuable experience in database management. Applied its flexibility for diverse projects, enhancing my skills in handling large datasets efficiently.",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        tooltip:
          "Introduced to Git at university, I now utilize it daily. From initial exposure to seamless integration, Git has become an indispensable tool for efficient version control in my coding journey.",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "Gitlab",
        tooltip:
          "Efficiently collaborated on projects using GitLab at work, streamlining version control and enhancing team productivity. Simplified code management, issue tracking, and continuous integration, fostering a seamless development workflow.",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "GitHub",
        tooltip:
          "Enhanced coding skills and collaboration through GitHub, fostering personal project development with seamless version control and effective teamwork.",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        tooltip:
          "Diligently used VS Code since high school for work and personal projects; its intuitive UI enhances coding efficiency and enjoyment.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "PyCharm",
        tooltip:
          "Discovered PyCharm in university; it streamlined coding. Now, an essential tool at work, enhancing efficiency and code development seamlessly.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PyCharm_Icon.svg/1024px-PyCharm_Icon.svg.png",
      },
      {
        name: "Postman",
        tooltip:
          "Explored Postman in university, initiated with backend APIs. Streamlined requests, gaining valuable experience in testing and documenting API interactions.",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
      },
      {
        name: "Figma",
        tooltip:
          "Started with Figma in high school crafting football team posters. Now, seamlessly integrating it into my professional work, a journey from creative beginnings to essential workplace design tool.",
        image:
          "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      },
    ],
  },
];
