import HeartIcon from "./assests/HeartIcon";
import Button from "./components/Button";
import IconButton from "./components/IconButton";


function App() {
  return (

    <>
      <div className="flex justify-center mt-[20svh]">
        <p className="bg-pot-yellow px-4 py-1 font-semibold">Welcome to Perfect Lights</p>

      </div>

      <div className="flex justify-center space-x-5 mt-[20svh]">
        <Button
          variant="secondary-outline"  // primary , primary-dark, secondary, secondary-outline
          placeholder="Button"
        // disabled="true"
        // leftIcon={<CreateIcon />}
        />
        <IconButton
          variant="secondary-outline"  
        >
          <HeartIcon  />
        </IconButton>
        
      </div>



    </>

  );
}

export default App;
