import { Grid, Typography } from "@mui/material"
import { BiCycling } from "react-icons/bi"
import { GiScooter } from "react-icons/gi"
import { FaCarAlt } from "react-icons/fa"
import styles from "./pricing.module.css"
let items = [
  {
    price: "رایگان",
    icon: <BiCycling />,
    active: false,
    description: (
      <Grid>
        <p>طراحی سایت با قالب آماده</p>
        <p style={{ textDecorationLine: "line-through" }}>پشتیبانی ۲۴ ساعته</p>
        <p style={{ textDecorationLine: "line-through" }}>دیزاین اختصاصی</p>
        <p style={{ textDecorationLine: "line-through" }}>جلسه حضوری</p>
      </Grid>
    ),
  },
  {
    price: "۳ میلیون تومان",
    icon: <FaCarAlt />,
    active: true,
    description: (
      <Grid>
        <p>تعداد درخواست نامحدود</p>
        <p>پشتیبانی ۲۴ ساعته</p>
        <p>دیزاین اختصاصی</p>
        <p>جلسه حضوری</p>
      </Grid>
    ),
  },
  {
    price: "۱ میلیون تومان",
    icon: <GiScooter />,
    active: false,
    description: (
      <Grid>
        <p style={{ textDecorationLine: "line-through" }}>
          تعداد درخواست نامحدود
        </p>
        <p>پشتیبانی ۲۴ ساعته</p>
        <p>دیزاین اختصاصی</p>
        <p>جلسه حضوری</p>
      </Grid>
    ),
  },
]
export default function Pricing() {
  return (
    <Grid id="pricing" mx={"4vw"}>
      <Typography
        variant="h4"
        color="var(--darkBlue)"
        fontFamily={"EstedadBold"}
        textAlign={"center"}
      >
        تعرفه‌ها
      </Typography>
      <Typography textAlign="center" my={2}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است
      </Typography>
      <Grid container display="flex" justifyContent="center">
        {items.map((item, index) => {
          return (
            <Grid
              m={1}
              item
              key={index}
              xs={11}
              sm={8}
              md={5.3}
              lg={3.5}
              p={4}
              className={`${styles.pricingItem} ${
                item.active ? styles.active : ""
              }`}
            >
              <span className={styles.pricingIcon}>{item.icon}</span>
              <Typography variant="h5">{item.price}</Typography>
              {item.description}
              <button
                style={{ margin: "auto", marginTop: "40px" }}
                className={item.active ? "home-button" : styles.buttonNoActive}
              >
                سفارش
              </button>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}
