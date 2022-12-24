import "../design/footer/footerStyle.css";
import {FormControl, FormLabel, Input} from "@chakra-ui/react";
import {useState} from "react";
import {FiFacebook as FBIcon, FiInstagram as InIcon, FiLinkedin as LnIcon, FiTwitter as TWIcon} from "react-icons/fi";
import {Container, Form} from "react-bootstrap";
import footerLeftImage from "../assets/footer/Group.png";
import footerRightImage from "../assets/footer/Vector.png";

export default function Footer() {
    const [email, setEmail] = useState("");

    return (
        <>
            <div className={'footerSpace'}>
                <Container>
                    <div className={'footer'}>
                        <div className={'footerCard'}>
                            <div className={'footerCardTitle'}>Address</div>
                            <div className={'footerCardBody'}>Bishop Road First Ngong Ave, Nairobi, Kenya</div>
                        </div>
                        <div className={'footerCard'}>
                            <div className={'footerCardTitle'}>Contact</div>
                            <div className={'footerCardBody'}>Email: info@lawyershub.ke Phone: +254 784 840 228</div>
                        </div>
                        <div className={'footerCard'}>
                            <div className={'footerCardTitle'}>Newsletter</div>
                            <div className={'footerCardBody'}>Stay updated by subscribing to our newsletter</div>
                            <Form onSubmit={(event) => {
                                event.preventDefault();
                                setEmail("");
                            }}
                            >
                                <FormControl variant="floating" id="first-name" isRequired isInvalid>
                                    <FormLabel className={'footerEmailLabel'}>Email:</FormLabel>
                                    <Input
                                        className={'bg-light'}
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </FormControl>
                                <button type={'submit'} className={'footerFormButton'}>
                                    Subscribe
                                </button>
                            </Form>
                        </div>
                        <div className={'footerCard'}>
                            <div className={'footerCardTitle'}>Follow us</div>
                            <div className={'footerIconSpace'}>
                                <FBIcon size={20} className={'footerIcon'}/>
                                <TWIcon size={20} className={'footerIcon'}/>
                                <LnIcon size={20} className={'footerIcon'}/>
                                <InIcon size={20} className={'footerIcon'}/>
                            </div>
                        </div>
                    </div>
                </Container>
                <img className={'footerLeftImage'} src={footerLeftImage} alt={'footerLeftImage'}/>
                <img className={'footerRightImage'} src={footerRightImage} alt={'footerRightImage'}/>
            </div>
        </>
    )
}