import * as React from 'react';
import { Form, Link } from "react-router-dom";

// MUI
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Switch from '@mui/material/Switch';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Example1() {

  const form = {
    title: "Example - 1",
    description: "Form Basic Components",
  };

  // Multiple Select
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [personName2, setPersonName2] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName2(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // Select
  const [age, setAge] = React.useState('');
  const handleChange33 = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container component="main" sx={{ mt: 5 }}>
      <Link to={`/`}>Go to Home Page</Link>
      <Typography variant="h5" sx={{ mt: 5 }}>{form.title}</Typography>
      <Typography variant="subtitle2" sx={{ mb: 5 }}>{form.description}</Typography>

      {/* Input */}
      <TextField id="input" name="input" label="Input" variant="outlined" sx={{ mb: 3 }} fullWidth />

      {/* Textarea */}
      <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        sx={{ mb: 3 }}
        rows={4}
        fullWidth
      />

      {/* Select */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        fullWidth
        sx={{ mb: 3 }}
        label="Age"
        onChange={handleChange33}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>

      {/* Multi Select */}
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        onChange={handleChange}
        value={personName}
        fullWidth
        sx={{ mb: 3 }}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>Placeholder</em>;
          }
          return selected.join(', ')
        }}
      >
        <MenuItem disabled value=""><em>Placeholder</em></MenuItem>
        {country.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={personName.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>

      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        fullWidth
        sx={{ mb: 3 }}
        value={personName2}
        onChange={handleChange2}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        <MenuItem disabled value=""><em>Placeholder</em></MenuItem>
        {country.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, personName2, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>

      {/* Autocomplete */}
      <Autocomplete
        disablePortal
        id="autocomplete"
        options={country}
        sx={{ mb: 3 }}
        fullWidth
        renderInput={(params) => <TextField {...params} label="Select Country" />}
      />

      {/* Switch */}
      <FormControlLabel control={<Switch defaultChecked />} label="Label" sx={{ mb: 3 }} />

      {/* Radio */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>

      {/* Checkbox */}
      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" sx={{ mb: 1 }} />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 12 }}
      >
        Sign In
      </Button>
    </Container>
  );
}

const country = ["Bhutan", "Bangladesh", "India", "Israel"];