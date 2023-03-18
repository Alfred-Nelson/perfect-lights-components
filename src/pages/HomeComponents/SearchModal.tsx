import React from 'react'
import Search from '../../assets/Search';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import Modal from '../../components/Modal'

type SearchModalPropType = {
  handleClose: () => void;
};
function SearchModal(
  { handleClose }: SearchModalPropType
) {
  return (
    <Modal
      handleCancel={handleClose}
    >
      <div className="px-2 pb-2 flex flex-col justify-between items-center">
        <div className="flex flex-col gap-7 w-full xl:w-[40vw] min-h-[40vh] max-h-[60vh] items-center justify-center">
          <h1 className='font-bold text-3xl'>Search</h1>
          <div className='flex items-center w-96'>
            <InputField
              placeholder="Search professionals here"
              onChange={(text) => console.log(text)}
              leftIcon={<Search />}
              variant={"primary"}
              hint=""
            />
          </div>
          <div className=' w-70'><Button variant='primary' label='Search' /></div>
        </div>
      </div>
    </Modal>
  )
}

export default SearchModal