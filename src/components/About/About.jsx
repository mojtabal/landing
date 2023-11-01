import { CardMedia, Grid, Typography } from "@mui/material"
import { MdSupportAgent } from "react-icons/md"
import banner from "./../../assets/img/about-2.svg"
export default function About() {
  return (
    <div id="about" style={{ backgroundColor: "var(--lightBlue)" }}>
      <Grid display="flex" mx={"9vw"} alignItems="center" columnGap={12} py={7}>
        <Grid flex={1} sx={{ display: { xs: "none", md: "block" } }}>
          <CardMedia
            src={banner}
            alt="about banner"
            component={"img"}
            style={{ width: "32vw" }}
          />
        </Grid>
        <Grid flex={1}>
          <Typography>درباره شرکت</Typography>
          <Typography
            fontFamily={"EstedadBold"}
            color={"var(--darkBlue)"}
            my={2}
            variant="h4"
          >
            طراحی سایت حرفه‌ای برای شما
          </Typography>
          <Typography>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
          <button style={{ marginTop: "20px" }} className="home-button">
            <MdSupportAgent style={{ marginLeft: "7px" }} />
            خدمات ما
          </button>
        </Grid>
      </Grid>
    </div>
  )
}
