import RemoveIcon from '@mui/icons-material/Remove'
import SettingsIcon from '@mui/icons-material/Settings'
import { Fade, Paper } from '@mui/material'
import { Button, IconButton, Sheet, Typography, useColorScheme } from '@mui/joy'
import { FC, useState } from 'react'
import { Flex } from '../common/Helpers'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
    isParticlesOn: boolean
    setIsParticlesOn(v: boolean): void
}

const Settings: FC<IProps> = props => {

    const { mode, setMode } = useColorScheme()
    const [open, setOpen] = useState(false)

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
                <Flex box sx={{}} centerY>
                    <Button
                        onClick={() => props.setIsParticlesOn(false)}
                        sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, flexBasis: '45%', }}
                        variant={!props.isParticlesOn ? 'solid' : 'outlined'}
                        color={!props.isParticlesOn ? 'primary' : 'neutral'}
                    // startDecorator={<CloseIcon />}
                    >Off</Button>
                    <Button
                        onClick={() => props.setIsParticlesOn(true)}
                        sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, flexBasis: '45%' }}
                        variant={props.isParticlesOn ? 'solid' : 'outlined'}
                        color={props.isParticlesOn ? 'primary' : 'neutral'}
                        startDecorator={<AutoAwesomeIcon />}
                    >On</Button>
                </Flex>
            </Paper>
        </Fade>


    </>
    )
}

export default Settings