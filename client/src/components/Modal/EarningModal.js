import React from 'react'
import { Modal, Icon,Header } from 'semantic-ui-react'
import Calendar from '../Calendar/Calendar'
const EarningModal = () => {
    const [open, setOpen] = React.useState(false)
return (
    <Modal onClose={() => setOpen(false)}
    centered={false}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<div><Icon name='calendar alternate outline' size='big' style={{ color: "var(--shedule)" }}/> Earning</div>}>
    <Calendar />
    </Modal>
)
}

export default EarningModal