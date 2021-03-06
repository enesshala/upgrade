import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeaderSection from '../components/HeaderSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeaderSection />
            <InfoSection {...homeObjOne}/>
            <Services />
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    )
}

export default Home
