import React, { FC, useState, useEffect, ReactNode } from 'react'
import { AspectRatio, Box, Card, CardOverflow, Divider, Link, Sheet, Typography } from "@mui/joy";
import { Flex, Shift } from '../common/Helpers';
import ProjectDetailedView from './ProjectDetailedView';
import { ToolNameType, ToolType } from '../About/About';
import { CarImages, CCImages, SecretImages, ShadowImages } from '../../assets/projects/projectImages';

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
        date: "2021 - present", isPet: true,
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
    {
        title: 'Car Forest', preview: CarImages.preview, date: "2020", isPet: false,
        images: CarImages.images,
        tools: ['Javascript', 'React', 'ThreeJS', 'MUI'],
        url: 'http://secret-contracts.com',
        extraUrls: [{ title: 'Source', url: 'https://github.com/Gago55/Secret-Contract-Verifier' }],
        description: <Typography>
            &emsp;Car Forest is one of my one-time projects, that I've done as freelancer. The customer was a car tunning company.<br />
            &emsp;Car Forest is web 3D tool. The company's employees use it to demonstrate their clients how will be looking client's cars after tunning.<br />
            &emsp;In app you can load one of three car models, change car color, set texture on car instead of color and do same thing only for special parts of car (doors, hood, bumper, etc).
        </Typography>
    }
]

interface IProps {
}

const Projects: FC<IProps> = props => {
    // const [selectedProject, setSelectedProject] = useState<ProjectType | undefined>(undefined)
    const [selectedProject, setSelectedProject] = useState<ProjectType | undefined>(projects[3])

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
                justifyContent: 'space-evenly',
                gap: 5

            }}>

                {projects.map(p =>
                    <Box id={p === selectedProject ? 'selectedProjectBox' : ''} className='project'
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
                            <Typography level="h2" sx={{ fontSize: 'md', my: 2 }}>
                                {p.title}
                            </Typography>
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
                                <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                    {p.isPet ? "Pet Project" : ''}
                                </Typography>
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