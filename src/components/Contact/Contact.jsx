import { CardMedia, Grid, Typography } from "@mui/material"
import styles from "./contact.module.css"
import { useFormik } from "formik"
import contact from "./../../assets/img/contact.svg"
import * as Yup from "yup"
export default function Contact() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      phone: "",
      email: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values))
      resetForm()
    },
    validationSchema: Yup.object({
      firstName: Yup.string("").min(3, "حداقل سه کاراکتر").required("ضروری"),
      phone: Yup.string("")
        .min(11, "شماره معتبر نیست")
        .max(11, "شماره معتبر نیست")
        .required("ضروری"),
      email: Yup.string("").email("ایمیل معتبر نیست").required("ضروری"),
      message: Yup.string("").min(12, "حداقل دوازده کاراکتر").required("ضروری"),
    }),
  })
  return (
    <Grid
      id="contact"
      display="flex"
      py={9}
      bgcolor="var(--lightBlue)"
      sx={{
        flexDirection: { xs: "column", md: "row" },
        px: { xs: 4, md: 8, lg: 15 },
      }}
    >
      <Grid
        flex={1}
        display="flex"
        flexDirection={"column"}
        m={3}
        p={2}
        justifyContent="center"
        className={styles.contactForm}
        sx={{ m: { xs: 0, sm: 9, md: 2, lg: 12 } }}
      >
        <label htmlFor="firstName">نام</label>
        <input
          id="firstName"
          autoComplete="off"
          {...formik.getFieldProps("firstName")}
          className={styles.contactInput}
          type="text"
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p className={styles.errorMessage}>{formik.errors.firstName}</p>
        ) : null}
        <label htmlFor="phone">شماره تماس</label>
        <input
          id="phone"
          autoComplete="off"
          {...formik.getFieldProps("phone")}
          className={styles.contactInput}
          type="text"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <p className={styles.errorMessage}>{formik.errors.phone}</p>
        ) : null}
        <label htmlFor="email">ایمیل</label>
        <input
          id="email"
          {...formik.getFieldProps("email")}
          autoComplete="off"
          className={styles.contactInput}
          type="text"
        />
        {formik.touched.email && formik.errors.email ? (
          <p className={styles.errorMessage}>{formik.errors.email}</p>
        ) : null}
        <label htmlFor="message">پیام</label>
        <textarea
          id="message"
          {...formik.getFieldProps("message")}
          autoComplete="off"
          className={styles.contactInput}
          rows="5"
        />
        {formik.touched.message && formik.errors.message ? (
          <p className={styles.errorMessage}>{formik.errors.message}</p>
        ) : null}
        <button
          type="submit"
          onClick={formik.handleSubmit}
          className={`${styles.formButton} home-button`}
        >
          ارسال
        </button>
      </Grid>
      <Grid m="auto" flex={1}>
        <Typography
          textAlign={"center"}
          variant="h5"
          fontFamily="EstedadBold"
          color="var(--darkBlue)"
          my={3}
        >
          تماس با ما
        </Typography>
        <Typography my={2}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </Typography>
        <CardMedia src={contact} alt="contact" component="img" />
      </Grid>
    </Grid>
  )
}
