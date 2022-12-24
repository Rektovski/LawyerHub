import "../../design/body/bodyBirdStyle.css";
import birdIcon from "../../assets/body/bodyBoard/done_24px.png";

export default function BodyBird() {
    return (
        <>
            <div className={'bodyBird'}>
                <div className={'bodyBirdTitle'}>
                    The lawyers’ hub offers the nexus between Tech and the Law in the following ways:
                </div>
                <div className={'boardPartsSpace'}>
                    <div className={'boardParts'}>
                        <img className={'birdIcon'} src={birdIcon} alt={'birdIcon'}/>
                        <div className={'boardPartText'}>Start Up incubation.</div>
                    </div>
                    <div className={'boardParts'}>
                        <img className={'birdIcon'} src={birdIcon} alt={'birdIcon'}/>
                        <div className={'boardPartText'}>Start Up incubation.</div>
                    </div>
                    <div className={'boardParts'}>
                        <img className={'birdIcon'} src={birdIcon} alt={'birdIcon'}/>
                        <div className={'boardPartText'}>Co-Innovation Space for Lawyers.</div>
                    </div>
                    <div className={'boardParts'}>
                        <img className={'birdIcon'} src={birdIcon} alt={'birdIcon'}/>
                        <div className={'boardPartText'}>Mentorship.</div>
                    </div>
                    <div className={'boardParts'}>
                        <img className={'birdIcon'} src={birdIcon} alt={'birdIcon'}/>
                        <div className={'boardPartText'}>Legal and Policy Support for Startups and innovators.</div>
                    </div>
                </div>
            </div>
        </>
    )
}