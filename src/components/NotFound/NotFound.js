import React from 'react'
import { FaRegQuestionCircle } from 'react-icons/fa'
import {NFMainBox, NFQuestion, NFMsg, NFp, NFLink} from './NotFoundElements'
const NotFound = () => {
    return (
        <>
            <NFMainBox>
                <NFQuestion>
                    <FaRegQuestionCircle icon="spinner" className="spinner" />
                </NFQuestion>
                <NFMsg>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<NFp>Let's go <NFLink href="/">home</NFLink> and try from there.</NFp></NFMsg>
            </NFMainBox>
        </>
    )
}

export default NotFound
