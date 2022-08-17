import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
                <RssFeedIcon className="sidebarIcon"/>
                <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
                <RssFeedIcon className="sidebarIcon"/>
                <span className="sidebarListItemText">Feed</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className='sidebarHr' />
          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img src="/assets/person/1.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sidebarFriendName">Ozgur</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/1.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sidebarFriendName">Ozgur</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/1.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sidebarFriendName">Ozgur</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/1.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sidebarFriendName">Ozgur</span>
            </li>
          </ul>

        </div>
      
      </div>
  )
}
