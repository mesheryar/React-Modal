import React from 'react'
import './CategoryModal.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import image1 from './Group 1.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};


function CategoryModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className=' CategoryModal_btn'>
        SOMETHING
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='Category-modal1'
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <img src={image1} alt='#' />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h1>Successfully Added</h1>
            <button className='Modal-btn12' onClick={handleClose}>Done</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default CategoryModal