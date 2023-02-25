import React, { FC } from 'react'
import { Sheet } from "@mui/joy";
import { Flex } from '../common/Helpers';

interface IProps {

}

const About: FC<IProps> = props => {
    return (
        <Flex variant="soft" className='tabWrapper'>
            <>About</>
        </Flex>
    )
}

export default About