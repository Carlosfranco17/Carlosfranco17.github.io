
import AboutContent from '../text_content/about_us';

const Info = () => {
    return (
        <div className="">
            <div className="column-f">
                <div className="text">
                    <strong>
                        {AboutContent.title}
                    </strong>
                    <div className="section-1">
                        <div className="text">
                            <p>
                                {AboutContent.introduction}
                            </p>
                        </div>
                        <div className="imgInfo-1">
                            <img src="../../../../public/img/Nosotros/cuenta-regresiva.webp" alt="" />
                        </div>
                    </div>
                    <div className="section-2">
                        <div className="imgInfo-2">
                            <img src="../../../../public/img/Nosotros/fondos.webp" alt="" />
                        </div>
                        <div className="text">
                            <p>
                                {AboutContent.capital}
                            </p>
                        </div>
                    </div>
                    <div className="section-1">
                        <div className="text">
                            <p>
                                {AboutContent.focus}
                            </p>
                        </div>
                        <div className="imgInfo-1">
                            <img src="../../../../public/img/Nosotros/bombilla.webp" alt="" />
                        </div>
                    </div>
                    <div className="section-2">
                        <div className="imgInfo-2">
                            <img src="../../../../public/img/Nosotros/padre.webp" alt="" />
                        </div>
                        <div className="text">
                            <p>
                                {AboutContent.pride}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
