import LaunchIcon from '@mui/icons-material/Launch';
import { Divider, Link, List, ListDivider, ListItem, ListItemButton, ListSubheader, Sheet, Tooltip, Typography } from "@mui/joy";
import { FC, useEffect, useState } from 'react';
import { Flex, Shift } from '../common/Helpers';

interface IProps {
    selectedActivityId: number

    setSelectedProjectId(value: undefined | number): void
    setSelectedActivityId(value: number): void
    setTabId(id: number): void
}

type ActivityType = {
    id: number
    title: string
    date: string
    detailedTitle: string
    description: any
    isStudy: boolean
    link?: string
}

const Activities: FC<IProps> = props => {

    const activities: ActivityType[] = [
        {
            id: 1, title: 'TUMO', date: '2012 - 2016', detailedTitle: 'TUMO Center for Creative Technologies', isStudy: true, link: 'https://tumo.org',
            description: <>
                <Typography>&emsp;The <Link onClick={() => window.open('https://tumo.org/whatistumo/', '_blank')}>TUMO</Link> Center for Creative Technologies is a free education program for teenagers aged 12–18 specializing in technology and design, TUMO is located in Armenia.
                    <br />
                    &emsp;I start to learn in TUMO when I was 12 years old. Here are my main completed courses in TUMO :
                </Typography>
                <ul>
                    <li>Basics of programming</li>
                    <li>3D Modelling (3Ds Max, ZBrush)</li>
                    <li>Game Development (mostly Unity 3D, Stencyl)</li>
                    <li>AR development by <Link onClick={() => window.open('https://arloopa.com', '_blank')}>Arloopa</Link></li>
                    <li><Link onClick={() => window.open('https://tumo.org/project/robotics/', '_blank')}>Robotics</Link></li>
                </ul>
            </>
        },
        {
            id: 2, title: 'NPUA', date: '2017 - 2021', detailedTitle: 'National Polytechnic University of Armenia', isStudy: true, link: 'https://polytech.am/en/home/',
            description: <Typography>&emsp;Bachelor of Science, Cyber Security, National Polytechnic University of Armenia, 2021</Typography>
        },
        {
            id: 3, title: 'Freelancing', date: '2017 - present', detailedTitle: 'Freelancing', isStudy: false,
            description: <Typography>
                &emsp;I'm freelancer since 2017. Mostly I build <Tooltip variant='soft' arrow sx={{ maxWidth: 300 }} title='WebGL is a JavaScript API for rendering interactive 2D and 3D graphics within any compatible web browser without the use of plug-ins. WebGL is fully integrated with other web standards, allowing GPU-accelerated usage of physics and image processing and effects as part of the web page canvas.'><Link onClick={() => window.open('https://en.wikipedia.org/wiki/WebGL', '_blank')}>WebGL</Link></Tooltip> apps using Three.JS and <Tooltip variant='soft' arrow sx={{ maxWidth: 300 }} title='MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.'><Link onClick={() => window.open('https://www.mongodb.com/mern-stack#:~:text=MERN%20stands%20for%20MongoDB%2C%20Express,a%20client-side%20JavaScript%20framework', '_blank')}>MERN</Link></Tooltip> stack. You can see my projects in <Link onClick={() => props.setTabId(0)}>Projects Tab</Link>
            </Typography>

        },
        {
            id: 4, title: 'Secret Network', date: '2021', detailedTitle: 'Secret Network (Crypto)', isStudy: false, link: 'https://scrt.network',
            description: <>
                <Typography>
                    &emsp;Secret Network is an open-source protocol that performs computations on encrypted data, bringing privacy to smart contracts and public blockchains.
                    <br />
                    &emsp;I've collaborated with Secret Network and built for them Secret Contracts verification system, more about it you can learn in <Link onClick={() => {
                        props.setTabId(0)
                        props.setSelectedProjectId(2)
                    }}>Projects Tab</Link>
                </Typography>
            </>
        },
        {
            id: 5, title: 'Greenberg Casework', date: '2021 - present', detailedTitle: 'Greenberg Casework Company', isStudy: false, link: 'https://www.greenbergcaseworkcompany.com',
            description: <Typography>
                &emsp;Since 1985 Greenberg Casework Company Inc. has been a manufacturer of all types of cabinets. To design and
                manufacture cabinets today requires complex software, much of which is custom designed.
                <br />
                &emsp;Since August of 2021 I've been part of the team that has designed and built the web based design tool that
                is used on <Link onClick={() => window.open('https://www.garagecabinets.com', '_blank')}>GarageCabinets.com</Link> (one of our companies websites). My role is full stack web developer.
            </Typography>
        },
    ]

    const [selectedActivity, setSelectedActivity] = useState(activities[props.selectedActivityId])

    useEffect(() => {
        setSelectedActivity(activities[props.selectedActivityId])
    }, [props.selectedActivityId])

    return (
        <Flex box className='tabWrapper' centerX sx={{ gap: 1, flexWrap: 'wrap' }}>
            <Sheet variant="soft" sx={{
                flex: '1',
                minWidth: 300,
                background: "#00000000"
            }}>
                <List
                    variant="outlined"
                    sx={{
                        // width: 300,S
                        bgcolor: 'background.body',
                        borderRadius: 'sm',
                        boxShadow: 'sm',
                    }}
                >
                    <ListItem nested>
                        <ListSubheader>Education</ListSubheader>
                        <List>
                            {activities.filter(a => a.isStudy).map(activity => <ListItem key={activity.id}>
                                <ListItemButton onClick={() => { setSelectedActivity(activity) }}>
                                    {activity.title}
                                    <Shift />
                                    <Typography color='neutral'>{activity.date}</Typography>
                                    <ListDivider inset='context' />
                                </ListItemButton>
                            </ListItem>)}
                        </List>
                    </ListItem>
                    <ListItem nested>
                        <ListSubheader>Work</ListSubheader>
                        <List>
                            {activities.filter(a => !a.isStudy).map(activity => <ListItem key={activity.id}>
                                <ListItemButton onClick={() => { setSelectedActivity(activity) }}>
                                    {activity.title}
                                    <Shift />
                                    <Typography color='neutral'>{activity.date}</Typography>
                                </ListItemButton>
                            </ListItem>)}
                        </List>
                    </ListItem>
                </List>
            </Sheet>

            <Flex centerX column sx={{
                // width: 1,
                bgcolor: 'background.body',
                borderRadius: 'sm',
                boxShadow: 'sm',
                p: 1,
                height: 'fit-content',
                flex: '2',
                minWidth: 300,
            }}>
                <Flex box centerY centerX sx={{ position: 'relative' }} fullWidth>
                    <Typography level='h4' sx={{ mx: 3, textAlign: 'center' }}>{selectedActivity.detailedTitle}</Typography>
                    {selectedActivity.link &&
                        <LaunchIcon
                            sx={{ position: 'absolute', right: 10, cursor: 'pointer' }}
                            onClick={() => window.open(selectedActivity.link, '_blank')}
                        />}
                </Flex>
                <Divider sx={{ m: 1 }} />
                <Typography component='span' sx={{ maxHeight: window.innerHeight - 520, overflowY: 'auto' }}>{selectedActivity.description}</Typography>
            </Flex>
        </Flex >
    )
}
export default Activities