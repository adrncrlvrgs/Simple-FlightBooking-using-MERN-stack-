import React,{useState ,Fragment} from "react";
import {Traveler,Trip} from "../components/dropdown";
import { Dialog, Transition } from '@headlessui/react'
import Combobox from "../components/combobox";
import ComboBoxWithCalendar from "../components/datepicker";

const Form = () =>{

    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

    const from = [
        { id: 1, name: 'Canada' },
        { id: 2, name: 'Saudi Arabia' },
        { id: 3, name: 'London' },
        { id: 4, name: 'Manila' },
        { id: 5, name: 'Thailand' },
        { id: 6, name: 'China' },
    ];

    const to = [
        { id: 1, name: 'Nepal' },
        { id: 2, name: 'Pakistan' },
        { id: 3, name: 'London' },
        { id: 4, name: 'Manila' },
        { id: 5, name: 'Thailand' },
        { id: 6, name: 'Malaysia' },
    ];
    const [trip, setTrip] = useState('');
    const [traveler, setTraveler] = useState('');
    const [frmc, setFrom] = useState('');
    const [toc, setTo] = useState('');
    const [date, setDate] = useState('');

   const formattedSelectedDate = date instanceof Date ? date.toLocaleDateString() : ''; 

   let data = { trip, traveler, frmc, toc, formattedSelectedDate};
   console.log(data);

   const handleSubmit = (e) => {
    e.preventDefault();
            // Example using Fetch API for form submission
            fetch("http://localhost:3001/api/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then((response) => {
                if (!response.ok) {
                throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Form data submitted successfully:", data);
                openModal();
            
            })
            .catch((error) => {
                console.log("Error submitting the form:", error);
            });
  };
 

    return(
        <>
            <div className="bg-slate-50 px-5 py-5 rounded-md drop-shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-2">
                        <Trip set={setTrip}/>
                        <Traveler set={setTraveler}/>
                    </div>
                    <div className="relative px-1 flex grid-cols-5 gap-3 w-full" >
                        <div className="w-2/6">
                            <Combobox item={from} title={'From'} set={setFrom}/>
                        </div>
                        <div className="align-middle py-6">
                            <svg width="30px" height="30px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355Z" fill="#375467"></path> <path d="M11.9697 9.53033C11.6768 9.23744 11.6768 8.76256 11.9697 8.46967C12.2626 8.17678 12.7374 8.17678 13.0303 8.46967L16.0303 11.4697C16.3232 11.7626 16.3232 12.2374 16.0303 12.5303L13.0303 15.5303C12.7374 15.8232 12.2626 15.8232 11.9697 15.5303C11.6768 15.2374 11.6768 14.7626 11.9697 14.4697L14.4393 12L11.9697 9.53033Z" fill="#375467"></path> <path d="M7.96967 9.53033C7.67678 9.23744 7.67678 8.76256 7.96967 8.46967C8.26256 8.17678 8.73744 8.17678 9.03033 8.46967L12.0303 11.4697C12.3232 11.7626 12.3232 12.2374 12.0303 12.5303L9.03033 15.5303C8.73744 15.8232 8.26256 15.8232 7.96967 15.5303C7.67678 15.2374 7.67678 14.7626 7.96967 14.4697L10.4393 12L7.96967 9.53033Z" fill="#375467"></path> </g></svg>
                        </div>
                        <div className="w-2/6">
                            <Combobox item={to} title={'To'} set={setTo}/>
                        </div>
                        <div className="w-1/6">
                            <ComboBoxWithCalendar set={setDate}/>
                        </div>
                        <div className="w-16 flex">
                            <button type="submit" className="rounded-full place-self-center text-slate-300 p-4 mt-2 hover:text-slate-100 bg-[#375467] hover:bg-cyan-950" >Submit</button>
                        </div>
                    </div>
                </form>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Flight booked successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your details has been successfully submitted. We’ve sent
                      you an email with all of the details of your ticket.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
            
        </>
    )

}

export default Form