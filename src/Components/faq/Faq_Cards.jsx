import React from 'react'
import { FaFolderOpen } from 'react-icons/fa'
import Faq_Accordian from './Faq_Accordian'

import './Faq.css'

const Faq_Cards = () => {
    return (
        <>
            <div className="faq_card">
                <div className="faq_card-header">
                    <FaFolderOpen />
                    Content Style Guide
                </div>
                <Faq_Accordian />
            </div>
        </>
    )
}

export default Faq_Cards