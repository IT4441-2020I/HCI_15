import {
  Box,
  Container,
  FormControlLabel,
  TextField,
  Button,
  Typography,
  Checkbox,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { Component } from "react";

const times = [
  {
    value: "0",
    label: "30 phút",
  },
  {
    value: "1",
    label: "1 giờ",
  },
  {
    value: "2",
    label: "3 giờ",
  },
  {
    value: "3",
    label: "12 giờ",
  },
  {
    value: "4",
    label: "1 ngày",
  },
];
function SelectTextField(props) {
  //console.log(props.orderStatusValue);
  const [time, setTime] = React.useState("0");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <div>
      <TextField
        id="standard-select-currency-native"
        select
        value={time}
        fullWidth
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
      >
        {times.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </div>
  );
}

export class CreateBattle extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Box bgcolor="white" boxShadow="2" borderRadius="2px" p="8px" mt="0px">
          <Typography variant="h5" gutterBottom>
            Tạo cuộc thi mới
          </Typography>
          <Typography
            variant="subtitle2"
            display="block"
            gutterBottom
            style={{ textAlign: "left", marginTop: 10 }}
          >
            Thời gian
          </Typography>
          <SelectTextField />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Tạo một cuộc thi riêng"
            fullWidth
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            style={{ marginLeft: "170px", marginTop: "15px" }}
          >
            Bắt đầu cuộc thi
          </Button>
        </Box>
      </Container>
    );
  }
}

export default CreateBattle;
