import React, { useState } from "react"
import {AnimatePresence, motion} from 'framer-motion'
import { useDispatch, useSelector } from "react-redux"
import { AccordionGh } from "../components/Accordion/AccordionGh"
import { getRepos } from "../helper/redux/Repos/actions"

export default function Home() {
  const {Repo} = useSelector((state) => state)
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  const getRepo = () => {
    dispatch(getRepos({
      username: search
    }))
  }
  return (
    <div className="xs:w-[98%] sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[75%] 2xl:w-[70] mt-5 mx-auto">
      <input onChange={(e) => setSearch(e.target.value)} name="searching" type="text" placeholder="Enter Username" className="input input-bordered w-[100%]" />
      <button disabled={!search} onClick={getRepo} className="btn btn-active btn-primary w-full mt-5">Button</button>
        {Repo.repo?.map(item => (
          <AnimatePresence>
            <motion.div
              animate={{y: 30, opacity: 1, transition: {ease: "easeInOut", duration: 1}}}
              initial={{y: 0, opacity: 0.1, transition:{ease: "easeInOut", duration: 1}}}
            >
              <AccordionGh data={item} searching={search} />
            </motion.div>
          </AnimatePresence>
        ))}
    </div>
  )
}