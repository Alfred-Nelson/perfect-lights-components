import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

type ModalPropType = {
    handleCancel: () => void;
    children: React.ReactNode;
};

const Modal = ({ handleCancel = () => { }, children }: ModalPropType) => {
    return createPortal(
        <>
            <div 
            onClick={handleCancel}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0 }}
                    className="w-screen h-screen fixed top-0 left-0 z-[48]"
                ></motion.div>
                <div className="w-screen h-screen fixed top-0 left-0 z-[49] backdrop-blur-[1px]"></div>
            </div>
            <div
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                className="pointer-events-none grid px-2 py-2 place-items-center w-screen z-[50] h-screen fixed top-0 left-0"
            >
                <div
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    className={`select-none z-[50] pointer-events-auto w-[80vw] max-w-2xl h-fit flex flex-col p-3 bg-white  shadow-lg`}
                >
                    {children}
                </div>
            </div>
        </>,
        document.getElementById("modal")!
    );
};

export default Modal;
