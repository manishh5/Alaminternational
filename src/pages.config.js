/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */

import CustomerReviews from './pages/CustomerReviews';
import ERPAccounting from './pages/ERPAccounting';
import Home from './pages/Home';
import TaxServices from './pages/TaxServices';
import NetworkServices from './pages/NetworkServices';
import CashServices from './pages/CashServices';
import TouristTransport from './pages/TouristTransport';
import Construction from './pages/Construction';
import WasteRecycling from './pages/WasteRecycling';
import CryptoExchange from './pages/CryptoExchange';
import Textile from './pages/Textile';


export const PAGES = {
    "CustomerReviews": CustomerReviews,
    "ERPAccounting": ERPAccounting,
    "Home": Home,
    "TaxServices": TaxServices,
    "NetworkServices": NetworkServices,
    "CashServices": CashServices,
    "TouristTransport": TouristTransport,
    "Construction": Construction,
    "WasteRecycling": WasteRecycling,
    "CryptoExchange": CryptoExchange,
    "Textile": Textile,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
};