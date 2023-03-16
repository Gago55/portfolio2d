import React, { FC, useState, useEffect, ReactNode } from 'react'
import { AspectRatio, Box, Card, CardOverflow, Divider, Link, Sheet, Typography } from "@mui/joy";
import { Flex, Shift } from '../common/Helpers';
import ProjectDetailedView from './ProjectDetailedView';
import { ToolNameType, ToolType } from '../About/About';
import { CarImages, CCImages, FloorImages, RobyImages, SecretImages, ShadowImages, TelegramImages, TetrisImages, ViewersImages } from '../../assets/projects/projectImages';
import PetsIcon from '@mui/icons-material/Pets';

export type ProjectType = {
    title: string
    preview: string
    images: string[]
    date: string
    isPet: boolean
    tools: ToolNameType[]
    description: ReactNode
    url: string,
    extraUrls: { title: string, url: string }[]
}

const projects: ProjectType[] = [
    {
        title: 'Cabinet Configurator',
        date: "2021 - present", isPet: false,
        preview: CCImages.preview,
        images: CCImages.images,
        tools: ['Javascript', 'Typescript', 'React', 'ThreeJS', 'MUI', 'php', 'MySQL'],
        url: 'https://www.garagecabinets.com/g/cc1/', extraUrls: [],
        description: <Typography>
            &emsp;Cabinet Configurator is the main project I'm working on in  <Link onClick={() => {

            }}>Greenberg Casework Company</Link>. I've built it from scratch by myself.<br />
            &emsp;Cabinet Configurator is web 3D tool to design custom cabinets. The tool is mostly for our company's designers. They design new cabinets and after it the new designs go to our  <Link onClick={() => window.open('https://www.garagecabinets.com', '_blank')}>online shop</Link> for sales.<br />
            &emsp;Unauthorized users can only play with configurator by building cabinets, but nothing more. Authorized users can save their cabinets, share them with another users. Depends user role, some users can see price generation per piece, see cabinet parts list, change cabinet part configurations (prices, price generation type, etc), see/change cabinet material list, see/change app configs (some properties for cabinet which users can't change in process of designing), see/change app users, etc.<br />
            &emsp;Here is credentials for demo account, you can login with it to unlock part of functionality of application, the prices for that account are fake. <br /><br /><i> &emsp;Login: demo@demo.com <br /> &emsp;Password: demo1234</i>
        </Typography >
    },
    {
        title: 'Shadow Decor', preview: ShadowImages.preview, date: "2019-2020", isPet: false,
        images: ShadowImages.images,
        tools: ['Javascript', 'React', 'ThreeJS', 'MUI', 'ExpressJS', 'MongoDB'],
        url: 'https://shadowdecor.com/editor/', extraUrls: [],
        description: <Typography>
            &emsp;Shadow Decor is a project created by me and  <Link onClick={() => window.open('https://es.linkedin.com/in/manvel-arzumanyan-18623b5a', '_blank')}>my partner</Link>. We worked on it for a year and a half. Development of app fully done by myself.<br />
            &emsp;Shadow Decor is web 3D tool to create custom shadow for your place. Shadow can be anything: text (your name, some quote, etc) or image (your company logo, your favorite football team logo, your favorite comics hero silhouette or anything else, only your imagination is the limit). You need to place shadow where you want it to be on the wall and input coordinate of light source in the room, after it app will generate <i>custom shape</i> to get shadow you want in real life. You can download your <i>custom shape</i> in several formats<br />
            &emsp; PDF - for printing it and cutting shape with scissor<br />
            &emsp; SVG - for laser cut <br />
            &emsp; STL - for 3d print <br /> <br />
            &emsp; Also you will get instruction where to put your created shape to get the shadow you want. Shapes generated from text are completely free. Shapes generated from images only for premium users.
        </Typography>
    },
    {
        title: 'Secret Contract Verifier', preview: SecretImages.preview, date: "2021", isPet: false,
        images: SecretImages.images,
        tools: ['Javascript', 'Typescript', 'React', 'MUI', 'ExpressJS', 'MongoDB', 'Docker'],
        url: 'http://secret-contracts.com',
        extraUrls: [{ title: 'Source', url: 'https://github.com/Gago55/Secret-Contract-Verifier' }],
        description: <Typography>
            &emsp;Secret Network is an open-source protocol that performs computations on encrypted data, bringing privacy to smart contracts and public blockchains.
            <br />
            &emsp;Secret Contract Verifier is a open-source app that let smart contract developers provide their contract's source code to prove that it is the contract that is deployed in the blockchain.   <br />
            &emsp;The app has two components: docker image and web app. <Link onClick={() => window.open('https://hub.docker.com/r/gago55/secret-contract-verifier', '_blank')}>The docker image</Link> compiles contract source code to binary code, calculate hash of result file and compare it with given hash from user. In web app users can see all smart contracts deployed in blockchain, see verified contract's source code, and developers can attempt to verify their contracts. More about this project you can learn by reading <Link onClick={() => window.open('https://es.linkedin.com/in/manvel-arzumanyan-18623b5a', '_blank')}>my partner's</Link> and my <Link onClick={() => window.open('https://github.com/scrtlabs/Grants/issues/7', '_blank')}>proposal</Link> for Secret Network written before project has been done. Development of app fully done by myself.
        </Typography>
    },
    // gc
    // playWithFriend
    // stengrograpy
    // unity games
    // dashboard
    {
        title: 'Car Forest', preview: CarImages.preview, date: "2020", isPet: false,
        images: CarImages.images,
        tools: ['Javascript', 'React', 'ThreeJS', 'MUI'],
        url: 'http://51.254.113.253/g/car/',
        extraUrls: [],
        description: <Typography>
            &emsp;Car Forest is one of my one-time projects, that I've done as freelancer. The customer was a car tunning company.<br />
            &emsp;Car Forest is web 3D tool. The company's employees use it to demonstrate their clients how will be looking client's cars after tunning.<br />
            &emsp;In app you can load one of three car models, change car color, set texture on car instead of color and do same thing only for special parts of car (doors, hood, bumper, etc).
        </Typography>
    },
    {
        title: 'Telegram Bots', preview: TelegramImages.preview, date: "2021", isPet: false,
        images: TelegramImages.images,
        tools: ['Javascript', 'NodeJS', 'Telegram Bots', 'ExpressJS', 'MongoDB'],
        url: '',
        extraUrls: [
            { title: 'Weightclass Checker', url: 'https://t.me/ufc4weightclass_bot' },
            { title: 'Fighters Stats', url: 'https://t.me/ufc4fighters_bot' }
        ],
        description: <Typography>
            &emsp;I've created two telegram bots for <Link onClick={() => window.open('https://www.ea.com/games/ufc/ufc-4', '_blank')}>EA Sports UFC 4</Link> game community, <i>UFC 4 Weightclass Checker</i> and <i>UFC 4 Fighters Stats</i>.<br />
            &emsp; UFC 4 Weightclass Checker - there is Online World Championship (hereinafter referred to as OWC) mode in the game, which is most played one for players. Players can't choose the weight class in OWC  to play. Weight class of OWC is changing every hour. The problem is that some players have favorite weight classes and hated ones. So with bot players can check what weight class is live in OWC at that moment without lunching the game. Also players can check weight classes' day schedule, check when will be exact weight class, set reminder for their favorite weight class, set allowed hours for their remainder. The bot have more than 500 users.<br />
            &emsp; UFC 4 Fighters Stats - there are more than 350 fighters in game. The developers add new fighters and change existed ones' states periodical. So with bot players can check fighters stats. Also users can select two fighters and compare their stats (mostly uses this feature to make gameplan for their coming fight). Admins can change fighters states using bot command. The bot have more than 850 users. You can check some statistics in the pictures below.
        </Typography>
    }, {
        title: '3D Viewers', preview: ViewersImages.preview, date: "2017-2018", isPet: false,
        images: ViewersImages.images,
        tools: ['Javascript', 'ThreeJS'],
        url: '',
        extraUrls: [
            { title: 'Viewer 1', url: 'http://51.254.113.253/g/Logo/' },
            { title: 'Viewer 2', url: 'http://51.254.113.253/g/mic/Mic3.htm' },
            { title: 'Viewer 3', url: 'http://51.254.113.253/g/Mars/' },
            { title: 'Viewer 4', url: 'http://51.254.113.253/g/LightsInCubes/' },
            { title: 'Viewer 5', url: 'http://51.254.113.253/g/Stars/' },

        ],
        description: <Typography>
            &emsp; Here are some saved one-time projects I did early in my freelance career. The projects mostly simple 3D viewers, some ones with extra features.
        </Typography>
    }, {
        title: 'Floor Planner', preview: FloorImages.preview, date: "2022", isPet: false,
        images: FloorImages.images,
        tools: ['Javascript', 'Typescript', 'React', 'ThreeJS', 'MUI'],
        url: 'http://3.145.161.236/g/fc/',
        extraUrls: [],
        description: <Typography>
            &emsp;Floor Planner is the project I've created in  <Link onClick={() => {

            }}>Greenberg Casework Company</Link>. I've built it from scratch by myself.<br />
            &emsp;Floor Planner is simple web tool to create floor plans. The created floor plan can be integrated to our  <Link onClick={() => window.open('https://www.garagecabinets.com', '_blank')}>online 3D shop</Link>.
        </Typography >
    },
    {
        title: 'Tetris in CMD',
        isPet: true,
        date: '2015',
        preview: TetrisImages.preview,
        images: TetrisImages.images,
        tools: ['C#'],
        url: '',
        extraUrls: [
            { title: 'Source', url: 'https://github.com/Gago55/tetris' },
            { title: 'Archive File', url: 'https://github.com/Gago55/tetris/blob/master/Tetris.rar' },
        ],
        description: <Typography>
            &emsp;After learning OOP, I decided to create a Tetris game using OOP principles to reinforce my knowledge. The game was written in C# for Windows CMD.<br />
            &emsp;If You want to play it without Visual Studio you can download the archive file from github. Note that game was written for Windows CMD and will not work properly with <Link onClick={() => window.open('https://en.wikipedia.org/wiki/Windows_Terminal', '_blank')}>Windows Terminal</Link> (which was by default integrated into Windows 11).
        </Typography>
    },
    {
        title: 'Roby',
        isPet: true,
        date: '2015',
        preview: RobyImages.preview,
        images: RobyImages.images,
        tools: ['Unity3D', 'C#'],
        url: '',
        extraUrls: [
            { title: 'Archive File', url: 'https://drive.google.com/file/d/19RAP81Us0LrssU-1v78D3GqMiVOUB2LV/view?usp=sharing' },
        ],
        description: <Typography>
            &emsp;Roby is a 3D game built with Unity3D. I built it for the final exam of the Game Development III workshop in Tumo.<br />
            &emsp;Roby can move, rush, jump, and shoot. The goal of the game is to collect all coins and kill all enemies. <br />
            &emsp;If your device running on Windows you can download and play it.
        </Typography>
    }
]

interface IProps {
}

const Projects: FC<IProps> = props => {
    const [selectedProject, setSelectedProject] = useState<ProjectType | undefined>(undefined)
    // const [selectedProject, setSelectedProject] = useState<ProjectType | undefined>(projects[8])

    useEffect(() => {
        const projectBoxes = document.getElementsByClassName('project')

        for (let i = 0; i < projectBoxes.length; i++) {
            const projectBox = projectBoxes[i]
            if (!(projectBox.id === 'selectedProjectBox')) {
                (projectBox as HTMLElement).style.opacity = '1'
            }
        }

        if (selectedProject) {
            const box = document.getElementById('selectedProjectBox')

            if (box) {
                box.style.opacity = '0'
            }
        }
    }, [selectedProject])

    return (
        <Flex variant='soft' invertedColors className='tabWrapper'>
            {/* <Flex column centerX sx={{
                width: 1,
                bgcolor: 'background.body',
                borderRadius: 'sm',
                boxShadow: 'sm',
                p: 5
            }}> */}
            <Flex box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                // justifyContent: 'space-evenly',
                gap: 5

            }}>

                {projects.map(p =>
                    <Box id={p === selectedProject ? 'selectedProjectBox' : ''} key={p.title} className='project'
                        sx={{
                            opacity: 1,
                            perspective: '1000px',
                            transition: 'all 0.4s',
                            '& > div': {
                                transition: 'inherit',
                            },
                            '&:hover': {
                                '& > div': {
                                    transform: 'rotateY(30deg)',
                                },
                            },
                        }}
                    >
                        <Card variant='soft' sx={{ width: 220 }} onClick={() => { setSelectedProject(p) }}>
                            <CardOverflow>
                                <AspectRatio ratio="2">
                                    <img

                                        src={p.preview}
                                        alt=""
                                    />
                                </AspectRatio>
                            </CardOverflow>

                            <CardOverflow sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography level="h2" sx={{ fontSize: 'md', my: 2 }}>
                                    {p.title}
                                </Typography>
                                <Shift />
                                {p.isPet && <PetsIcon />}
                            </CardOverflow>
                            {/* <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                                California
                            </Typography> */}
                            <Divider />
                            <CardOverflow
                                variant="soft"
                                sx={{
                                    display: 'flex',
                                    gap: 1.5,
                                    py: 1.5,
                                    px: 'var(--Card-padding)',
                                    bgcolor: 'background.level1',
                                }}
                            >

                                {/* <Divider orientation="vertical" /> */}
                                {/* <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                    {p.isPet ? "Pet Project" : ''}
                                </Typography> */}
                                <Shift />
                                <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                    {p.date}
                                </Typography>
                            </CardOverflow>
                        </Card>
                    </Box>
                )}
                {/* </Flex> */}
            </Flex>
            {selectedProject && <ProjectDetailedView project={selectedProject} close={() => { setSelectedProject(undefined) }} />}
        </Flex>
    )
}

export default Projects 