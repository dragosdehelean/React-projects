import React from 'react';
import Auxil from '../../hoc/Auxil';

const Layout = (props) => {
    return (
        <Auxil>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main>
                {props.children}
            </main>
        </Auxil>
    )


}

export default Layout;