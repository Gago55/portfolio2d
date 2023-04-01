import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { AspectRatio, Avatar, Box, Button, Chip, Divider, Modal, ModalClose, ModalDialog, Sheet, Typography, useColorScheme, useTheme } from '@mui/joy'
import { FC } from 'react'
import { tools } from '../About/About'
import Carousel from '../common/Carousel'
import { Flex, Shift } from '../common/Helpers'
import OutlinedDiv from '../common/OutlinedDiv'
import { ProjectType } from './Projects'
import { useMediaQuery } from '@mui/material'

interface IProps {
    project: ProjectType
    close(): void
}

const ProjectDetailedView: FC<IProps> = ({ project, ...props }) => {

    const { mode } = useColorScheme()
    const theme = useTheme()
    const isDownXL = useMediaQuery(theme.breakpoints.down('xl'))

    return (
        <Modal open onClose={props.close} >
            <ModalDialog
                sx={{
                    bgcolor: mode === 'light' ? 'background.level1' : undefined,
                    maxWidth: .9,
                }}
                aria-labelledby="layout-modal-title"
                aria-describedby="layout-modal-description"
            >
                <ModalClose />
                <Typography id="layout-modal-title" component="h2">  {project.title}
                    <Typography sx={{ ml: 2, fontSize: 16, color: 'text.secondary' }}>
                        {project.isPet ? "Pet Project" : ''}
                    </Typography>
                </Typography>
                <Divider sx={{ mb: 2 }} />

                <Flex box
                    sx={{
                        gap: 1,
                        flexWrap: isDownXL ? 'wrap' : 'nowrap',
                        maxHeight: window.innerHeight * .9 - 100,
                        overflowY: 'auto',
                    }}>
                    <Sheet
                        sx={{
                            flex: isDownXL ? '1' : undefined,
                            width: !isDownXL ? 400 : undefined,
                            bgcolor: mode === 'light' ? 'background.level1' : undefined,
                        }}
                        invertedColors={mode === 'dark'}
                    >
                        <AspectRatio ratio="2" sx={{ width: 1, borderRadius: 5 }} variant='outlined'>
                            <img
                                src={project.preview}
                                alt=""
                            />
                        </AspectRatio>
                        <Flex box>
                            <Shift />
                            <Typography level="body1" sx={{ color: 'text.secondary' }}>
                                {project.date}
                            </Typography>
                        </Flex>
                        <OutlinedDiv label='Stack' labelPlacement='center' style={{ color: mode === 'dark' ? 'white' : undefined }} borderColor={mode === 'light' ? '#dcdce1' : undefined}>
                            {tools.filter(t => project.tools.includes(t.name)).map(t => <Chip key={t.name} onClick={() => { }} variant='soft' color='neutral' startDecorator={t.src ? <Avatar size="sm" src={t.src} /> : undefined}>{t.name}</Chip>)}
                        </OutlinedDiv>
                    </Sheet>
                    <Divider orientation={isDownXL ? 'horizontal' : 'vertical'}
                        sx={{
                            my: isDownXL ? 1 : undefined,
                            width: isDownXL ? 1 : undefined
                        }} />
                    <Flex column centerX box
                        sx={{
                            color: 'white',
                            maxWidth: isDownXL ? 1 : undefined,
                            flex: isDownXL ? '1' : undefined,
                            width: !isDownXL ? 600 : undefined
                        }}>
                        {project.description}
                        <Shift />
                        <Box mt={2}></Box>
                        <Carousel
                            width={isDownXL ? '100%' : '80%'}
                            images={project.images}
                            ratio={project.imagesRatio || 1.77}
                            darkMode={mode === 'dark'}
                        />
                    </Flex>
                </Flex>
                {(project.url || project.extraUrls.length) && <>
                    <Divider sx={{ my: 2 }} />

                    <Flex box sx={{ gap: 1, overflowX: 'auto' }}>
                        <Shift />
                        {project.extraUrls.map(u => <Button key={u.title} color='neutral' variant='soft' endDecorator={<OpenInNewIcon />}
                            onClick={() => window.open(u.url, '_blank')}>{u.title}</Button>)}
                        {project.url && <Button color='neutral' variant='soft' endDecorator={<OpenInNewIcon />}
                            onClick={() => window.open(project.url, '_blank')}>Open</Button>}
                    </Flex>
                </>}
                {/* <Typography id="layout-modal-description" textColor="text.tertiary">
                    This is a <code>{true}</code> modal dialog. Press <code>esc</code> to
                    close it.
                </Typography> */}
            </ModalDialog>
        </Modal >
    )
}

export default ProjectDetailedView