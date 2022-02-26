import { React, useState } from "react"
import './navBar.scss'

export default function NavBar({scrollToSection}) {
    

    const [search, setSearch] = useState(false)
    const [searchVal, setSearchVal] = useState('')

    const sayHello = (e) => {
        setSearch(!search);
    }
    const searchValue = (e) => {
        setSearchVal(e.target.value);
    }
    const searchEvent = (e)=>{
        console.log(searchVal);
        setSearchVal('');
    }
    

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">
                    <img src="/image/logo.png" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link"  onClick={()=>scrollToSection(1)}>Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>scrollToSection(1)}>Aplication</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>scrollToSection(2)}>Learn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>scrollToSection(2)}>Steam Communitiy</a>
                        </li>
                    </ul>
                    <div className='d-flex'>
                        <div className={search ? "search1 search2" : "search1"} >
                            <input type="text" onChange={searchValue} value={searchVal}/>
                            <i className="fa fa-search" aria-hidden="true" onClick={sayHello}></i>
                        </div>
                        <button className="searchBtn" onClick={searchEvent}>lorem Ipsum</button>
                    </div>
                </div>
            </nav>
        </>
    );
}