import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import ProfileInfo from '../ProfileInfo/ProfileInfo'

const EditProfileModal = () => {
    const [open, setOpen] = React.useState(false)
return (
    <Modal onClose={() => setOpen(false)}
    centered={false}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={
        <Button>Update Info</Button>
    }>
    <ProfileInfo />
    </Modal>
)
}

export default EditProfileModal