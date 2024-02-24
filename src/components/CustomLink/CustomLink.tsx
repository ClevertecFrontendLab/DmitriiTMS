import React from 'react';
import { Link, useMatch } from 'react-router-dom';

import styles from './CustomLink.module.css';


interface ChildrenProp {
    children: React.ReactNode;
    to: string
  };


export const CustomLink: React.FC<ChildrenProp> = ({ children, to}) => {

    const match = useMatch(to);

    return (
        <Link to={to}
            className={match ? `${styles.authLink} ${styles.activeAuth}` : styles.authLink}
        >
            {children}
        </Link>
    )
};
