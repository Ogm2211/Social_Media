import Feed from "../../components/feed/Feed";
import Rigthbar from "../../components/rightbar/Rigthbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css"

export default function Home() {
  return (
    <>
       <Topbar/>
       <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rigthbar/>
       </div>
       

    </>
  )
}
