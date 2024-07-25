'use client';

import React from 'react';
import {motion} from 'framer-motion';

const duration = 0.4, stagger = 0.035;

export const FlipLink = ({children}: {
  children: string
})=> {
  return (
    <motion.div initial='initial' whileHover='hovered'
    className='relative overflow-hidden whitespace-pre'>
      <div>
        {children.split('').map((e, i)=>{
         return <motion.span key={'span'+i+i} className='inline-block' variants={{initial: {y: 0}, hovered: {y: '-100%'}}}
         transition={{duration, ease:'easeOut'}} style={{transitionDelay: (stagger*i*0.2)+'s'}}>
          {e}
        </motion.span>})
        }
      </div>
      <div className='absolute top-0'>
        {children.split('').map((e, i)=>{
          return <motion.span key={'span'+i+1} className='inline-block' variants={{initial: {y: '100%'}, hovered: {y: 0}}}
         transition={{duration, ease:'easeOut'}} style={{transitionDelay: (stagger*i*0.2)+'s'}}>
          {e}
        </motion.span>})
        }
      </div>
    </motion.div>
  )
} 