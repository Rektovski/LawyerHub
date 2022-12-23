import "../../design/navigation/navigationHeader.css";
import {Container} from "react-bootstrap";
import {BsTelephone as TeleIcon} from "react-icons/bs";
import {CiMail as MailIcon} from "react-icons/ci";
import {
    FiFacebook as FBIcon,
    FiTwitter as TWIcon,
    FiLinkedin as LnIcon,
    FiInstagram as InIcon,
    FiStar as StarIcon
} from 'react-icons/fi';
import {TbPoint as PointIcon} from "react-icons/tb";

export default function NavigationHeader() {
    return (
        <>
            <div className={'navigationHeaderSpace'}>
                <Container>
                    <div className={'navigationHeader'}>
                        <div className={'navigationHeaderLeft'}>
                            <div className={'navigationHeaderLeftLeft'}>
                                <TeleIcon size={20} className={'navigationIconLeft'}/>
                                <div className={'navigationHeaderLink'}>+995-XXX-XXX-XXX</div>
                            </div>
                            <PointIcon size={20} className={'navigationIconLeft'}/>
                            <div className={'navigationHeaderLeftRight'}>
                                <MailIcon size={20} className={'navigationIconLeft'}/>
                                <div className={'navigationHeaderLink'}>info@test.com</div>
                            </div>
                        </div>
                        <div className={'navigationHeaderRight'}>
                            <FBIcon size={20} className={'navigationIcon'}/>
                            <TWIcon size={20} className={'navigationIcon'}/>
                            <LnIcon size={20} className={'navigationIcon'}/>
                            <InIcon size={20} className={'navigationIcon'}/>
                            <div className={'navigationHeaderRightRight'}>
                                <StarIcon size={20} className={'navigationIconRight'}/>
                                <div className={'navigationHeaderMembership'}>
                                    Join Our Membership
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}