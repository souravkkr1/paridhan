import {
    Accordion, 
    AccordionButton, 
    AccordionItem, 
    AccordionPanel,
    Box
} from '@chakra-ui/react';
import React from 'react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import style from './prodSidebar.module.css';

const ProdSidebar = () => {
  return (
    <>
    <div className={style.top}>
                <p>Mens Fashion - T Shirts, Suits, Blazers & Jeans</p>
                <p>60883 products</p>
            </div>
            <div className={style.bottom}>
               
            </div>
        </>
  )
}

export default ProdSidebar
