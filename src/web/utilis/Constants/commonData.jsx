import React from "react";
import ProgressiveComponent from "../../components/Dashboard/TabsComponent/ProgressiveComponent";
import Account from "../../components/Dashboard/Account"
import WaterfallChartSharpIcon from '@mui/icons-material/WaterfallChartSharp';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

export const dashboardTabs = [
    {name: 'Progressive Objective', component: ProgressiveComponent},
    {name: 'Advanced insights', component: Account},
    {name: 'Trading Jounal', component: ProgressiveComponent},
    {name: 'Account Info', component: ProgressiveComponent},
];
export const dashboardStokesHeader = ['NAME', 'BRAND', 'PRICE', 'CHANGE', 'CHANGE%'];
export const accountAnalysis = [
    { name: 'Genecol Statistics', component: ProgressiveComponent },
    { name: 'Account Analysis', component: ProgressiveComponent }]
export const accountAnalysisNew = [
    { name: "Advanced Statistics", icon: <WaterfallChartSharpIcon /> },
    { name: "Trades by Lots", icon: <SignalCellularAltIcon /> },
];
