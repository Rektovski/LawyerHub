import "../../design/body/bodyLatestBlogsStyle.css";
import {Container} from "react-bootstrap";
import {blogList} from "../../helper/blogList";

export default function BodyLatestBlogs() {
    return (
        <>
            <Container>
                <div className={'blogs'}>
                    <div className={'blogTitle'}>
                        LATEST BLOGS
                    </div>
                    <figure className={'blogFigure'}></figure>
                    <div className={'blogArticle'}>
                        You can rely on our stunning team for the latest in the LawTech blogs and taking time to peruse will
                        be great experience for you without a doubt
                    </div>
                    <div className={'blogCards'}>
                        {
                            blogList.map((item, id) => (
                                <div key={id} className={'blogCard'}>
                                    <img className={'blogImage'} src={item.image} alt={'blogImage'}/>
                                    <div className={'blogCardBodySpace'}>
                                        <div className={'blogCardDate'}>{item.date}</div>
                                        <div className={'blogCardTitle'}>{item.title}</div>
                                        <div className={'blogCardBody'}>{item.body}</div>
                                        <div className={'blogButton'}>Read More</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}