import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./comment.module.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { CardMedia, Grid, Typography } from "@mui/material"
import { Navigation, Pagination, Autoplay } from "swiper"
import { BsPerson } from "react-icons/bs"
import slide1 from "./../../assets/img/testi-1.svg"
import slide2 from "./../../assets/img/testi-2.svg"
import slide3 from "./../../assets/img/testi-3.svg"
let comments = [{ img: slide1 }, { img: slide2 }, { img: slide3 }]
export default function Comment() {
  return (
    <Grid pb={5} id="comments">
      <Swiper
        dir="rtl"
        navigation={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {comments.map((comment, index) => {
          return (
            <SwiperSlide key={index}>
              <Grid
                display="flex"
                mx={"auto"}
                sx={{
                  width: { xs: "80vw", md: "60vw" },
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Grid
                  sx={{ order: { xs: 2, md: -2 } }}
                  flex={1}
                  mx={4}
                  mb={7}
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                >
                  <Typography variant="h6">نظرات مشتریان</Typography>
                  <Typography
                    my={2}
                    variant="h5"
                    whiteSpace={"nowrap"}
                    fontFamily="EstedadBold"
                    color="var(--darkBlue)"
                  >
                    لورم ایپسوم متن ساختگی
                  </Typography>
                  <Typography>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز
                  </Typography>
                  <button
                    className={styles.commentButton}
                    my={3}
                    bgcolor="var(--lightBlue)"
                  >
                    <BsPerson /> اسم شخص
                  </button>
                </Grid>
                <Grid flex={1}>
                  <CardMedia
                    src={comment.img}
                    alt={"slides"}
                    className={styles.commentImg}
                    component={"img"}
                  />
                </Grid>
              </Grid>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Grid>
  )
}
