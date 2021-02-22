import "../styles/header.scss";

export function Header(){

    function createDots(){
        let elems;
        for(let i = 0; i < 100; i++){
            elems += "<div className=\"dot\"></div>";
        }
        return elems;
    }
    return(
        <div className="header-container">
            <div className="back-dots" dangerouslySetInnerHTML={{__html: createDots()}}>

            </div>
            <div className="content">
                <h1>Devlog</h1>
            </div>
        </div>
    );
}