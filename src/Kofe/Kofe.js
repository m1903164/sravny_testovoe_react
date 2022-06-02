import { goods } from "../data/goods";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './Kofe.css';

export const Kofe = () => {  
  const product = goods.map((item) => {
    return(
      <div key={item.id}>
        <ul className="list-product">
          <li className="product">
          <Card sx={{ maxWidth: 345 }} >
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.blend_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.origin}
            </Typography>
            <Typography>
              {item.notes}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
          </li>
        </ul>
      </div>
      
    )
  })

  return (
    <>
      <div>
        {product}
      </div>
    </>
  )

}



export default Kofe;