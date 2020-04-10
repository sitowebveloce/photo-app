import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Search(props) {
    //
    // ─── TEMP STATE ─────────────────────────────────────────────────────────────────

    const [temp, setTemp] = React.useState('')
    
    // Styles
    const classes = useStyles();
    // Set search props
    const {setSearch} = props;

    //
    // ─── ON SUBMIT ──────────────────────────────────────────────────────────────────
    const handleSubmit = (e)=>{
        // Prevent default reload after submit
        e.preventDefault();
        // Set search val
        setSearch(temp);
        // Clear input
        setTemp('')
    }

    //
    // ─── RETURN ─────────────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField 
      id="standard-basic" 
      label="Search image"
      value={temp}
      onChange={e=> setTemp(e.target.value)}
      />
      
    </form>
  );
}
