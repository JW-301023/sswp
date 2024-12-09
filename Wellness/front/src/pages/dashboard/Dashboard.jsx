import React, { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
// import axios from "axios";
import './dashboard.css'
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetRow from "../../components/widgets/widgetRow/WidgetRow";
import WidgetCol from "../../components/widgets/widgetCol/WidgetCol";

export default function Dashboard() {
    const location = useLocation();
    const [keyword, setKeyword] = useState("");
    const [loading, setLoading] = useState(true); // 로딩 상태를 관리하는 state

    
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const keywordFromURL = params.get("keyword");

        if (keywordFromURL) {
            setKeyword(keywordFromURL);
        }

        // 키워드가 설정되면 로딩 상태를 false로 변경
        if (keywordFromURL || keyword) {
            setLoading(false);
        }
    }, [location, keyword]);

    // 로딩 중일 때 보여줄 UI
    if (loading) {
        return (
            <div className="loading-container">
                <PropagateLoader className="loading" color="#DAFF7C" size={20} />
            </div>
        );
    }


    return (
        <div className="dashboard">
            <div className="header-container">
                <div className="widgets-container">
                    <FeaturedInfo keyword={keyword} />
                    <WidgetRow keyword={keyword} />
                </div>
            </div>
            <div className="footer-container">
                <div className="row-container">
                    <WidgetCol keyword={keyword} />
                </div>
            </div>
        </div>
    )
}