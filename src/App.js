import { Checkbox } from "@mui/material";


function App() {
  let label = "bla bla";

  return (
    <>
    <h1>Hey there..</h1>
    <Checkbox  defaultChecked />
    <Checkbox {...label} />
   <Checkbox {...label} disabled />
    <Checkbox {...label} disabled checked />
    </>
  );
}

export default App;
