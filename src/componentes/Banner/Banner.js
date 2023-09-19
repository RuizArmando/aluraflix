import "./Banner.css"

function Banner(){
    return  <section className="banner">
                <div className="banner__info">
                    <button className="banner__btn">Front End</button>
                    <h1 className="banner__title">Challenge React</h1>
                    <p className="banner__description">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </div>
                <img src="/img/player.png" alt="imagen de presentacion" className="banner__img"/>
            </section>
}

export default Banner