import { useRouter } from 'next/navigation';
import React from 'react'
import ButtonMain from './ButtonMain';

const BackButton = () => {
    const router = useRouter();
    
    const goBack = () => {
        router.back(); // Возвращает на предыдущую страницу
    };
  return (
    <ButtonMain 
                key={"Back"}
                classNames={'tw-w-[170px] tw-flex-shrink-0'} 
                variant='outlined' 
                color="grey" 
                text={
                  <div className='tw-flex tw-gap-2 tw-text-center tw-items-center'>
                    <img src='/images/dashboard/icons/larrow.png'/> 
                    Back
                  </div>
                }
                onClick={() => goBack()}
              />
  )
}

export default BackButton