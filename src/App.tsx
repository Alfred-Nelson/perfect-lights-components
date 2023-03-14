import HeartIcon from "./assets/HeartIcon";
import Button from "./components/Button";
import HorizontalCard from "./components/HorizontalCard";
import IconButton from "./components/IconButton";
import InputField from "./components/InputField";

const data = [
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


function App() {
  return (
    <>
      <div className="flex justify-center mt-[20svh]">
        <p className="bg-pot-yellow px-4 py-1 font-semibold">Welcome to Perfect Lights</p>
      </div>


      <div className="flex flex-col items-center">
        {
          data?.map((el, i) => {
            console.log(el);
            return (
              <div className="grid grid-cols-1 mt-4 w-[300px] h-[auto]">
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
