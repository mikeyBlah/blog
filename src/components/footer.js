import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import footerStyles from '../styles/footer.module.scss';

const Footer = () => {

  const data = useStaticQuery(graphql`
    query{
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className={footerStyles.footer__container}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <p className={footerStyles.smallPrint}>
        Created by {data.site.siteMetadata.author}, &copy; 2020
      </p>
    </div>
  )
};

export default Footer;