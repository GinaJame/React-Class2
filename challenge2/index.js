/*

Challenge 2

Reconstruye la siguiente página creando 3 'custom components' para cada elemento y llámalos: 

Header
MainContent
Footer

Crea un cuarto 'custom component' llamado Page, dentro de él incluye los 3 componentes anteriores.

'Renderea' Page en la página.


*/
function Header(){
    return(
        <header className="encabezado">
            <nav>
                <img src="./react.svg" width="40px"  className="react-logo"/>
                <ul className="main-menu">
                    <li>Basics</li>
                    <li>Demo</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
function MainContent(){
    return(
        <div>
            <h1>Razones para aprender React</h1>
            <ul>
                <li>Nuevas tecnologías</li>
                <li>Desarrollo con componentes</li>
                <li>Mejorar mi experiencia como desarrollador</li>
                <li>Mejorar en JS y/o TS</li>
            </ul>
        </div>
    )
}
function Footer(){
    return(
        <footer>
            <small>© 2022 TC3052. LDAW @ Tec CCM.</small>
        </footer>
    )
}

function  Page(){
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
        
    )
}
ReactDOM.render(<Page/>,
                document.getElementById("root"))

