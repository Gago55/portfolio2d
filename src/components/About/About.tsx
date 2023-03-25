import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Avatar, Chip, Divider, IconButton, Tooltip, Typography } from "@mui/joy"
import { FC } from 'react'
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
    return (
        <Flex variant="soft" className='tabWrapper' column centerX>
            <Flex column centerX sx={{
                width: 1,
                bgcolor: 'background.body',
                borderRadius: 'sm',
                boxShadow: 'sm',
                p: 5
            }}>
                <Typography level='h5'>
                    &emsp;Hey, my name is Gagik Khachatryan, I'm {Math.floor((new Date().getTime() - new Date("2000-04-24").getTime()) / 1000 / 3600 / 24 / 365)} years old. I'm full-stack web developer and BS of Cyber Security from Armenia. I start coding since 2014 and work as freelancer since 2017.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography level='h5'>
                    You can see languages and tools down below that I managed to use in my career
                </Typography>
                <Flex box sx={{ justifyContent: 'space-evenly', mt: 2 }}>
                    <OutlinedDiv label='Main' labelPlacement='center' style={{ height: 'fit-content', width: "45%" }}>
                        {tools.filter(t => t.isMain).map(t => <Chip key={t.name} onClick={() => { }} variant='soft' color='neutral' startDecorator={t.src ? <Avatar size="sm" src={t.src} /> : undefined}>{t.name}</Chip>)}
                    </OutlinedDiv>
                    <OutlinedDiv label='Other' labelPlacement='center' style={{ height: 'fit-content', width: "45%" }}>
                        {tools.filter(t => !t.isMain).map(t => <Chip key={t.name} onClick={() => { }} variant='soft' color='neutral' startDecorator={t.src ? <Avatar size="sm" src={t.src} /> : undefined}>{t.name}</Chip>)}
                    </OutlinedDiv>
                </Flex>
                {/* <Divider sx={{ my: 2 }} /> */}

            </Flex>
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
        </Flex >

    )
}

export default About