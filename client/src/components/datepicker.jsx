import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function ComboBoxWithCalendar({set}) {
  const [selected, setSelected] = useState('');
  const [query, setQuery] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
 

  const formattedSelectedDate = selected instanceof Date ? selected.toLocaleDateString() : ''; 


  return (
    <div className="">
      <Combobox value={formattedSelectedDate}>
        <div className="relative mt-1">
          <div className="relative w-auto cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <span className="px-2">Departure</span>
            <Combobox.Input
              className="w-full h-16 border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            />
             <Combobox.Button
          className="absolute inset-y-0 right-0 flex items-center pr-2"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>
          </div>
        </div>
    </Combobox>
      {showCalendar && (
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
          show={true}
        >
          <div className="absolute top-0 right-0">
            <Calendar
              value={selected}
              onChange={(date) => {
                setSelected(date);
                set(date)
                setShowCalendar(false);
                
              }}
            />
          </div>
        </Transition>
      )}
    </div>
  );
}
