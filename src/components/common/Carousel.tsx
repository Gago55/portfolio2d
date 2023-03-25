import LeftIcon from '@mui/icons-material/ChevronLeft';
import RightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import { Box, BoxProps, IconButton, SxProps } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { keyframes } from '@mui/system';
import React, { FC, useEffect, useRef, useState } from 'react';

interface IFlexProps extends BoxProps {
    children: JSX.Element | JSX.Element[] | React.ReactNode
    column?: boolean
    fullWidth?: boolean
    centerX?: boolean
    centerY?: boolean
    sx?: SxProps
}

const Flex = ({ children, column, fullWidth, centerX, centerY, sx, ...props }: IFlexProps) => {

    return <Box sx={{
        display: 'flex',
        flexDirection: column ? 'column' : undefined,
        width: fullWidth ? 1 : undefined,
        ...(!column
            ? {
                justifyContent: centerX ? 'center' : undefined,
                alignItems: centerY ? 'center' : undefined,
            }
            : {
                justifyContent: centerY ? 'center' : undefined,
                alignItems: centerX ? 'center' : undefined,
            }),
        ...sx
    }}
        {...props}
    >
        {children}
    </Box >

}

type ImageType = {
    src: string
    id: number
}

const slideLeftIn = keyframes`
    from {
      display: none;
      transform: translate(100%);
    }  
    to {
      transform: translate(0%);
    }
`

const slideLeftOut = keyframes`
    from {
      transform: translate(0%);
    }
    to {
      display: none;
      transform: translate(-100%);
    } 
`

const slideRightIn = keyframes`
    from {
      display: none;
      transform: translate(-100%);
    }  
    to {
      transform: translate(0%);
    }
`

const slideRightOut = keyframes`
    from {
      transform: translate(0%);
    }
    to {
      display: none;
      transform: translate(100%);
    } 
`

interface IProps {
    images: string[]
    width: number | string
    ratio: number
}

const Carousel: FC<IProps> = props => {
    // const imageRation = 1.7
    const itemWidth = props.ratio > 1 ? 100 : 100 * props.ratio

    const ref = useRef<HTMLDivElement>(null)
    const dialogRef = useRef<HTMLDivElement>(null)
    const [isOverFlow, setIsOverFlow] = useState(false)
    const [images] = useState<ImageType[]>(props.images.map((img, i) => ({ src: img, id: i })))
    const [selectedImage, setSelectedImage] = useState<ImageType | undefined>(undefined)///images[0])
    const [prevSelectedId, setPrevSelectedId] = useState<ImageType | undefined>(undefined)
    const [, forceRerender] = useState([])

    useEffect(() => {
        if (dialogRef.current) {
            // console.log(dialogRef.current.clientWidth, dialogRef.current.clientWidth / window.innerWidth);
        }
        else
            forceRerender([])
    }, [selectedImage])

    useEffect(() => {
        if (ref.current) {
            setIsOverFlow(ref.current.clientWidth < props.images.length * itemWidth + (props.images.length - 1) * 8); //8 is gap
        }
    })

    const scroll = (dir: 'left' | 'right') => {
        if (ref.current) {
            ref.current.scrollLeft += 100 * (dir === 'left' ? -1 : 1)
        }
    }

    const closeImageDialog = () => {
        setSelectedImage(undefined)
        setPrevSelectedId(undefined)
    }

    return (
        <>
            <Flex centerX centerY sx={{ width: props.width, overflow: 'hidden' }}>
                {isOverFlow && <IconButton onClick={() => scroll('left')}><LeftIcon /></IconButton>}
                <div ref={ref} style={{ display: 'flex', alignItems: 'center', gap: 8, overflow: 'hidden', scrollBehavior: 'smooth' }}>
                    {images.map(img =>
                        <Box
                            onClick={() => { setSelectedImage(img) }}
                            key={img.id}
                            sx={{
                                width: itemWidth,
                                height: itemWidth / props.ratio,
                                cursor: 'pointer',
                                border: '2px solid #ffffff00',
                                "&:hover": {
                                    border: '2px solid white'
                                }
                            }}
                        >

                            <img
                                src={img.src} alt=''
                                width={itemWidth}
                                height={itemWidth / props.ratio}
                            />
                        </Box>

                    )}
                </div>
                {isOverFlow && <IconButton onClick={() => scroll('right')}><RightIcon /></IconButton>}
            </Flex>
            <Dialog open={!!selectedImage} onClose={closeImageDialog} fullWidth maxWidth={props.ratio > 1 ? 'lg' : 'xs'}>
                <DialogContent ref={dialogRef} sx={{
                    position: 'relative', p: 0, overflow: 'hidden', background: '#121216',
                    minHeight: (dialogRef.current ? dialogRef.current.clientWidth / props.ratio : undefined)
                }}>
                    <CloseIcon sx={{
                        position: 'absolute',
                        top: 5,
                        right: 5,
                        fontSize: 25,
                        color: 'grey',
                        cursor: 'pointer',
                        zIndex: 10,

                    }} onClick={closeImageDialog} />
                    {(selectedImage && selectedImage.id !== 0) && < LeftIcon
                        sx={{
                            color: 'grey',
                            fontSize: 40,
                            position: 'absolute',
                            top: '50%',
                            left: 0,
                            zIndex: 10,
                            transform: 'translate(-0px,-20px)',
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                            "&:hover": {
                                transform: 'translate(-0px,-20px) scale(1.3)'
                            }
                        }} onClick={() => {
                            setPrevSelectedId(selectedImage)
                            setSelectedImage(images.find(img => img.id === selectedImage.id - 1))
                        }} />
                    }
                    {
                        images.map(img => <Box key={img.id} sx={{
                            width: '100%', height: '100%',
                            display: (img === selectedImage || img === prevSelectedId) ? undefined : "none",
                            animation:
                                (img === selectedImage && !!prevSelectedId) ?
                                    `${selectedImage.id < prevSelectedId.id ? slideRightIn : slideLeftIn} .75s forwards`
                                    : (img === prevSelectedId && !!selectedImage)
                                        ? `${selectedImage.id < prevSelectedId.id ? slideRightOut : slideLeftOut} .75s forwards`
                                        : undefined,

                            // transition: 'opacity 2s',
                            // opacity: img === selectedImage ? 1 : 0,
                            position: "absolute",
                            top: (img === selectedImage || img === prevSelectedId) ? undefined : 0,
                            left: (img === selectedImage || img === prevSelectedId) ? undefined : 0,
                        }}>

                            <img src={img.src} alt='' style={{
                                width: '100%', height: '100%', borderRadius: 5,
                                // display: img === selectedImage ? undefined : "none",

                            }} />
                        </Box>)
                    }
                    {(selectedImage && selectedImage.id !== images.length - 1) && <RightIcon sx={{
                        color: 'grey',
                        fontSize: 40,
                        position: 'absolute',
                        top: '50%',
                        right: 0,
                        zIndex: 10,
                        transform: 'translate(-0px,-20px)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        "&:hover": {
                            transform: 'translate(-0px,-20px) scale(1.3)'
                        }
                    }} onClick={() => {
                        // doAnim()
                        setPrevSelectedId(selectedImage)
                        setSelectedImage(images.find(img => img.id === selectedImage.id + 1))
                    }} />}
                    <Flex sx={{
                        width: 1,
                        position: 'absolute',
                        bottom: 10,
                        justifyContent: 'center',
                        gap: 1
                    }}>
                        {images.map(img => <Box key={img.id} sx={{
                            width: 12,
                            height: 12,
                            borderRadius: 6,
                            background: img === selectedImage ? '#494949' : '#afafaf',
                            cursor: 'pointer'
                        }}
                            onClick={() => {
                                setPrevSelectedId(selectedImage)
                                setSelectedImage(images.find(i => i.id === img.id))
                            }}
                        ></Box>)}
                    </Flex>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Carousel