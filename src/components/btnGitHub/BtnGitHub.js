
import './style.css';

const BtnGitHub = ({ link }) => {
    return (
        <a href={link} target="_blank" rel='noreferrer' className="btn-outline">

            <span>See the project</span>
        </a>
    );
}

export default BtnGitHub;