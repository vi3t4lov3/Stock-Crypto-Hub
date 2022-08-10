import React from 'react'
import { Modal, Icon } from 'semantic-ui-react'
import Calendar from '../Calendar/Calendar'
const createEarningModal = () => {
    const [open, setOpen] = React.useState(false)
return (
    <Modal 
    onClose={() => setOpen(false)}
    centered={false}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Icon name='list' size='big' style={{ color: "var(--watchlist)" }}/>}>
    <Calendar />
</Modal>
)
}

export default createEarningModal