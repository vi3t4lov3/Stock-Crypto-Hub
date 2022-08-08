import React, {useState, useRef} from 'react'
import Profile from "../../assets/img/profileImg.jpg";
import "./Calendar.css";
import { Icon, Button } from 'semantic-ui-react'
import { useAuthContext } from '../../Hooks/useAuthContext'
// import {usePost} from '../../Hooks/usePost'
import axios from "axios"

const Calendar = () => {
    const {user} = useAuthContext()
    const [title, setTitle] = useState()
    const [ticker, setTicker] = useState()
    const [note, setNote] = useState()
    const [earningDate, setEarningDate] = useState()
    const [importantDate, setImportantDate] = useState()
    const [lastMove, setLastMove] = useState()
    const [estimatedMove, setEstimatedMove] = useState()
    const [error, setError] = useState(null)
    const [url, setUrl] = useState()
    const [source, setSource] = useState(false)
    // const {createPost, error, isLoading} = usePost()

   const urlHandler = () => {
    setSource(true)

   }
    const handleSubmit = async (e) => {
        if (!user) {
            setError('You must be logged in')
            return
          }
        e.preventDefault();

        const formData = new FormData();
        // console.log(image)
        if (source) {
        formData.append('userId', user.user._id)
        formData.append('body', body)
        formData.append('title', title)
        formData.append('url', url)
        }else{
        formData.append('body', body)
        formData.append('title', title)
        formData.append('url', url)
        }
        await axios.post("/api/cal", formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(_ => {
            setTitle(null)
            setBody(null)
            setImage(null)
            window.location.href = "/";
            // console.log('Image uploaded')
        }).catch(err => {
            console.error(err)
        })
        
    }
  return (
    <>
    {user && (
    <div className="Calendar">
         <img src={Profile} alt="" />
        <div>
        <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)} 
            value={title}
            required
            />
            <textarea
            type="text"
            placeholder="Shares your thought..."
            onChange={(e) => setBody(e.target.value)} 
            value={body}
            required
            />
    {source &&
     (<input
     type="text"
     placeholder="Paste URL here"
     onChange={(e) => setUrl(e.target.value)} 
     value={url}
     required
     />)
    }
            <div className="postOption">
               <div className="otpion" onClick={ () => imageRef.current.click()}>
                <Icon name='images' size='big' style={{ color: "var(--photo)" }}/>
                Photo
               </div>
               <div className="otpion" onClick={urlHandler}>
                <Icon name='linkify' size='big' style={{ color: "var(--video)" }}/>
                Source
               </div>
               <div className="otpion">
                <Icon name='location arrow' size='big' style={{ color: "var(--location)" }}/>
                Location
               </div>
               <div className="otpion">
                <Icon name='calendar alternate outline' size='big' style={{ color: "var(--shedule)" }}/>
                Shedule
               </div>
               <Button encType="multipart/form_data" className="share-button" style={{ color: "var(--blue)" }} onClick={handleSubmit}><Icon name="share"/>Share</Button>
               {/* hidden the chooise file input */}
               <div style={{ display: "none" }}>
                <input
                type="file"
                fileName="image"
                name="image"
                ref={imageRef}
                onChange={onImageChange}
                />
                </div>
            </div>
            {image && (
                <div className="previewImage">
                     <Icon className="icon" name='close' size='big' style={{ color: "var(--blue)" }} onClick={()=>setImage(null)}/>
                    <img src={URL.createObjectURL(image)} alt="" />
                </div>
            )}
        </div>
    </div>
    )}
    </>
  )
};

export default Calendar