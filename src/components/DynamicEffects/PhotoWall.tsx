"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { photos } from '@/config/photos';

export const PhotoWall = () => {

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 perspective-500">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
            whileHover={{ 
              scale: 1.33, 
              rotateY: 5, 
              zIndex: 30,
              boxShadow: "0px 10px 25px rgba(0,0,0,0.3)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-white font-bold">{photo.title}</h3>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};