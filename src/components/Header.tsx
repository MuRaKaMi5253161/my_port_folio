import YouTubeIcon from '@mui/icons-material/YouTube';
// css
import './css/Header.css';


// ui
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header-menu-line">
                <span className="icon x">
                    <a href='https://twitter.com/unko____ta' target="_blank" rel="noopener noreferrer"><TwitterIcon className='Icon Twitter' /></a>
                </span>
                <span className="icon insta">
                    <a href='https://www.instagram.com/design____room/' target="_blank" rel="noopener noreferrer"><InstagramIcon className='Icon Instagram' /></a>
                </span>
                <span className="icon github">
                    <a href='https://github.com/MuRaKaMi5253161' target='_blank' rel='noopener noreferrer'><GitHubIcon className='Icon GitHub' /></a>
                </span>
                <span className="icon YouTube">
                    
                <a href='https://www.youtube.com/@design_room717' target='_blank' rel='noopener noreferrer'><YouTubeIcon className='Icon YouTube' /></a>
                </span>
            </div>
        </div>
    );
};

export default Header;