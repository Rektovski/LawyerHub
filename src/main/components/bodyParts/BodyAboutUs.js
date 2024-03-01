import "../../design/body/bodyAboutUs.css";
import {Container} from "react-bootstrap";
import bodyAboutUsImage from "../../assets/body/bodyAboutUs/bodyAboutUsImage.png";

export default function BodyAboutUs() {
    return (
        <>
            <div>
                <Container>
                    <div className={'bodyAboutUs'}>
                        <div className={'bodyAboutUsLeft'}>
                            <div className={'bodyAboutUsTitle'}>ABOUT US</div>
                            <figure className={'horizontalLine'}></figure>
                            <div className={'bodyAboutUsBody'}>
                                The Lawyers Hub exists to provide a nexus between Law
                                and Technology and uses technology as a leverage and
                                improve access to justice and the business of law.
                            </div>
                            <div className={'bodyAboutUsBody'}>
                                Community of Lawyers in Africa promoting Access to
                                Justice through Innovation and Technology.
                            </div>
                            <div className={'bodyAboutUsSignature'}>Linda Bonyo</div>
                            <div className={'bodyAboutUsPosition'}>Founder of the Lawyers Hub</div>
                        </div>
                        <div className={'bodyAboutUsImageSpace'}>
                            <img className={'bodyAboutUsImage'} src={bodyAboutUsImage} alt={'bodyAboutUsImage'}/>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}