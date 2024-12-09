import React, {useContext} from "react";
import "./Main.css"; // Ensure this CSS file exists
import {assets} from "../../assets/assets"; // Ensure the path and export are correct
import {Context} from "../../Context/Context";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        {/* Render the image only if assets.user_icon is defined */}
        {assets.user_icon ? (
          <img src={assets.user_icon} alt="User Icon" className="img" />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello,</span>
              </p>
              <p>How Can I Help You Today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} />
              </div>
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.bulb_icon} />
              </div>
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.message_icon} />
              </div>
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.code_icon} />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  className=""
                  dangerouslySetInnerHTML={{__html: resultData}}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img src={assets.send_icon} alt="" onClick={() => onSent()} />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Suggest beautiful places to see on an upcoming road tripSuggest
            beautiful places to see on an upcoming road tripSuggest beautiful
            places to see on an upcoming road trip
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
