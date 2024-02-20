import { LayoutForgot } from '@components/LayoutForgot/LayoutForgot';

import styles from './ConfirmEmail.module.css';
import { Loader } from '@components/Loader/Loader';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/configure-store';

export const ConfirmEmail: React.FC = () => {

    const loading = useSelector((state: RootState) => state.recover.loading);

    if(loading) {
        return <Loader/>
    }

    return (
        <>
            <LayoutForgot>
                <div>
                    <p>ConfirmEmail</p>
                </div>
            </LayoutForgot>
        </>


    )
}