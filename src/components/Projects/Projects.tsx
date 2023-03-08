import React, { FC, useState, useEffect, ReactNode } from 'react'
import { AspectRatio, Box, Card, CardOverflow, Divider, Sheet, Typography } from "@mui/joy";
import { Flex, Shift } from '../common/Helpers';
import CCPreview from "../../assets/projects/cc/preview.png";
import CCPic1 from "../../assets/projects/cc/pic1.png";
import CCPic2 from "../../assets/projects/cc/pic2.png";
import CCPic3 from "../../assets/projects/cc/pic3.png";
import CCPic4 from "../../assets/projects/cc/pic4.png";
import ShadowImg from "../../assets/projects/shadow.png";
import OutlinedDiv from '../common/OutlinedDiv';
import ProjectDetailedView from './ProjectDetailedView';
import { ToolNameType, ToolType } from '../About/About';


export type ProjectType = {
    title: string
    preview: string
    images: string[]
    date: string
    isPet: boolean
    tools: ToolNameType[]
    description: ReactNode
}

const projects: ProjectType[] = [
    {
        title: 'Cabinet Configurator',
        date: "2021", isPet: true,
        preview: CCPreview,
        images: [CCPic1,
            CCPic2,
            CCPic3, CCPic4,
            CCPic2,
        ],
        tools: ['Javascript', 'Typescript', 'React', 'ThreeJS', 'MUI', 'php', 'MySQL'],
        description: <>Gag</>
    },
    {
        title: 'Shadow Decor', preview: ShadowImg, date: "2021", isPet: false,
        images: [],
        tools: ['Javascript'],
        description: <></>
    }
]

interface IProps {
}

const Projects: FC<IProps> = props => {
    const [selectedProject, setSelectedProject] = useState<ProjectType | undefined>(projects[0])

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