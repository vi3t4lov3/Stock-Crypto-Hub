import React  from 'react'
import TrendCard from '../TrendCard/TrendCard'
import './ListContainer.css'
import ShareModal from "../Modal/PostShareModal";

const ListContainer = () => {
  // const [modalOpened, setModalOpened] = useState(true);
  return (
    <div className="ListContainer">
      <TrendCard />
      <ShareModal />
    </div>
  )
}

export default ListContainer