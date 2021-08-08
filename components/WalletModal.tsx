import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ButtonWalletModal from './Button/ButtonWalletModal';

interface Props {
    open: boolean;
    onClose: Function;
}
  
export default function Dialog(props: Props) {
    const { open, onClose } = props;

    if (!open) {
      return <></>;
    }  
    return (
        <div className="fixed content-center flex bg-blue-500 h-1/2 w-1/2">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
                <span className="absolute top-0 right-0 p-4">            
                    <ButtonWalletModal onClick={() => onClose()}/>
                </span>
            </div>
        </div>
   );
}


