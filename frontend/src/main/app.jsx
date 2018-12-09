import React from 'react'

import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Messages from '../common/msg/messages'

export default props => (
    // utiliza algumas classes como 'wrapper' do template admin lts
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
            {props.children}
        </div>
        <Footer />
        <Messages />
    </div>
)