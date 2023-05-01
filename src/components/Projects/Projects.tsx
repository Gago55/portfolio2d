import PetsIcon from '@mui/icons-material/Pets';
import { AspectRatio, Box, Card, CardOverflow, Divider, Link, Sheet, Typography, useColorScheme } from "@mui/joy";
import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { CarImages, CCImages, FloorImages, GlobeImages, RobyImages, SecretImages, ShadowImages, SocketGameImages, TelegramImages, TetrisImages, ViewersImages } from '../../assets/projects/projectImages';
import { ToolNameType } from '../About/About';
import { Flex, Shift } from '../common/Helpers';
import ProjectDetailedView from './ProjectDetailedView';
import ProjectCard from './ProjectCard';
import { Skeleton } from '@mui/material';

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
    imagesRatio?: number
}



interface IProps {
    selectedProjectId: undefined | number
    isPreviewsLoaded: boolean

    setIsPreviewsLoaded(v: boolean): void
    setSelectedProjectId(value: undefined | number): void
    setSelectedActivityId(value: number): void
    setTabId(id: number): void
}

const Projects: FC<IProps> = props => {
    const projects: ProjectType[] = [
        {
            title: 'Cabinet Configurator',
            date: "2021 - present", isPet: false,
            preview: CCImages.preview,
            images: CCImages.images,
            tools: ['Javascript', 'Typescript', 'React', 'Redux', 'ThreeJS', 'MUI', 'php', 'MySQL'],
            url: 'http://51.254.113.253/g/ccDemo/', extraUrls: [],
            description: <Typography>
                &emsp;Cabinet Configurator is the main project I am working on at <Link onClick={() => {
                    props.setTabId(1)
                    props.setSelectedActivityId(4)
                }}>Greenberg Casework Company</Link>. I built it from scratch by myself.<br />
                &emsp;Cabinet Configurator is a web 3D tool designed to create custom cabinets. The tool is primarily intended for use by our company's designers, who use it to create new cabinet designs. Once the designs are complete, they are sent to our <Link onClick={() => window.open('https://www.garagecabinets.com', '_blank')}>online shop</Link> for sales (see last picture).<br />
                &emsp;Unauthorized users can only use the configurator to build cabinets, but they cannot do anything more. Authorized users, on the other hand, can save their cabinets and share them with other users. Depending on the user's role, some users can see the price generated per piece, view the cabinet parts list, change cabinet part configurations (prices, price generation type, etc.), see/change the cabinet material list, see/change app configurations (some properties for the cabinet that users cannot change during the design process), see/change app users, etc.<br />
                &emsp;Here are the credentials for a demo account. You can log in with it to unlock a part of the application's functionality. Please note that the prices displayed for that account are not real.<br /><br /><i> &emsp;Login: demo@demo.com <br /> &emsp;Password: demo1234</i>
            </Typography >
        },
        {
            title: 'Shadow Decor', preview: ShadowImages.preview, date: "2019-2020", isPet: false,
            images: ShadowImages.images,
            imagesRatio: 1.7,
            tools: ['Javascript', 'React', 'Redux', 'ThreeJS', 'MUI', 'ExpressJS', 'MongoDB'],
            url: 'https://shadowdecor.com/editor/', extraUrls: [],
            description: <Typography>
                &emsp;Shadow Decor is a project created by me and  <Link onClick={() => window.open('https://es.linkedin.com/in/manvel-arzumanyan-18623b5a', '_blank')}>my partner</Link>. We worked on it for a year and a half, and I handled the full development of the app.<br />
                &emsp;Shadow Decor is a web 3D tool designed to create custom shadows for your space. Shadows can be anything: text (such as your name, a quote, etc.) or an image (such as your company logo, your favorite football team logo, your favorite comic book hero silhouette, or anything else your imagination can come up with). You need to place the shadow where you want it to appear on the wall and input the coordinates of the light source in the room. The app will then generate a <i>custom shape</i> to create the desired shadow in real life. You can download your <i>custom shape</i> in several formats<br />
                &emsp; PDF - for printing it and cutting shape with scissor<br />
                &emsp; SVG - for laser cut <br />
                &emsp; STL - for 3d print <br /> <br />
                &emsp; You will also receive instructions on where to place your created shape to achieve the desired shadow effect. Shapes generated from text are completely free, while shapes generated from images are only available to premium users.
            </Typography>
        },
        {
            title: 'Secret Contract Verifier', preview: SecretImages.preview, date: "2021", isPet: false,
            images: SecretImages.images,
            tools: ['Javascript', 'Typescript', 'React', 'Redux', 'MUI', 'ExpressJS', 'MongoDB', 'Docker'],
            url: '',
            // url: 'http://secret-contracts.com',
            extraUrls: [{ title: 'Source', url: 'https://github.com/Gago55/Secret-Contract-Verifier' }],
            description: <Typography>
                &emsp;Secret Network is an open-source protocol that performs computations on encrypted data, bringing privacy to smart contracts and public blockchains.
                <br />
                &emsp;Secret Contract Verifier is an open-source app that allows smart contract developers to provide their contract's source code to prove that it is the contract that is deployed on the blockchain. <br />
                &emsp;The app has two components: docker image and web app. <Link onClick={() => window.open('https://hub.docker.com/r/gago55/secret-contract-verifier', '_blank')}>The docker image</Link> compiles the contract source code to binary code, calculates the hash of the resulting file, and compares it with the given hash from the user. In the web app, users can see all smart contracts deployed on the blockchain, view verified contract source code, and developers can attempt to verify their contracts. You can learn more about this project by reading <Link onClick={() => window.open('https://es.linkedin.com/in/manvel-arzumanyan-18623b5a', '_blank')}>my partner's</Link> and my <Link onClick={() => window.open('https://github.com/scrtlabs/Grants/issues/7', '_blank')}>proposal</Link> for Secret Network, written before the project was completed. The development of the app was fully done by myself.
            </Typography>
        },
        {
            title: 'Globe Configurator',
            isPet: false,
            date: '2022-present',
            preview: GlobeImages.preview,
            images: GlobeImages.images,
            tools: ['Javascript', 'Typescript', 'React', 'Redux', 'ThreeJS', 'MUI'],
            url: 'http://51.254.113.253/g/gc_/',
            extraUrls: [
            ],
            description: <Typography>
                &emsp;Globe Configurator is a project created by me and  <Link onClick={() => window.open('https://es.linkedin.com/in/manvel-arzumanyan-18623b5a', '_blank')}>my partner</Link>, and I handled the full development of the app.<br />
                &emsp;Globe Configurator is a web 3D tool designed to create a custom globe for your website. You can add points to the globe from a list of cities or by clicking on the globe. You can change the size and color of all points, or modify them individually. You can also add hints for points, and choose method of displaying it (always or on hover). You can choose the globe texture from a gallery or upload your own. You can also choose the globe's position, camera options (enable/disable rotation, zoom, pan, auto-rotation), and modify the atmosphere color and background color. You can even set the background color to be transparent if you plan to overlay the globe on some HTML. After all modifications are made, you can download static files with your globe configuration and add it to your website. The project is currently free and is still under development.
            </Typography>
        },
        // playWithFriend
        // stengrograpy
        {
            title: 'Car Forest', preview: CarImages.preview, date: "2020", isPet: false,
            images: CarImages.images,
            tools: ['Javascript', 'React', 'Redux', 'ThreeJS', 'MUI'],
            url: 'http://51.254.113.253/g/car/',
            extraUrls: [],
            description: <Typography>
                &emsp;Car Forest was one of my one-time projects that I completed as a freelancer. The client was a car tuning company.<br />
                &emsp;Car Forest is a web 3D tool that the company's employees use to demonstrate to their clients how their cars will look after tuning.<br />
                &emsp;In app, you can load one of three car models, change the car's color, set textures on the car instead of color, and do the same thing for specific parts of the car, such as doors, hood, bumper, etc.
            </Typography>
        },
        {
            title: 'Telegram Bots', preview: TelegramImages.preview, date: "2021", isPet: false,
            images: TelegramImages.images,
            imagesRatio: 0.564,
            tools: ['Javascript', 'NodeJS', 'Telegram Bots', 'ExpressJS', 'MongoDB'],
            url: '',
            extraUrls: [
                { title: 'Weightclass Checker', url: 'https://t.me/ufc4weightclass_bot' },
                { title: 'Fighters Stats', url: 'https://t.me/ufc4fighters_bot' }
            ],
            description: <Typography>
                &emsp;I created two Telegram bots for <Link onClick={() => window.open('https://www.ea.com/games/ufc/ufc-4', '_blank')}>EA Sports UFC 4</Link> game community, <i>UFC 4 Weightclass Checker</i> and <i>UFC 4 Fighters Stats</i>.<br />
                &emsp; UFC 4 Weightclass Checker is for the Online World Championship (OWC) mode in the game, which is the most played mode for players. In OWC, players cannot choose the weight class to play in, as the weight class changes every hour. However, some players have favorite weight classes and hated ones. With the bot, players can check what weight class is currently live in OWC without launching the game. Additionally, they can check the weight class schedule for the day, when their favorite weight class will be available, set reminders, and set allowed hours for their reminders. The bot has more than 500 users.<br />
                &emsp; UFC 4 Fighters Stats - there are more than 350 fighters in the game. Developers periodically add new fighters and change the states of existing ones. With the bot, players can check fighters' stats. Also users can select two fighters and compare their stats (mostly uses this feature to make game plan for their upcoming fight). Admins can also change fighters' states using the bot commands. The bot has more than 850 users. You can check some statistics in the pictures below.
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
                &emsp; Here are some one-time projects that I saved from my early days as a freelancer. Most of the projects are simple 3D viewers, some ones with extra features.
            </Typography>
        }, {
            title: 'Floor Planner', preview: FloorImages.preview, date: "2022", isPet: false,
            images: FloorImages.images,
            tools: ['Javascript', 'Typescript', 'React', 'Redux', 'ThreeJS', 'MUI'],
            url: 'http://3.145.161.236/g/fc/',
            extraUrls: [],
            description: <Typography>
                &emsp;Floor Planner is a project I created at  <Link onClick={() => {
                    props.setTabId(1)
                    props.setSelectedActivityId(4)
                }}>Greenberg Casework Company</Link>. I built it from scratch by myself.<br />
                &emsp;Floor Planner is simple web tool for creating floor plans, which can then be integrated into our <Link onClick={() => window.open('https://www.garagecabinets.com', '_blank')}>online 3D shop</Link>.
            </Typography >
        },
        {
            title: 'Tetris in CMD',
            isPet: true,
            date: '2018',
            preview: TetrisImages.preview,
            images: TetrisImages.images,
            imagesRatio: 0.588,
            tools: ['C#'],
            url: '',
            extraUrls: [
                { title: 'Source', url: 'https://github.com/Gago55/tetris' },
                { title: 'Archive File', url: 'https://github.com/Gago55/tetris/blob/master/Tetris.rar' },
            ],
            description: <Typography>
                &emsp;After learning OOP, I decided to reinforce my knowledge by creating a Tetris game using OOP principles. The game was written in C# for the Windows command prompt (CMD).<br />
                &emsp;If You want to play it without Visual Studio you can download the archive file from github. Note that game was written for Windows CMD and will not work properly with <Link onClick={() => window.open('https://en.wikipedia.org/wiki/Windows_Terminal', '_blank')}>Windows Terminal</Link>, which is integrated by default into Windows 11.
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
                &emsp;Roby is a 3D game built with Unity3D that I created for the final exam of the Game Development III workshop at Tumo.<br />
                &emsp;Roby can move, dash, jump, and shoot. The goal of the game is to collect all coins and kill all enemies. <br />
                &emsp;If your device running on Windows you can download and play it.
            </Typography>
        },
        {
            title: 'WebSocket Game',
            isPet: true,
            date: '2018',
            preview: SocketGameImages.preview,
            images: SocketGameImages.images,
            tools: ['Javascript', 'ThreeJS', 'WebSockets', 'NodeJS'],
            url: 'http://51.254.113.253:4001',
            extraUrls: [
            ],
            description: <Typography>
                &emsp;This game is a proof of concept of mobile wireless multi-user real-time control. It is a simple 3D game where the player or players must move the sphere left and right to avoid hitting the red boxes. The players control their spheres using their mobile devices.<br />
                &emsp;If you want to try the game, first open the app on your PC. Then, choose the single or multiplayer mode, enter the players' names, and click confirm. Next, scan the QR code with your phone to get the link and open it. Once all the red circles have turned green and the Start button is available, click it on your PC and start playing with your phone.
            </Typography>
        }
    ]

    const cardWidth = 250
    const threeCardRowMinWidth = cardWidth * 3 + (3 - 1) * 5 * 8 + 5 + 1 //3 is count of cards, 5 is gap, 8 is pixels per gap value, 5 is scrollbar width
    const twoCardRowMinWidth = cardWidth * 2 + (2 - 1) * 5 * 8 + 5 + 1 //2 is count of cards, 5 is gap, 8 is pixels per gap value, 5 is scrollbar width

    const [, forceRerender] = useState([])
    const [selectedProject, setSelectedProject] = useState(props.selectedProjectId !== undefined ? projects[props.selectedProjectId] : undefined)

    const rootRef = useRef<HTMLDivElement>(null)
    const emptyCardCountRef = useRef(0)
    const loadedImagesCount = useRef(0)

    const { mode } = useColorScheme()

    useEffect(() => {
        const calculateNeededEmptyCardCount = () => {
            if (rootRef.current) {
                const width = rootRef.current.clientWidth

                if (width > threeCardRowMinWidth) {
                    if (projects.length % 3 !== 0) {
                        const needEmptyCount = 3 - projects.length % 3
                        if (emptyCardCountRef.current !== needEmptyCount) {
                            emptyCardCountRef.current = needEmptyCount
                            forceRerender([])
                        }
                    }
                }
                else if (width > twoCardRowMinWidth) {
                    if (projects.length % 2 !== 0) {
                        if (emptyCardCountRef.current !== 1) {
                            emptyCardCountRef.current = 1
                            forceRerender([])
                        }
                    }
                }
                else {
                    if (emptyCardCountRef.current !== 0) {
                        emptyCardCountRef.current = 0
                        forceRerender([])
                    }
                }

            }
        }
        window.addEventListener('resize', calculateNeededEmptyCardCount)
        calculateNeededEmptyCardCount()
    }, [])

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

    useEffect(() => {
        setSelectedProject(props.selectedProjectId !== undefined ? projects[props.selectedProjectId] : undefined)
    }, [props.selectedProjectId])

    return (
        <Sheet ref={rootRef} className='tabWrapper'
            variant={mode === 'dark' ? 'soft' : undefined}
            invertedColors={mode === 'dark'}
            sx={{
                background: "#00000000"
                // bgcolor: mode === 'light' ? 'background.level2' : undefined,
            }}
        >
            <Flex box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                overflowY: 'auto',
                maxHeight: window.innerHeight - 120,
                gap: 5,
                mt: 1,
                pt: 1,
            }}>
                {projects.map((p, i) =>
                    <Box id={p === selectedProject ? 'selectedProjectBox' : ''} key={p.title} className='project'
                        sx={{
                            width: cardWidth,
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
                        <Card variant={mode === 'dark' ? 'soft' : 'outlined'}
                            sx={{
                                background: mode === 'dark' ? "#4d4d59" : undefined
                            }}
                            // color={mode === 'light' ? 'primary' : undefined}
                            onClick={() => {
                                props.setSelectedProjectId(i)
                            }}>
                            <CardOverflow sx={{ position: 'relative' }}>
                                {!props.isPreviewsLoaded && <Skeleton variant='rectangular' sx={{
                                    position: 'absolute', top: 0, left: 0,
                                    zIndex: 10, borderTopLeftRadius: 15, borderTopRightRadius: 15,
                                    width: 1, height: 1
                                }} />}
                                <AspectRatio ratio="2">
                                    <img
                                        style={{ visibility: props.isPreviewsLoaded ? 'visible' : 'hidden' }}
                                        src={p.preview}
                                        alt=""
                                        onLoad={() => {
                                            loadedImagesCount.current++
                                            if (loadedImagesCount.current === projects.length) {
                                                setTimeout(() => {
                                                    props.setIsPreviewsLoaded(true)
                                                }, 1000)
                                            }
                                        }}
                                    />
                                </AspectRatio>
                            </CardOverflow>
                            <Divider />

                            <CardOverflow sx={{
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: mode === 'light' ? 'white' : '#3e3e49',
                                borderRadius: 0
                            }}>
                                <Typography level="h2" sx={{ fontSize: 'md', my: 2 }} >
                                    {p.title}
                                </Typography>
                                <Shift />
                                {p.isPet && <PetsIcon sx={{ color: mode === 'light' ? '#7c7c7c' : undefined, }} />}
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
                                    bgcolor: mode === 'light' ? '#f7f7f8' : '#4f4f5b',
                                }}
                            >
                                <Shift />
                                <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                    {p.date}
                                </Typography>
                            </CardOverflow>

                        </Card>
                    </Box>
                    // <ProjectCard
                    //     id={i === props.selectedProjectId ? 'selectedProjectBox' : ''}
                    //     key={i} project={p}
                    //     cardWidth={cardWidth}
                    //     select={() => { props.setSelectedProjectId(i) }}
                    // />
                )}
                {Array(emptyCardCountRef.current).fill('').map((e, i) => <Box key={i} sx={{ width: cardWidth }}></Box>)}
            </Flex>
            {selectedProject && <ProjectDetailedView project={selectedProject} close={() => { props.setSelectedProjectId(undefined) }} />}
        </Sheet >
    )
}

export default Projects 