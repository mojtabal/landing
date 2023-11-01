import styles from "./footer.module.css"
import { Grid, Typography } from "@mui/material"
import { FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
export default function Footer() {
  return (
    <Grid
      container
      className={styles.footer}
      // sx={{ pl: { xs: "10vw", md: "200px", lg: "12vw" } }}
    >
      <Grid item lg={3} xs={11} sm={6} mb={4} className={styles.footerItem}>
        <Typography variant="h6" fontFamily={"EstedadBold"} mb={2}>
          شرکت فلان
        </Typography>
        <Typography pr={4}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </Typography>
      </Grid>
      <Grid
        sx={{ pl: { xs: 0, sm: 4, md: 8 } }}
        item
        lg={3}
        xs={11}
        sm={6}
        mb={4}
        className={styles.footerItem}
      >
        <Typography variant="h6" fontFamily={"EstedadBold"} mb={2}>
          دسترسی سریع
        </Typography>
        <Grid display={"flex"} flexDirection="column" gap={1}>
          <Typography>
            <a href="#">درباره ما</a>
          </Typography>
          <Typography>
            <a href="#">خدمات ما</a>
          </Typography>
          <Typography>
            <a href="#">قیمت گذاری</a>
          </Typography>
          <Typography>
            <a href="#">وبلاگ</a>
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg={3} xs={11} sm={6} mb={4} className={styles.footerItem}>
        <Typography variant="h6" fontFamily={"EstedadBold"} mb={2}>
          تماس
        </Typography>
        <Typography>تهران خیابان آزادی شرکت فلان</Typography>
        <Typography my={1.5}>
          <a href="tel:+989112076139">۰۹۱۱۲۰۷۶۱۳۹</a>
        </Typography>
        <Typography>
          <a href="mailto:hggvff222@gmail.com?subject=test&body=test">
            sherkatFolan@gmail.com
          </a>
        </Typography>
      </Grid>
      <Grid
        sx={{ pl: { xs: 0, sm: 4, md: 8 } }}
        item
        lg={3}
        xs={11}
        sm={6}
        mb={4}
        className={styles.footerItem}
      >
        <Typography variant="h6" fontFamily={"EstedadBold"} mb={2}>
          شبکه‌های اجتمائی
        </Typography>
        <Grid className={styles.footerIconsParent}>
          <a href="https://t.me/+989387018726" target={"_blank"}>
            <FaTelegramPlane className={styles.footerIcon} />
          </a>
          <a href="#">
            <FaInstagram className={styles.footerIcon} />
          </a>
          <a href="#">
            <FaFacebookF className={styles.footerIcon} />
          </a>
          <a href="#">
            <AiOutlineTwitter className={styles.footerIcon} />
          </a>
        </Grid>
      </Grid>
      <span className={styles.copyRight}>
        تمامی حقوق برای شرکت فلان محفوظ است
      </span>
    </Grid>
  )
}
