import '../design/navigation/navigationStyle.css';
import NavigationHeader from "./navigationParts/NavigationHeader";
import NavigationBar from "./navigationParts/NavigationBar";
import Header from "./navigationParts/Header";
import smallCircle from "../assets/header/smallCircle.png";
import bigCircle from "../assets/header/bigCircle.png";

export default function Navigation() {
    return (
        <>
            <div className={'navigationBackgroundImage'}>
                <div className={'navigationBackgroundImageCover'}>
                    <NavigationHeader/>
                    <NavigationBar/>
                    <Header/>
                </div>
                <div className={'navigationCircles'}>
                    <img className={'smallCircle'} src={smallCircle} alt={'smallCircle'}/>
                    <img className={'bigCircle'} src={bigCircle} alt={'bigCircle'}/>
                </div>
            </div>
        </>
    )
}