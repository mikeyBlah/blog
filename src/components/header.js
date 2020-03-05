import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import headerStyles from '../styles/header.module.scss';

const Header = () => {

  const data = useStaticQuery(graphql`
    query{
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <div className={headerStyles.header__container}>
      <h1>{data.site.siteMetadata.title}</h1>
      <ul className={headerStyles.list__container}>
        <li>
          <Link activeClassName={headerStyles.listItemActive} to='/'>Home</Link>
        </li>
        <li>
          <Link activeClassName={headerStyles.listItemActive} to='/about'>About</Link>
        </li>
        <li>
          <Link activeClassName={headerStyles.listItemActive} to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/contact' activeClassName={headerStyles.listItemActive}>Contact</Link>
        </li>
      </ul>
    </div>
  )
};

export default Header;