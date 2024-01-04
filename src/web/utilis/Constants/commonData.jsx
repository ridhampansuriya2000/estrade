import React from "react";
import WaterfallChartSharpIcon from '@mui/icons-material/WaterfallChartSharp';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PausePresentationIcon from '@mui/icons-material/PausePresentation';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Group from "../../../assets/Images/Group.jpg"
import ProgressiveComponent from "../../components/Dashboard/TabsComponent/ProgressiveComponent";
import Account from "../../components/Dashboard/Account"
import ProgressiveObjective from "../../components/Dashboard/ProgressiveObjective"
import AccountInfo from "../../components/Dashboard/AccountInfo";


export const dashboardTabs = [
    {name: 'Progressive Objective', component: ProgressiveComponent},
    {name: 'Advanced insights', component: Account},
    {name: 'Trading Jounal', component: ProgressiveObjective},
    {name: 'AccountInfo', component: AccountInfo},
];
export const dashboardStokesHeader = ['NAME', 'BRAND', 'PRICE', 'CHANGE', 'CHANGE%'];
export const accountAnalysis = [
    {name: 'Genecol Statistics', component: ProgressiveComponent},
    {name: 'Account Analysis', component: ProgressiveComponent}]
export const accountAnalysisNew = [
    {name: "Advanced Statistics", icon: <WaterfallChartSharpIcon/>},
    {name: "Trades by Lots", icon: <SignalCellularAltIcon/>},
];

export const TradingJournal = [
    {name: "Long/Short Balance", icon: <img src={Group}/>},
    {name: "Result by days", icon: <TurnedInNotIcon/>},
    {name: "Long/Short Comparision", icon: <CenterFocusWeakIcon/>},
    {name: "Trades days Analysis", icon: <TrendingUpIcon/>},
    {name: "Results by Position Size", icon: <PausePresentationIcon/>},
    {name: "Results by Trade Duration", icon: <AccessAlarmIcon/>},
    {name: "Results by Open Hour", icon: <AccessTimeIcon/>},
];
