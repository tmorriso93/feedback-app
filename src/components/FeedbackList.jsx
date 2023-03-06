import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)

    //check if feedback is there in the first place
    if(!feedback || feedback.length === 0){
        return <p>No Data available</p>
    }
   

    //with Animation
    return (
        <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map((item) => (
                // <motion.div 
                //   key={item.id}
                //   initial={{opacity: 0}}
                //   animate={{opacity: 2}}
                //   exit={{opacity: 0}}
                // >

                <motion.div
                key={item.id}
                layout
                animate={{ opacity: 1 }}
                transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 0.3 }
                }}
                >

                    <FeedbackItem 
                        key={item.id}
                        item={item} 
                        
                    />
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
      )


    //without Animation
//   return (
//     <div className='feedback-list'>
//         {feedback.map((item) => (
//             <FeedbackItem 
//                 key={item.id}
//                 item={item} 
//                 handleDelete={handleDelete}
//             />
//         ))}
//     </div>
//   )
}

export default FeedbackList