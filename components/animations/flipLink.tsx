import React from 'react';
let {motion} = require('framer-motion');

const duration = 0.25, stagger = 0.034 h5;

export const FlipLink = ({children}: {
  children: string
})=> {
  return (
    <motion.div initial='initial' whileHover='hovered'
    className='relative overflow-hidden whitespace-pre'>
      <div>
        {children.split('').map((e, i)=>{
         console.log('::I::', i);
         return <motion.span className='inline-block' variants={{initial: {y: 0}, hovered: {y: '-100%'}}}
         transition={{duration, ease:'easeOut'}} style={{transitionDelay: (stagger*i)+'s'}}>
          {e}
        </motion.span>})
        }
      </div>
      <div className='absolute top-0'>
        {children.split('').map((e, i)=>{
          return <motion.span className='inline-block' variants={{initial: {y: '100%'}, hovered: {y: 0}}}
         transition={{duration, ease:'easeOut'}} style={{transitionDelay: (stagger*i)+'s'}}>
          {e}
        </motion.span>})
        }
      </div>
    </motion.div>
  )
} 