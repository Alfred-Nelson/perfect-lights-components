import Button from "./components/Button";


function App() {
  return (

    <>
      <div className="flex justify-center mt-[20svh]">
        <p className="bg-pot-yellow px-4 py-1 font-semibold">Welcome to Perfect Lights</p>

      </div>

      <div className="flex justify-center mt-[20svh]">
        <Button
          variant="secondary-outline"  // primary , primary-dark, secondary
          placeholder="Button"
        // disabled="true"
        // leftIcon={<CreateIcon />}
        />
      </div>
    </>

  );
}

export default App;
