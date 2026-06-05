'use client';

import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export default function WhatsAppFloatingButton() {
  const message = encodeURIComponent("Hello, I would like to discuss a construction project.");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20ba5a] transition-colors duration-300"
      aria-label="Contact via WhatsApp"
    >
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.488 1.459 5.407 1.46h.007c5.532 0 10.038-4.502 10.04-10.043.002-2.684-1.04-5.207-2.93-7.099C17.28 1.58 14.76 .532 12.008.532c-5.54 0-10.048 4.505-10.05 10.048-.001 1.93.504 3.818 1.464 5.43l-.993 3.627 3.71-.973zm12.352-7.399c-.33-.165-1.951-.963-2.251-1.073-.3-.11-.518-.165-.736.165-.218.33-.846 1.073-1.037 1.293-.19.22-.382.247-.712.082-.33-.165-1.393-.513-2.653-1.637-1-.893-1.676-1.997-1.873-2.33-.197-.33-.02-.508.145-.671.149-.147.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.412-.028-.577-.082-.165-.736-1.774-1.009-2.434-.266-.64-.537-.552-.736-.562-.19-.01-.409-.01-.628-.01-.218 0-.573.082-.873.412-.3.33-1.145 1.118-1.145 2.724 0 1.605 1.173 3.159 1.336 3.379.164.22 2.31 3.528 5.596 4.95.782.339 1.393.541 1.871.693.786.25 1.5.215 2.066.13.632-.094 1.952-.797 2.224-1.53.272-.732.272-1.36.19-1.499-.08-.14-.3-.22-.63-.385z" />
      </svg>
    </motion.a>
  );
}
