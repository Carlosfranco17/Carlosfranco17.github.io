import { useState } from 'react';
import ColumnContent from '../text_content/column';
import './accordion.css'; // Import the CSS file

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    return (
        <div className="cont_accordion">
            <div className="accordion-container">
                {ColumnContent.map((content, index) => (
                    <section key={index} className="accordion">
                        <input
                            type="checkbox"
                            name={`collapse${index}`}
                            id={`handle${index}`}
                            checked={index === activeIndex}
                            onChange={() => handleToggle(index)}
                        />
                        <h2 className="handle">
                            <label htmlFor={`handle${index}`}>{content.title}</label>
                        </h2>
                        <div className="content">
                            <p>{content.intro}</p>
                            <p>{content.text}</p>
                        </div>
                    </section>
                ))}
            </div>
            <div className="image-container">
                <img src="../../../../public/img/disenamos-a-tu-medida.png" alt="" />
            </div>
        </div>
    );
};

export default Accordion;