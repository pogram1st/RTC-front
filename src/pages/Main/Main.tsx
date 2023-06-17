import socket from "../../socket";
import {useEffect, useState} from "react";
import ACTIONS from "../../socket/actions";
// @ts-ignore
import {v4} from 'uuid'
import {useNavigate} from "react-router";

function Main() {
    const navigate = useNavigate()
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({rooms = []}) => {
            setRooms(rooms)
        })
    }, []);

    return (
        <div className="container">
            <div>
                <h1>Активные комнаты</h1>
                <div>
                    {
                        rooms.map((room, i) =>
                            <div
                                key={i}
                                style={{display: "flex", justifyContent: "space-between", width: 400}}
                            >
                                <div>{room}</div>
                                <button onClick={() => navigate(`room/${room}`)}>Join Room</button>
                            </div>
                        )
                    }
                </div>
            </div>
            <button onClick={() => navigate(`room/${v4()}`)}>Создать комнату</button>
        </div>
    );
}

export default Main;
