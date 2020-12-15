import React from "react";
import {
  Card,
  CardMedia,
  Modal,
  LinearProgress,
  CardContent,
  Divider,
  Typography,
  Box,
  CardActionArea,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Col, Row } from "antd";
import {
  AccessAlarm,
  SortOutlined,
  Send,
  SettingsPowerRounded,
} from "@material-ui/icons";
import CachedIcon from "@material-ui/icons/Cached";
import { AccountBox, StarRate, TrendingUp } from "@material-ui/icons";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 15,
  },
});

const Test = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box  boxShadow="7" p="20px">
      <Row style={{ display: "flex", justifyContent: "space-between" }}>
        <Col span="5">
          <Box boxShadow="5" size="10">
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src="data:image/jpeg;base64,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"
            />
          </Box>
          <Box boxShadow="7" p="20px" mt="20px">
            <h6>Kết quả</h6>
            <br />
            <Divider />
            <br />

            <p>Tốc độ gõ (từ/ phút): 123WPM</p>
            <p>Số từ gõ đúng: </p>
            <p>Số từ gõ sai: </p>
            <text>Đánh giá :</text>
            <StarRate style={{ color: "yellow" }} />
            <StarRate style={{ color: "yellow" }} />
            <StarRate style={{ color: "yellow" }} />
            <StarRate />
            <StarRate />
          </Box>
        </Col>
        <Col span="18">
          <Box boxShadow="7" p="20px">
            <h3>Bài kiểm tra</h3>

            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
              }}
            >
              <div>
                <AccessAlarm />
                <text> Thời gian: 15 phút</text>
              </div>
              <div>
                <text>Level : Top 1000 từ</text>
              </div>
            </div>

            <br />
            <Divider />

            <br />
            <h5>
              Văn bản
              <LinearProgressWithLabel value={progress} />
            </h5>

            <br />
            <Box
              bgcolor="white"
              boxShadow="2"
              p="8px"
              variant="outlined"
              style={{}}
            >
              <Typography variant="h6" gutterBottom>
                mưa kỹ thuật bướm tờ giấy trắng quảng nam gió năm phố kinh kịch
                lịch sử sơ thanh thư kỹ học chăm rán bướm tờ giấy trắng quảng
                nam gió ta chứng cớ sách báo quần
              </Typography>
            </Box>
            <br />
            <h5>Gõ văn bản </h5>
            <br />
            <TextField variant="outlined" style={{ width: "100%" }} />
            <bt />
          </Box>
          <br />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="contained" size="large">
              Làm lại &nbsp; <CachedIcon />
            </Button>
            &nbsp;&nbsp;
            <Button variant="contained" color="primary" size="large">
              Nộp bài &nbsp;
              <Send />
            </Button>
            {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        
        open={open}
        onClose={setOpen(false)}
        closeAfterTransition
        
      >
        <text>kkkkk</text>
      </Modal> */}
          </div>
        </Col>
      </Row>
    </Box>
  );
};

export default Test;
