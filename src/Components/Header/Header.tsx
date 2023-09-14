import "./header.scss";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

interface iProps {
    statusMenu: string,
    setMenuStatus: React.Dispatch<React.SetStateAction<string>>
}

function Header({ statusMenu, setMenuStatus }: iProps) {

    const menuHandler = () => {
        if (statusMenu === "active") {
            setMenuStatus("");
        } else {
            setMenuStatus("active");
        }
    }


    return (
        <header className='header'>
            <div className="container">
                <div className="logo">Denys Paziak</div>
                <nav className={'nav ' + statusMenu}>
                    <a className='hover' href="#home">Home</a>
                    <a className='hover' href="#projects">Projects</a>
                    <a className='hover' href="#about">About</a>
                    <a className='hover' href="#contact">Contact</a>

                    <div className="closeMenu" onClick={menuHandler}>
                        <AiOutlineClose />
                    </div>
                </nav>
                <div className="menu" onClick={menuHandler}>
                    <BiMenu />
                </div>
            </div>
        </header>
    )
}

export default Header