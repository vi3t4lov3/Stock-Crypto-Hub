import React, {useState, useRef} from 'react'
import Profile from "../../assets/img/profileImg.jpg";
import "./PostShare.css";
import { Icon, Button } from 'semantic-ui-react'
const PostShare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage({
                image: URL.createObjectURL(e.target.files[0]),
            })
        }
    }
  return (
    <div className="PostShare">
         <img src={Profile} alt="" />
        <div>
            <input
            type="text"
            placeholder="Shares your thought..." />
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
               <Button className="share-button" style={{ color: "var(--blue)" }}><Icon name="share"/>Share</Button>
               {/* hidden the chooise file input */}
               <div style={{ display: "none" }}>
                <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
                />
                </div>
            </div>
            {image && (
                <div className="previewImage">
                     <Icon className="icon" name='close' size='big' style={{ color: "var(--blue)" }} onClick={()=>setImage(null)}/>
                    <img src={image.image} alt="" />
                </div>
            )}
        </div>
    </div>
  )
};

export default PostShare