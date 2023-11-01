import styles from "./header.module.css"
import { BsGrid } from "react-icons/bs"
import { Grid, Typography, useMediaQuery } from "@mui/material"
import React from "react"
export default function Header() {
  // theme change
  const themes = {
    light: {
      darkGreen: "#08a45c",
      lightGreen: "#cde6db",
      hoverGreen: "#20c997",
      darkBlue: "#003379",
      lightBlue: "#edecfd",
      blue: "#007bff",
      borderBlue: "#5d8b9e",
      white: "#FFFFFF",
      gray: "#f3f3f3",
      lightGray: "#fbfbfb",
      dark: "#000000",
    },
    dark: {
      darkGreen: "#FB2D19",
      lightGreen: "#F8B094",
      hoverGreen: "#EDBD7E",
      darkBlue: "#3E8224",
      lightBlue: "#82ED43",
      blue: "#43EDE2",
      borderBlue: "#62C4EF",
      white: "#000000",
      gray: "#DDDDD8",
      lightGray: "#C198D6",
      dark: "#FFFFFF",
    },
  }
  const [currentThem, setCurrentThem] = React.useState("light")
  const themFunc = () => {
    const theme = themes[currentThem]
    Object.keys(theme).forEach((key) => {
      const cssKey = `--${key}`
      const cssValue = theme[key]
      document.body.style.setProperty(cssKey, cssValue)
    })
  }
  const toggleTheme = () => {
    if (currentThem === "light") {
      setCurrentThem("dark")
      themFunc()
    } else {
      setCurrentThem("light")
      themFunc()
    }
  }
  const [showMenu, setShowMenu] = React.useState(false)
  let pageSize = useMediaQuery("(min-width:900px)")
  return (
    <Grid
      className={styles.header}
      display="flex"
      justifyContent="space-between"
    >
      <Typography color={"var(--darkBlue)"} variant="h6" whiteSpace={"nowrap"}>
        شرکت فلان‌‌‌‌‌‌
      </Typography>
      <Grid
        onClick={() => setShowMenu(!showMenu)}
        className={styles.menuGrid}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <BsGrid />
      </Grid>
      {pageSize || showMenu ? (
        <Grid
          // onClick={() => setShowMenu(!showMenu)}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            bgcolor: { xs: "var(--white)", md: "transparent" },
            mt: { xs: "40px", md: "0px" },
            position: { xs: "absolute", md: "static" },
            width: { xs: "100%", sm: "80%" },
            p: { xs: "10px", md: "0px" },
          }}
          className={styles.headerParent}
        >
          <div className={styles.headerItem}>
            <a href="#top">خانه</a>
          </div>
          <div className={styles.headerItem}>
            <a href="#about">درباره ما</a>
          </div>
          <div className={styles.headerItem}>
            <a href="#services">خدمات ما</a>
          </div>
          <div className={styles.headerItem}>
            <a href="#pricing">تعرفه‌ها</a>
          </div>
          <div className={styles.headerItem}>
            <a href="#comments">نظرات مشتری</a>
          </div>
          <div className={styles.headerItem}>
            <a href="#blog">وبلاگ</a>
          </div>
          <div>
            <a
              href="#contact"
              className={`${styles.headerCall} ${styles.headerItem}`}
            >
              تماس
            </a>
          </div>
        </Grid>
      ) : (
        ""
      )}
    </Grid>
  )
}
