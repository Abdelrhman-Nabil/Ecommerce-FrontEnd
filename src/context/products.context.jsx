// import { createContext,useState } from 'react';



// const ALLPRODUCT = [
//   {
//     id: '0',
//     title: "iPhone 13 pro max",
//     imageUrl:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHR4y_raOqE4e4RPvId6Mvobjczbul1jl9Jo37D6K6sg&s',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-b7e0azYN8IAKYDx_rIYuDmi2k56WC3eLw&s' 
//    ],
//     price: 1100,
//     details:"The iPhone 13 Pro Max is Apple's biggest phone in the lineup with a massive, 6.7' screen that for the first time in an iPhone comes with 120Hz ProMotion display that ensures super smooth scrolling. The benefit of such a gigantic phone is that it also comes with the biggest battery of all iPhone 13 series.",
//     categories:'Phone',
//     color:'black',
//     Storage:'128',
//   },
//   {
//     id: 1,
//     title: "iPhone 13 pro max",
//     imageUrl:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHR4y_raOqE4e4RPvId6Mvobjczbul1jl9Jo37D6K6sg&s',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-b7e0azYN8IAKYDx_rIYuDmi2k56WC3eLw&s' 
//    ],
//     price: 1100,
//     details:"The iPhone 13 Pro Max is Apple's biggest phone in the lineup with a massive, 6.7' screen that for the first time in an iPhone comes with 120Hz ProMotion display that ensures super smooth scrolling. The benefit of such a gigantic phone is that it also comes with the biggest battery of all iPhone 13 series.",
//     categories:'Phone',
//     color:'white',
//     Storage:'256',
    
//   },
//   {
//     id: 2,
//     title: "iPhone 14 pro max ",
//     imageUrl:['https://www.imagineonline.store/cdn/shop/files/r1598_Space_Black_PDP_Image_Position-1a_Avail__en-IN_823x.jpg?v=1692350830',
//    'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907.jpg.landing-big_2x.jpg' 
//   ]
//     ,price: 1400,
//     details:"The iPhone 14 Pro Max comes with 6.7-inch OLED display with 120Hz refresh rate and Apple's improved Bionic A16 processor. On the back there is a Triple camera setup with 48MP main camera..",
//     categories:'Phone',
//     color:'Gold',
//     Storage:'512',
//   },
//   {
//     id: 3,
//     title: "iPhone 14 pro",
//     imageUrl:[
//     'https://www.imagineonline.store/cdn/shop/files/iPhone_14_Pro_Space_Black_PDP_Image_Position-1a__WWEN_823x.jpg?v=1692349757'
//     ,'https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_iphone_14_pro__e0act2165xqq_small.jpg'
//   ],
//     price: 1200,
//     details:"The iPhone 14 Pro display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.12 inches diagonally (actual viewable area is less)",
//     categories:'Phone',
//     color:'silver',
//     Storage:'1024',

//   },
//   {
//     id: '4',
//     title: "iPhone 13 pro max",
//     imageUrl:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHR4y_raOqE4e4RPvId6Mvobjczbul1jl9Jo37D6K6sg&s',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-b7e0azYN8IAKYDx_rIYuDmi2k56WC3eLw&s' 
//    ],
//     price: 1100,
//     details:"The iPhone 13 Pro Max is Apple's biggest phone in the lineup with a massive, 6.7' screen that for the first time in an iPhone comes with 120Hz ProMotion display that ensures super smooth scrolling. The benefit of such a gigantic phone is that it also comes with the biggest battery of all iPhone 13 series.",
//     categories:'Phone',
//     color:'black',
//     Storage:'128',
//   },
//   {
//     id: 5,
//     title: "iPhone 13 pro max",
//     imageUrl:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHR4y_raOqE4e4RPvId6Mvobjczbul1jl9Jo37D6K6sg&s',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-b7e0azYN8IAKYDx_rIYuDmi2k56WC3eLw&s' 
//    ],
//     price: 1100,
//     details:"The iPhone 13 Pro Max is Apple's biggest phone in the lineup with a massive, 6.7' screen that for the first time in an iPhone comes with 120Hz ProMotion display that ensures super smooth scrolling. The benefit of such a gigantic phone is that it also comes with the biggest battery of all iPhone 13 series.",
//     categories:'Phone',
//     color:'white',
//     Storage:'256',
    
//   },
//   {
//     id: 6,
//     title: "iPhone 14 pro max ",
//     imageUrl:['https://www.imagineonline.store/cdn/shop/files/r1598_Space_Black_PDP_Image_Position-1a_Avail__en-IN_823x.jpg?v=1692350830',
//    'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907.jpg.landing-big_2x.jpg' 
//   ]
//     ,price: 1400,
//     details:"The iPhone 14 Pro Max comes with 6.7-inch OLED display with 120Hz refresh rate and Apple's improved Bionic A16 processor. On the back there is a Triple camera setup with 48MP main camera. Prices start from 1099$.",
//     categories:'Phone',
//     color:'Gold',
//     Storage:'512',
//   },
  
//   {
//     id: 7,
//     title: "iPhone 14 pro",
//     imageUrl:[
//     'https://www.imagineonline.store/cdn/shop/files/iPhone_14_Pro_Space_Black_PDP_Image_Position-1a__WWEN_823x.jpg?v=1692349757'
//     ,'https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_iphone_14_pro__e0act2165xqq_small.jpg'
//   ],
//     price: 1200,
//     details:"The iPhone 14 Pro display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.12 inches diagonally (actual viewable area is less)",
//     categories:'Phone',
//     color:'silver',
//     Storage:'1024',

//   },
// ];
// const FETRUEPRODUCT = {
//   id: "fetureProduct",
//   title: "Macbook 14 Pro",
//   imageUrl: [
//     "https://cairosales.com/100790-thickbox_default/apple-16-inch-macbook-pro-m3-pro-chip-with-12core-cpu-and-18core-gpu-18gb-512gb-ssd-space-black-mrw13aea.jpg",
//     'https://cairosales.com/100792-thickbox_default/apple-16-inch-macbook-pro-m3-pro-chip-with-12core-cpu-and-18core-gpu-18gb-512gb-ssd-space-black-mrw13aea.jpg'
//   ],
//   price: 2500,
//   details:
    // 14-inch Liquid Retina XDR display² Two Thunderbolt / USB 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port Magic Keyboard with Touch ID Force Touch trackpad 70W USB-C Power Adapter
// };

// export const ProductsContext = createContext({
//   products: [],
//   fetureProduct:{},
// });

// // export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState(ALLPRODUCT);
//   const[fetureProduct,setFetureProduct]=useState(FETRUEPRODUCT)
//   const value = { products ,fetureProduct };
//   return (
//     <ProductsContext.Provider value={value}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };