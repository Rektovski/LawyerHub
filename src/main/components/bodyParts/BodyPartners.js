import "../../design/body/bodyPartners.css";
import {Container} from "react-bootstrap";
import partnerImage1 from "../../assets/body/bodyPartner/lsk.png";
import partnerImage2 from "../../assets/body/bodyPartner/ntweek.png";
import partnerImage3 from "../../assets/body/bodyPartner/ibm_PNG19658.png";
import partnerImage4 from "../../assets/body/bodyPartner/1_9DOIuxGtRPKdXUmgHkmaKQ.png";

export default function BodyPartners() {
    return (
        <>
            <div>
                <Container>
                    <div className={'partner'}>
                        <div className={'partnerTitle'}>
                            Our Partners
                        </div>
                        <figure className={'partnerFigure'}></figure>
                        <div className={'partnerImages'}>
                            <img className={'partnerImage'} src={partnerImage1} alt={'partnerImage'}/>
                            <img className={'partnerImage'} src={partnerImage2} alt={'partnerImage'}/>
                            <img className={'partnerImage'} src={partnerImage3} alt={'partnerImage'}/>
                            <img className={'partnerImage'} src={partnerImage4} alt={'partnerImage'}/>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}