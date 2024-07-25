'use client';

import {motion, Variants
} from 'framer-motion';

export const TextIn = ({children}: { children: string })=> {
    const charVariants = {
        hidden: {opacity: 0},
        reveal: {opacity: 1}
    }
    return (    
      <motion.div initial='hidden' whileInView='reveal' viewport={{once:true}}
        transition={{staggerChildren: 0.02}}>
        {children.split('').map((e, i)=><motion.span key={e} variants={charVariants}
          transition={{duration: 0.1}} viewport={{once:true, margin: '-100px'}}>
          {e}
        </motion.span>)}
      </motion.div>
    )
}
