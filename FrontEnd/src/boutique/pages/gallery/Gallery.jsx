import { Button, Card } from '@mui/material';
import React from 'react'
import Styles from './Gallery.module.css'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Gallery = () => {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  return (
    <Card className={Styles.wrapper}>
                        
    <h1>Gallery</h1>
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => console.log(event.target.files)}
        multiple
      />
    </Button>
  );

</Card>
  )
}

export default Gallery
