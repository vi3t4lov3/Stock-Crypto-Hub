import React, {useState, useRef} from 'react'
import Profile from "../../assets/img/profileImg.jpg";
import "./WatchListShare.css";
import { Icon, Button } from 'semantic-ui-react'
import { useAuthContext } from '../../Hooks/useAuthContext'
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const WatchListShare = () => {
    const {user} = useAuthContext()
    const [ticker, setTicker] = useState()
    const [support, setSupport] = useState()
    const [resistance, setResistance] = useState()
    const [analysts, setAnalysts] = useState()
    const [chart, setChart] = useState()
    const [note, setNote] = useState()
    const [call, setCall] = useState(null)
    const [put, setPut] = useState(null)
    const [error, setError] = useState(null)
    // const {createPost, error, isLoading} = usePost()

   const urlHandler = () => {
    // setSource(true)

   }
    const handleWLSubmit = async (e) => {
        if (!user) {
            setError('You must be logged in')
            return
          }
            e.preventDefault();
            // console.log(user.user._id);
            const response = await fetch('/api/wl', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({userId:user.user._id, username:user.user.username, ticker, note, support, resistance, analysts, call, put})
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
    <div className="WatchListShare">
         <img src={Profile} alt="" />
        <div className="watchListPost">
                <input
                type="text"
                placeholder="Ticker"
                onChange={(e) => setTicker(e.target.value)} 
                value={ticker}
                required
                />
                <textarea
                    type="text"
                    placeholder="Analysts..."
                    onChange={(e) => setAnalysts(e.target.value)} 
                    value={analysts}
                    /> 
                {/* <div className="datepick">
                <p>Support</p> 
                <DatePicker className="datepicker" 
                selected={earningDate} 
                onChange={(date) => setEarningDate(date)}
                />
                </div> */}
                <input
                    type="text"
                    placeholder="Tradingview Chart Link"
                    onChange={(e) => setSupport(e.target.value)} 
                    value={chart}
                    /> 
                <input
                    type="text"
                    placeholder="Support Level 1,2,3,4..."
                    onChange={(e) => setSupport(e.target.value)} 
                    value={support}
                    /> 
                <input
                type="text"
                placeholder="Resistance Level 1,2,3,4..."
                onChange={(e) => setResistance(e.target.value)} 
                value={resistance}
                required
                />  
                <input
                    type="text"
                    placeholder="Call option"
                    onChange={(e) => setCall(e.target.value)} 
                    value={call}
                    />  
                <input
                type="text"
                placeholder="Call option"
                onChange={(e) => setPut(e.target.value)} 
                value={put}
                />    
        
        <textarea
        type="text"
        placeholder="Import note if any..."
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
                <Icon name='WatchListShare alternate outline' size='big' style={{ color: "var(--shedule)" }}/>
                Shedule
               </div> */}
               <Button encType="multipart/form_data" className="share-button" style={{ color: "var(--blue)" }} onClick={handleWLSubmit}>Submit</Button>
            </div>
        </div>
    </div>
    )}
    </>
  )
};

export default WatchListShare