import React from 'react'
import { getLocalImage } from '../../app/handlingDatabase'
import { motion, useAnimationControls } from 'framer-motion'
import { store } from '../../app/store'
import { useAppDispatch } from '../../app/hooks'
import { changeTheme } from '../theme/themeSlice'
import { changeBackground } from '../background/backgroundSlice'
interface Props {
    id: IDBValidKey,
}
const Image: React.FC<Props> = ({ id }) => {
    const [data, setData] = React.useState<string>('')
    const currentState = store.getState().theme
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        const t = async () => {
            const d = await getLocalImage(id).then((res: ArrayBuffer | null) => {
                if (res === null) return '';
                const typedArray = new Uint8Array(res);
                const STRING_CHAR = typedArray.reduce((data, byte) => {
                    return data + String.fromCharCode(byte);
                }
                    , '');
                const base64String = window.btoa(STRING_CHAR);
                setData(base64String);
            })

        }
        t();
    }
        , [])
    return (

        <motion.div
            onClick={() => {
                dispatch(changeTheme({
                    ...currentState,
                    backgroundType: 'image',
                    backgroundValue: String(id)
                }))
                dispatch(changeBackground({
                    type: 'image',
                    value: String(id)
                }))
            }}
            whileHover={{
                scale: 21 / 20,
                x: "0.5rem",
                y: (21 / 20) / 2 * 0.5 + "rem",
            }}
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
            }}
            style={{
                backgroundImage: `url(data:image/png;base64,${data})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: "14rem",
                width: '20rem',
                display: 'inline-block',
                flex: "0 0 auto",
                margin: '0 0.5rem',
            }}
            className='w-full h-full'
        >
        </motion.div>



    )
}

export default Image