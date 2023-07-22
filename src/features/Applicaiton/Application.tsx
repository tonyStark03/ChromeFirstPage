import React, { useEffect, useState } from 'react'
import * as Separator from '@radix-ui/react-separator';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectTheme,
} from '../theme/themeSlice'
import Utility from '../Utility/Utility';
import Navebar from './Navebar';

const Application: React.FC = () => {
    const theme = useAppSelector(selectTheme);
    const horizontal = Boolean(true)
    return (
        <>
            <Navebar />
            <div className='h-screen w-screen'
            >
                {/* top */}
                {horizontal?
                    <div className='flex-col justify-center h-screen w-screen pt-16'>
                    {
                        theme.utilityIsActive &&
                        <>
                            
                            <div className='w-full h-2/6 items-center max-sm:hidden '>
                                <Utility />
                            </div>
                            <Separator.Root decorative className=' h-1 w-screen rounded max-sm:hidden' style={{
                                backgroundColor: theme.separatorColor,
                            }} />
                        </>
                    }
                    {/* below */}
                    
                    <div className=' w-full h-full flex items-center justify-center'>
                </div>

                </div>
               
                    
                    :

                <div className='flex items-center justify-between h-screen w-screen pb-3 pt-20 px-6'>
                    {
                        theme.utilityIsActive &&
                        <>
                            {/* left */}
                            
                            <div className=' h-full w-2/6 flex items-center justify-center max-sm:hidden'>
                                <Utility />
                            </div>
                            {/* seprator */}
                            <Separator.Root decorative className=' w-2 h-5/6 rounded max-sm:hidden' style={{
                                backgroundColor: theme.separatorColor,
                            }} />
                        </>
                    }
                    {/* right */}
                    <div className=' w-full h-full flex items-center justify-center'>
                    </div>
                </div>
                 }
            </div >
        </>
    )
}

export default Application