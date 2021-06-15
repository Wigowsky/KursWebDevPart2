import React, { useContext, useEffect, useState } from 'react';

import bemCssModules from 'bem-css-modules';

import LoginFormStyles from './LoginForm.module.scss';
import Modal from '../Modal/Modal';
import { StoreContext } from '../../store/StoreProvider';
import request from '../../helpers/request';

const style = bemCssModules(LoginFormStyles);

const LoginForm = ({handleOnClose, isModalOpen }) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [validateMsg, setValidateMsg] = useState('');

    const { setUser } = useContext(StoreContext);

    const handleOnChangeLogin = event => setLogin(event.target.value);
    const handleOnChangePassword = ({ target }) => setPassword(target.value);
    const handleOnCloseModal = event => {
        event.preventDefault();
        handleOnClose();
    }

    const resetStateOfInput = () => {
        setLogin('');
        setPassword('');
        setValidateMsg('');
    }

    const handleOnSubmit = async event => {
        event.preventDefault();
        const { data, status } = await request.post('/users',
        { login, password });

        if(status === 200){
            setUser(data.user);
            resetStateOfInput();
            handleOnClose();
        } else {
            setValidateMsg(data.message);
        }
    }

    useEffect(() => {
        if(isModalOpen){
        resetStateOfInput();
        }
    }, [isModalOpen]);

    const validateMsgComponent = validateMsg.length ? <p className={style('validate-message')}>{validateMsg}</p> : null ;
   
    return ( 
        <Modal handleOnClose={handleOnClose} isOpen={isModalOpen} shouldBeCloseOnOutsideClick={true}>
            {validateMsgComponent}
            <form className={style()} method="post" onSubmit={handleOnSubmit}>
                <div className={style('row')}>
                    <label>
                        Login :
                        <input onChange={handleOnChangeLogin }type="text" value={login}/>
                    </label>
                </div>
                <div className={style('row')}>
                    <label>
                        Password :
                        <input onChange={handleOnChangePassword} type="password" value={password}/>
                    </label>
                </div>
                <div className={style('row')}>
                    <button type="submit">Login</button>
                    <button onClick={handleOnCloseModal} type="button">Cancel</button>
                </div>
            </form>
        </Modal>
     );
}
 
export default LoginForm;