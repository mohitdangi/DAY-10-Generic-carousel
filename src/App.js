import React from 'react';
import Carousel from './Carousel';

const App = () => {
  const images = [
    'https://th.bing.com/th/id/R.e8c2fbc63819a4b5ce33faab4e8681b6?rik=D6B5PXW66U5uVA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1814538.jpg&ehk=4o4f2kw3i6wr6RxpBsvfYHvnPB%2bLXmtlxwAq11SagmY%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/R.379a5d9f4d42f9520877b9301749ce4b?rik=hVk5TtfYehhZfg&riu=http%3a%2f%2fhdqwalls.com%2fdownload%2f1%2fblue-hour-sunset-beach-4k-ct.jpg&ehk=rbMOnn19kL2g0q29uFgN2F%2fppqCbO0hjYRcEJ4kuCpE%3d&risl=1&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/OIP.7O6Mi_MkodfLHopgprbsTwHaE5?w=615&h=407&rs=1&pid=ImgDetMain'
  ];

  return (
    <div className="app">
      <h1>Simple  Carousel</h1>
      <Carousel images={images} />
    </div>
  );
};

export default App;
