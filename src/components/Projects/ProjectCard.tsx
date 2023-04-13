import PetsIcon from '@mui/icons-material/Pets';
import { AspectRatio, Box, Card, CardOverflow, Divider, Link, Sheet, Typography, useColorScheme } from "@mui/joy";
// import { Skele } from "@mui/material";
import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { ToolNameType } from '../About/About';
import { Flex, Shift } from '../common/Helpers';
import ProjectDetailedView from './ProjectDetailedView';
import { ProjectType } from './Projects';
import { Skeleton } from '@mui/material';


interface IProps {
    id: string
    project: ProjectType
    // selectedProject: ProjectType | undefined
    cardWidth: number

    select(): void

}

const ProjectCard: FC<IProps> = ({ project, ...props }) => {

    const { mode } = useColorScheme()
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <Box id={props.id} className='project'
            sx={{
                width: props.cardWidth,
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
                // color={mode === 'light' ? 'primary' : undefined}
                onClick={() => {
                    props.select()
                }}>
                <CardOverflow sx={{ position: 'relative' }}>
                    {!imageLoaded && <Skeleton variant='rectangular' sx={{
                        position: 'absolute', top: 0, left: 0,
                        zIndex: 10, borderTopLeftRadius: 15, borderTopRightRadius: 15,
                        width: 1, height: 1
                    }} />}
                    <AspectRatio ratio="2" >
                        <img
                            style={{ visibility: imageLoaded ? 'visible' : 'hidden' }}
                            src={project.preview}
                            alt=""
                            onLoad={() => setImageLoaded(true)}
                        />
                    </AspectRatio>
                </CardOverflow>
                <Divider />

                <CardOverflow sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: mode === 'light' ? 'white' : undefined,
                    borderRadius: 0
                }}>
                    <Typography level="h2" sx={{ fontSize: 'md', my: 2 }} >
                        {project.title}
                    </Typography>
                    <Shift />
                    {project.isPet && <PetsIcon sx={{ color: mode === 'light' ? '#7c7c7c' : undefined, }} />}
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
                        bgcolor: mode === 'light' ? '#f7f7f8' : 'background.level1',
                    }}
                >
                    <Shift />
                    <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                        {project.date}
                    </Typography>
                </CardOverflow>

            </Card>
        </Box>
    )
}

export default ProjectCard