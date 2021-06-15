import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';
import AsideMenuStyles from '../AsideMenu.module.scss';
import { Link } from 'react-router-dom';

const style = bemCssModules(AsideMenuStyles);

const AdminMenu = () => (
    <>
    <p className={style('title')}>Panel Admina</p>
    <nav>
        <ul>
            <li className={style('link')}>
                <Link to="/manage-courses">Zarządzanie kursami</Link>
            </li>
        </ul>
    </nav>
    </>
);

export default AdminMenu;