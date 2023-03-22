import { useRef, useState } from "react";
import HeartIcon from "./assets/HeartIcon";
import Button from "./components/Button";
import DropdownBox from "./components/DropdownBox";
import IconButton from "./components/IconButton";
import InputField from "./components/InputField";
import useClickOutside from "./hooks/useClickOutside";
import useMouseLocation from "./hooks/useMouseLocation";

function App() {
  const containerRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedFloor, setSelectedFloor] = useState<any>(null);
  const [selectedArea, setSelectedArea] = useState<any>(null);
  const mouseLocation = useMouseLocation();
  useClickOutside(containerRef, () => {
    setOpenDropdown(false)
    setSelectedFloor(null)
    setSelectedArea(null)
  });

  const areaData = Array.from({ length: 20 }).map((_, areaId) => ({
    id: areaId,
    name: `Area ${areaId}`,
  }));

  const floorData = Array.from({ length: 20 }).map((_, floorId) => ({
    id: floorId,
    name: `Floor ${floorId}`,
    areas: areaData,
  }));

  const projectData = Array.from({ length: 20 }).map((_, projectId) => ({
    id: projectId,
    name: `Project ${projectId}`,
    floors: floorData,
  }));

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center mt-[20svh]">
        <p className="bg-pot-yellow px-4 py-1 font-semibold">
          Welcome to Perfect Lights
        </p>
      </div>

      <div ref={containerRef} className="z-50 mt-10 translate-x-[10vh] relative">
        <Button
          label="Button"
          // disabled={true}
          leftIcon={<HeartIcon />}
          onClick={() => setOpenDropdown(true)}
        />
        {openDropdown && (
          <DropdownBox
            data={projectData}
            mouseLocation={mouseLocation as number}
            selected={{ 
              project: selectedProject,
              floor: selectedFloor,
              area: selectedArea,
              setProject: setSelectedProject,
              setFloor: setSelectedFloor,
              setArea: setSelectedArea,
            }}
          />
        )}
      </div>
      <div className="flex justify-center space-x-5 mt-10">
        <IconButton variant="secondary-outline">
          <HeartIcon />
        </IconButton>
      </div>

      <div className="flex justify-center m-auto w-60 space-x-5 mt-10">
        <InputField
          label="Password"
          placeholder="Enter your password"
          // hint={"Please Enter Correct Password"}
          onChange={(text) => console.log(text)}
          // disabled
          leftIcon={<HeartIcon />}
          // rightIcon={<HeartIcon />}
        />
      </div>

      {/* <div></div> */}
    </div>
  );
}

export default App;
