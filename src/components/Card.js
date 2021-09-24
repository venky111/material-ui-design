import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DataCard = ({ card }) => {
  const { title, description, link } = card;
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="div">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{link}</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default DataCard;
