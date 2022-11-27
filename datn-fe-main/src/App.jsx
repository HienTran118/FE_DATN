import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    socket.emit('daingo', 'daingo');
  }, []);
  const handleClick = () => {
    socket.emit('daingo', count);
  };
  return (
    <div>
      <A />
    </div>
  );
}
function A() {
  const [msg, setMsg] = useState('');
  const [c, setC] = useState(0);
  useEffect(() => {
    socket.on('test', (m) => {
      setMsg(m);
    });
  }, []);
  return (
    <>
     
    <header>
        <div className="container">
            <nav className="navbar">
                
                <div className="navbar_logo">
                    <img src="./ava.jpg" alt="web logo"/>
                </div>
                
                <ul className="navbar_links">
                    <li className="navbar_link"><a href="#map">Map</a></li>
                    <li className="navbar_link"><a href="#table">Management Board</a></li>
                    <li className="navbar_link"><a href="#footer">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
    <section id="map">
        <div className="map">
            <div className="map_positions">
                <div className="map_position">
                    <i className="fa-solid fa-car"></i>
                    <h2 className="slot">Slot 4</h2>
                    <p className="slot_stt">Status:</p>
                </div>
                <div className="map_position">
                        <i className="fa-solid fa-car"></i>
                        <h2 className="slot">Slot 3</h2>
                        <p className="slot_stt">Status:</p>
                </div>
                <div className="map_position">
                        <i className="fa-solid fa-car"></i>
                        <h2 className="slot">Slot 2</h2>
                        <p className="slot_stt">Status:</p>
                </div>
                <div className="map_position">
                        <i className="fa-solid fa-car"></i>
                        <h2 className="slot">Slot 1</h2>
                        <p className="slot_stt">Status:</p>
                </div>
            </div>
        </div>
    </section>
    
    <section id="table">
        <table className="table">
            <thead>
            <tr>
                    <th scope="col">Slot</th>
                    <th scope="col">UID</th>
                    <th scope="col">Status</th>
                    <th scope="col">Payment</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
            </tr>
            <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
            </tr>
            <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
            </tr>
            </tbody>
        </table>
    </section>
  
      <div className="footer"></div>    </>
  );
}
export default App;
