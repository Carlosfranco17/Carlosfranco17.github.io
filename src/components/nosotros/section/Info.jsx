import AboutContent from '../text_content/about_us'



const Info = () => {
    return (
        <div className="">
                <div className="column-f">
                    <div className="text" >
                        <strong>
                            {AboutContent.title}
                        </strong>
                        <div className="section-1 column-f">
                    <div className="text" >
                        <p>
                            {AboutContent.introduction}
                        </p>
                        </div>
                        </div>
                    <div className="section-2 column-f">
                    <div className="text" >
                        <p>
                            {AboutContent.capital}
                        </p>
                        </div>
                        </div>
                        <div className="section-1 column-f">
                    <div className="text" >
                        <p>
                            {AboutContent.focus}
                        </p>
                        </div>
                        </div>
                        <div className="section-2 column-f">
                    <div className="text" >
                        <p>
                            {AboutContent.pride}
                        </p>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    

    )
}

export default Info