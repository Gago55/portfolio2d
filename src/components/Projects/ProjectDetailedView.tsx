import { AspectRatio, Avatar, Box, Button, Card, CardOverflow, Chip, Divider, Modal, ModalClose, ModalDialog, Sheet, Typography } from '@mui/joy'
import React, { FC } from 'react'
import { tools } from '../About/About'
import Carousel from '../common/Carousel'
import { Flex, Shift } from '../common/Helpers'
import OutlinedDiv from '../common/OutlinedDiv'
import { ProjectType } from './Projects'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface IProps {
    project: ProjectType
    close(): void
}

const ProjectDetailedView: FC<IProps> = ({ project, ...props }) => {
    return (
        <Modal open onClose={props.close} >
            <ModalDialog
                sx={{ width: 1000 }}
                aria-labelledby="layout-modal-title"
                aria-describedby="layout-modal-description"
            // variant='solid'
            // layout={true || undefined}
            >
                <ModalClose />
                <Typography id="layout-modal-title" component="h2">  {project.title}
                    {/* <Typography level="body1" sx={{ ml: 2, fontSize: 16, color: 'text.secondary' }}>
                        {project.date}
                    </Typography> */}
                    <Typography sx={{ ml: 2, fontSize: 16, color: 'text.secondary' }}>
                        {project.isPet ? "Pet Project" : ''}
                    </Typography>
                </Typography>
                <Divider sx={{ mb: 2 }} />

                <Flex sx={{ gap: 1 }}>
                    <Sheet sx={{ width: 400 }} invertedColors>
                        <AspectRatio ratio="2" sx={{ width: 1 }}>
                            <img
                                src={project.preview}
                                alt=""
                            />
                        </AspectRatio>
                        <Flex box>
                            {/* <Typography level="body1" sx={{ color: 'text.secondary' }}>
                                {project.isPet ? "Pet Project" : ''}
                            </Typography> */}
                            <Shift />
                            <Typography level="body1" sx={{ color: 'text.secondary' }}>
                                {project.date}
                            </Typography>
                        </Flex>
                        <OutlinedDiv label='Stack' labelPlacement='center' style={{ color: 'white' }}>
                            {tools.filter(t => project.tools.includes(t.name)).map(t => <Chip key={t.name} onClick={() => { }} variant='soft' color='neutral' startDecorator={t.src ? <Avatar size="sm" src={t.src} /> : undefined}>{t.name}</Chip>)
                            }
                        </OutlinedDiv>
                    </Sheet>
                    <Divider orientation='vertical' />
                    <Flex column centerX box sx={{ color: 'white', width: 600 }}>
                        {project.description}
                        <Shift />
                        <Box mt={2}></Box>
                        <Carousel
                            width={'80%'}
                            images={project.images}
                            ratio={project.imagesRatio || 1.77}
                        />
                    </Flex>
                </Flex>
                {(project.url || project.extraUrls.length) && <>
                    <Divider sx={{ my: 2 }} />

                    <Flex sx={{ gap: 1 }}>
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