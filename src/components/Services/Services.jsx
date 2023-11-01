import { Grid, Typography } from "@mui/material"
import { BsCart2, BsShieldCheck, BsCloudCheck } from "react-icons/bs"
import { FiLayout } from "react-icons/fi"
import { BiMobileAlt } from "react-icons/bi"
import styles from "./services.module.css"
import { TbLocation } from "react-icons/tb"
let items = [
  {
    title: "طراحی سایت",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    icon: <FiLayout />,
  },
  {
    title: "برنامه نویسی موبایل",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    icon: <BiMobileAlt />,
  },
  {
    title: "خدمات رزرواسیون",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    icon: <TbLocation />,
  },
  {
    title: "خدمات تجاری",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    icon: <BsCart2 />,
  },
  {
    title: "پشتیبانی درجه اول",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    icon: <BsShieldCheck />,
  },
  {
    title: "فناوری ابری",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    icon: <BsCloudCheck />,
  },
]
export default function Services() {
  return (
    <div id="services">
      <Grid my={7} mx={"5%"}>
        <Typography>شرکت فلان</Typography>
        <Typography
          my={2}
          color={"var(--darkBlue)"}
          fontFamily="EstedadBold"
          variant="h4"
        >
          خدمات نرم‌افزاری
        </Typography>
        <Typography>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </Typography>
        <Grid container display="flex" mt={5} justifyContent="center">
          {items.map((item, index) => {
            return (
              <Grid
                key={index}
                xs={11}
                sm={5.6}
                lg={3.8}
                item
                p={3}
                m={1}
                flexDirection="column"
                className={styles.serviceItem}
              >
                <span className={styles.itemIcon}>{item.icon}</span>
                <Typography
                  className={styles.itemTitle}
                  fontFamily="EstedadBold"
                >
                  {item.title}
                </Typography>
                <p>{item.description}</p>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </div>
  )
}
