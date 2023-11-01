import { Grid } from "@mui/material"
import React from "react"
import { MdOutlineKeyboardArrowUp } from "react-icons/md"
export default function ScrollToTop() {
  const myStyleClassName = {
    "& :hover": {
      backgroundColor: "#20c997",
      borderRadius: "50%",
    },
  }

  const [sitePosition, setSitePosition] = React.useState(false)
  function handleScroll() {
    // console.log("scroll hassan")
    document.documentElement.scrollTop > 450
      ? setSitePosition(true)
      : setSitePosition(false)
  }
  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })
  return (
    <>
      <Grid
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          zIndex: "3",
          fontSize: "2.5rem",
          backgroundColor: "#A2D9FF",
          borderRadius: "50%",
          paddind: "1rem",
        }}
        sx={myStyleClassName}
      >
        <MdOutlineKeyboardArrowUp
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={
            sitePosition
              ? {
                  display: "block",
                  cursor: "pointer",
                  color: "#08a45c",
                }
              : { display: "none" }
          }
        />
      </Grid>
    </>
  )
}
