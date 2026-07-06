import { Link } from "react-router-dom";

function Footer () {
    return(
        <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm px-margin py-4 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-400 font-medium">
            <div className="mb-2 sm:mb-0">
                AiEDESWatch © 2026. Predictive Dengue Alerts for Malaysia.
            </div>
            <Link to="/help" className="flex items-center uppercase tracking-widest font-bold hover:text-gray-600 transition-colors">
                Contact Us
            </Link>
        </footer>
    )

}

export default Footer