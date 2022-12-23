import "../../design/body/bodyHeaderStyle.css";
import {Container} from "react-bootstrap";
import leftImage from "../../assets/body/bodyHeader/bodyHeaderLeft.png";
import rightImage from "../../assets/body/bodyHeader/bodyHeaderRight.png";
import upperLeftLogo from "../../assets/body/bodyHeader/Vector.png";
import upperRightLogo from "../../assets/body/bodyHeader/Vector (1).png";

export default function BodyHeader() {
    return (
        <>
            <div>
                <Container>
                    <div className={'bodyHeaderUpper'}>
                        <div className={'upperImageSpace'}>
                            <img className={'leftImage image'} src={leftImage} alt={'leftImage'}/>
                            <div className={'overlay'}>
                                <div className={'UpperLogoSpace'}>
                                    <img className={'upperLeftLogo'} src={upperLeftLogo} alt={'upperLeftLogo'}/>
                                </div>
                                <div className={'upperImageTitle'}>Membership</div>
                                <div className={'upperImageBody'}>Join our community of Lawyers engaged in the tech and
                                    entrepreneurship space and
                                    enjoy LawyersHub member benefits.
                                </div>
                                <div className={'bodyHeaderUpperButton'}>More Details</div>
                            </div>
                        </div>
                        <div className={'upperImageSpace'}>
                            <img className={'rightImage image'} src={rightImage} alt={'rightImage'}/>
                            <div className={'overlay'}>
                                <div className={'UpperLogoSpace'}>
                                    <img className={'upperRightLogo'} src={upperRightLogo} alt={'upperRightLogo'}/>
                                </div>
                                <div className={'upperImageTitle'}>Co-Working Space</div>
                                <div className={'upperImageBody'}>Set in Upperhill with close proximity to the Milimani
                                    Law Courts, our co-working
                                    space offers the ideal space to work & collaborate either daily, weekly or monthly.
                                </div>
                                <div className={'bodyHeaderUpperButton'}>More Details</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}