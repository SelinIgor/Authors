import React from 'react';
import s from './Header.module.css'


class Header extends React.Component {


    render() {
        return (<div>
            <div className={s.header}>
                <div className={s.container}>
                    <div className={s.headerInner}>
                        <p>Test task</p>
                    </div>
                </div>


            </div>
        </div>)
    }
}

export default Header