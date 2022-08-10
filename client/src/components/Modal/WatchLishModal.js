import React from 'react'
import { Modal, Icon,Header } from 'semantic-ui-react'
import WatchListShare from '../WatchListShare/WatchListShare'
const WatchListModal = () => {
    const [open, setOpen] = React.useState(false)
return (
    <Modal onClose={() => setOpen(false)}
    centered={false}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<div><Icon name='list layout' size='big' style={{ color: "var(--watchlist)" }}/> WatchList</div>}>
    <WatchListShare />
    </Modal>
)
}

export default WatchListModal