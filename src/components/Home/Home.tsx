import { motion } from 'framer-motion';

import Pixar from '@/assets/images/pixar.png';
import { DotsBackground } from '@/components/Home/DotsBackground';
import { SocialLink } from '@/components/Home/SocialLink';
import { SocialLinks } from '@/data/info';

export function Home() {
  return (
    <section
      id='home'
      className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent'
    >
      <DotsBackground />
      <img
        src={Pixar}
        alt='Pixar'
        width='150'
        height='220'
        className='z-[1] rounded-full border-1 border-transparent p-1 transition-all duration-500 ease-in-out hover:rounded-full hover:border-black'
      />

      <div className='z-1 mx-auto max-w-4xl space-y-4 px-4 text-center md:space-y-6'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'anticipate' }}
          className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-mono text-5xl text-transparent sm:text-6xl md:text-7xl'
        >
          &lt;Hello World /&gt;
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'anticipate' }}
          className='text-4xl font-bold text-white'
        >
          I'm Krivolapov Vladislav
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'anticipate' }}
          className='text-lg text-amber-400'
        >
          Back-End Developer
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'anticipate' }}
        className='z-1 mt-6 flex gap-4'
      >
        {SocialLinks.map(({ href, text, isExternal }) => (
          <SocialLink key={href} href={href} text={text} isExternal={isExternal} />
        ))}
      </motion.div>
    </section>
  );
}
