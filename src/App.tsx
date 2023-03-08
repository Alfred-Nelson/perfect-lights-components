import HeartIcon from "./assets/HeartIcon";
import Button from "./components/Button";
import IconButton from "./components/IconButton";
import InputField from "./components/InputField";


function App() {
  return (
    <>
      <div className="flex justify-center mt-[20svh]">
        <p className="bg-pot-yellow px-4 py-1 font-semibold">Welcome to Perfect Lights</p>
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
          variant="secondary-outline"
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
          leftIcon={<HeartIcon />}
          // rightIcon={<HeartIcon />}
        />
      </div>
    </>

  );
}

export default App;
