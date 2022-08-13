import React from 'react';
import TrendCard from '../TrendCard/TrendCard';
import News from '../News/News';
import Earnings from '../Earnings/Earnings';
import './ListContainer.css';
import ShareModal from '../Modal/PostShareModal';

const ListContainer = () => {
	// const [modalOpened, setModalOpened] = useState(true);
	return (
		<div className='ListContainer'>
			<Earnings />
			<News />
			{/* <TrendCard /> */}
			<ShareModal />
		</div>
	);
};

export default ListContainer;
