import policy from "../text_content/policy.json"


const Info2 = () => {
    return (
        <div>
            <div className="column-2">
            <img src="../../../../public/img/Nosotros/Blue Porter's Five Forces Analysis Graph.webp" alt="Graph" />
            </div>
            <div className="column-f">
                <div className="title">
                    <strong>{policy.title}</strong>
                </div>
                <div className="section-3">
                    <div className="text">
                        <p>
                            {policy.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info2