
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColumnContent from "../text_content/column";

const Columns = () => {
  return (
    <section>
      <div className="column-c">
        {ColumnContent.map((item, index) => (
          <div className="column-3" key={index}>
            <strong>
                {item.title}
            </strong>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Columns;