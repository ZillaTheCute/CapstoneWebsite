import NavBar from '../PageSections/NavBar/NavBar.jsx'
import Footer from '../PageSections/Footer/Footer.jsx'
import HeroTitleSection from '../PageSections/HeroTitleSection/HeroTitleSection.jsx'
import HeroTitleSection2 from '../PageSections/HeroTitleSection2/HeroTitleSection2.jsx'
import OurCacaoSection from '../PageSections/OurCacaoSection/OurCacaoSection.jsx'
import WhoWeAreSection from '../PageSections/WhoWeAreSection/WhoWeAreSection.jsx'
import WhoWeAreSection2 from '../PageSections/WhoWeAreSection2/WhoWeAreSection2.jsx'

function LandingPage() {
    return (
        <>
        <NavBar />
        <HeroTitleSection2 />
        <OurCacaoSection />
        <WhoWeAreSection2 /> 
        <Footer /> 
        </>
    )
}

export default LandingPage