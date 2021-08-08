import { Popover, Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'
import WalletModal from './WalletModal'

export default function Navbar() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClose = () => {}
  const onClose = () => {}


  const handleOpenModal = () => setIsModalOpen(true)

  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <div className="">
        <Popover className="relative bg-white">
          <div className="mx-auto bg-gradient-to-r from-light-blue via-medium-blue to-dark-blue">
            <div className="flex justify-between items-center md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Million Pixel</span>
                  <img
                    className="w-auto bg-white"
                    src="/images/million-icon.svg"
                    alt=""
                  />
                </a>
              </div>
      
              <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                <img
                    className="w-10 shadow-sm mr-2 cursor-pointer"
                    src="/images/metamask-logo.png"
                    alt=""
                    onClick={handleOpenModal}
                />
              </div>
            </div>  
          </div>
      </Popover>

      {isModalOpen && <WalletModal open={true} onClose={handleCloseModal} />}
    </div>
  )
}