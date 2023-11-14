
import { useState } from 'react';
import ColumnContent from "../text_content/column";

const Columns = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section>
      <div className="column-c">
        {ColumnContent.map((item, index) => (
          <div className="column-3" key={index}>
            <strong>{item.title}</strong>
            <p>{item.intro}</p>
            {expandedIndex === index ? (
              <p>{item.text}</p>
            ) : (
              <button onClick={() => handleToggle(index)}>Leer más</button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Columns;
