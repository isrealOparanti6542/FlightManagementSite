 import React from "react";
 import { Link } from 'react-router-dom';
 
   function Asettings(){
    
    return (
      <div className="Admin">
         <div className="Flist"><span>Settings</span></div>   
           <div className="Settings-title"><span>General Settings</span></div>   
              <div className="General_Settings G-one">
                <div><i className="fa fa-user-tie fa-2x"></i>
                  <p>Manage Trios Account</p>
                </div>
                <div><Link to="/url/to/SettingsTab"><i className="fa fa-cog fa-2x"></i></Link>
                   <p>General Settings</p>
                </div>
                <div><i className="fa fa-users-cog fa-2x"></i>
                   <p>Users</p>
                </div>
                <div><i className="fa fa-key fa-2x"></i>
                  <p>Priveledges</p>
                </div>
                <div><svg width="46" height="46" viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35 49.5C32.9233 49.5 30.8932 48.8842 29.1665 47.7304C27.4398 46.5767 26.094 44.9368 25.2993 43.0182C24.5045 41.0995 24.2966 38.9883 24.7018 36.9515C25.1069 34.9147 26.1069 33.0438 27.5754 31.5754C29.0438 30.1069 30.9148 29.1069 32.9516 28.7017C34.9884 28.2966 37.0996 28.5045 39.0182 29.2992C40.9368 30.094 42.5767 31.4398 43.7304 33.1665C44.8842 34.8932 45.5 36.9233 45.5 39C45.4968 41.7838 44.3895 44.4526 42.421 46.421C40.4526 48.3895 37.7838 49.4967 35 49.5ZM35 32C33.6155 32 32.2622 32.4105 31.111 33.1797C29.9599 33.9489 29.0627 35.0421 28.5328 36.3212C28.003 37.6003 27.8644 39.0077 28.1345 40.3656C28.4046 41.7235 29.0713 42.9708 30.0503 43.9497C31.0292 44.9287 32.2765 45.5954 33.6344 45.8655C34.9922 46.1356 36.3997 45.997 37.6788 45.4671C38.9579 44.9373 40.0511 44.0401 40.8203 42.889C41.5895 41.7378 42 40.3845 42 39C41.9977 37.1442 41.2594 35.365 39.9472 34.0528C38.6349 32.7405 36.8558 32.0023 35 32ZM7 35.5H21V39H7V35.5ZM7 25H24.5V28.5H7V25Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                        <path d="M21 46H3.5V3.99998H17.5V14.5C17.5028 15.4274 17.8724 16.316 18.5282 16.9718C19.184 17.6276 20.0726 17.9972 21 18H31.5V23.25H35V14.5C35.0062 14.27 34.9624 14.0414 34.8718 13.8299C34.7812 13.6185 34.6458 13.4291 34.475 13.275L22.225 1.02498C22.0709 0.854088 21.8816 0.718648 21.6701 0.62801C21.4586 0.537371 21.23 0.493692 21 0.499985H3.5C2.57259 0.502754 1.68396 0.872393 1.02819 1.52817C0.372408 2.18395 0.00276977 3.07258 0 3.99998V46C0.00276977 46.9274 0.372408 47.816 1.02819 48.4718C1.68396 49.1276 2.57259 49.4972 3.5 49.5H21V46ZM21 4.69998L30.8 14.5H21V4.69998Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                    </svg>
                    <p>Document Setup</p>        
                </div>
                <div><i className="fa fa-trash-can fa-2x"></i>
                    <p>Document Setup</p>
                </div>
                <div><i className="fas fa-puzzle-piece fa-2x"></i>
                   <p>Add-ons</p>
                </div>
                <div><i className="fas fa-envelope fa-2x"></i>
                <p>Email Templates</p>
                </div>
                <div><svg width="46" height="46" viewBox="0 0 36 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 21.5C16.6155 21.5 15.2622 21.0895 14.111 20.3203C12.9599 19.5511 12.0627 18.4579 11.5328 17.1788C11.003 15.8997 10.8644 14.4922 11.1345 13.1344C11.4046 11.7765 12.0713 10.5292 13.0503 9.55025C14.0292 8.57128 15.2765 7.9046 16.6344 7.6345C17.9922 7.36441 19.3997 7.50303 20.6788 8.03284C21.9579 8.56266 23.0511 9.45986 23.8203 10.611C24.5895 11.7622 25 13.1155 25 14.5C24.9945 16.3548 24.2552 18.1321 22.9436 19.4436C21.6321 20.7552 19.8548 21.4945 18 21.5ZM18 11C17.3078 11 16.6311 11.2053 16.0555 11.5899C15.4799 11.9744 15.0313 12.5211 14.7664 13.1606C14.5015 13.8001 14.4322 14.5039 14.5672 15.1828C14.7023 15.8617 15.0356 16.4854 15.5251 16.9749C16.0146 17.4644 16.6382 17.7977 17.3172 17.9327C17.9961 18.0678 18.6999 17.9985 19.3394 17.7336C19.9789 17.4687 20.5256 17.0201 20.9101 16.4445C21.2947 15.8689 21.5 15.1922 21.5 14.5C21.4972 13.5726 21.1276 12.684 20.4718 12.0282C19.816 11.3724 18.9274 11.0028 18 11Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                    <path d="M32 0.5H4C3.07203 0.500927 2.18233 0.869973 1.52615 1.52615C0.869973 2.18233 0.500927 3.07203 0.5 4V46C0.500927 46.928 0.869973 47.8177 1.52615 48.4739C2.18233 49.13 3.07203 49.4991 4 49.5H32C32.928 49.4991 33.8177 49.13 34.4739 48.4739C35.13 47.8177 35.4991 46.928 35.5 46V4C35.4991 3.07203 35.13 2.18233 34.4739 1.52615C33.8177 0.869973 32.928 0.500927 32 0.5ZM11 39V28.5C10.986 28.2665 11.0216 28.0327 11.1046 27.8141C11.1876 27.5954 11.316 27.3968 11.4814 27.2314C11.6468 27.066 11.8454 26.9376 12.0641 26.8546C12.2827 26.7716 12.5165 26.736 12.75 26.75H23.25C23.4835 26.736 23.7173 26.7716 23.9359 26.8546C24.1546 26.9376 24.3532 27.066 24.5186 27.2314C24.684 27.3968 24.8124 27.5954 24.8954 27.8141C24.9784 28.0327 25.014 28.2665 25 28.5V39H21.5V46H14.5V39H11ZM25 46V42.5C25.9274 42.4972 26.816 42.1276 27.4718 41.4718C28.1276 40.816 28.4972 39.9274 28.5 39V28.5C28.5128 27.807 28.3858 27.1186 28.1265 26.4758C27.8672 25.8331 27.481 25.2492 26.9909 24.7591C26.5008 24.269 25.9169 23.8828 25.2742 23.6235C24.6314 23.3642 23.943 23.2372 23.25 23.25H12.75C12.057 23.2372 11.3686 23.3642 10.7258 23.6235C10.0831 23.8828 9.49921 24.269 9.00913 24.7591C8.51904 25.2492 8.13281 25.8331 7.87351 26.4758C7.61421 27.1186 7.48718 27.807 7.5 28.5V39C7.50277 39.9274 7.87241 40.816 8.52819 41.4718C9.18396 42.1276 10.0726 42.4972 11 42.5V46H4V4H32V46H25Z"  fill="rgba(6, 73, 6, 0.75)"></path>
               </svg>
                    <p>Document Manager</p>
               </div>
               </div>
                 <div className="Settings-title"><span>FLEET</span></div>
                 <div className="General_Settings G-two">    
                    <div><i className="fa fa-plane fa-2x"></i>
                        <p>Fleet</p>
                    </div>
                    <div><svg width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.42501 27.475C5.87939 27.8158 6.43204 28 7.00001 28C7.40693 27.9967 7.80771 27.9003 8.17168 27.7183C8.53566 27.5364 8.85319 27.2735 9.10001 26.95C10.0781 25.6459 11.3463 24.5875 12.8043 23.8585C14.2623 23.1295 15.8699 22.75 17.5 22.75C19.1301 22.75 20.7378 23.1295 22.1958 23.8585C23.6537 24.5875 24.922 25.6459 25.9 26.95H25.9219L26.075 27.125C26.075 27.1469 26.0969 27.1469 26.1188 27.1688L26.25 27.3L26.3375 27.3875L26.425 27.4531C26.4308 27.4531 26.4364 27.4554 26.4405 27.4595C26.4446 27.4636 26.4469 27.4692 26.4469 27.475L26.5125 27.5188L26.6438 27.6063L26.7094 27.65L26.8844 27.7156C26.8844 27.7375 26.9063 27.7375 26.9281 27.7375L27.125 27.825H27.1469C27.3001 27.8918 27.4622 27.936 27.6281 27.9563H28.3281L28.525 27.9125H28.6125C28.7942 27.8663 28.9702 27.8003 29.1375 27.7156L29.225 27.6719L29.3781 27.5844L29.4875 27.5188L29.575 27.4531L29.6188 27.4094L29.7063 27.3438L29.8594 27.2125L29.925 27.1469L30.0781 26.95H30.1C31.0781 25.6459 32.3463 24.5875 33.8043 23.8585C35.2623 23.1295 36.8699 22.75 38.5 22.75C40.1301 22.75 41.7378 23.1295 43.1958 23.8585C44.6537 24.5875 45.922 25.6459 46.9 26.95C47.3177 27.507 47.9396 27.8752 48.6288 27.9736C49.318 28.0721 50.0181 27.8927 50.575 27.475C51.132 27.0573 51.5002 26.4354 51.5986 25.7462C51.6971 25.057 51.5177 24.357 51.1 23.8C49.6369 21.8486 47.7429 20.2616 45.5656 19.1625C46.5186 17.8579 47.0918 16.3149 47.2217 14.7045C47.3516 13.0941 47.033 11.4793 46.3014 10.0388C45.5698 8.59833 44.4537 7.38855 43.0767 6.5435C41.6997 5.69846 40.1156 5.25116 38.5 5.25116C36.8844 5.25116 35.3003 5.69846 33.9233 6.5435C32.5464 7.38855 31.4302 8.59833 30.6986 10.0388C29.967 11.4793 29.6485 13.0941 29.7783 14.7045C29.9082 16.3149 30.4814 17.8579 31.4344 19.1625C30.1906 19.7865 29.0356 20.5736 28 21.5031C26.9644 20.5736 25.8095 19.7865 24.5656 19.1625C25.5186 17.8579 26.0918 16.3149 26.2217 14.7045C26.3516 13.0941 26.033 11.4793 25.3014 10.0388C24.5698 8.59833 23.4537 7.38855 22.0767 6.5435C20.6997 5.69846 19.1156 5.25116 17.5 5.25116C15.8844 5.25116 14.3003 5.69846 12.9233 6.5435C11.5464 7.38855 10.4302 8.59833 9.69859 10.0388C8.96698 11.4793 8.64846 13.0941 8.77833 14.7045C8.9082 16.3149 9.48139 17.8579 10.4344 19.1625C8.25712 20.2616 6.36311 21.8486 4.90001 23.8C4.48229 24.357 4.30294 25.057 4.40139 25.7462C4.49985 26.4354 4.86806 27.0573 5.42501 27.475ZM35 14C35 13.3078 35.2053 12.6311 35.5899 12.0555C35.9745 11.4799 36.5211 11.0313 37.1606 10.7664C37.8002 10.5015 38.5039 10.4322 39.1828 10.5673C39.8618 10.7023 40.4854 11.0356 40.9749 11.5251C41.4644 12.0146 41.7977 12.6383 41.9328 13.3172C42.0678 13.9961 41.9985 14.6999 41.7336 15.3394C41.4687 15.9789 41.0201 16.5256 40.4445 16.9101C39.8689 17.2947 39.1922 17.5 38.5 17.5C37.5718 17.5 36.6815 17.1313 36.0251 16.4749C35.3688 15.8185 35 14.9283 35 14ZM14 14C14 13.3078 14.2053 12.6311 14.5899 12.0555C14.9745 11.4799 15.5211 11.0313 16.1606 10.7664C16.8002 10.5015 17.5039 10.4322 18.1828 10.5673C18.8618 10.7023 19.4854 11.0356 19.9749 11.5251C20.4644 12.0146 20.7977 12.6383 20.9328 13.3172C21.0678 13.9961 20.9985 14.6999 20.7336 15.3394C20.4687 15.9789 20.0201 16.5256 19.4445 16.9101C18.8689 17.2947 18.1922 17.5 17.5 17.5C16.5718 17.5 15.6815 17.1313 15.0251 16.4749C14.3688 15.8185 14 14.9283 14 14ZM45.5656 42.7875C46.5186 41.4829 47.0918 39.9399 47.2217 38.3295C47.3516 36.7191 47.033 35.1043 46.3014 33.6638C45.5698 32.2233 44.4537 31.0135 43.0767 30.1685C41.6997 29.3235 40.1156 28.8762 38.5 28.8762C36.8844 28.8762 35.3003 29.3235 33.9233 30.1685C32.5464 31.0135 31.4302 32.2233 30.6986 33.6638C29.967 35.1043 29.6485 36.7191 29.7783 38.3295C29.9082 39.9399 30.4814 41.4829 31.4344 42.7875C30.1906 43.4115 29.0356 44.1986 28 45.1281C26.9644 44.1986 25.8095 43.4115 24.5656 42.7875C25.5186 41.4829 26.0918 39.9399 26.2217 38.3295C26.3516 36.7191 26.033 35.1043 25.3014 33.6638C24.5698 32.2233 23.4537 31.0135 22.0767 30.1685C20.6997 29.3235 19.1156 28.8762 17.5 28.8762C15.8844 28.8762 14.3003 29.3235 12.9233 30.1685C11.5464 31.0135 10.4302 32.2233 9.69859 33.6638C8.96698 35.1043 8.64846 36.7191 8.77833 38.3295C8.9082 39.9399 9.48139 41.4829 10.4344 42.7875C8.25712 43.8866 6.36311 45.4736 4.90001 47.425C4.60751 47.815 4.4294 48.2787 4.38562 48.7643C4.34184 49.2498 4.43413 49.7379 4.65214 50.1739C4.87015 50.61 5.20528 50.9767 5.61997 51.233C6.03465 51.4893 6.51252 51.625 7.00001 51.625C7.40693 51.6217 7.80771 51.5253 8.17168 51.3433C8.53566 51.1614 8.85319 50.8985 9.10001 50.575C10.0781 49.2709 11.3463 48.2125 12.8043 47.4835C14.2623 46.7545 15.8699 46.375 17.5 46.375C19.1301 46.375 20.7378 46.7545 22.1958 47.4835C23.6537 48.2125 24.922 49.2709 25.9 50.575H25.9219L26.075 50.75C26.075 50.7616 26.0796 50.7727 26.0878 50.7809C26.096 50.7891 26.1072 50.7938 26.1188 50.7938L26.25 50.925L26.3375 51.0125L26.425 51.0781H26.4469L26.5125 51.1219L26.6438 51.2094L26.7094 51.2531L26.8844 51.3188L26.9281 51.3625L27.125 51.4281H27.1469C27.3001 51.4949 27.4622 51.5391 27.6281 51.5594H28.3281L28.525 51.5156H28.6125L29.1375 51.3188L29.225 51.275L29.3781 51.1875L29.4875 51.1219L29.575 51.0563L29.6188 51.0125L29.7063 50.9469L29.8594 50.8156L29.925 50.75L30.0781 50.5531H30.1C31.0781 49.2491 32.3463 48.1906 33.8043 47.4616C35.2623 46.7327 36.8699 46.3531 38.5 46.3531C40.1301 46.3531 41.7378 46.7327 43.1958 47.4616C44.6537 48.1906 45.922 49.2491 46.9 50.5531C47.3177 51.1101 47.9396 51.4783 48.6288 51.5767C49.318 51.6752 50.0181 51.4958 50.575 51.0781C51.132 50.6604 51.5002 50.0386 51.5986 49.3494C51.6971 48.6602 51.5177 47.9601 51.1 47.4031C49.6344 45.4597 47.7406 43.8803 45.5656 42.7875ZM14 37.625C14 36.9328 14.2053 36.2561 14.5899 35.6805C14.9745 35.1049 15.5211 34.6563 16.1606 34.3914C16.8002 34.1265 17.5039 34.0572 18.1828 34.1923C18.8618 34.3273 19.4854 34.6606 19.9749 35.1501C20.4644 35.6396 20.7977 36.2633 20.9328 36.9422C21.0678 37.6211 20.9985 38.3249 20.7336 38.9644C20.4687 39.6039 20.0201 40.1506 19.4445 40.5351C18.8689 40.9197 18.1922 41.125 17.5 41.125C16.5718 41.125 15.6815 40.7563 15.0251 40.0999C14.3688 39.4435 14 38.5533 14 37.625ZM35 37.625C35 36.9328 35.2053 36.2561 35.5899 35.6805C35.9745 35.1049 36.5211 34.6563 37.1606 34.3914C37.8002 34.1265 38.5039 34.0572 39.1828 34.1923C39.8618 34.3273 40.4854 34.6606 40.9749 35.1501C41.4644 35.6396 41.7977 36.2633 41.9328 36.9422C42.0678 37.6211 41.9985 38.3249 41.7336 38.9644C41.4687 39.6039 41.0201 40.1506 40.4445 40.5351C39.8689 40.9197 39.1922 41.125 38.5 41.125C37.5718 41.125 36.6815 40.7563 36.0251 40.0999C35.3688 39.4435 35 38.5533 35 37.625Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                    </svg>
                <p>Aircraft Crew Position</p>
                </div> 
                <div><svg width="46" height="48" viewBox="0 0 46 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36.75 37.25L45.5 40.75V37.25L36.75 32.875V28.5C36.75 28.0359 36.5656 27.5908 36.2374 27.2626C35.9092 26.9344 35.4641 26.75 35 26.75C34.5359 26.75 34.0908 26.9344 33.7626 27.2626C33.4344 27.5908 33.25 28.0359 33.25 28.5V32.875L24.5 37.25V40.75L33.25 37.25V43.375L29.75 46V47.75L35 46L40.25 47.75V46L36.75 43.375V37.25Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.5 4H31.5V0.5H28V4H14V0.5H10.5V4H3.5C2.57174 4 1.6815 4.36875 1.02513 5.02513C0.368749 5.6815 0 6.57174 0 7.5V42.5C0 43.4283 0.368749 44.3185 1.02513 44.9749C1.6815 45.6312 2.57174 46 3.5 46H21V42.5H3.5V7.5H10.5V11H14V7.5H28V11H31.5V7.5H38.5V19.75H42V7.5C42 6.57174 41.6312 5.6815 40.9749 5.02513C40.3185 4.36875 39.4283 4 38.5 4Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                </svg>
                <p>Fleet Documents Setup</p>
                </div>
                <div><svg width="46" height="46" viewBox="0 0 52 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 3C16.6667 1.71134 15.622 0.666667 14.3334 0.666667C13.0447 0.666667 12 1.71134 12 3H16.6667ZM12 12.3333C12 13.622 13.0447 14.6667 14.3334 14.6667C15.622 14.6667 16.6667 13.622 16.6667 12.3333H12ZM27.1667 25.1667C28.4553 25.1667 29.5 24.122 29.5 22.8333C29.5 21.5447 28.4553 20.5 27.1667 20.5V25.1667ZM14.3334 20.5C13.0447 20.5 12 21.5447 12 22.8333C12 24.122 13.0447 25.1667 14.3334 25.1667V20.5ZM37.6667 34.5C38.9554 34.5 40 33.4553 40 32.1667C40 30.878 38.9554 29.8333 37.6667 29.8333V34.5ZM14.3334 29.8333C13.0447 29.8333 12 30.878 12 32.1667C12 33.4553 13.0447 34.5 14.3334 34.5V29.8333ZM40 3C40 1.71134 38.9554 0.666667 37.6667 0.666667C36.378 0.666667 35.3334 1.71134 35.3334 3H40ZM35.3334 12.3333C35.3334 13.622 36.378 14.6667 37.6667 14.6667C38.9554 14.6667 40 13.622 40 12.3333H35.3334ZM5.00002 10H47V5.33333H5.00002V10ZM47 10L47 10H51.6667C51.6667 7.42267 49.5774 5.33333 47 5.33333V10ZM47 10V40.3333H51.6667V10H47ZM47 40.3333L47 40.3333V45C49.5774 45 51.6667 42.9107 51.6667 40.3333H47ZM47 40.3333H5.00002V45H47V40.3333ZM5.00002 40.3333V40.3333H0.333354C0.333354 42.9107 2.42269 45 5.00002 45V40.3333ZM5.00002 40.3333V10H0.333354V40.3333H5.00002ZM5.00002 10V10V5.33333C2.42269 5.33333 0.333354 7.42267 0.333354 10H5.00002ZM12 3V12.3333H16.6667V3H12ZM27.1667 20.5H14.3334V25.1667H27.1667V20.5ZM37.6667 29.8333H14.3334V34.5H37.6667V29.8333ZM35.3334 3V12.3333H40V3H35.3334Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                </svg>
                   <p>Schedule Export & Import</p>
                </div>
                </div>
                <div className="Settings-title"><span>CREW</span></div>
                <div className="General_Settings G-three">    
                <div><svg width="46" height="46" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.5 39V35.5H40.8232C40.5976 34.4045 40.1626 33.3629 39.5423 32.4322L42.1497 29.8247L39.6753 27.3503L37.0677 29.9578C36.1371 29.3374 35.0955 28.9024 34 28.6768V25H30.5V28.6768C29.4045 28.9024 28.3629 29.3374 27.4322 29.9578L24.8247 27.3503L22.3503 29.8247L24.9578 32.4322C24.3374 33.3629 23.9024 34.4045 23.6768 35.5H20V39H23.6768C23.9024 40.0955 24.3374 41.1371 24.9578 42.0677L22.3503 44.6753L24.8247 47.1497L27.4322 44.5423C28.3629 45.1626 29.4045 45.5976 30.5 45.8232V49.5H34V45.8232C35.0955 45.5976 36.1371 45.1626 37.0677 44.5423L39.6753 47.1497L42.1497 44.6753L39.5423 42.0677C40.1626 41.1371 40.5976 40.0955 40.8232 39H44.5ZM32.25 42.5C31.2116 42.5 30.1966 42.1921 29.3333 41.6152C28.4699 41.0383 27.797 40.2184 27.3996 39.2591C27.0023 38.2998 26.8983 37.2442 27.1009 36.2258C27.3034 35.2074 27.8035 34.2719 28.5377 33.5377C29.2719 32.8035 30.2074 32.3034 31.2258 32.1009C32.2442 31.8983 33.2998 32.0023 34.2591 32.3996C35.2184 32.797 36.0383 33.4699 36.6152 34.3333C37.1921 35.1966 37.5 36.2116 37.5 37.25C37.4986 38.642 36.945 39.9765 35.9608 40.9608C34.9765 41.945 33.642 42.4986 32.25 42.5Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                <path d="M35.75 5.75H30.5V4C30.4972 3.07259 30.1276 2.18396 29.4718 1.52819C28.816 0.872408 27.9274 0.50277 27 0.5H13C12.0726 0.50277 11.184 0.872408 10.5282 1.52819C9.87241 2.18396 9.50277 3.07259 9.5 4V5.75H4.25C3.32259 5.75277 2.43396 6.12241 1.77819 6.77819C1.12241 7.43396 0.75277 8.32259 0.75 9.25V46C0.75277 46.9274 1.12241 47.816 1.77819 48.4718C2.43396 49.1276 3.32259 49.4972 4.25 49.5H16.5V46H4.25V9.25H9.5V14.5H30.5V9.25H35.75V19.75H39.25V9.25C39.2472 8.32259 38.8776 7.43396 38.2218 6.77819C37.566 6.12241 36.6774 5.75277 35.75 5.75ZM27 11H13V4H27V11Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                    </svg>
                        <p>Duties Setup</p>
                    </div>
                        <div><svg width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.25 29.75L44.1525 37.31L52.5 38.5L46.375 44.0422L49 52.5L40.25 47.614L31.5 52.5L34.125 44.0422L28 38.5L36.575 37.31L40.25 29.75Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                        <path d="M43.75 8.75H38.5V7C38.4972 6.07259 38.1276 5.18396 37.4718 4.52819C36.816 3.87241 35.9274 3.50277 35 3.5H21C20.0726 3.50277 19.184 3.87241 18.5282 4.52819C17.8724 5.18396 17.5028 6.07259 17.5 7V8.75H12.25C11.3226 8.75277 10.434 9.12241 9.77819 9.77819C9.12241 10.434 8.75277 11.3226 8.75 12.25V49C8.75277 49.9274 9.12241 50.816 9.77819 51.4718C10.434 52.1276 11.3226 52.4972 12.25 52.5H24.5V49H12.25V12.25H17.5V17.5H38.5V12.25H43.75V24.5H47.25V12.25C47.2472 11.3226 46.8776 10.434 46.2218 9.77819C45.566 9.12241 44.6774 8.75277 43.75 8.75ZM35 14H21V7H35V14Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                    </svg>
                <p>Ratings</p>
               </div> 
               <div><svg width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_9_278)">
                        <path d="M40.1555 38.5C39.7617 34.9515 38.174 31.642 35.6526 29.1143C33.1312 26.5865 29.8258 24.9904 26.2783 24.5876C22.7308 24.1849 19.1517 24.9994 16.1278 26.8976C13.104 28.7958 10.8147 31.6651 9.6355 35.035C6.93329 35.2562 4.42138 36.514 2.62558 38.5453C0.82977 40.5765 -0.110715 43.2236 0.000989311 45.9326C0.112694 48.6415 1.26793 51.2023 3.22487 53.0788C5.18182 54.9552 7.78876 56.002 10.5 56H40.25C42.5706 56 44.7962 55.0781 46.4372 53.4372C48.0781 51.7962 49 49.5706 49 47.25C49 44.9293 48.0781 42.7037 46.4372 41.0628C44.7962 39.4219 42.5706 38.5 40.25 38.5H40.1555Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                        <path d="M39.501 6.22298C39.7022 5.92195 39.805 5.56593 39.7953 5.204C39.7857 4.84207 39.664 4.49204 39.4471 4.20216C39.2302 3.91228 38.9287 3.69682 38.5841 3.58548C38.2396 3.47413 37.869 3.47239 37.5235 3.58048C33.8996 4.71538 30.7942 7.09602 28.7571 10.3009C26.7201 13.5057 25.8828 17.328 26.3935 21.091C27.6454 21.2127 28.8822 21.4577 30.086 21.8225C29.5455 19.5191 29.664 17.1102 30.4277 14.871C31.1914 12.6317 32.5697 10.6525 34.405 9.15949C33.7988 11.4969 33.727 13.9408 34.1948 16.3097C34.6627 18.6786 35.6582 20.9118 37.1075 22.8432C38.5567 24.7746 40.4225 26.3548 42.5661 27.4663C44.7098 28.5777 47.0764 29.192 49.49 29.2635C47.1964 30.8577 44.4354 31.6388 41.6465 31.4825C42.2135 32.592 42.679 33.7645 43.0255 34.9825C45.5525 34.8749 48.0184 34.1721 50.2225 32.9314C52.4266 31.6907 54.3066 29.9471 55.7095 27.8425C55.9107 27.5415 56.0135 27.1854 56.0039 26.8235C55.9942 26.4616 55.8725 26.1115 55.6556 25.8217C55.4387 25.5318 55.1372 25.3163 54.7926 25.205C54.4481 25.0936 54.0775 25.0919 53.732 25.2C51.2495 25.9792 48.5863 25.9692 46.1097 25.1713C43.6331 24.3735 41.465 22.827 39.9042 20.7452C38.3434 18.6633 37.4668 16.1486 37.3952 13.5476C37.3236 10.9467 38.0606 8.38752 39.5045 6.22298H39.501Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_9_278">
                            <rect width="56" height="56" fill="white"></rect>
                        </clipPath>
                   </defs>
                </svg>
                  <p>FTL Settings</p>
                </div>
                    <div><svg width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_9_286)">
                            <path d="M28 7C28.4641 7 28.9093 7.18437 29.2374 7.51256C29.5656 7.84075 29.75 8.28587 29.75 8.75V14C29.75 14.4641 29.5656 14.9092 29.2374 15.2374C28.9093 15.5656 28.4641 15.75 28 15.75C27.5359 15.75 27.0908 15.5656 26.7626 15.2374C26.4344 14.9092 26.25 14.4641 26.25 14V8.75C26.25 8.28587 26.4344 7.84075 26.7626 7.51256C27.0908 7.18437 27.5359 7 28 7ZM13.062 13.062C13.3902 12.7339 13.8352 12.5496 14.2992 12.5496C14.7633 12.5496 15.2083 12.7339 15.5365 13.062L18.739 16.261C19.0676 16.5896 19.2522 17.0353 19.2522 17.5C19.2522 17.9647 19.0676 18.4104 18.739 18.739C18.4104 19.0676 17.9647 19.2522 17.5 19.2522C17.0353 19.2522 16.5896 19.0676 16.261 18.739L13.062 15.5365C12.7339 15.2083 12.5496 14.7633 12.5496 14.2992C12.5496 13.8352 12.7339 13.3902 13.062 13.062ZM7 28C7 27.5359 7.18437 27.0908 7.51256 26.7626C7.84075 26.4344 8.28587 26.25 8.75 26.25H14.301C14.7651 26.25 15.2102 26.4344 15.5384 26.7626C15.8666 27.0908 16.051 27.5359 16.051 28C16.051 28.4641 15.8666 28.9093 15.5384 29.2374C15.2102 29.5656 14.7651 29.75 14.301 29.75H8.75C8.28587 29.75 7.84075 29.5656 7.51256 29.2374C7.18437 28.9093 7 28.4641 7 28ZM40.25 28C40.25 27.5359 40.4344 27.0908 40.7626 26.7626C41.0908 26.4344 41.5359 26.25 42 26.25H47.25C47.7141 26.25 48.1592 26.4344 48.4874 26.7626C48.8156 27.0908 49 27.5359 49 28C49 28.4641 48.8156 28.9093 48.4874 29.2374C48.1592 29.5656 47.7141 29.75 47.25 29.75H42C41.5359 29.75 41.0908 29.5656 40.7626 29.2374C40.4344 28.9093 40.25 28.4641 40.25 28ZM42.889 13.139C42.6465 12.8978 42.3222 12.7567 41.9804 12.7437C41.6387 12.7307 41.3045 12.8469 41.0445 13.069L26.4145 25.585C26.0775 25.8735 25.8045 26.2292 25.613 26.6293C25.4215 27.0295 25.3156 27.4652 25.3023 27.9086C25.289 28.352 25.3684 28.7933 25.5355 29.2043C25.7026 29.6152 25.9537 29.9867 26.2727 30.2949C26.5917 30.6032 26.9716 30.8414 27.3881 30.9943C27.8045 31.1472 28.2483 31.2114 28.6909 31.1828C29.1336 31.1543 29.5655 31.0335 29.9588 30.8284C30.3521 30.6232 30.6982 30.3382 30.975 29.9915L42.994 14.952C43.2031 14.6903 43.3084 14.3606 43.2896 14.0261C43.2709 13.6916 43.1295 13.3758 42.8925 13.139H42.889Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.324 55.6115C19.6978 54.9974 16.228 53.6751 13.1128 51.7201C9.9976 49.7651 7.29797 47.2157 5.16805 44.2173C0.866484 38.1619 -0.853402 30.6457 0.38675 23.3222C1.6269 15.9988 5.72551 9.46787 11.7809 5.1663C17.8363 0.864729 25.3525 -0.855157 32.676 0.384995C40 1.62515 46.5313 5.72394 50.8332 11.7797C55.1351 17.8354 56.8552 25.352 55.615 32.676C54.3749 40 50.2761 46.5313 44.2203 50.8332C38.1646 55.1351 30.648 56.8551 23.324 55.615V55.6115ZM6.9965 40.621C13.3794 36.9277 20.6256 34.9885 28 35C35.651 35 42.826 37.0475 49.0035 40.621C51.2361 36.9034 52.4419 32.6599 52.498 28.3239C52.554 23.9878 51.4581 19.7146 49.3223 15.9406C47.1865 12.1666 44.0873 9.02708 40.3412 6.84271C36.5952 4.65835 32.3364 3.50739 28 3.50739C23.6636 3.50739 19.4048 4.65835 15.6588 6.84271C11.9127 9.02708 8.81347 12.1666 6.67767 15.9406C4.54188 19.7146 3.44603 23.9878 3.50204 28.3239C3.55806 32.6599 4.76393 36.9034 6.9965 40.621Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_9_286">
                                <rect width="56" height="56" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
               <p>Per Diems Definitions</p>
            </div>
            <div><svg width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_9_293)">
                    <path d="M51.3333 5.25001H43.75V1.75001C43.7503 1.28588 43.5662 0.840636 43.2383 0.512229C42.9103 0.183821 42.4653 -0.000849833 42.0012 -0.00115925C41.537 -0.00146867 41.0918 0.182609 40.7634 0.510579C40.435 0.838549 40.2503 1.28355 40.25 1.74767V5.25001H29.75V1.75001C29.7502 1.52019 29.705 1.2926 29.6172 1.08022C29.5294 0.867844 29.4007 0.67484 29.2383 0.512229C29.0759 0.349618 28.883 0.220585 28.6708 0.132498C28.4585 0.0444107 28.231 -0.00100607 28.0012 -0.00115928C27.537 -0.0014687 27.0918 0.182609 26.7634 0.510579C26.435 0.838549 26.2503 1.28355 26.25 1.74767V5.25001H15.75V1.75001C15.7502 1.52019 15.705 1.2926 15.6172 1.08022C15.5294 0.867844 15.4007 0.67484 15.2383 0.512229C15.0759 0.349618 14.883 0.220585 14.6708 0.132498C14.4585 0.0444107 14.231 -0.00100607 14.0012 -0.00115928C13.537 -0.0014687 13.0918 0.182609 12.7634 0.510579C12.435 0.838549 12.2503 1.28355 12.25 1.74767V5.25001H4.66667C3.42939 5.25001 2.24276 5.74135 1.36766 6.61602C0.492557 7.49068 0.000618636 8.67707 0 9.91434V51.331C0 52.5687 0.491665 53.7557 1.36683 54.6308C2.242 55.506 3.42899 55.9977 4.66667 55.9977H51.3333C52.571 55.9977 53.758 55.506 54.6332 54.6308C55.5083 53.7557 56 52.5687 56 51.331V9.91434C55.9994 8.67707 55.5074 7.49068 54.6323 6.61602C53.7572 5.74135 52.5706 5.25001 51.3333 5.25001ZM52.5 51.3333C52.5 51.6424 52.3774 51.9387 52.1591 52.1575C51.9408 52.3762 51.6447 52.4994 51.3357 52.5H4.66667C4.35725 52.5 4.0605 52.3771 3.84171 52.1583C3.62292 51.9395 3.5 51.6428 3.5 51.3333V9.91667C3.50062 9.60766 3.62381 9.31151 3.84253 9.09322C4.06126 8.87494 4.35765 8.75234 4.66667 8.75234H12.25V12.2523C12.2497 12.7165 12.4338 13.1617 12.7617 13.4901C13.0897 13.8185 13.5347 14.0032 13.9988 14.0035C14.463 14.0038 14.9082 13.8197 15.2366 13.4918C15.565 13.1638 15.7497 12.7188 15.75 12.2547V8.75234H26.25V12.2523C26.2497 12.7165 26.4338 13.1617 26.7617 13.4901C27.0897 13.8185 27.5347 14.0032 27.9988 14.0035C28.463 14.0038 28.9082 13.8197 29.2366 13.4918C29.565 13.1638 29.7497 12.7188 29.75 12.2547V8.75234H40.25V12.2523C40.2497 12.7165 40.4338 13.1617 40.7617 13.4901C41.0897 13.8185 41.5347 14.0032 41.9988 14.0035C42.463 14.0038 42.9082 13.8197 43.2366 13.4918C43.565 13.1638 43.7497 12.7188 43.75 12.2547V8.75234H51.3333C51.6419 8.75296 51.9377 8.87583 52.156 9.09405C52.3742 9.31227 52.4971 9.60806 52.4977 9.91667L52.5 51.3333Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                    <path d="M12.25 21H19.25V26.25H12.25V21ZM12.25 29.75H19.25V35H12.25V29.75ZM12.25 38.5H19.25V43.75H12.25V38.5ZM24.5 38.5H31.5V43.75H24.5V38.5ZM24.5 29.75H31.5V35H24.5V29.75ZM24.5 21H31.5V26.25H24.5V21ZM36.75 38.5H43.75V43.75H36.75V38.5ZM36.75 29.75H43.75V35H36.75V29.75ZM36.75 21H43.75V26.25H36.75V21Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                </g>
                <defs>
                    <clipPath id="clip0_9_293">
                        <rect width="56" height="56" fill="white"></rect>
                    </clipPath>
                </defs>
            </svg>
                <p>Crew Currency</p>
            </div> 
            <div><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.3333 46.6667C48.0667 46.6667 49 43.5563 49 42V28H39.6667M44.3333 46.6667H11.6667C7.93333 46.6667 7 43.5563 7 42V14C7 12.7623 7.49167 11.5753 8.36683 10.7002C9.242 9.82501 10.429 9.33334 11.6667 9.33334H35C36.2377 9.33334 37.4247 9.82501 38.2998 10.7002C39.175 11.5753 39.6667 12.7623 39.6667 14V28L44.3333 46.6667ZM44.3333 46.6667C42.777 46.6667 39.6667 45.7333 39.6667 42V28L44.3333 46.6667Z" stroke="rgba(6, 73, 6, 0.75)" stroke-width="4.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M16.3333 37.3334H30.3333H16.3333ZM28 23.3334C28 24.571 27.5083 25.758 26.6332 26.6332C25.758 27.5084 24.571 28 23.3333 28C22.0957 28 20.9087 27.5084 20.0335 26.6332C19.1583 25.758 18.6667 24.571 18.6667 23.3334C18.6667 22.0957 19.1583 20.9087 20.0335 20.0335C20.9087 19.1584 22.0957 18.6667 23.3333 18.6667C24.571 18.6667 25.758 19.1584 26.6332 20.0335C27.5083 20.9087 28 22.0957 28 23.3334V23.3334Z" stroke="rgba(6, 73, 6, 0.75)" stroke-width="4.66667" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
               <p>Crew Endorsements</p>
            </div>
            </div>
            <div className="Settings-title"><span>FLIGHT</span></div> 
            <div className="General_Settings G-four">    
                <div><svg width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M45.5 10.5C45.5 9.57174 45.1312 8.6815 44.4749 8.02513C43.8185 7.36875 42.9283 7 42 7H14C13.0717 7 12.1815 7.36875 11.5251 8.02513C10.8687 8.6815 10.5 9.57174 10.5 10.5V45.5C10.5 46.4283 10.8687 47.3185 11.5251 47.9749C12.1815 48.6312 13.0717 49 14 49H28V45.5H14V10.5H42V21H45.5V10.5Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                    <path d="M17.5 31.5H28V35H17.5V31.5ZM17.5 24.5H38.5V28H17.5V24.5Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.5 17.5V21H17.5V17.5H38.5ZM43.75 40.25L52.5 43.75V40.25L43.75 35.875V31.5C43.75 31.0359 43.5656 30.5908 43.2374 30.2626C42.9093 29.9344 42.4641 29.75 42 29.75C41.5359 29.75 41.0907 29.9344 40.7626 30.2626C40.4344 30.5908 40.25 31.0359 40.25 31.5V35.875L31.5 40.25V43.75L40.25 40.25V46.375L36.75 49V50.75L42 49L47.25 50.75V49L43.75 46.375V40.25Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                </svg>
                   <p>Flight Editing</p>
                </div>
                 <div><svg width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 53.3244C28.9799 53.3019 29.9203 52.9335 30.6547 52.2844C31.3892 51.6354 31.8704 50.7475 32.0133 49.7778H23.8311C23.9781 50.7738 24.4818 51.6826 25.2487 52.335C26.0156 52.9874 26.9933 53.339 28 53.3244Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                    <path d="M51.1 43.7578L50.5711 43.2911C49.0707 41.9543 47.7574 40.4212 46.6667 38.7333C45.4755 36.404 44.7615 33.8601 44.5667 31.2511V23.5667C44.5604 22.6333 44.4771 21.702 44.3178 20.7822C41.6828 20.2406 39.316 18.8051 37.618 16.7188C35.92 14.6324 34.9951 12.0233 35 9.33333V8.35333C33.3759 7.55407 31.6309 7.02848 29.8356 6.79777V4.83777C29.8356 4.28701 29.6168 3.7588 29.2273 3.36935C28.8379 2.9799 28.3097 2.76111 27.7589 2.76111C27.2081 2.76111 26.6799 2.9799 26.2905 3.36935C25.901 3.7588 25.6822 4.28701 25.6822 4.83777V6.87555C21.6622 7.44264 17.9831 9.44493 15.3241 12.5128C12.6651 15.5806 11.2058 19.5069 11.2156 23.5667V31.2511C11.0207 33.8601 10.3068 36.404 9.11556 38.7333C8.0436 40.417 6.75142 41.9498 5.27333 43.2911L4.74445 43.7578V48.1444H51.1V43.7578Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                    <path d="M46.6667 17.1111C50.9622 17.1111 54.4444 13.6289 54.4444 9.33332C54.4444 5.03777 50.9622 1.55554 46.6667 1.55554C42.3711 1.55554 38.8889 5.03777 38.8889 9.33332C38.8889 13.6289 42.3711 17.1111 46.6667 17.1111Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                </svg>
                    <p>Flight Notifications</p>
                </div>
                <div><svg width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.6 19.6C5.60071 15.9013 6.82199 12.3063 9.07437 9.3725C11.3268 6.43875 14.4843 4.33029 18.0573 3.37421C21.6303 2.41813 25.4189 2.66787 28.8354 4.08469C32.252 5.5015 35.1055 8.0062 36.9533 11.2102C38.8011 14.4143 39.5399 18.1385 39.0551 21.8053C38.5702 25.472 36.8889 28.8763 34.272 31.4901C31.655 34.1038 28.2486 35.7808 24.5812 36.261C20.9138 36.7412 17.1905 35.9978 13.9888 34.146L7.4424 36.33C7.20054 36.4107 6.94122 36.4239 6.69243 36.3681C6.44364 36.3122 6.21482 36.1895 6.03067 36.0131C5.84652 35.8368 5.71404 35.6134 5.64752 35.3673C5.58099 35.1211 5.58296 34.8615 5.6532 34.6164L7.6468 27.6416C6.30004 25.1755 5.59612 22.4099 5.6 19.6ZM18.2 15.4C17.8287 15.4 17.4726 15.5475 17.21 15.81C16.9475 16.0726 16.8 16.4287 16.8 16.8C16.8 17.1713 16.9475 17.5274 17.21 17.7899C17.4726 18.0525 17.8287 18.2 18.2 18.2H26.6C26.9713 18.2 27.3274 18.0525 27.5899 17.7899C27.8525 17.5274 28 17.1713 28 16.8C28 16.4287 27.8525 16.0726 27.5899 15.81C27.3274 15.5475 26.9713 15.4 26.6 15.4H18.2ZM23.8 21H18.2C17.8287 21 17.4726 21.1475 17.21 21.41C16.9475 21.6726 16.8 22.0287 16.8 22.4C16.8 22.7713 16.9475 23.1274 17.21 23.3899C17.4726 23.6525 17.8287 23.8 18.2 23.8H23.8C24.1713 23.8 24.5274 23.6525 24.7899 23.3899C25.0525 23.1274 25.2 22.7713 25.2 22.4C25.2 22.0287 25.0525 21.6726 24.7899 21.41C24.5274 21.1475 24.1713 21 23.8 21Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                    <path d="M34.3728 41.8516L27.6472 38.4916C28.8792 38.1472 30.0636 37.688 31.1836 37.1252L35 39.0348L47.6 32.7348V30.8C47.6 30.0574 47.305 29.3452 46.7799 28.8201C46.2548 28.295 45.5426 28 44.8 28H40.1128C40.5412 27.104 40.8996 26.166 41.188 25.2H44.8C46.2852 25.2 47.7096 25.79 48.7598 26.8402C49.81 27.8904 50.4 29.3148 50.4 30.8V44.8C50.4 46.2852 49.81 47.7096 48.7598 48.7598C47.7096 49.81 46.2852 50.4 44.8 50.4H25.2C23.7148 50.4 22.2904 49.81 21.2402 48.7598C20.19 47.7096 19.6 46.2852 19.6 44.8V39.004C20.5156 39.1328 21.448 39.2 22.4 39.2V44.8C22.4 45.5426 22.695 46.2548 23.2201 46.7799C23.7452 47.305 24.4574 47.6 25.2 47.6H44.8C45.5426 47.6 46.2548 47.305 46.7799 46.7799C47.305 46.2548 47.6 45.5426 47.6 44.8V35.8652L35.6272 41.8516C35.4325 41.9492 35.2178 42 35 42C34.7822 42 34.5675 41.9492 34.3728 41.8516Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                </svg>
                    <p>Checklist Notifications</p>
                </div>
                <div> <svg width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 49C27.6074 48.9991 27.2152 48.9734 26.8258 48.923C23.2292 43.16 21.2379 36.5408 21.0578 29.75H52.4125C52.4545 29.169 52.5 28.5898 52.5 28C52.5 23.1544 51.0631 18.4175 48.371 14.3885C45.6789 10.3595 41.8525 7.21931 37.3757 5.36496C32.899 3.51062 27.9728 3.02543 23.2203 3.97077C18.4678 4.91611 14.1023 7.24951 10.6759 10.6759C7.2495 14.1023 4.9161 18.4678 3.97076 23.2203C3.02543 27.9728 3.51061 32.899 5.36495 37.3758C7.2193 41.8525 10.3595 45.6789 14.3885 48.371C18.4175 51.0631 23.1544 52.5 28 52.5V49ZM48.9125 26.25H38.4352C38.247 19.8106 36.5998 13.4978 33.6175 7.78751C37.7448 8.93923 41.4215 11.3248 44.1551 14.6245C46.8887 17.9242 48.5487 21.9805 48.9125 26.25ZM29.1725 7.07701C32.7696 12.8398 34.7616 19.4591 34.9423 26.25H21.0578C21.2384 19.4591 23.2304 12.8398 26.8275 7.07701C27.607 6.97476 28.3965 6.97476 29.176 7.07701H29.1725ZM22.3808 7.78576C19.399 13.4968 17.7523 19.8101 17.5648 26.25H7.0875C7.45159 21.9806 9.1116 17.9244 11.8452 14.6247C14.5788 11.325 18.2554 8.93946 22.3825 7.78751L22.3808 7.78576ZM7.0875 29.75H17.5648C17.7531 36.1894 19.4004 42.5021 22.3825 48.2125C18.2554 47.0606 14.5788 44.675 11.8452 41.3753C9.1116 38.0756 7.45159 34.0194 7.0875 29.75Z"  fill="rgba(6, 73, 6, 0.75)"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.75 43.75L52.5 47.25V43.75L43.75 39.375V35C43.75 34.5359 43.5656 34.0908 43.2374 33.7626C42.9092 33.4344 42.4641 33.25 42 33.25C41.5359 33.25 41.0908 33.4344 40.7626 33.7626C40.4344 34.0908 40.25 34.5359 40.25 35V39.375L31.5 43.75V47.25L40.25 43.75V49.875L36.75 52.5V54.25L42 52.5L47.25 54.25V52.5L43.75 49.875V43.75Z"  fill="rgba(6, 73, 6, 0.75)"></path>
               </svg>
                    <p>Handling Requests</p>
               </div>
           </div>
      </div>
    )
  }
  export default Asettings; 