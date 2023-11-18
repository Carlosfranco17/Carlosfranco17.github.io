import SecurityPolicy from "../text_content/policy"

SecurityPolicy

const Info2 = () => {
    return (
        <div>
            <div className="column-2">
            <img src="../img/Blue Porter's Five Forces Analysis Graph.png" alt="Graph" />
            </div>
            <div className="column-f">
                <div className="title">
                    <strong>{SecurityPolicy.title}</strong>
                </div>
                <div className="section-3">
                    <div className="text">
                        <p>
                            {SecurityPolicy.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info2