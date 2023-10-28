import { useState } from 'react';
import sendNoteImage from './assets/images/send_note.jpg';
import upvoteImage from './assets/images/upvote.jpg';
import upvotedImage from './assets/images/upvoted.jpg';
import redeemImage from './assets/images/redeem.jpg';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {

  const BASE_URL = `http://192.168.1.68:5001`;

  const [upvoteCount, setUpvoteCount] = useState(5);

  const sendNote = () => {
    
    // POST request to 10.0.0.202:5001/send_note
    console.log('send note');

    const text = `Their oat milk cappuccino is on point! Plus, love the compostable cups. Small choices make big impacts. Grateful for places that prioritize our environment. Cheers to conscious sipping!`
    
    const location = '86th Street';

    const url = `${BASE_URL}/leave_note`; // Make sure to use the correct protocol (http or https) if needed
    const data = {
      text: text,
      location: location,
      user: 'bevepebbles.near'
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(data => {
        console.log('Response data:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  const upvote = () => {
      
    console.log('upvote');

    setUpvoteCount(6);

    // POST request to 10.0.0.202:5001/upvote (params: location, text)
    const text = `Their oat milk cappuccino is on point! Plus, love the compostable cups. Small choices make big impacts. Grateful for places that prioritize our environment. Cheers to conscious sipping!`

    const location = '86th Street';

    const url = `${BASE_URL}/upvote`; // Make sure to use the correct protocol (http or https) if needed
    const data = {
      text: text,
      location: location,
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(data => {
        console.log('Response data:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  const redeem = () => {

    console.log('redeem');

    // POST request to 10.0.0.202:5001/redeem (params: points, user) 
    const url = `${BASE_URL}/redeem_points`; // Make sure to use the correct protocol (http or https) if needed
    const data = {
      points: 25000,
      user: 'bevepebbles.near'
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(data => {
        console.log('Response data:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path="/send_note" element={<>
            <img src={sendNoteImage} width={300} alt="abc" />
            <button style={{ position: 'absolute', top: '350px', left: '100px', width: '100px', height: '200px', opacity: 0 }} onClick={sendNote}>Hi</button>
          </>} />

          <Route path="/upvote" element={<>
            <img src={upvoteCount === 5 ? upvoteImage : upvotedImage} width={300} />
            <button style={{ position: 'absolute', top: '350px', left: '200px', width: '100px', height: '200px', opacity: 0 }} onClick={upvote}>Hi</button>
          </>} />

          <Route path="/redeem" element={<>
            <img src={redeemImage} width={300} />
            <button style={{ position: 'absolute', top: '350px', left: '200px', width: '100px', height: '200px', opacity: 0 }} onClick={redeem}>Hi</button>
          </>} />

        </Routes>
      </Router>


    </div>
  );
}

export default App;
