// import React from 'react'; 

function Group(props){
        return(
           <div className="Group__container">
              <div>
                 <div className="member">is a member</div>
                 <div className="member__group">all user<br/>{props.user.users.permissionGroup}</div>
                 <span>Select All</span> <span>Unselect All</span>
              </div>
              <b className="Memarrow"> &#8592;<br/>
              &#8594;
              </b>
              <div>
                 <div className="member">is a member</div>
                 <div className="member__group">OPS<br/>Admin<br/>Basic<br/>Sales</div>
                 <span>Select All</span> <span>Unselect All</span>
              </div>
           </div>
        )      
    }
     export default Group; 