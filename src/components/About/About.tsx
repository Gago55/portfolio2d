import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Avatar, Chip, Divider, IconButton, Sheet, Tooltip, Typography, useColorScheme } from "@mui/joy"
import { FC, useEffect, useRef, useState } from 'react'
import CSharpSrc from "../../assets/toolIcons/cSharp.png"
import DockerSrc from "../../assets/toolIcons/docker.png"
import JSSrc from "../../assets/toolIcons/js.png"
import MongoSrc from "../../assets/toolIcons/mongo.png"
import MuiSrc from "../../assets/toolIcons/mui.png"
import ReactSrc from "../../assets/toolIcons/react.png"
import ReduxSrc from "../../assets/toolIcons/redux.png"
import TelegramSrc from "../../assets/toolIcons/telegram.jpg"
import ThreeJSSrc from "../../assets/toolIcons/threeJS.png"
import TSSrc from "../../assets/toolIcons/ts.png"
import UnitySrc from "../../assets/toolIcons/unity.png"
import VueSrc from "../../assets/toolIcons/vue.png"
import { Flex } from '../common/Helpers'
import OutlinedDiv from '../common/OutlinedDiv'

interface IProps {
    isGlobeOn: boolean
    isGlobeDisabled: boolean

    setIsGlobeDisabled(v: boolean): void
    setIsSettingsOpen(v: boolean): void
}

export type ToolType = {
    name: ToolNameType
    src?: string
    isMain: boolean
}

export type ToolNameType = 'Javascript' | 'ThreeJS' | 'React' | 'Redux' | 'Typescript' | 'MUI' | 'MongoDB' | 'NodeJS' | 'ExpressJS' | 'php' | 'MySQL' | 'C#' | 'Unity3D' | 'Telegram Bots' | 'Docker' | 'WebSockets' | 'VueJS'

export const tools: ToolType[] = [
    { name: 'Javascript', isMain: true, src: JSSrc },
    { name: 'ThreeJS', isMain: true, src: ThreeJSSrc },
    { name: 'React', isMain: true, src: ReactSrc },
    { name: 'Redux', isMain: true, src: ReduxSrc },
    { name: 'Typescript', isMain: true, src: TSSrc },
    { name: 'MUI', isMain: true, src: MuiSrc },
    { name: 'MongoDB', isMain: true, src: MongoSrc },
    { name: 'NodeJS', isMain: true, src: '' },
    { name: 'ExpressJS', isMain: true, src: '' },
    { name: 'php', isMain: false, src: '' },
    { name: 'MySQL', isMain: false, src: '' },
    { name: 'C#', isMain: false, src: CSharpSrc },
    { name: 'Unity3D', isMain: false, src: UnitySrc },
    { name: 'Telegram Bots', isMain: false, src: TelegramSrc },
    { name: 'Docker', isMain: false, src: DockerSrc },
    { name: 'WebSockets', isMain: false, src: '' },
    { name: 'VueJS', isMain: false, src: VueSrc },
]

const About: FC<IProps> = props => {

    const { mode } = useColorScheme()
    const globeMinHeight = 160
    const globeContainer = useRef<null | HTMLDivElement>(null)
    const isGlobeDisabled = useRef(props.isGlobeDisabled)

    const [_, forceUpdate] = useState([])

    useEffect(() => {
        checkGlobeContainer(true)
        window.addEventListener('resize', () => { checkGlobeContainer() })

        forceUpdate([])
    }, [])

    useEffect(() => {
        isGlobeDisabled.current = props.isGlobeDisabled
    }, [props.isGlobeDisabled])

    const checkGlobeContainer = (isFirstTime = false) => {
        if (globeContainer.current) {
            const elHeight = parseInt(getComputedStyle(globeContainer.current).height.slice(0, -2))
            console.log(elHeight);

            if (elHeight > globeMinHeight) {
                if (isGlobeDisabled.current) {
                    props.setIsGlobeDisabled(false)

                    if (!isFirstTime)
                        props.setIsSettingsOpen(true)
                }
            }
            else {
                if (!isGlobeDisabled.current) {
                    props.setIsGlobeDisabled(true)
                    if (!isFirstTime)
                        props.setIsSettingsOpen(true)
                }
            }

        }
    }

    return (
        <Flex variant="soft" className='tabWrapper' column centerX sx={{
            background: "#00000000",
            height: "100%"
        }}>
            <Sheet sx={theme => ({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 1,
                bgcolor: 'background.body',
                borderRadius: 'sm',
                boxShadow: 'sm',
                p: 5,
                maxHeight: window.innerHeight - 170,
                overflowY: 'auto',
                [theme.breakpoints.down("xl")]: {
                    textAlign: 'center',
                    p: 2
                },
            })}>
                <Typography level='h5'>
                    &emsp;Hey, my name is Gagik Khachatryan, I'm {Math.floor((new Date().getTime() - new Date("2000-04-24").getTime()) / 1000 / 3600 / 24 / 365)} years old. I'm full-stack web developer and BS of Cyber Security from Armenia. I started coding in 2014 and have been working as a freelancer since 2017.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography level='h5'>
                    &emsp;Below you can see languages and tools down that I managed to use in my career
                </Typography>
                <Flex box sx={{ justifyContent: 'space-evenly', mt: 2, flexWrap: 'wrap' }}>
                    <OutlinedDiv label='Main' labelPlacement='center' borderColor={mode === 'light' ? '#dcdce1' : undefined}
                        style={{
                            height: 'fit-content',
                            flex: '1 0 230px'
                        }}>
                        {tools.filter(t => t.isMain).map(t => <Chip key={t.name} onClick={() => { }} variant='soft' color='neutral' startDecorator={t.src ? <Avatar size="sm" src={t.src} /> : undefined}>{t.name}</Chip>)}
                    </OutlinedDiv>
                    <OutlinedDiv label='Other' labelPlacement='center' borderColor={mode === 'light' ? '#dcdce1' : undefined}
                        style={{
                            height: 'fit-content',
                            flex: '1 0 230px'
                        }}>
                        {tools.filter(t => !t.isMain).map(t => <Chip key={t.name} onClick={() => { }} variant='soft' color='neutral' startDecorator={t.src ? <Avatar size="sm" src={t.src} /> : undefined}>{t.name}</Chip>)}
                    </OutlinedDiv>
                </Flex>
                {/* <Divider sx={{ my: 2 }} /> */}

            </Sheet>
            <Flex box sx={{ gap: 1, justifyContent: 'center', mt: 2 }}>
                <Tooltip title='xgagik8@gmail.com'>
                    <IconButton
                        variant='outlined' color='neutral' size='lg'
                        onClick={() => { window.open('mailto:xgagik8@gmail.com') }}
                    > <EmailIcon fontSize={'large'} /> </IconButton>
                </Tooltip>
                <Tooltip title='gago55'>
                    <IconButton
                        variant='outlined' color='neutral' size='lg'
                        onClick={() => { window.open('https://github.com/gago55', '_blank') }}
                    > <GitHubIcon fontSize={'large'} /> </IconButton>
                </Tooltip>
            </Flex>
            <div ref={globeContainer} style={{ flexGrow: 1, width: '100%', minHeight: globeMinHeight }}>
                {props.isGlobeOn && <iframe
                    style={{
                        border: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    src={mode === 'dark' ? process.env.REACT_APP_DARK_GLOBE : process.env.REACT_APP_LIGHT_GLOBE}

                >

                </iframe>}
            </div>
        </Flex >

    )
}

export default About