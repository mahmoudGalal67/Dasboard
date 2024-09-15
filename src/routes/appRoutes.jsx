import HomePage from "../pages/Home/HomePage";
import ClientsPage from "../pages/Clients/ClientsPage";
import ProductsPage from "../pages/Products/ProductsPage";
import ReportsPage from "../pages/Reports/reportsPage";
import RequestPage from "../pages/Requests/RequestsPage";
import ProfilePage from "../pages/Profilepages/ProfilePage";
import QuestionAndReviewPage from "../pages/Questionsandreviews/QuestionsandreviewsPage";
import MarketingToolsPage from "../pages/MarketingTools/MarketingToolsPage";
import StorePackagePage from "../pages/StorePackage/StorePackagePage";
import StoreSettingsPage from "../pages/StoreSettings/StoreSettingsPage";
import StoreMakerPage from "../pages/StoreMaker/StoreMakerpage";
import VisitTheAppStorePage from "../pages/VisitTheAppStore/VisitTheAppStorePage";
import WalletAndBillsPage from "../pages/WalletAndBills/WalletAndBillsPage";
import InstalledApplicationsPage from "../pages/InstalledApplications/InstalledApplicationsPage";
import StoreDesignPage from "../pages/StoreDesign/StoreDesignPage";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import StoreIcon from '@mui/icons-material/Store';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const appRoutes = [
  {
    
    path: "/",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "الرئيسية",
      icon: <HomeOutlinedIcon />
    }
  },
  {
    path: "/Products",
    element: <ProductsPage />,
    state: "products",
    sidebarProps: {
      displayText: "المنتجات",
      icon: <i className="sicon-t-shirt"></i>
    }
  },
  {
    path: "/Requests",
    element: <RequestPage />,
    state: "requests",
    sidebarProps: {
      displayText: "الطلبات",
      icon: <i className="sicon-box"></i>
    }
  },
  {
    path: "/Clients",
    element: <ClientsPage/>,
    state: "clients",
    sidebarProps: {
      displayText: "العملاء",
      icon: <i className="sicon-users"></i>
    }
  },
  {
    path: "/Reports",
    element: <ReportsPage/>,
    state: "reports",
    sidebarProps: {
      displayText: "التقارير",
      icon: <i className="sicon-chart-pie"></i>
    }
  },
  {
    path: "/QuestionsAndReviews",
    element: <QuestionAndReviewPage />,
    state: "questionsandreviews",
    sidebarProps: {
      displayText: "الأسئلة والتقييمات",
      icon: <i className="sicon-chat-conversation-alt"></i>
    }
  },
  {
    path: "/ProfilePages",
    element: <ProfilePage />,
    state: "profilepages",
    sidebarProps: {
      displayText: "الصفحات التعريفية",
      icon: <i className="sicon-newspaper"></i>
    }
  },
  {
    path: "/MarketingTools",
    element: <MarketingToolsPage />,
    state: "marketingtools",
    sidebarProps: {
      displayText: "الإدوات التسويقية",
      icon: <i className="sicon-megaphone"></i>
    }
  },
  {
    path: "#",
    sidebarProps: {
      displayText: (
         <div  className="sidebar-item-hover" >
           <span style={{ color: "#5252ef",fontSize:"17px"}}>
             قنوات البيع  
          </span>
        </div>
      
      ),
    }
  },
   
  {
    path: "/StorePackage",
    element: <StorePackagePage />,
    state: "StorePackage",
    sidebarProps: {
      displayText: "محلي",
      icon:<i className="sicon-mahally"></i>
    }
  },  {
    path: "/StorePackage",
    element: <StorePackagePage />,
    state: "StorePackage",
    sidebarProps: {
      displayText: "سلة بوينت",
      icon:<i className="sicon-pos"></i>
    }
  }, 
  {
    path: "#",
    sidebarProps: {
      displayText: (
        <span style={{ color: "#5252ef",fontSize:"17px"}}>
          ادوات المساندة
        </span>
      ),
      
    }
  },
  {
    path: "/StorePackage",
    element: <StorePackagePage />,
    state: "StorePackage",
    sidebarProps: {
      displayText: "خدمات التاجر",
      icon:<i className="sicon-briefcase"></i>
    }
  },  {
    path: "/StorePackage",
    element: <StorePackagePage />,
    state: "StorePackage",
    sidebarProps: {
      displayText: "المؤثران",
      icon:<i className="sicon-user-list"></i>
    }
  },  {
    path: "/StorePackage",
    element: <StorePackagePage />,
    state: "StorePackage",
    sidebarProps: {
      displayText: "اعلانات سويبلي",
      icon:<i className="sicon-megaphone"></i>
    }
  },
  {
    path: "#",
    sidebarProps: {
      displayText:(
        <span style={{ color: "#5252ef",fontSize:"17px"}}>
        الاعدادات
      </span>
      ),
    }
  },
  {
    path: "/StorePackage",
    element: <StorePackagePage />,
    state: "StorePackage",
    sidebarProps: {
      displayText: "باقة المتجر",
      icon:<i className="sicon-store"></i>
    }
  },
  {
    path: "/StoreSettings",
    element: <StoreSettingsPage />,
    state: "StoreSettings",
    sidebarProps: {
      displayText: "اعدادات المتجر",
      icon:<i className="sicon-settings"></i>
    }
  },
  {
    path: "/WalletAndBills",
    element: <WalletAndBillsPage />,
    state: "WalletAndBills",
    sidebarProps: {
      displayText: "المحفظة والفواتير",
      icon: <i className="sicon-wallet"></i>
    }
  },
  {
    path: "#",
    sidebarProps: {
      displayText: (
        <span style={{ color: "#5252ef",fontSize:"17px"}}>
            مظهر المتجر
      </span>
      ),
      icon:null,
    }
  },
  {
    path: "/StoreDesign",
    element: <StoreDesignPage />,
    state: "StoreDesign",
    sidebarProps: {
      displayText: "تصميم المتجر",
      icon: <i className="sicon-window-layout"></i>
    }
  },
  {
    path: "/StoreMaker",
    element: <StoreMakerPage />,
    state: "StoreMaker",
    sidebarProps: {
      displayText: "صانع المتجر",
      icon:<i className="sicon-iphone"></i>
    }
  },
  {
    path: "#",
    sidebarProps: {
      displayText: (
        <span style={{  color: "#5252ef",fontSize:"17px"}}>
        متجر التطبيقات
      </span>
      ),
      icon:null,
    }
  },
  {
    path: "/InstalledApplications",
    element: <InstalledApplicationsPage />,
    state: "InstalledApplications",
    sidebarProps: {
      displayText: "التطبيقات المثبتة",
      icon: <i className="sicon-puzzle"></i>
    }
  },
  {
    path: "/VisittheAppStore",
    element: <VisitTheAppStorePage />,
    state: "VisittheAppStore",
    sidebarProps: {
      displayText: "زيارة متجر التطبيقات",
      icon: <i className="sicon-layout-grid-rearrange"></i>
    }
  }
];

export default appRoutes;
