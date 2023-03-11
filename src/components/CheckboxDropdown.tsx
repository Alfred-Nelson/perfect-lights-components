// import React, { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { DownwardArrowIcon } from "../assets/ArrowIcons";
// import useClickOutside from "../hooks/useClickOutside";
// import Checkbox from "./Checkbox/Checkbox";
// import { SelectableDropdownValueType } from "./Dropdown";

// type CheckboxDropdownPropType = {
//   label: string;
//   boxText: string;
//   hint?: string | string[];
//   optionList?: SelectableDropdownValueType[];
//   selectedValues?: SelectableDropdownValueType[];
//   onSelect?: (settableValue?: SelectableDropdownValueType[]) => void;
//   disabled?: boolean;
//   greyOut?: boolean;
//   selectedBoxTextType?: "number_only" | "name_number"
// };

// const CheckboxDropdown = ({
//   label = "",
//   boxText = "",
//   hint = "",
//   optionList = [],
//   selectedValues = [],
//   onSelect = () => {},
//   disabled = false,
//   greyOut = false,
//   selectedBoxTextType = "name_number"
// }: CheckboxDropdownPropType) => {
//   const [openDropdown, setOpenDropdown] = useState<boolean>(false);
//   const firstValue = selectedValues.length ? selectedValues[0].label : ""
//   let selectedBoxText
//   if(selectedBoxTextType === "name_number") {
//     selectedBoxText = `${firstValue}${(selectedValues.length - 1) ? (` + ${selectedValues.length - 1}`) : ""} Selected`
//   } else {
//     selectedBoxText = `${selectedValues.length} Selected`
//   }
//   const containerRef = useRef(null);
//   useClickOutside(containerRef, () => setOpenDropdown(false));


//   return (
//     <div ref={containerRef} className={`w-full relative ${greyOut && "opacity-30"}`}>
//       {label && <p className="font-semibold text-[15px] pb-2 px-1">{label}</p>}
//       <button
//         onClick={() => !disabled && !greyOut && setOpenDropdown((prev) => !prev)}
//         className={`${
//           openDropdown
//             ? "shadow-[inset_0_0_0_1px_#772021]"
//             : "shadow-[inset_0_0_0_1px_#DEDEDE]"
//         } ${
//           disabled && !greyOut && "cursor-not-allowed"
//         } ease-in-out transition w-full pl-2.5 pr-1 py-1.5 rounded-md items-center flex justify-between text-[13px] text-pot-textgrey2 `}
//       >
//         <p className={`w-full text-left ${firstValue && "text-pot-black"}`}>{ firstValue ? selectedBoxText : boxText}</p>
//         <motion.div
//           className="stroke-pot-black px-1.5"
//           animate={openDropdown ? { rotate: -180 } : { rotate: 0 }}
//         >
//           <DownwardArrowIcon />
//         </motion.div>
//       </button>
//       <AnimatePresence>
//         {openDropdown && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: "30vh", transition: { duration: 0.4 } }}
//             exit={{ height: 0, transition: { duration: 0.1 } }}
//             // transition={{ duraton: 0.6 }}
//             className="mt-2 max-h-[30vh] z-30 overflow-y-auto shadow-[0_0_0_1px_#DEDEDE] w-full rounded-md absolute bg-white py-2"
//           >
//             <div className="py-2 px-5 border-b mb-2">
//               <Checkbox label="Select all" checked={selectedValues.length===optionList.length} onClick={() => {
//                 if(selectedValues.length > 0){
//                 onSelect([])}
//                 else {
//                   onSelect(optionList)
//                 }
//               }} showMinus={selectedValues.length > 0 && selectedValues.length < optionList.length} />
//             </div>
//             {optionList.map((each) => (
//               <div className="w-full px-5 py-2 hover:bg-pot-lightmaroon3">
//                 <Checkbox
//                   label={each.label}
//                   checked={selectedValues.some(
//                     (selected) => selected.value === each.value
//                   )}
//                   onClick={() => {
//                     if (
//                       selectedValues.some(
//                         (selected) => selected.value === each.value
//                       )
//                     ) {
//                       const filteredValues = selectedValues.filter(
//                         (item) => item.value !== each.value
//                       );
//                       onSelect(filteredValues);
//                       return;
//                     }
//                     onSelect([...selectedValues, each]);
//                   }}
//                 />
//               </div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {hint &&
//         (typeof hint === "string" ? (
//           <p className="px-1 pt-1 font-light text-xs text-pot-maroon">
//             {hint}
//           </p>
//         ) : hint.length === 1 ? (
//           <p className="px-1 pt-1 font-light text-xs text-pot-maroon">
//             {hint[0]}
//           </p>
//         ) : (
//           <ul className="list-disc px-4">
//             {hint.map((each) => (
//               <li className="pt-1 font-light text-xs text-pot-maroon">
//                 {each}
//               </li>
//             ))}
//           </ul>
//         ))}
//     </div>
//   );
// };

// export default CheckboxDropdown;
import React from 'react'

function CheckboxDropdown() {
  return (
    <div>CheckboxDropdown</div>
  )
}

export default CheckboxDropdown