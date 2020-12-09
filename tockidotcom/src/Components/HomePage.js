import React, { Component } from "react";
import { Box, Button, Container, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import bg from "../image/69.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
export class HomePage extends Component {
  render() {
    return (
      <div>

        <div
          style={{
            width: "1903px",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundImage: "url(" + bg + ")",
          }}
        >
          <Container maxWidth="md">
            <Box p="24px" mt="250px" style={{ marginLeft: "50px" }}>
              <Typography variant="h1" gutterBotton>
                Tốc kí trong tầm tay
              </Typography>
              <TextField color="secondary" variant="outlined" style={{ width: "800px", marginTop: "20px" }} label="Search something in website"></TextField>
              <Grid container spacing={3} style={{ marginTop: "25px" }}>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>

                  <Link to="/learning">
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Bắt đầu học
                  </Button>
                  </Link>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                  <a href="#quytacgo">
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Quy tắc gõ
                  </Button>
                  </a>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
            </Box>
          </Container>
        </div>
        <Container maxWidth="md" style={{ marginTop: "120vh" }} id="quytacgo">
          <Box
            bgcolor="white"
            boxShadow="3"
            borderRadius="2px"
            p="24px"
            mt="15px"
            style={{ marginBottom: "70px" }}
          >
            <Typography variant="h6" gutterBottom>
              Làm thế nào để thuộc được các chữ cái trên bàn phím steno
            </Typography>
            <Typography variant="body1" gutterBottom>
              Chào mừng bạn đã đến với Tốc kí trong tầm tay. Trang web tốc ký hỗ
              trợ người học cải thiện các kỹ năng bàn phím, tốc độ gõ và độ
              chính xác bấm phím. Các bạn sẽ học cả cách phối hợp tư duy – hành
              động theo chu trình thực hiện – đánh giá: kết hợp mắt với tay, kết
              hợp trí nhớ và phản xạ cơ tay. Đây là yếu tố quyết định để bạn
              luyện gõ tốc ký thuần thục.
            </Typography>
            <Divider />
            <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
              Làm thế nào để việc học tốc ký trở nên vui vẻ?
            </Typography>
            <Typography variant="body1" gutterBottom>
              Người dùng sẽ trải qua các thử thách có độ khó tăng dần và nhận
              được điểm số khi hoàn thành vòng chơi. Một cách tuyệt vời để làm
              cho các bài học trên bàn phím trở nên thú vị và tạo động lực hơn
              là biến mỗi bài học bàn phím thành VideoGame WPM bằng cách khuyến
              khích người chơi gõ nhanh nhất có thể. Game tốc ký giúp người chơi
              thực hành các kỹ năng gõ bàn phím steno của họ bằng cách thách
              thức họ luyện tập chăm chỉ hơn để đạt được từng mục tiêu. Chìa
              khóa để khuyến khích người chơi tham gia là đưa ra phản hồi tích
              cực và cho họ một vài cơ hội để cố gắng đánh bại wpm cao nhất của
              chính họ.
            </Typography>
            <Divider />
            <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
              Làm thế nào để thu hút người học gõ tốc ký?
            </Typography>
            <Typography variant="body1" gutterBottom>
              Trong phạm vi bài học tốc ký của chúng tôi, người dùng được học vị
              trí đặt ngón tay, thuộc được các âm cấu tạo nên từ, cách viết.
              Ngoài những kỹ năng cốt lõi này, trang web của chúng tôi cũng chú
              ý đến việc học các kỹ năng chính tả cần thiết. Học gõ tốc ký sẽ
              giảm sự thú vị nếu người dùng chỉ tự học một mình. Vì vậy chúng
              tôi đã nghĩ: Tại sao không để người dùng thi đấu với nhau? Đây là
              ý tưởng cho sự phát triển của trang web học gõ tốc ký này.
            </Typography>
            <Divider />
            <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
              Những lợi ích mang lại cho người dùng:
            </Typography>
            <Typography variant="body1" gutterBottom>
              -Tăng tốc độ gõ từ mỗi phút và độ chính xác.
            </Typography>
            <Typography variant="body1" gutterBottom>
              -Cải thiện độ linh hoạt của các ngón tay thông qua việc rèn luyện
              trí nhớ - phản xạ cơ tay.
            </Typography>
            <Typography variant="body1" gutterBottom>
              -Cải thiện phối hợp tay – mắt.
            </Typography>
          </Box>
        </Container>
      </div>
    );
  }
}

export default HomePage;
