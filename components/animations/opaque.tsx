'use client';

import {motion} from 'framer-motion';

export const Opaque = ({children}: { children: any })=> {
    return (
      <motion.div initial={{opacity: 0}} whileInView={{opacity:1}}
        viewport={{margin:'-100px'}}>
        {children}
      </motion.div>
    )
}