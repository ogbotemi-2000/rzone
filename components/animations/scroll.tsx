'use client';

import {motion, useInView,
    useScroll, useTransform
} from 'framer-motion';

export const Fade_In = ({children}: { children: any })=> {
    
    const {scrollYProgress} =  useScroll();
    return (
      <motion.div initial={{x:"-50%", opacity: 0}} whileInView={{x:'0%', opacity:1}}
        viewport={{margin:'-100px'}}>
        {children}
      </motion.div>
    )
}

export const FadeIn = ({children}: { children: any })=> {
    
    const {scrollYProgress} =  useScroll();
    return (
      <motion.div initial={{x:"50%", opacity: 0}} whileInView={{x:'0%', opacity:1}}
        viewport={{margin:'-100px'}}>
        {children}
      </motion.div>
    )
}

