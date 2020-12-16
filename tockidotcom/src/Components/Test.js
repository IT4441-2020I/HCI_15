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
              src="https://images.eq3.com/product-definitions/cjuedn73z05650162zt3g6fu8/instance/cjv6ukkqm02p30118culhn925/THUMBNAIL/4ad0d9c2-7dc6-40cc-9a61-df08bcce4e0e.jpg"
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
