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

  const [upvoteCount, setUpvoteCount] = useState(5);

  const sendNote = () => {
    
    // POST request to 10.0.0.202:5001/send_note
    console.log('send note');

    const text = `Just had a delightful plant-based meal here! Pro tip: Try their almond milk latte! not only is it dairy-free, but it also reduces our water footprint. Had challenges initially with finding tasty vegan options in the city, but places like this make the switch so rewarding. Let us keep supporting eco-friendly spots and making choices that matter. Every bit counts!`

    const location = '86th Street';

    const url = "http://10.0.0.202:5001/leave_note"; // Make sure to use the correct protocol (http or https) if needed
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
    const text = `Just had a delightful plant-based meal here! Pro tip: Try their almond milk latte! not only is it dairy-free, but it also reduces our water footprint. Had challenges initially with finding tasty vegan options in the city, but places like this make the switch so rewarding. Let us keep supporting eco-friendly spots and making choices that matter. Every bit counts!`

    const location = '86th Street';

    const url = "http://10.0.0.202:5001/upvote"; // Make sure to use the correct protocol (http or https) if needed
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
    const url = "http://10.0.0.202:5001/redeem_points"; // Make sure to use the correct protocol (http or https) if needed
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
            <img src={sendNoteImage} width={300} />
            <button style={{ position: 'absolute', top: '350px', left: '100px', width: '100px', height: '200px', opacity: 0 }} onClick={sendNote}>Hi</button>
          </>} />

          <Route path="/upvote" element={<>
            <img src={upvoteCount == 5 ? upvoteImage : upvotedImage} width={300} />
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
