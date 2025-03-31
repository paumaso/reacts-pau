import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SortIcon from '@mui/icons-material/Sort';
 
function TableHeader(props) {
  return (
    <TableCell align="center">
      {props.header}
      <IconButton onClick={props.sortData}>
        <SortIcon />
      </IconButton>
    </TableCell>
  );
}
 
function App() {
  const [people, setPeople] = React.useState([
    { name: 'John Doe', age: 32, city: 'New York' },
    { name: 'Jane Doe', age: 27, city: 'London' },
    { name: 'Jim Smith', age: 40, city: 'Paris' },
  ]);
 
  const sortData = (key) => {
    setPeople([...people].sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    }));
  };
 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableHeader header="Name" sortData={() => sortData('name')} />
            <TableHeader header="Age" sortData={() => sortData('age')} />
            <TableHeader header="City" sortData={() => sortData('city')} />
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((person) => (
            <TableRow key={person.name}>
              <TableCell align="center">{person.name}</TableCell>
              <TableCell align="center">{person.age}</TableCell>
              <TableCell align="center">{person.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
 
export default App;