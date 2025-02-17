import xiangyun from './assets/xiangyun.jpeg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src = {xiangyun} alt="profile picture"></img>
            <h2 className="card-title">Jeryl</h2>
            <p className="card-text">im a y2 nus cs student and i gym</p>
        </div>
    );

}

export default Card