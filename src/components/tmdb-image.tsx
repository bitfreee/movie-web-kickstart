// import { unstable_getImgProps as getImgProps } from "next/image";
// import React from "react";

// export default function Picture() {
//   const common = { alt: "Hero" };
//   const {
//     props: { ...rest },
//   } = getImgProps({
//     ...common,
//     width: 600,
//     height: 587,
//     src: "https://assets-prdcom/header-1-mb.jpg",
//   });
//   const {
//     props: { srcSet: desk },
//   } = getImgProps({
//     ...common,
//     width: 1920,
//     height: 650,
//     src: "https://assets-prd.com/header-1-desk.jpg",
//   });

//   return (
//     <picture>
//       <source media="(min-width: 600px)" srcSet={desk} />
//       <img {...rest} />
//     </picture>
//   );
// }
