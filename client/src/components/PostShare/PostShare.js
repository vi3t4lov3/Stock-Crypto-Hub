import React, {useState, useRef} from 'react'
import Profile from "../../assets/img/profileImg.jpg";
import "./PostShare.css";
import { Icon, Button } from 'semantic-ui-react'
import { useAuthContext } from '../../Hooks/useAuthContext'
// import {usePost} from '../../Hooks/usePost'
import axios from "axios"

const PostShare = () => {
    const {user} = useAuthContext()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [image, setImage] = useState(null)
    // const {createPost, error, isLoading} = usePost()
    const imageRef = useRef()
    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(img)
        }
    }
   
    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData();
        // console.log(image)
        const newImageName = Date.now() + image.name
        formData.append('image', image)
        formData.append('image', newImageName)
        formData.append('userId', user.user._id)
        formData.append('body', body)
        formData.append('title', title)

        axios.post("/api/posts", formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(_ => {
            console.log('Image uploaded')
        }).catch(err => {
            console.error(err)
        }).finally (_ => {
            console.log('hmmm')
        })

        // fetch('/api/posts', {
        //     method: 'POST',
        //     // headers: {
        //     //   // 'Content-Type': 'application/json',
        //     //   'Content-Type': 'multipart/form-data'
        //     // },
        //     body: formData
        //   }).catch(err) => console.error(err)
        // await createPost(formData)
    }
  return (
    <div className="PostShare">
         <img src={Profile} alt="" />
        <div>
        <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)} 
            value={title}
            />
            <input
            type="text"
            placeholder="Shares your thought..."
            onChange={(e) => setBody(e.target.value)} 
            value={body}
            />

            <div className="postOption">
               <div className="otpion" onClick={ () => imageRef.current.click()}>
                <Icon name='images' size='big' style={{ color: "var(--photo)" }}/>
                Photo
               </div>
               <div className="otpion">
                <Icon name='video' size='big' style={{ color: "var(--video)" }}/>
                Video
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
  )
};

export default PostShare