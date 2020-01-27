import React from "react"
import AddShopingCartIcon from "@material-ui/icons/AddShoppingCart"
import WarningRoundedIcon from "@material-ui/icons/WarningRounded"
import TimelapseIcon from "@material-ui/icons/Timelapse"
import InfoRoundedIcon from "@material-ui/icons/InfoRounded"
import MenuIcon from "@material-ui/icons/Menu"
import EditRoundedIcon from "@material-ui/icons/EditRounded"

export const mapIcon = name => {
  switch (name) {
    case "add_shopping_cart":
      return <AddShopingCartIcon />
    case "warning":
      return <WarningRoundedIcon />
    case "timelapse":
      return <TimelapseIcon />
    case "info":
      return <InfoRoundedIcon />
    case "info":
      return <InfoRoundedIcon />
    case "menu":
      return <MenuIcon />
    case "edit":
      return <EditRoundedIcon />
  }
}