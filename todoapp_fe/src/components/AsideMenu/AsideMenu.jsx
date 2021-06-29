import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';

import AsideMenuStyles from './AsideMenu.module.scss';
import { StoreContext } from '../../store/StoreProvider';
import UserMenu from './subComponents/UserMenu';
import AdminMenu from './subComponents/AdminMenu';

const style = bemCssModules(AsideMenuStyles);

const AsideMenu = () => {
    const { user } = useContext(StoreContext);

    const ADMIN_TYPE = 1;

    const adminMenuComponent = user?.accessLevel === ADMIN_TYPE ? <AdminMenu/>:
    null;

    return ( 
        <section className={style()}>
            <div className={style('nav-wrapper')}>
            <UserMenu isUserLogged={Boolean(user)}/>
            </div>
        </section> 
    );
}
 
export default AsideMenu;