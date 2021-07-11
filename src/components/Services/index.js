import React from 'react'
import Icon1 from '../../images/web-development.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-4.svg'
import Icon4 from '../../images/data-analytics.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Software Development</ServicesH2>
                        <ServicesP>We build software and services that are fast, secure, and modern for businesses of all sizes.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Web & Ecommerce</ServicesH2>
                        <ServicesP>We provide Clean, Modern and Latest Web & eCommerce Solutions.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Mobile Development</ServicesH2>
                        <ServicesP>We create solutions that solve your business pain, respond market needs, transform internal operations, and follow the latest digital trends.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon4}/>
                        <ServicesH2>UI / UX Design</ServicesH2>
                        <ServicesP>UI/UX involves planning and iterating a site's structure and layout. Once the proper information architecture is in place.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
