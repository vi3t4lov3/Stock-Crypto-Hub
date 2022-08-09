import React, {useState, useRef} from 'react'
import Profile from "../../assets/img/profileImg.jpg";
import "./PostShare.css";
import { Icon, Button, Modal } from 'semantic-ui-react'
import { useAuthContext } from '../../Hooks/useAuthContext'
import Calendar from '../Calendar/Calendar';
// import {usePost} from '../../Hooks/usePost'
import axios from "axios"

const PostShare = () => {
    const {user} = useAuthContext()
    const [mod, setMod] = useState(1)
    const [open, setOpen] = React.useState(false)
    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [image, setImage] = useState(null)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState()
    const [source, setSource] = useState(false)
    // const {createPost, error, isLoading} = usePost()
    const imageRef = useRef()
    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(img)
        }
    }
   const urlHandler = () => {
    setSource(true)

   }
    const handleSubmit = async (e) => {
        if (!user) {
            setError('You must be logged in')
            return
          }
        e.preventDefault();
         // if there is an image with post
   
        const formData = new FormData();
        // console.log(image)
        if (source) {
        formData.append('userId', user.user._id)
        formData.append('body', body)
        formData.append('title', title)
        formData.append('url', url)
        } if (image) {
            const newImageName = image.name
            formData.append('image', image)
            formData.append('image', newImageName)
            formData.append('userId', user.user._id)
            formData.append('body', body)
            formData.append('title', title)
            }
        else {
        formData.append('userId', user.user._id)
        formData.append('body', body)
        formData.append('title', title)
        }
        await axios.post("/api/posts", formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then((res) => {
            // console.log(res)
            setTitle(null)
            setBody(null)
            setImage(null)
            window.location.href = "/";
            // console.log('Image uploaded')
        }).catch(err => {
            console.error({failed: err })
        })
        
    }
  return (
    <>
    {user && (
    <div className="PostShare">
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
                <Icon name='linkify' size='big' style={{ color: "var(--source)" }}/>
                Source
               </div>
               
                    <div className="otpion">
                    <Icon name='alarm' size='big' style={{ color: "var(--alert)" }}/>
                    Alert
                </div>

               
                 <div className="otpion">

                <Modal 
                    onClose={() => setOpen(false)}
                    centered={false}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Icon name='list' size='big' style={{ color: "var(--watchlist)" }}/>}>
                    <Calendar />
                </Modal>

                Watchlist
               </div>
               
               
               
               
               <div className="otpion">
                <Modal 
                    onClose={() => setOpen(false)}
                    centered={false}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Icon name='calendar alternate outline' size='big' style={{ color: "var(--shedule)" }}/>}>
                    <Calendar />
                </Modal>
                Earning
               </div>
               <Button encType="multipart/form-data" className="share-button" style={{ color: "var(--blue)" }} onClick={handleSubmit}><Icon name="share"/>Share</Button>
               {/* hidden the chooise file input */}
               <div style={{ display: "none" }}>
                <input
                type="file"
                filename="image"
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

export default PostShare