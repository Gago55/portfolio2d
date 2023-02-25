import { ReactNode } from "react";
import Sheet, { SheetProps } from '@mui/joy/Sheet'
import { Box, BoxProps, SxProps } from '@mui/material'
import { OptionsObject, SnackbarKey, SnackbarMessage, VariantType } from "notistack"

export const Shift = () => <Box sx={{ flexGrow: 1 }} />

export type EnqueueSnackbarType = (message: SnackbarMessage, options?: OptionsObject | undefined) => SnackbarKey

export const showMessage = (
    enqueueSnackbar: EnqueueSnackbarType,
    message: string,
    variant: VariantType = 'error',
    duration: number = 7000,
    onClose: () => void = () => { }
) => {
    enqueueSnackbar(message, {
        variant,
        anchorOrigin: {
            horizontal: 'center',
            vertical: 'bottom'
        },
        autoHideDuration: duration,
        onClose
    })
}

//Flex

interface IFlexProps extends SheetProps {
    box?: boolean
    children: JSX.Element | JSX.Element[] | ReactNode
    column?: boolean
    fullWidth?: boolean
    centerX?: boolean
    centerY?: boolean
    sx?: SxProps
}

export const Flex = ({ children, column, fullWidth, centerX, centerY, sx, ...props }: IFlexProps) => {

    return props.box
        ? <Box sx={{
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
        : <Sheet sx={{
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
        </Sheet >
}

// /Flex