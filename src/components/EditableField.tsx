import React, { SetStateAction, Dispatch } from 'react'
import CrossIcon from '../assets/CrossIcon';
import TickIcon from '../assets/TickIcon';
import IconButton from './IconButton';

type EditableFieldType ={
    defaultValue: string;
    api?: () => Promise<any>;
    setValue?: Dispatch<SetStateAction<string>> | (() => void)
    close?: () => void
}

const EditableField = ({ defaultValue, api, setValue, close}: EditableFieldType) => {
  return (
    <div className="w-full h-full flex gap-x-1 py-[2px] px-2">
        <div className="flex self-stretch w-full items-center">
            <input autoFocus className='px-2 border self-stretch text-sm w-full outline-none focus:border-pot-yellow' />
        </div>
        <IconButton variant='secondary'>
            <TickIcon />
        </IconButton>
        <IconButton onClick={close} variant='secondary-outline'>
            <CrossIcon />
        </IconButton>
    </div>
  )
}

export default EditableField