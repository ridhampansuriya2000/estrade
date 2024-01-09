import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WifiTetheringErrorRoundedIcon from '@mui/icons-material/WifiTetheringErrorRounded';
import trade from "../../../assets/Images/trade.svg"
import dashboard from "../../../assets/Images/dashboard.svg"
import tradeSetting from "../../../assets/Images/tradeSetting.svg"
import round from "../../../assets/Images/round.svg"
import wallet from "../../../assets/Images/wallet.svg"
import stems from "../../../assets/Images/stems.svg"


export const LayoutPath = [
    {
        name: "Account",
        route: '/account',
        Icon: dashboard,
        check: true,
    },
    {
        name: "Dashboard",
        route: '/dashboard',
        Icon: round,
        check: true,
    },
    {
        name: "Wallet",
        route: '/wallet',
        Icon: wallet,
        check: true,
    },
    {
        name: "Trade",
        route: '/trade',
        Icon: trade,
        check: true,
    },
    {
        name: "TradeSetting",
        route: '/tradeSetting',
        Icon: tradeSetting,
        check: true,
    },
    {
        name: "Stems",
        route: '/stems',
        Icon: stems,
        check: true,
    },
];
