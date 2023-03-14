import HeartIcon from "./assets/HeartIcon";
import Button from "./components/Button";
import HorizontalCard from "./components/HorizontalCard";
import IconButton from "./components/IconButton";
import InputField from "./components/InputField";
import VerticalCard from "./components/VerticalCard";
import ProductCard from "./components/ProductCard";
import Checkbox from "./components/CheckBox";
import { useState } from "react"
import SingleSelection from "./components/SingleSelection";
import TopNavbar from "./components/NavigationOutlet";
import BaseOutlet from "./pages";
import image43 from "./assets/image43.png"
import image65 from "./assets/image65.png"
import image66 from "./assets/image66.png"

const Horizontaldata = [
  {
    imageUrl: "https://media.istockphoto.com/id/1325377236/vector/abstract-golden-light-circle-effect.jpg?s=612x612&w=0&k=20&c=L3ETisfbMwvd2u768hwX81IEQVOcWX90sF7ebMKR3kI=",
    name: "Reflector trims | Pro-145 (trimless)",
    specification: [
      {
        heading: "Product size",
        description: "24mm * 30mm",
      },
      {
        heading: "Cut-Out Size",
        description: "24mm * 30mm",
      }
    ],
    price: 1500,
  },
  {
    imageUrl: "https://media.istockphoto.com/id/1325377236/vector/abstract-golden-light-circle-effect.jpg?s=612x612&w=0&k=20&c=L3ETisfbMwvd2u768hwX81IEQVOcWX90sF7ebMKR3kI=",
    name: "Reflector trims | Pro-145 (trimless)",
    specification: [
      {
        heading: "Product size",
        description: "24mm * 30mm",
      },
      {
        heading: "Cut-Out Size",
        description: "24mm * 30mm",
      }
    ],
    price: 1500,
  },
  {
    imageUrl: "https://media.istockphoto.com/id/1325377236/vector/abstract-golden-light-circle-effect.jpg?s=612x612&w=0&k=20&c=L3ETisfbMwvd2u768hwX81IEQVOcWX90sF7ebMKR3kI=",
    name: "Reflector trims | Pro-145 (trimless)",
    specification: [
      {
        heading: "Product size",
        description: "24mm * 30mm",
      },
      {
        heading: "Cut-Out Size",
        description: "24mm * 30mm",
      }
    ],
    price: 1500,
  },
  {
    imageUrl: "https://media.istockphoto.com/id/1325377236/vector/abstract-golden-light-circle-effect.jpg?s=612x612&w=0&k=20&c=L3ETisfbMwvd2u768hwX81IEQVOcWX90sF7ebMKR3kI=",
    name: "Reflector trims | Pro-145 (trimless)",
    message: "Hello I'm Perfect Light",
    price: 1500,
  },
  {
    imageUrl: "https://media.istockphoto.com/id/1325377236/vector/abstract-golden-light-circle-effect.jpg?s=612x612&w=0&k=20&c=L3ETisfbMwvd2u768hwX81IEQVOcWX90sF7ebMKR3kI=",
    name: "Reflector trims | Pro-145 (trimless)",
    message: "Hello I'm Perfect Light",
    price: 1500,
  },
  {
    imageUrl: "https://media.istockphoto.com/id/1325377236/vector/abstract-golden-light-circle-effect.jpg?s=612x612&w=0&k=20&c=L3ETisfbMwvd2u768hwX81IEQVOcWX90sF7ebMKR3kI=",
    name: "Reflector trims | Pro-145 (trimless)",
    message: "Hello I'm Perfect Light",
    price: 1500,
  }
]

const VerticalData = [
  {
    imgUrl: "https://www.supercoloring.com/sites/default/files/styles/coloring_thumbnail/public/cif/2022/01/1570-medium-square-emoji-coloring-page.png",
    name: "Square",
    price: 2000,
    message: "Hello",

  },
  {
    imgUrl: "https://www.shutterstock.com/image-vector/90-degree-angle-icon-vector-260nw-2249885237.jpg",
    name: "L-Square",
    price: 2000,
    message: "Hello",
  },
  {
    imgUrl: "https://i.pinimg.com/originals/5c/ff/80/5cff802d48d74607ac929ec2751684e9.jpg",
    name: "Line",
    price: 2000,
    message: "Hello",
  },
  {
    imgUrl: "https://www.supercoloring.com/sites/default/files/styles/coloring_thumbnail/public/cif/2022/01/1570-medium-square-emoji-coloring-page.png",
    name: "Square",
    message: "Hello",

  },
  {
    imgUrl: "https://www.shutterstock.com/image-vector/90-degree-angle-icon-vector-260nw-2249885237.jpg",
    name: "L-Square",
    message: "Hello",
  },
  {
    imgUrl: "https://i.pinimg.com/originals/5c/ff/80/5cff802d48d74607ac929ec2751684e9.jpg",
    name: "Line",
    message: "Hello",
  },
  {
    imgUrl: "https://www.shutterstock.com/image-vector/cone-shape-illustration-vector-graphic-260nw-1660194241.jpg",
    degree: "45°"
  },
  {
    imgUrl: "https://www.shutterstock.com/image-vector/cone-shape-illustration-vector-graphic-260nw-1660194241.jpg",
    degree: "90°"
  },
  {
    imgUrl: "https://www.shutterstock.com/image-vector/cone-shape-illustration-vector-graphic-260nw-1660194241.jpg",
    degree: "90°"
  },

]

const ProductData = [
  {
    imgUrl: image43,
    category: "ECO",
    name: "LED Cob Spot Light Hybec | PRO-45",
    price: 4000
  },
  {
    imgUrl: image65,
    category: "ELITE",
    name: "LED Cob Spot Light Hybec | PRO-45",
    price: 4000
  },
  {
    imgUrl: image66,
    category: "ELITE",
    name: "LED Cob Spot Light Hybec | PRO-45",
    price: 4000
  },
  {
    brand: "Tommy Geoco’s",
    imgUrl: image66,
    category: "PROFESSIONAL",
    name: "LED Cob Spot Light Hybec | PRO-45",
    price: 4000
  },
]


function App() {
  const [check, setCheck] = useState<boolean>(false);



  return (
    <>

      <TopNavbar />
      <BaseOutlet />


      {/* <div className="flex justify-center mt-[20svh]">
        <p className="bg-pot-yellow px-4 py-1 font-semibold">Welcome to Perfect Lights</p>
      </div> */}





      {/* <div className="flex flex-wrap justify-center items-center gap-5 p-8">
        <SingleSelection value={0} disabled={true} />
        <SingleSelection value={1} disabled={false} />
      </div> */}

      {/*Single Check Box */}
      {/* <div className="flex flex-wrap justify-center items-center gap-5 p-8">
        <Checkbox value={0} disabled={true} />
        <Checkbox value={1} disabled={false} />
        <Checkbox value={2} disabled={false} />
      </div> */}


      {/* Product Card Component */}
      {/* <div className="flex flex-wrap justify-center items-center gap-5 p-8">
        {
          ProductData?.map((el, i) => {
            // console.log(el, "product");
            return (
              <div key={i} >
                <ProductCard imageUrl={el.imgUrl} price={el.price} name={el.name} category={el.category} brand={el.brand} />
              </div>
            )
          })
        }
      </div> */}



      {/* Vertical Card Component */}
      {/* <div className="flex flex-wrap justify-between items-center gap-5 p-8">
        {
          VerticalData?.map((el, i) => {
            // console.log(el, "element");
            return (
              // max-w-fit min-w-[98px] max-h-fit min-h-[166px]
              <div key={i}>
                <VerticalCard imageUrl={el.imgUrl} price={el.price} name={el.name} message={el.message} degree={el.degree} />
              </div>
            )
          })
        }
      </div> */}




      {/* Horizontal Card Component */}
      {/* <div className="flex flex-wrap justify-center items-center gap-5 p-8">
        {
          Horizontaldata?.map((el, i) => {
            // console.log(el);
            return (
              <div key={i}>
                <HorizontalCard imageUrl={el.imageUrl} name={el.name} specification={el.specification} price={el.price} message={el.message} />
              </div>
            )
          })
        }
      </div> */}



      {/* Button Component */}
      {/* <div className="flex justify-center space-x-5 mt-10">
        <Button
          variant="secondary"  // primary , primary-dark, secondary, secondary-outline
          label="Button"
          // disabled={true}
          leftIcon={<HeartIcon />}
        />
      </div> */}


      {/* Icon ButtonComponent */}
      {/* <div className="flex justify-center space-x-5 mt-10">
        <IconButton
          variant="secondary"
        >
          <HeartIcon />
        </IconButton>
      </div> */}


      {/* InputField Component */}
      {/* <div className="flex justify-center m-auto w-60 space-x-5 mt-10">

        <InputField
          label="Password"
          placeholder="Enter your password"
          hint={"Please Enter Correct Password"}
          onChange={(text) => console.log(text)}
          // disabled
          // leftIcon={<HeartIcon />}
          rightIcon={<HeartIcon />}
        />
      </div> */}
    </>

  );
}

export default App;
