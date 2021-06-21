import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import {Button } from '../ButtonElement';
import { HeaderContainer, HeaderBg, VideoBg, HeaderContent, HeaderH1, HeaderP, HeaderBtnWrapper, ArrowForward, ArrowRight} from './HeaderElements';

const HeaderSection = () => {
    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeaderContainer>
            <HeaderBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeaderBg>
            <HeaderContent>
                <HeaderH1>WE BUILD SOFTWARE EXPERIENCES</HeaderH1>
                <HeaderP>We create digital products that make business processes more efficient and help businesses grow.</HeaderP>
                <HeaderBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeaderBtnWrapper>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default HeaderSection
