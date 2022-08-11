import React from 'react';
import { Modal, Icon, Header } from 'semantic-ui-react';
import EarningShare from '../EarningShare/EarningShare';
const EarningModal = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<Modal
			onClose={() => setOpen(false)}
			centered={false}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={
				<div>
					<Icon
						name='calendar alternate outline'
						size='big'
						style={{ color: 'var(--shedule)' }}
					/>{' '}
					Earning
				</div>
			}
		>
			<EarningShare />
		</Modal>
	);
};

export default EarningModal;
