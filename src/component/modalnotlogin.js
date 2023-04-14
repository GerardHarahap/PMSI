import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import icon from "../../public/assets/denied_icon.png";

export default function ModalNot() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg font-sans">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 font-sans">
                  <div className="sm:flex sm:items-start sm:flex-col">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ms-auto mx-0 z-40">
                      <button onClick={() => setOpen(false)} ref={cancelButtonRef} cursor-pointer>
                        <Image src="/closed.svg" width={15} height={15} alt="close" className="h-6 w-6 text-red-600" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="text-center -mt-10 mx-auto ">
                      <div className=" flex justify-center pt-4">
                        <Image src={icon} width={80} height={80} alt="icon" aria-hidden="true" />
                      </div>
                      <Dialog.Title as="h3" className="text-2xl font-sans font-bold text-black mt-8 pb-4">
                        Action Denied
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className=" text-center text-xl text-black font-sans">To access this page please login or create an account first.</p>
                      </div>
                    </div>
                    <div className=" py-3 flex flex-col  w-full mt-10 pb-6">
                      <button type="button" className=" w-full justify-center rounded-3xl bg-[#2060EB] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1748b3]  " onClick={() => setOpen(false)}>
                        Login Now
                      </button>
                      <button type="button" className="mt-5 w-full justify-center rounded-3xl bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm  hover:bg-neutral-400 " onClick={() => setOpen(false)} ref={cancelButtonRef}>
                        Stay As Guest
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
