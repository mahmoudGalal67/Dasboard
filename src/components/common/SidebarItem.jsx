import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import { useTheme } from "../navbar/ThemeContext";

const SidebarItem = ({ item }) => {
  const { appState } = useSelector((state) => state.appState);
  const { isDarkMode } = useTheme();

  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          "&:hover": {
            backgroundColor: isDarkMode ? "#333" : colorConfigs.sidebar.hoverBg, 
          },
          
          backgroundColor: isDarkMode ? "#444" :appState === item.state ? colorConfigs.sidebar.activeBg:"unset" ,
          paddingY: "12px",
          paddingX: "24px",
          justifyContent: "flex-end", 
          textAlign: "right", 
        }}
      >
        <ListItemIcon sx={{
          color: colorConfigs.sidebar.color,
          marginRight: "auto", 
        }}>
          {item.sidebarProps.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.sidebarProps.displayText}
          primaryTypographyProps={{
            style: { textAlign: "right" } 
          }}
        />
      </ListItemButton>
    ) : null
  );
};

export default SidebarItem;
