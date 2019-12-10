import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setToggleMenu } from '../../redux/common/common.actions';
import { selectToggleMenu } from '../../redux/common/common.selectors';

import Logo from '../../assets/images/logo.png';
import UserLogo from '../../assets/images/user-logo.png';

import MainSearch from '../main-search/main-search.component';

import './header.styles.scss';

const Header = ({ setToggleMenu , toggleMenu }) => {

    const handleSubMenu = () => {
        setToggleMenu();
    }
    
    return(
        <div className="headerWrap">
            <div className="logoWrap">
                <Link to="/dashboard">
                    <img src={Logo} alt="Malkey"/>
                </Link>
            </div>
            <div className="searchWrap">
                <MainSearch />
            </div>
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Fleet</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Yards</Link>
                    </li>
                    <li className={`${toggleMenu ? 'show' : ''} nav-item dropdown`}>
                        <span className="dropdown-toggle" onClick={handleSubMenu}>
                            <span className="logo" style={{ backgroundImage : `url(${UserLogo})` }}></span>
                            <span className="name">Malki <br/>Front Desk</span>
                        </span>
                        <div className={`${toggleMenu ? 'show' : ''} dropdown-menu`} aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/">Action</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    toggleMenu : selectToggleMenu
});

const mapDispatchToProps = dispatch => ({
    setToggleMenu : () => dispatch(setToggleMenu())
})

export default connect(mapStateToProps , mapDispatchToProps)(Header);