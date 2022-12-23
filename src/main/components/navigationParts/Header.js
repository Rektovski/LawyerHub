import "../../design/header/headerStyle.css";
import {Carousel} from "react-bootstrap";
import {carouselList} from "../../helper/carouselList";

export default function Header() {
    return (
        <>
            <div className={'carouselSpace'}>
                <Carousel>
                    {
                        carouselList.map((item, id) => (
                            <Carousel.Item key={id} interval={3000}>
                                <div className={'carouseElementSpace'}>
                                    <div className={'carouselTitle'}>{item.title}</div>
                                    <div className={'carouselSecondaryTitle'}>{item.secondary}</div>
                                    <div className={'carouselBody'}>{item.desc}</div>
                                    <div className={'carouselButton'}>
                                        Meet Our Team
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
        </>
    )
}