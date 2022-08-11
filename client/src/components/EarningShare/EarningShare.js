import React, {useState, useRef} from 'react'
import Profile from "../../assets/img/profileImg.jpg";
import "./EarningShare.css";
import { Icon, Button } from 'semantic-ui-react'
import { useAuthContext } from '../../Hooks/useAuthContext'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const EarningShare = () => {
    const {user} = useAuthContext()
    const [ticker, setTicker] = useState()
    const [earningDate, setEarningDate] = useState(new Date())
    const [lastMove, setLastMove] = useState()
    const [estimatedMove, setEstimatedMove] = useState()
    const [note, setNote] = useState()
    const [error, setError] = useState(null)
    // const {createPost, error, isLoading} = usePost()

   const urlHandler = () => {
    // setSource(true)

   }
    const handleSubmit = async (e) => {
        if (!user) {
            setError('You must be logged in')
            return
          }
            e.preventDefault();
            // console.log(user.user._id);
            const response = await fetch('/api/cal', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({userId:user.user._id,username:user.user.username, ticker, note, earningDate, lastMove, estimatedMove})
              })
              const json = await response.json()
          console.log(json);
              if (!response.ok) {
                setError(json.error)
              }
              if (response.ok) {
                // save the user to local storage
                // localStorage.setItem('user', JSON.stringify(json))
                window.location.href = "/";
              }
        
    }
  return (
    <>
    {user && (
    <div className="EarningShare">
         <img src={Profile} alt="" />
        <div className="earningPost">
                <input
                type="text"
                placeholder="Ticker"
                onChange={(e) => setTicker(e.target.value)} 
                value={ticker}
                required
                />
                <div className="datepick">
                <p>EarningDate</p> 
                <DatePicker className="datepicker" 
                selected={earningDate} 
                onChange={(date) => setEarningDate(date)}
                />
                </div>
                <input
                    type="text"
                    placeholder="Estimated Move in %"
                    onChange={(e) => setEstimatedMove(e.target.value)} 
                    value={estimatedMove}
                    />  
                <input
                    type="text"
                    placeholder="Last Move in %"
                    onChange={(e) => setLastMove(e.target.value)} 
                    value={lastMove}
                    />    
        
        <textarea
        type="text"
        placeholder="import note if any..."
        onChange={(e) => setNote(e.target.value)} 
        value={note}
        />

            <div className="postOption">
               {/* <div className="otpion">
                <Icon name='images' size='big' style={{ color: "var(--photo)" }}/>
                Photo
               </div> */}
               {/* <div className="otpion" onClick={urlHandler}>
                <Icon name='linkify' size='big' style={{ color: "var(--video)" }}/>
                Source
               </div> */}
               {/* <div className="otpion">
                <Icon name='location arrow' size='big' style={{ color: "var(--location)" }}/>
                Location
               </div> */}
               {/* <div className="otpion">
                <Icon name='EarningShare alternate outline' size='big' style={{ color: "var(--shedule)" }}/>
                Shedule
               </div> */}
               <Button encType="multipart/form_data" className="share-button" style={{ color: "var(--blue)" }} onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    </div>
    )}
    </>
  )
};

export default EarningShare