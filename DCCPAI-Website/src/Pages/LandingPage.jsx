import NavBar from '../PageSections/NavBar/NavBar.jsx'
import Footer from '../PageSections/Footer/Footer.jsx'
import HeroTitleSection from '../PageSections/HeroTitleSection/HeroTitleSection.jsx'
import OurCacaoSection from '../PageSections/OurCacaoSection/OurCacaoSection.jsx'
import WhoWeAreSection from '../PageSections/WhoWeAreSection/WhoWeAreSection.jsx'

function LandingPage() {
    return (
        <>
        <NavBar />
        <HeroTitleSection />
        <OurCacaoSection />
        <WhoWeAreSection />
        <Footer /> 
        </>
    )
}

export default LandingPage