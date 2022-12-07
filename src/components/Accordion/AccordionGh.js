import React from 'react'
import { Disclosure } from '@headlessui/react'
import { HiOutlineChevronDown } from "react-icons/hi";

export const AccordionGh = ({data}) => {
  return (
    <>
      {data ? (
        <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="my-2 p-3 rounded-xl bg-slate-300 w-full">
              <div className='flex items-center justify-between'>
                <span>
                  {data.owner.login ?? "Without Username"}
                </span>
                <HiOutlineChevronDown width={20} className={open ? 'rotate-180 transform' : ''} />
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="bg-slate-300 p-3 rounded-xl ml-10">
              <div className="flex justify-between font-extrabold text-lg">
                <span>
                  {data.title ?? "No Title"}
                </span>
                <span>
                  {data.stargazers_count ?? 0}&nbsp;&#9733;
                </span>
              </div>
              <div className='mt-2'>
                <span>
                  {data.description ?? "No Description"}
                </span>
              </div>
            </Disclosure.Panel>
          </>
        )}
        </Disclosure>
    ) : (
      <> 
        <img src="" alt="" />
      </>
    )}
    </>
  )
}
