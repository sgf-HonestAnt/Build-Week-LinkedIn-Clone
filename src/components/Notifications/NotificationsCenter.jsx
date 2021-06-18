import { Badge } from 'react-bootstrap';

const NotificationsCenter = () => {
    return (
        <section className="notifications-center">
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom new-notifications">
              <div className="space"><i className="fas fa-circle"></i></div>
              <img 
              src="https://pyxis.nymag.com/v1/imgs/d6c/f33/aa6cc79b6b8d5d555e30047e93f16180ba-12-mark-zuckerberg-lede2.rsquare.w1200.jpg" 
              alt="..." 
              className="profile-round" />
              <div className="w-100">
                Mark Zuckerberg <strong>viewed your profile</strong><br />
                <Badge pill variant="link">See all views</Badge>
              </div>
              <div>
                1h<br /><i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom new-notifications">
              <div className="space"><i className="fas fa-circle"></i></div>
              <img 
              src="https://media-exp3.licdn.com/dms/image/C4D03AQHxDAmpuVueCg/profile-displayphoto-shrink_800_800/0/1568286276266?e=1629331200&v=beta&t=DNNU9I5ROSXiZGTlsYSohonWskhyWXvF3lBlg99M_DM" 
              alt="..." 
              className="profile-round" />
              <div className="w-100">
                <strong>You may know</strong> Stefano Casasola<br />
                <Badge pill variant="link">Connect</Badge>
              </div>
              <div>
                1h<br /><i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
              <div className="space"></div>
              <img 
              src="https://media-exp3.licdn.com/dms/image/C5603AQEw8C91bm64Ag/profile-displayphoto-shrink_800_800/0/1618231315460?e=1629331200&v=beta&t=fgrIqVg1Mx-Frav-r1eE-uvvow9hyATRJocHuhp0wCY" 
              alt="..." 
              className="profile-round" />
              <div className="w-100">
              <a href="https://www.linkedin.com/in/engtiagobrandao/" target="_blank">Tiago Brandão</a> <strong>shared a post:</strong> look what we made 👇🏼
              </div>
              <div>
                3h<br /><i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
              <div className="space"></div>
              <img 
              src="https://media-exp3.licdn.com/dms/image/C5603AQEmKU0TgsZoSA/profile-displayphoto-shrink_800_800/0/1517742555887?e=1629331200&v=beta&t=jtfh2DyQ-6PWNu25bI9EDq_RtyHx1Z0J6BccgVSHbQA" 
              alt="..." 
              className="profile-round" />
              <div className="w-100">
                Diego Banovaz <strong>shared a post:</strong> We're hiring! 🎈🎈🎈
              </div>
              <div>
                1d<br /><i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
              <div className="space"></div>
              <img 
              src="https://events.recode.net/wp-content/uploads/2016/05/elon-musk-square.jpg?quality=80&strip=info" 
              alt="..." 
              className="profile-round" />
              <div className="w-100">
                Elon Musk <strong>viewed your profile</strong><br />
                <Badge pill variant="link">See all views</Badge>
              </div>
              <div>
                2d<br /><i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
              <div className="space"></div>
              <img 
              src="https://media-exp3.licdn.com/dms/image/C4D03AQE60OGx0m3YOw/profile-displayphoto-shrink_800_800/0/1618295314689?e=1629331200&v=beta&t=Os0xppDxVtfzaCxcTx5J9U8nvd7Vryags4LzNl2BrL0" 
              alt="..." 
              className="profile-round" />
              <div className="w-100">
                <a href="https://www.linkedin.com/in/sarah-guinevere-fisher-0073b316b/" target="_blank">Sarah Guinevere Fisher</a> <strong>shared a post:</strong> what a week! 😅
              </div>
              <div>
                3h<br /><i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center p-3">
              <div className="space"></div>
              <img 
              src="https://media-exp3.licdn.com/dms/image/C5603AQHh2atWcDenzg/profile-displayphoto-shrink_800_800/0/1589832390186?e=1629331200&v=beta&t=uknxJ7URBDQvlbP_Egyl3EijjeXFKSXgDHPBBeJFauU" 
              alt="..." 
              className="profile-round" />
              <div className="w-100">
              <a href="https://www.linkedin.com/in/samuel-obeng-2b7821189/" target="_blank">Samuel Obeng</a> <strong>shared a post:</strong> check out our latest team project. It's awesome. 🕵️
              </div>
              <div>
                3h<br /><i className="fas fa-ellipsis-h"></i>
              </div>
            </div>            
        </section>
    )
}

export default NotificationsCenter