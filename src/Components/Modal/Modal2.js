"use client";
import React, { useEffect, useRef } from "react";

function Modal2({ showModal, setShowModal }) {
  const modalContainerRef = useRef();
  const modalContentRef = useRef();

  useEffect(() => {
    console.log("modalContainerRef = ", modalContainerRef);
    console.log("modalContainerRef current = ", modalContainerRef.current);
  }, [showModal]);
  console.log("modalContainerRef = ", modalContainerRef);

  useEffect(() => {
    console.log("modalContentRef = ", modalContentRef);
    console.log("modalContentRef current = ", modalContentRef.current);
  }, [showModal]);

  useEffect(() => {
    if (modalContainerRef.current) {
      const modalContainer = modalContainerRef.current;
      if (showModal) {
        // Remove the 'hidden' and 'opacity-0' classes when showModal is true
        modalContainer.classList.remove("invisible", "bg-opacity-0");
        modalContainer.classList.add("bg-opacity-50", "visible");
      } else {
        // Add the 'hidden' and 'opacity-0' classes when showModal is false
        modalContainer.classList.add("invisible", "bg-opacity-0");
      }
    }

    if (modalContentRef.current) {
      const modalContent = modalContentRef.current;
      if (showModal) {
        // Remove the 'hidden' and 'opacity-0' classes when showModal is true
        modalContent.classList.remove("translate-y-[-50px]", "opacity-0");
      } else {
        modalContent.classList.add("translate-y-[-50px]", "opacity-0");
      }
    }
  }, [showModal]);

  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        ref={modalContainerRef}
        className={`fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-black transition-all duration-300 ease-in-out opacity-0'
        }`}
      >
        <div
          ref={modalContentRef}
          className={`pointer-events-none relative w-auto transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] translate-y-[-50px] opacity-0`}
        >
          <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              {/* <!--Modal title--> */}
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalLabel"
              >
                Modal title
              </h5>
              {/* <!--Close button--> */}
              <button
                onClick={() => setShowModal(!showModal)}
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* <!--Modal body--> */}
            <div className="relative flex-auto p-4">
              Modal body text goes here.
            </div>

            {/* <!--Modal footer--> */}
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <button
                onClick={() => setShowModal(!showModal)}
                type="button"
                className="inline-block rounded bg-violet-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-violet-700 transition duration-150 ease-in-out hover:bg-blue-100 focus:bg-blue-100 focus:outline-none focus:ring-0 active:bg-blue-200"
              >
                Close
              </button>
              <button
                type="button"
                className="ml-1 inline-block rounded bg-violet-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-violet-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-violet-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-violet-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal2;
