import zen from "@/assets/icons/sidebar/zen.svg";
import swim from "@/assets/icons/sidebar/swim.svg";
import bike from "@/assets/icons/sidebar/bike.svg";
import dumbbell from "@/assets/icons/sidebar/dumbbell.svg";
import "./styles.scss";


function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><img src={zen} alt="icon zen" /></li>
                <li><img src={swim} alt="icon nage" /></li>
                <li><img src={bike} alt="icon velo" /></li>
                <li><img src={dumbbell} alt="icon haltere" /></li>
            </ul>
            <div className="copyright">
                <p>Copyright, SportSee 2020</p>
            </div>
        </div>
    )
}

export default Sidebar;