import { Card, CardImg, CardTitle, CardText, CardImgOverlay } from 'reactstrap';
import "./header.css";

function Header(){
    return (
        <div className="Header">
            <div className="header-title">
                <h2>Pet Finder</h2>
                <h5>Pets Available for Adoption Nearby</h5>
            </div>
            <div className="header-image">
                <img src="https://www.maricopa.gov/ImageRepository/Document?documentID=53374" />
            </div>
        </div>
    );
};

export default Header;