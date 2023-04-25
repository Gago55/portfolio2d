import RemoveIcon from '@mui/icons-material/Remove'
import SettingsIcon from '@mui/icons-material/Settings'
import { Fade, Paper } from '@mui/material'
import { Button, IconButton, Sheet, Tooltip, Typography, useColorScheme } from '@mui/joy'
import { FC, useState } from 'react'
import { Flex } from '../common/Helpers'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import ParticlesIcon from '@mui/icons-material/AutoAwesome';
import GlobeIcon from '@mui/icons-material/Public';

interface IProps {
    open: boolean
    isParticlesOn: boolean
    isGlobeOn: boolean
    isGlobeDisabled: boolean

    setOpen(v: boolean): void
    setIsParticlesOn(v: boolean): void
    setIsGlobeOn(v: boolean): void
}

const Settings: FC<IProps> = ({ open, setOpen, ...props }) => {

    const { mode, setMode } = useColorScheme()

    return (<>
        {!open && <IconButton variant='outlined' color='neutral' sx={{ zIndex: 99, m: 2, position: 'absolute', top: 0, right: 0 }} onClick={() => { setOpen(true) }}>
            <SettingsIcon />
        </IconButton>
        }
        <Fade in={open}>
            <Paper sx={{
                p: 3,
                m: 2,
                position: 'absolute',
                top: 0,
                right: 0,
                width: 250,
                zIndex: 99
            }}>
                <RemoveIcon sx={{ m: 1, zIndex: 10, position: 'absolute', top: 0, right: 0, cursor: 'pointer' }} onClick={() => { setOpen(false) }} />



                <Typography level='h5'>Mode</Typography>
                <Flex box sx={{ mb: 2 }} centerY>
                    <Button
                        onClick={() => {
                            setMode('light')
                            props.setIsParticlesOn(false)
                        }}
                        sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, flexBasis: '45%', }}
                        variant={mode === 'light' ? 'solid' : 'outlined'}
                        color={mode === 'light' ? 'primary' : 'neutral'}
                        startDecorator={<LightModeIcon sx={{ color: 'yellow' }} />}
                    >Light</Button>
                    <Button
                        onClick={() => setMode('dark')}
                        sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, flexBasis: '45%' }}
                        variant={mode === 'dark' ? 'solid' : 'outlined'}
                        color={mode === 'dark' ? 'primary' : 'neutral'}
                        startDecorator={<DarkModeOutlined />}
                    >Dark</Button>
                </Flex>

                <Typography level='h5'>Particles</Typography>
                <Flex box sx={{ mb: 2 }} centerY>
                    <Button
                        onClick={() => props.setIsParticlesOn(false)}
                        sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, flexBasis: '45%', }}
                        variant={!props.isParticlesOn ? 'solid' : 'outlined'}
                        color={!props.isParticlesOn ? 'primary' : 'neutral'}
                    // startDecorator={<CloseIcon />}
                    >Off</Button>
                    <Tooltip title={mode === 'light' ? 'Available only in dark mode' : ''}>
                        <span style={{ flexBasis: '45%' }}>
                            <Button
                                disabled={mode === 'light'}
                                onClick={() => props.setIsParticlesOn(true)}
                                sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, width: 1 }}
                                variant={props.isParticlesOn ? 'solid' : 'outlined'}
                                color={props.isParticlesOn ? 'primary' : 'neutral'}
                                startDecorator={<ParticlesIcon />}
                            >On</Button>
                        </span>
                    </Tooltip>
                </Flex>

                <Typography level='h5'>Globe</Typography>
                <Flex box sx={{}} centerY>
                    <Button
                        // disabled={props.isGlobeDisabled}
                        onClick={() => props.setIsGlobeOn(false)}
                        sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, flexBasis: '45%', }}
                        variant={!props.isGlobeOn ? 'solid' : 'outlined'}
                        color={!props.isGlobeOn ? 'primary' : 'neutral'}
                    // startDecorator={<CloseIcon />}
                    >Off</Button>
                    <Tooltip title={props.isGlobeDisabled ? 'Not enough space (height)' : ''}>
                        <span style={{ flexBasis: '45%' }}>
                            <Button
                                disabled={props.isGlobeDisabled}
                                onClick={() => props.setIsGlobeOn(true)}
                                sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, width: 1 }}
                                variant={props.isGlobeOn ? 'solid' : 'outlined'}
                                color={props.isGlobeOn ? 'primary' : 'neutral'}
                                startDecorator={<GlobeIcon />}
                            >On</Button>
                        </span>
                    </Tooltip>
                </Flex>
            </Paper>
        </Fade >


    </>
    )
}

export default Settings