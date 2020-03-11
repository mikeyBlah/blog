import React from 'react';
import { Link } from 'gatsby';
import blogBarStyles from '../styles/blogFilterBar.module.scss';

const BlogFilterBar = ( props ) => {

  return (
    <ul className={blogBarStyles.blogBarContainer}>
      <li onClick={props.click}>List Item 1</li>
      <li onClick={props.click}>List Item 2</li>
      <li onClick={props.click}>List Item 3</li>
      <li onClick={props.click}>List Item 4</li>
    </ul>
  )
}

export default BlogFilterBar;