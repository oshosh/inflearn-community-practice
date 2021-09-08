import React from 'react';
import styled from 'styled-components';

import Logo from '../images/logo.png'

const NavBar = styled.nav`
    display: flex;

    & .header-container {
        max-width: 1200px;
        margin: 0 auto;
    }
`

const ContentWrapper = styled.div`
    display: flex;
    height: 100%;
    
    & .logo {
        width: 150px;
        height: 100px;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
    }

    & a {
        width: 100%;
        height: 100%;
        background: url(${Logo}) center no-repeat;
        background-size: cover;

        color: #1dc078;
        text-decoration: none;
        cursor: pointer;
        
        & span {
            position: absolute;
            clip: rect(0, 0, 0, 0);
            width: 1px;
            height: 1px;
            margin: -1px;
                        
        }
    }
`

const NavBarMenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 auto;
    width: 100%;
    margin-left: 15px;

    & .navbar-left {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        
        & .category_menu-left {
            margin: .5rem .875rem;
            
            & span {
                padding: .5rem;
                font-size: 1rem;
                line-height: 1.6;
                color: #4a4a4a;
            }

            &:first-child{
                    padding-left: 1.5rem;
                }
        }
    }

    & .navbar-right{
        display: flex;
        height: 100%;
        
        & input {
            width: 9.5rem;
            border-radius: 3px;
            box-shadow: none;
            background: #f6f6f6;
            color: #5f5f5f;
            border: 1px solid transparent;
            padding: calc(.375em - 1px) calc(.625em - 1px);
        }
        
        & .category_menu-right {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: .5rem;
        }
    }
`

function Header() {
    return (
        <header>
            <NavBar>
                <div className="header-container">
                    <ContentWrapper className="content">
                        <div className="logo">
                            <a href="https://www.inflearn.com">
                                <span>인프런</span>
                            </a>
                        </div>
                        <NavBarMenuWrapper className="navbar-menu">
                            <div className="navbar-left">
                                <div className="category_menu-left">
                                    <span>강의</span>
                                </div>
                                <div className="category_menu-left">
                                    <span>로드맵</span>
                                </div>
                                <div className="category_menu-left">
                                    <span>멘토링</span>
                                </div>
                                <div className="category_menu-left">
                                    <span>커뮤니티</span>
                                </div>
                                <div className="category_menu-left">
                                    <span>인프런</span>
                                </div>
                            </div>
                            <div className="navbar-right">
                                <div className="category_menu-right search">
                                    <input type="text" />
                                </div>
                                <div className="category_menu-right">
                                    <span>지식공유참여</span>
                                </div>
                                <div className="category_menu-right">
                                    <span>최근강의</span>
                                </div>
                                <div className="category_menu-right">
                                    <span>장</span>
                                </div>
                                <div className="category_menu-right">
                                    <span>알</span>
                                </div>
                                <div className="category_menu-right">
                                    <span>정</span>
                                </div>
                            </div>
                        </NavBarMenuWrapper>
                    </ContentWrapper>
                </div>
            </NavBar>
        </header>
    );
}

export default Header;