import { Grid, Typography, CardMedia } from "@mui/material"
import blog1 from "./../../assets/img/blog-1.jpg"
import blog2 from "./../../assets/img/blog-2.jpg"
import blog3 from "./../../assets/img/blog-3.jpg"
import styles from "./blog.module.css"
let blogs = [
  { category: "نرم‌افزار", img: blog1 },
  { category: "اخبار", img: blog2 },
  { category: "مدرن", img: blog3 },
]
export default function Blog() {
  return (
    <Grid id="blog" p="4vw" my={9} bgcolor="var(--lightGray)">
      <Grid m={3}>
        <Typography>آخرین اخبار ما</Typography>
        <Typography
          my={2}
          fontFamily="EstedadBold"
          color="var(--darkBlue)"
          variant="h4"
        >
          وبلاگ ما
        </Typography>
        <Typography>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ{" "}
        </Typography>
      </Grid>
      <Grid container display="flex" justifyContent="center">
        {blogs.map((blog, index) => {
          return (
            <Grid key={index} className={styles.blogItem} m={2}>
              <Grid style={{ overflow: "hidden" }}>
                <CardMedia
                  sx={{ maxWidth: { lg: "24em", xs: "40em" } }}
                  lg={3}
                  md={5}
                  xs={11}
                  src={blog.img}
                  alt={blog.category}
                  component={"img"}
                  className={styles.blogImg}
                />
              </Grid>
              <Grid px={3} className={styles.blogItemCaption}>
                <Typography
                  color={"var(--darkBlue)"}
                  fontFamily={"EstedadBold"}
                  py={1}
                >
                  لورم ایپسوم متن ساختگی
                </Typography>
                <Grid py={1.4} display="flex" justifyContent="space-between">
                  <button className={styles.blogButton}>۱۳۹۹-۳-۲۲</button>
                  <button className={styles.blogButton2}>
                    {blog.category}
                  </button>
                </Grid>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}
