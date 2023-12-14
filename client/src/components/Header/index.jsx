import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {
    console.log("Header rendering");
return (
    <header className="header">
    <h1>Mecca</h1>
    <img src={coverImage} alt="spacey blue background" />
    {props.children}
    </header>
);
}

export default Header;