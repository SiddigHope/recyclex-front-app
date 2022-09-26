import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

import './Contact.scss'

const Contact = () => {
    return (
        <>
            <motion.div className='parent_div'>
                <motion.div className='footer_container'>
                    <div className='footer_item_logo'>
                        <img src={images.recyclex2} alt="recyclyx_logo" />
                    </div>
                    <div className='footer_item'>
                        <span className='footer_item_title'>EMAIL:</span>
                        <p className='footer_item_content'>contact@recyclyx.com</p>
                    </div>
                    <div className='footer_item'>
                        <span className='footer_item_title'>PHONE:</span>
                        <p className='footer_item_content'>+249918088851</p>
                    </div>
                    <div className='footer_item'>
                        <span className='footer_item_title'>MOBILE:</span>
                        <p className='footer_item_content'>0123308925</p>
                    </div>
                    <div className='footer_item'>
                        <span className='footer_item_title'>ADDRESS:</span>
                        <p className='footer_item_content'>Khartoum, Arkwit block No, Street, Juba Turn</p>
                    </div>
                </motion.div>
                <div className='footer_item_copy'>
                    <p className='footer_item_title'>Copyright © 2022 Recyclyx, All rights reserved.</p>
                </div>
            </motion.div>
        </>
    )
}

export default Contact 