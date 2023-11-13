import AboutContent from '../text_content/about_us'



const Info = () => {
    return (
        <div className="column-c">
                <div className="section-2 column-f">
                    <div className="text" >
                        <strong>
                            {AboutContent.title}
                        </strong>
                        <p>
                            {AboutContent.introduction}
                        </p>
                        <p>
                            {AboutContent.capital}
                        </p>
                        <p>
                            {AboutContent.focus}
                        </p>
                        <p>
                            {AboutContent.pride}
                        </p>
                    </div>
                </div>
        </div>

    )
}

export default Info