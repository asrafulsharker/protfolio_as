import React from 'react';
import {MdWeb, MdContentPaste} from 'react-icons/md'
import {FaBusinessTime} from 'react-icons/fa'
import {CgIfDesign} from 'react-icons/cg'
import {GrDatabase} from 'react-icons/gr';
import {BiSpreadsheet} from 'react-icons/bi'

function whatido() {
  return (
    <>
        <div className='container'>
            <p className='whatido_p'>
            FEATURES
            </p>
            <h2 className='whatido_h2'>
            What I Do
            </h2>
            <div className='card_root row'>
                <div className='card1 col-md-4'>
                <MdWeb/>
                <p className='card_title'>Web Development</p>
                <p className='card_discription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='card1 col-md-4'>
                    <FaBusinessTime/>
                    <p className='card_title'>Business Stratagy</p>
                    <p className='card_discription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='card1 col-md-4'>
                    <CgIfDesign/>
                    <p className='card_title'>Graphics Design</p>
                    <p className='card_discription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='card1 col-md-4'>
                    <GrDatabase/>
                    <p className='card_title'>SEO Optimisation</p>
                    <p className='card_discription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='card1 col-md-4'>
                    <MdContentPaste/>
                    <p className='card_title'>Content Writing</p>
                    <p className='card_discription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='card1 col-md-4'>
                    <BiSpreadsheet/>
                    <p className='card_title'>Data Entry</p>
                    <p className='card_discription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default whatido;