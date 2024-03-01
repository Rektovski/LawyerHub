import '../design/navigation/navigationStyle.css';
import NavigationHeader from "./navigationParts/NavigationHeader";
import NavigationBar from "./navigationParts/NavigationBar";
import Header from "./navigationParts/Header";

export default function Navigation() {
    return (
        <>
            <div className={'navigationBackgroundImage'}>
                <div className={'navigationBackgroundImageCover'}>
                    <NavigationHeader/>
                    <NavigationBar/>
                    <Header/>
                </div>
            </div>
        </>
    )
}