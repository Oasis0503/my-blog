"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Profile from "../../public/Profile.jpg"

export default function HomePage() {
  const titleText = "Welcome to my personal blog";
  const subText = "where I share my skills, hobbies and life.";
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className='max-w-3xl'>
        <div className='mb-8'>
          <Image 
            src={Profile}
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-6 overflow-hidden">
        {titleText.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 overflow-hidden">
        {subText.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.125, delay: titleText.length * 0.05 + index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </p>
    </div>
  )
}