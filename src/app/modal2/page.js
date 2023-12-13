'use client';

import Modal2 from '@/Components/Modal/Modal2';
import { useState } from 'react';

export default function Modal1Page() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <div
        className="ml-auto py-1.5 px-3 rounded text-white font-normal text-sm bg-[#38b449] hover:bg-[#28a745] transition-all cursor-pointer inline-block"
        onClick={() => setShowModal(!showModal)}
      >
        Open Modal
      </div>
      <Modal2 showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
