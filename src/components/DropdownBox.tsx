import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { LeftwardArrayIcon } from "../assets/ArrowIcons";
import useClickOutside from "../hooks/useClickOutside";
import useMouseLocation from "../hooks/useMouseLocation";
import debounce from "lodash.debounce";
import EditableField from "./EditableField";

type ApiDataType = {
  id: string;
  name: string;
};

interface AreaType extends ApiDataType {}

interface FloorType extends ApiDataType {
  areas: AreaType[];
}

interface ProjectType extends ApiDataType {
  floors: FloorType[];
}

type DropdownBoxType = {
  mouseLocation: number;
  data: any;
  selected: {
    project: ProjectType | null;
    floor: FloorType | null;
    area: AreaType | null;
    setProject: Dispatch<SetStateAction<ProjectType | null>>;
    setFloor: Dispatch<SetStateAction<FloorType | null>>;
    setArea: Dispatch<SetStateAction<AreaType | null>>;
  };
};

const DropdownBox = ({ mouseLocation, data, selected }: DropdownBoxType) => {
  const [newField, setNewField] = useState(false)
  const [editable, setEditable] =
    useState<AreaType | ProjectType | FloorType | null>(null);
  const [valueStash, setValueStash] =
    useState<FloorType | AreaType | ProjectType | null>(null);
  const [clickCheck, setClick] = useState(0);
  const [leftOffset, setLeftOffset] = useState(
    `${Math.trunc(mouseLocation * 2)}%`
  );

  const handleClick = useCallback(() => {
    if (selected.floor) {
      selected.setArea(valueStash as AreaType | null);
    } else if (selected.project) {
      selected.setFloor(valueStash as FloorType | null);
    } else {
      selected.setProject(valueStash as ProjectType | null);
    }
    setClick(0);
  }, [valueStash, selected]);

  useEffect(() => {
    if (clickCheck === 1) {
      const id = setTimeout(() => handleClick(), 400);
      return () => clearTimeout(id);
    } else if (clickCheck > 1) {
      setEditable(valueStash);
      setValueStash(null);
      setClick(0);
    }
  }, [clickCheck]);

  const handleBack = () => {
    if (selected.floor) {
      selected.setFloor(null);
    }
    if (selected.project) {
      selected.setProject(null);
    }
  };

  return (
    <div
      style={{ left: `-${leftOffset}` }}
      className={`w-72 overflow-y-auto divide-y divide-pot-grey3 absolute max-h-[40svh] bg-white border border-pot-grey3 `}
    >
      <div className="sticky top-0 bg-pot-grey3 py-2 flex px-3 gap-x-2 fill-pot-black text-pot-black">
        {selected.project && (<button onClick={handleBack}>
          <LeftwardArrayIcon />
        </button>)}
        {selected.floor
          ? selected.floor.name
          : selected.project
          ? selected.project.name
          : "Projects"}
      </div>
      {newField && (
        <EditableField defaultValue="Untitled" close={() => setNewField(false)} />
      )}
      {(
        (selected.floor
          ? selected.floor.areas
          : selected.project
          ? selected.project.floors
          : data) || []
      ).map((each: ProjectType | FloorType | AreaType) => (
        <div className="">
          {editable?.id !== each.id ? (
            <button
              onClick={() => {
                if (editable) return;
                setValueStash(each);
                setClick((prev) => prev + 1);
              }}
              className="w-full text-left px-3 py-[7px]"
            >
              {each.name}
            </button>
          ) : (
            <EditableField
              defaultValue={each.name}
              close={() => setEditable(null)}
            />
          )}
        </div>
      ))}
      <button onClick={() => setNewField(true)} className="w-full text-left sticky bottom-0 bg-pot-grey3 py-2 px-3">
          + Create
      </button>
    </div>
  );
};

export default DropdownBox;
