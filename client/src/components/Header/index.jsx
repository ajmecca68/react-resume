import coverImage from './assets/cover/cover-image.jpg';

function Header(props) {

return (
    <header className="flex-row space-between px-1">
    <h1>Mecca</h1>
    <img src={coverImage} alt="spacey blue background" />
    {props.children}
    </header>
);
}

export default Header;