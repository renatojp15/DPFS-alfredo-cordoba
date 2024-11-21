import React from 'react';
import TotalProducts from './TotalProducts';
import TotalUsers from './TotalUsers';

function Dashboard() {
  return (
    <div className="container card-container"> {/* Usamos 'card-container' para las tarjetas */}
      <div className="card"> {/* Aplicamos la clase 'card' */}
        <div className="card-title">Dashboard</div>
        <div className="row">
          <div className="col-md-4">
            <TotalProducts/>
            <TotalUsers/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;