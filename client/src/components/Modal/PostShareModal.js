import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import PostShare from '../PostShare/PostShare'
const PostShareModal = () => {
    const [open, setOpen] = React.useState(false)
return (
    <Modal onClose={() => setOpen(false)}
    centered={false}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Button>Share</Button>}>
    <PostShare />
    </Modal>
)
}

export default PostShareModal