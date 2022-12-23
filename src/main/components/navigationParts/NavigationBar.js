import "../../design/navigation/navigationBarStyle.css";
import {Container} from "react-bootstrap";
import barLogo from "../../assets/navigation/navigationBar/Logo.png";
import {useState} from "react";

export default function NavigationBar() {
    const [menu, setMenu] = useState(false);
    const rect1 = {transform: "rotate(405deg)", position: "relative", top: 7, backgroundColor: "white"};
    const rect2 = {transform: "rotate(1485deg)", backgroundColor: "white"};
    const rect3 = {transform: "rotate(-405deg)", position: "relative", top: -7, backgroundColor: "white"};

    return (
        <>
            <div className={'navigationBarSpace'}>
                <Container>
                    {
                        window.innerWidth > 1000 ?
                            <div className={'navigationBar'}>
                                <div className={'flex-fill'}>
                                    <img
                                        className={'barLogo'}
                                        src={barLogo}
                                        alt={'barLogo'}
                                        onClick={() => window.location.replace('/')}
                                    />
                                </div>
                                <div className={'barLinks'}>
                                    <div className={'barLinksLeft'}>Home</div>
                                    <div className={'barLinksRight'}>Team</div>
                                    <div className={'barLinksRight'}>Blog</div>
                                    <div className={'barLinksRight'}>Membership</div>
                                    <div className={'barLinksRight'}>Events</div>
                                    <div className={'barLinksRight'}>Space</div>
                                    <div className={'barLinksRight'}>Resourses</div>
                                    <div className={'barLinksRight'}>Careers</div>
                                    <div className={'barLinksRight'}>Contacts</div>
                                </div>
                            </div>
                            :
                            <div className={`navigationBarMobile`}>
                                <div className={`NavbarBurger`} onClick={() => setMenu(!menu)}>
                                    <div style={menu ? rect1 : {}} className={'rectangle1'}></div>
                                    <div style={menu ? rect2 : {}} className={'rectangle2'}></div>
                                    <div style={menu ? rect3 : {}} className={'rectangle3'}></div>
                                </div>
                                {
                                    menu ?
                                        <>
                                            <div className={'menuNavbarLinks'}>
                                                <div className={'d-flex justify-content-center'}>
                                                    <img className={'navigationLogo'} src={barLogo} alt={'navigationLogo'}/>
                                                </div>
                                                <div className={'navbarLinks'}>Home</div>
                                                <div className={'navbarLinks'}>Team</div>
                                                <div className={'navbarLinks'}>Blog</div>
                                                <div className={'navbarLinks'}>Membership</div>
                                                <div className={'navbarLinks'}>Events</div>
                                                <div className={'navbarLinks'}>Space</div>
                                                <div className={'navbarLinks'}>Resourses</div>
                                                <div className={'navbarLinks'}>Careers</div>
                                                <div className={'navbarLinks'}>Contacts</div>
                                            </div>
                                        </>
                                        : ""
                                }
                            </div>
                    }
                </Container>
            </div>
        </>
    )
}