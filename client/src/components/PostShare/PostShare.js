import React, {useState, useRef} from 'react'
import Profile from "../../assets/img/profileImg.jpg";
import "./PostShare.css";
import { Icon, Button } from 'semantic-ui-react'
const PostShare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const onImageChange = () => {

    }
  return (
    <div className="PostShare">
         <img src={Profile} alt="" />
        <div>
            <input
            type="text"
            placeholder="Shares your thought..." />
            <div className="postOption">
               <div className="otpion">
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
               <div style={{ display: "none" }}>
                <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
                />
          </div>
            </div>
        </div>
    </div>
  )
};

export default PostShare