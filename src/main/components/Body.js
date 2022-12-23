import "../design/body/bodyStyle.css";
import BodyHeader from "./bodyParts/BodyHeader";

export default function Body() {
    return (
        <>
            <div className={'bodyBackgroundImage'}>
                <div>
                    <BodyHeader/>
                </div>
            </div>
        </>
    )
}