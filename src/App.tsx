import React, { useEffect, useState } from 'react';
import './App.css';
import {Bar} from "react-chartjs-2";

const App = () => {
  const [data, setData] = useState({})

  const chart = () => {
    setData({
      labels: ['저연령', '10대', '20대', '30대', '40대', '50대', '60대~'],
      datasets: [
        {
          barThickness: 10,
          data: [30, 60, 70, 40, 31, 55, 30, 0, 100],
          backgroundColor: '#EDA145',
        }
      ],
    })
  }

  useEffect(() => {
    chart()
  }, [])
  return (
    <div className="App">
      <header style={{alignItems: 'center'}} className="header">
        <i style={{marginLeft: 5}} className="fas fa-chevron-left"></i>
        <span style={{fontSize: 16, textAlign: 'center', marginRight: 'auto', flex:1}}>유튜버</span>
        <i style={{marginRight: 5, color: '#A6A6A6'}} className="fas fa-ellipsis-v"></i>
      </header>
      <div style={{padding: 20, marginTop: 35}}>
        <div className="user">
          <img className="img" src={process.env.PUBLIC_URL + '/image 7.png'} />
          <div style={{marginLeft: 10}}>
            <h1 style={{fontSize: 18, margin: 0}}>배수지</h1>
            <div style={{width: '100%'}}>
              <i style={{color: '#FBDF5D', fontSize: 12}} className="fas fa-star"></i>
              <span style={{fontSize: 12, color: '#555555'}}> 4.8(23)</span>
            </div>
            <span style={{fontSize: 12, color: '#8D8D8D'}}>#조용한 #진중한 #젊은</span>
          </div>
        </div>
        <div style={{width: '100%', marginTop: 10}}>
          <button className="button"><i style={{color: '#FF0000', marginRight: 5}} className="fab fa-youtube"></i>채널 보러가기</button>
          <button className="button"><i style={{color: '#555555', marginRight: 5}} className="fas fa-comment-alt"></i>메시지 보내기</button>
        </div>
        <div className="section">
          <div className="info">
            <i style={{marginRight: 5, color: '#CECEF4'}} className="fas fa-map-marker-alt"></i>
            <span style={{color: '#6B6B6B', fontSize: 13}}>활동지역 |</span>
            <span style={{color: '#6B6B6B', fontSize: 10, margin: 5}}>|</span>
            <span style={{color: '#555555', fontSize: 13}}>인천 남동구</span>

          </div>
          <div className="info">
            <i style={{marginRight: 5, color: '#FFF573'}} className="fas fa-lightbulb"></i>
            <span style={{color: '#6B6B6B', fontSize: 13}}>광고컨셉</span>
            <span style={{color: '#6B6B6B', fontSize: 10, margin: 5}}>|</span>
            <span style={{color: '#555555', fontSize: 13}}>PPL, 배너광고</span>
          </div>
        </div>
      </div>

      <div className="section2">
        <span style={{marginRight: 10, fontSize: 14}}>시청자 통계</span>
        <span style={{color: '#6B6B6B', fontSize: 12}}>성별 및 연령</span>
        <div style={{width: '100%', marginTop: 10, display: 'flex'}}>
          <div className="button2">여성</div>
          <div className="bar" style={{width: '70%'}}>
            <div style={{width: '70%', height: 5, backgroundColor: '#ED4563', borderRadius: 10, marginRight: 5, marginLeft: 5}}></div>
            <span style={{fontSize: 13, color: '#ED4563', fontWeight: 'bold', justifyContent: 'flex-end'}}>70%</span>
          </div>
        </div>
        <div style={{width: '100%', marginTop: 5, display: 'flex'}}>
          <div className="button2">남성</div>
          <div className="bar" style={{width: '70%'}}>
            <div style={{width: '30%', height: 5, backgroundColor: '#4592ED', borderRadius: 10, marginRight: 5, marginLeft: 5}}></div>
            <span style={{fontSize: 13, color: '#4592ED', fontWeight: 'bold', justifyContent: 'flex-end'}}>30%</span>
          </div>
        </div>

        <div className="chart">
          <Bar data={data} options={{maintainAspectRatio: false, legend: {display: false} }} />
         </div>
      </div>
      <div className="dots">
        <i style={{color: '#FF0000', fontSize: 10, marginRight: 5}} className="fas fa-circle"></i>
        <i style={{color: '#E2E2E2', fontSize: 7}} className="fas fa-circle"></i>
      </div>
      <footer className="footer">
        <span style={{fontSize: 14, margin: 0, color: '#fff', textAlign: 'center'}}>요청서 보내기</span>
      </footer>
    </div>
  );
}

export default App;
