import React from 'react';
import { Modal, Icon, Header } from 'semantic-ui-react';
import AlertShare from '../AlertShare/AlertShare';
const AlertModal = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<Modal
			onClose={() => setOpen(false)}
			centered={false}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={
				<div>
					<Icon name='alarm' size='big' style={{ color: 'var(--alert)' }} />{' '}
					Alert
				</div>
			}
		>
			<AlertShare />
		</Modal>
	);
};

export default AlertModal;
