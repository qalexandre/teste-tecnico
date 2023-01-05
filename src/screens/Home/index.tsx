import './styles.css'

import Modal from 'react-modal';
import { useEffect, useState } from 'react';

type Notification = {
    id: number;
    title: string;
    body: string;
}

type HomeProps = {
    setIsLogged: (value: boolean) => void;
}

export function Home({setIsLogged}: HomeProps) {

    const [notificationIsOpen, setNotificationIsOpen] = useState(false);
    const [notifications, setNotifications] = useState<Notification[]>([])

    useEffect(() => {
        getNotifications()
    }, [])

    async function getNotifications() {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1', { method: 'GET' }).then(response => response.json()).then(data => {
            setNotifications(data);
        });
        // setNotifications(response.)
    }

    function closeNotifications() {
        setNotificationIsOpen(false)
    }

    function openNotifications() {
        setNotificationIsOpen(true)
    }

    function deleteNotification(id: number) {
        const newNotifications = notifications.filter(not => not.id != id);
        setNotifications(newNotifications)
    }

    function logout(){
        setIsLogged(false)
    }

    return (
        <div className="container">
            <div className="header">
                <div className="logout">
                    <a  onClick={logout} className="item">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyElEQVR4nNWVOwoCMRRFj9+diGAhNoK4AkWw8DMSELFwFc4eXIOVu3AVlla22graKUKmGUjyYhg0F057z+MlIfCDlIC6kLJPcQXoAgmghCyAPlCTCDoexSpHTyIYBwhmerXWzAMECqhGK1gVLbgBR31tvxYsgY2BJ/AC9q53YRLsgIcucXGwrcokuArLM7a+gounYO0rSIEzcDcgmt51yMpCdsifQShCcNI3KN6XrP5GMAoonyBIM0DQRpgGMACmQoZAS/LZxJs3zcCSNr54dPMAAAAASUVORK5CYII=" />

                    </a>
                </div>
                <a onClick={openNotifications} className="item">

                    {notifications.length > 0 && <div className="not-dot"></div>}
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABG0lEQVR4nN2VsU7DMBCGI1FKx3ahTIxMqFOlsrMQWAC1on2BbJlrn8/3T1H7LHkueA6QURFSmjS2kwFh6V+/L3f2XZLk3x8AI2g9s0QpmJcisoIxD9D6FsCwG3y7vf6GGrOpiyV6KYpiGg1vAlfyBuAyvC0nvlwqYebnsizP/AVaz3zhcgiUuvEWuAsNFVit770FYswquALm1xDBJibJnxDkeX4RK4DP4AG4ihUUPkMHortYgbV2cRKulJow8zpWwMxrAOOm1gzA/BgLl98qnrIsO69rzbwrXH4um2h+LAjYPdI+dMte1oM0tYkoPRLslJr0IbFEqXssLY+1Up0xH8L8Wcl7EKRFsK8R7HoTuBXgJK6SQ/ad/8d9nS+zKBlmYRT+jAAAAABJRU5ErkJggg==" />

                </a>
            </div>
            <div className="main">
                <div className="box box-1"></div>
                <div className="box box-2"></div>
                <div className="box box-3"></div>
                <div className="box box-4"></div>
            </div>
            <Modal
                isOpen={notificationIsOpen}
                className='modalNotifications'
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeNotifications}

                
            // style={customStyles}

            // contentLabel="Example Modal"
            >
                <a className="closeModal" onClick={closeNotifications}>&#x2716;</a>
                <div className="modal-header">
                <h3 className="title">Notificações</h3>
                <p className='modal-count'>{notifications.length}</p>
                </div>
                <div className="notifications">
                    {notifications && notifications.map(notification => (
                        <div key={notification.id} className="notification">
                            <div className="not-header">
                                <p className="not-title">{notification.title}</p>
                                <p onClick={() => deleteNotification(notification.id)} className='not-delete'>&#x2716;</p>
                            </div>
                            <p className="not-subtitle">{notification.body}</p>
                        </div>
                    ))}
                </div>
            </Modal>
        </div>
    )
}