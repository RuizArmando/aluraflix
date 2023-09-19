import "./Header.css"

function Header(){
    return <header>
        <section className="menu">
            <a href="index.js"><img src="/img/LogoMain.png" alt="aluraflix" className="menu__img"/></a>
            <button className="menu__button">Nuevo video</button>
        </section>
    </header>
}

export default Header