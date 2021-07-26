import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export const ChartPopover = ({
  open,
  onOpen,
  lists = [],
  onActiveChart,
  activeChart,
}) => {
  const setActiveChart = (name) => {
    onOpen(false);
    onActiveChart(name);
  };

  return (
    <Popover className='relative'>
      <Popover.Button
        className={`
                ${open ? '' : 'text-opacity-90'}
                text-gray-700 group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-opacity-75`}
      >
        <span>{activeChart}</span>
        <ChevronDownIcon
          className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
          aria-hidden='true'
        />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <Popover.Panel className='absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl'>
          <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='relative grid gap-8 bg-white p-7 lg:grid-cols-2'>
              {lists.map((item, idx) => (
                <div
                  key={idx}
                  className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                  onClick={() => setActiveChart(item.name)}
                >
                  <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12'>
                    {/* <item.icon aria-hidden='true' /> */}
                  </div>
                  <div className='ml-4'>
                    <p className='text-sm font-medium text-gray-900'>
                      {item.name}
                    </p>
                    <p className='text-sm text-gray-500'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='p-4 bg-gray-50' disabled>
              <a
                href='##'
                className='flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
              >
                <span className='flex items-center'>
                  <span className='text-sm font-medium text-gray-900'>
                    Documentation
                  </span>
                </span>
                <span className='block text-sm text-gray-500'>
                  Start integrating products and tools
                </span>
              </a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
