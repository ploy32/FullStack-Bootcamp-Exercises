import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.header`
    width: 100%;
    height: 5rem;
    background-color: #044599;
    padding: 0 10%;
    nav {
        height: 100%;
    }
    ul {
        height: 100%;
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;
        align-items: center;
        justify-content: flex-start;
    }
    li {
        margin: 0 1rem;
        width: 5rem;
    }
`;
const StyledActiveLink = styled(NavLink)`
    color: white;
    text-decoration: none;

    &:hover,
    &.active {
        padding-bottom: 0.25rem;
        border-bottom: 4px solid #95bcf0;
    }

    &.active {
        color: #95bcf0;
    }
`;

const Header = () => {
    return (
        <Container>
            <nav>
                <ul>
                    <li>
                        <StyledActiveLink
                            className={(navData) =>
                                navData.isActive ? 'active' : ''
                            }
                            to='/'
                        >
                            HomePage
                        </StyledActiveLink>
                    </li>
                    <li>
                        <StyledActiveLink
                            className={(navData) =>
                                navData.isActive ? 'active' : ''
                            }
                            to='/products'
                        >
                            Products
                        </StyledActiveLink>
                    </li>
                </ul>
            </nav>
        </Container>
    );
};

export default Header;
