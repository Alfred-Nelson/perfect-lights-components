import HeartIcon from "./assets/HeartIcon";
import Button from "./components/Button";
import HorizontalCard from "./components/HorizontalCard";
import IconButton from "./components/IconButton";
import InputField from "./components/InputField";
import VerticalCard from "./components/VerticalCard";

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
    message: "Hello I'm Perfect Light Shape",

  },
  {
    imgUrl: "https://www.shutterstock.com/image-vector/90-degree-angle-icon-vector-260nw-2249885237.jpg",
    name: "L-Square",
    price: 2000,
    message: "Hello I'm Perfect Light Shape",
  },
  {
    imgUrl: "https://i.pinimg.com/originals/5c/ff/80/5cff802d48d74607ac929ec2751684e9.jpg",
    name: "Line",
    price: 2000,
    message: "Hello I'm Perfect Light Shape",
  },
  {
    imgUrl: "https://www.supercoloring.com/sites/default/files/styles/coloring_thumbnail/public/cif/2022/01/1570-medium-square-emoji-coloring-page.png",
    name: "Square",
    message: "Hello I'm Perfect Light Shape",

  },
  {
    imgUrl: "https://www.shutterstock.com/image-vector/90-degree-angle-icon-vector-260nw-2249885237.jpg",
    name: "L-Square",
    message: "Hello I'm Perfect Light Shape",
  },
  {
    imgUrl: "https://i.pinimg.com/originals/5c/ff/80/5cff802d48d74607ac929ec2751684e9.jpg",
    name: "Line",
    message: "Hello I'm Perfect Light Shape",
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


function App() {
  return (
    <>
      <div className="flex justify-center mt-[20svh]">
        <p className="bg-pot-yellow px-4 py-1 font-semibold">Welcome to Perfect Lights</p>
      </div>






      <div className="flex flex-wrap justify-cente items-center gap-5 p-8">
        {
          VerticalData?.map((el, i) => {
            console.log(el, "element");
            return (
              // max-w-fit min-w-[98px] max-h-fit min-h-[166px]
              <div>
                <VerticalCard key={i} imageUrl={el.imgUrl} price={el.price} name={el.name} message={el.message} degree={el.degree} />
              </div>
            )
          })
        }
      </div>






      <div className="flex flex-wrap justify-cente items-center gap-5 p-8">
        {
          Horizontaldata?.map((el, i) => {
            // console.log(el);
            return (
              <div>
                <HorizontalCard key={i} imageUrl={el.imageUrl} name={el.name} specification={el.specification} price={el.price} message={el.message} />
              </div>
            )
          })
        }
      </div>




      <div className="flex justify-center space-x-5 mt-10">
        <Button
          variant="secondary"  // primary , primary-dark, secondary, secondary-outline
          placeholder="Button"
          // disabled={true}
          leftIcon={<HeartIcon />}
        />
      </div>



      <div className="flex justify-center space-x-5 mt-10">
        <IconButton
          variant="secondary"
        >
          <HeartIcon />
        </IconButton>
      </div>



      <div className="flex justify-center m-auto w-60 space-x-5 mt-10">

        <InputField
          label="Password"
          placeholder="Enter your password"
          hint={"Please Enter Correct Password"}
          onChange={(text) => console.log(text)}
          // disabled
          // leftIcon={<HeartIcon />}
          rightIcon={<HeartIcon />}
        />
      </div>
    </>

  );
}

export default App;
