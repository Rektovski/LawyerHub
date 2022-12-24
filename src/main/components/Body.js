import "../design/body/bodyStyle.css";
import BodyHeader from "./bodyParts/BodyHeader";
import BodyAboutUs from "./bodyParts/BodyAboutUs";
import BodyBird from "./bodyParts/BodyBird";
import BodyLatestBlogs from "./bodyParts/BodyLatestBlogs";
import BodyPartners from "./bodyParts/BodyPartners";

export default function Body() {
    return (
        <>
            <div className={'bodyBackgroundImage'}>
                <div>
                    <BodyHeader/>
                    <BodyAboutUs/>
                </div>
            </div>
            <div className={'bodySecondPart'}>
                <BodyBird/>
                <BodyLatestBlogs/>
                <BodyPartners/>
            </div>

        </>
    )
}