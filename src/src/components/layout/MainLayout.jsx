import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import Navbar from "../navbar/Navbar";
import { useTheme } from "../navbar/ThemeContext";

const MainLayout = () => {
  const { isDarkMode } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        direction: "rtl",
        backgroundColor: isDarkMode ? "#333" : "#f5f5f5",
        color: isDarkMode ? "#fff" : "#000", 
        minHeight: "100vh",
      }}
    >
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,      
        }}
      >
        <Sidebar/>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          backgroundColor: isDarkMode ? "#333" : colorConfigs.mainBg,
        }}
      >
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
