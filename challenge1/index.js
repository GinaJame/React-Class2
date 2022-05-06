/*
Challenge 1
Crea un 'custom component' llamado Page
Deberá regresar una lista desordenada (<ul>) con 4 razones por las que crees que es importante aprender React.
Añade en algún lugar el logo de React (incluído en la carpeta)

'Renderea' el componente en la página.

*/
function HolaMundo(){
    return(
        <h1>Hola mundo</h1>
    );
};

function Page(){
    return(
        <div>
            <h1>¿Por qué usar React?</h1>
            <ul>
                <li>Razón 1: Aprender JS</li>
                <li>Razón 2: eact te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.</li>
                <li>Razón 3: Al estar basado en JavaScript, cuenta con una amplia comunidad que dispone de un gran número de librerías externas.</li>
                <li>Razon 4: Generar el DOM de forma dinámica. Lo que permite que para poder visualizar los cambios de los datos, no es necesario renderizar toda la página de nuevo, sino solamente el componente que haya sido actualizado.</li>
            </ul>
            <img src="./react.svg" width="500px" />
        </div>
        
    );
};
ReactDOM.render(<Page/>, document.getElementById('root'))

