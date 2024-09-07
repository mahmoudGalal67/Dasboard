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
      icon: <ShoppingCartOutlinedIcon />
    }
  },
  {
    path: "/Requests",
    element: <RequestPage />,
    state: "requests",
    sidebarProps: {
      displayText: "الطلبات",
      icon: <ReceiptLongOutlinedIcon />
    }
  },
  {
    path: "/Clients",
    element: <ClientsPage/>,
    state: "clients",
    sidebarProps: {
      displayText: "العملاء",
      icon: <PeopleOutlinedIcon />
    }
  },
  {
    path: "/Reports",
    element: <ReportsPage/>,
    state: "reports",
    sidebarProps: {
      displayText: "التقارير",
      icon: <BarChartOutlinedIcon />
    }
  },
  {
    path: "/QuestionsAndReviews",
    element: <QuestionAndReviewPage />,
    state: "questionsandreviews",
    sidebarProps: {
      displayText: "الأسئلة والتقييمات",
      icon: <QuestionAnswerOutlinedIcon />
    }
  },
  {
    path: "/ProfilePages",
    element: <ProfilePage />,
    state: "profilepages",
    sidebarProps: {
      displayText: "الصفحات التعريفية",
      icon: <AccountCircleOutlinedIcon />
    }
  },
  {
    path: "/MarketingTools",
    element: <MarketingToolsPage />,
    state: "marketingtools",
    sidebarProps: {
      displayText: "الإدوات التسويقية",
      icon: <CampaignOutlinedIcon />
    }
  },
  {
    path: "/StorePackage",
    element: <StorePackagePage />,
    state: "StorePackage",
    sidebarProps: {
      displayText: "باقة المتجر",
      icon: <StoreIcon style={{ fontSize: '24px'}} /> 
    }
  },
  {
    path: "/StoreSettings",
    element: <StoreSettingsPage />,
    state: "StoreSettings",
    sidebarProps: {
      displayText: "اعدادات المتجر",
      icon: <SettingsIcon style={{ fontSize: '24px'}} />  
    }
  },
  {
    path: "/WalletAndBills",
    element: <WalletAndBillsPage />,
    state: "WalletAndBills",
    sidebarProps: {
      displayText: "المحفظة والفواتير",
      icon: <AccountBalanceWalletIcon style={{ fontSize: '24px'}} /> 
    }
  },
  {
    path: "/StoreDesign",
    element: <StoreDesignPage />,
    state: "StoreDesign",
    sidebarProps: {
      displayText: "تصميم المتجر",
      icon: <DesignServicesIcon style={{ fontSize: '24px'}} /> 
    }
  },
  {
    path: "/StoreMaker",
    element: <StoreMakerPage />,
    state: "StoreMaker",
    sidebarProps: {
      displayText: "صانع المتجر",
      icon: <BuildIcon style={{ fontSize: '24px' }} /> 
    }
  },
  {
    path: "/InstalledApplications",
    element: <InstalledApplicationsPage />,
    state: "InstalledApplications",
    sidebarProps: {
      displayText: "التطبيقات المثبتة",
      icon: <AppsIcon style={{ fontSize: '24px'}} />
    }
  },
  {
    path: "/VisittheAppStore",
    element: <VisitTheAppStorePage />,
    state: "VisittheAppStore",
    sidebarProps: {
      displayText: "زيارة متجر التطبيقات",
      icon: <ShoppingCartIcon style={{ fontSize: '24px' }} />
    }
  }
];

export default appRoutes;
