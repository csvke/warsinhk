import React from "react"
import AddShopingCartIcon from "@material-ui/icons/AddShoppingCart"
import WarningRoundedIcon from "@material-ui/icons/WarningRounded"
import TimelapseIcon from "@material-ui/icons/Timelapse"
import InfoRoundedIcon from "@material-ui/icons/InfoRounded"
import MenuIcon from "@material-ui/icons/Menu"
import EditRoundedIcon from "@material-ui/icons/EditRounded"
import HomeRoundedIcon from "@material-ui/icons/HomeRounded"
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined"
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined"

export function mapIcon(name) {
  switch (name) {
    case "add_shopping_cart":
      return <AddShopingCartIcon />
    case "warning":
      return <WarningRoundedIcon />
    case "timelapse":
      return <TimelapseIcon />
    case "info":
      return <InfoRoundedIcon />
    case "menu":
      return <MenuIcon />
    case "edit":
      return <EditRoundedIcon />
    case "home":
      return <HomeRoundedIcon />
    case "thumb_up":
      return <ThumbUpOutlinedIcon />
    case "contact_support":
      return <ContactSupportOutlinedIcon />
    default:
      return null
  }
}
