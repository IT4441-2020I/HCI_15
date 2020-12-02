import React, { Component } from 'react';

import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { TextareaAutosize } from '@material-ui/core';
import { makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Slider from '@material-ui/core/Slider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    alignItems: 'center',
  },
  cardStyle: {
    marginBottom: 20,

  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1,'Frozen yoghurt','male', 159, "1/1/2020"),
  createData(2,'Ice cream sandwich', 'female',237,"1/1/2020"),
  createData(3,'Eclair','male', 262, "1/1/2020" ),
  createData(4,'Cupcake','female', 305,  "1/1/2020" ),
  createData(6,'Gingerbread', 'male',356,  "1/1/2020"),
];
const Evaluate = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const bodyModal = (
    <div style={modalStyle} className={classes.paper}>
      <h5 id="simple-modal-title">Give us some information</h5>
      <Divider/>
      <div>
        <TextField
          id="standard-password-input"
          label="Full name"
          type="text"
          autoComplete="current-password"
        />
       
      </div>
       <FormControl component="fieldset">
          
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
      </FormControl>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Choose Level
      </Typography>
      <Slider
        defaultValue={0.00000005}
        
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={0}
        max={5}
        valueLabelDisplay="auto"
      />
     
      <Button size="small" color="danger" onClick={handleClose}>
        Back
      </Button>
      <Button size="small" variant="outlined" color="secondary" onClick={handleClose}>
        Get start !
      </Button>
    </div>
  );
    return (
      <div class="row">
        <div class= "col-sm-7">
          <div style={{marginLeft: 20, marginRight: 20}}>
            <Card className={classes.cardStyle} >
              <CardContent>
                <CardMedia
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Đánh giá tốc độ
                  </Typography>
                </CardContent> 
                <Button size="small" variant="outlined" color="primary" onClick={handleOpen}>
                  Open
                </Button>
              </CardContent>
             
            </Card>
            
            <Card >
              <CardContent>
                <CardMedia
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Đánh giá theo thời gian
                  </Typography>
                </CardContent> 
                <Button size="small" variant="outlined" color="primary" onClick={handleOpen}>
                  Open
                </Button>
              </CardContent>
             
            </Card>
          </div>
        
        
                    
      
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
          {bodyModal}
          </Modal>
       
        <div class="col-sm-5" >
          <h3>Bảng xếp hạng</h3>
        <TableContainer component={Paper} style={{backgroundColor: "#ccc"}}>
          <Table  aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Gender</TableCell>
                <TableCell align="center">Point</TableCell>
                <TableCell align="center">Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell className={classes.root}><Avatar className={classes.orange}>N</Avatar>{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        </div>

   </div>
      
    );

}

export default Evaluate;
