import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "sanitize.css";
import "./app.css";

import Sentiment from "./001_sentiment/Sentiment";
import OrbitalSkies from "./002_orbital-skies/OrbitalSkies";
import BlindBox from "./003_blind-box/BlindBox";
import Calculatey from "./004_calculatey/Calculatey";
import Trevert from "./005_trevert/Trevert";
import Elecy from "./006_elecy/Elecy";
import Settings from "./007_settings/Settings";
import Page404 from "./008_404/Page404";
import Granite from "./009_granite/Granite";
import SocialShare from "./010_social-share/SocialShare";
import FlashMessage from "./011_flash-message/FlashMessage";
import Ample from "./012_ample/Ample";
import Dusk from "./013_dusk/Dusk";
import GotSeason8 from "./014_got-season-8/GotSeason8";
import OnOffSwitch from "./015_on-off-switch/OnOffSwitch";
import PopUpOverlay from "./016_pop-up-overlay/PopUpOverlay"

export class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <div className="app-menu">
                  <h1 className="app-menu-title">UI Challenges</h1>

                  <nav>
                    <ul className="app-menu-list">
                      <li className="app-menu-list__item">
                        <Link to="/001">001. Sentiment (Sign Up)</Link>

                        <span className="app-menu-list__item-date">
                          December 26, 2018
                        </span>
                      </li>

                      <li className="app-menu-list__item">
                        <Link to="/002">
                          <span>002. Orbital Skies (Credit Card Checkout)</span>
                        </Link>

                        <span className="app-menu-list__item-date">
                          January 3, 2019
                        </span>
                      </li>

                      <li className="app-menu-list__item">
                        <Link to="/003">003. Blind Box (Landing Page)</Link>

                        <span className="app-menu-list__item-date">
                          January 4, 2019
                        </span>
                      </li>

                      <li className="app-menu-list__item">
                        <Link to="/004">004. Calculatey (Calculator)</Link>

                        <span className="app-menu-list__item-date">
                          January 4, 2019
                        </span>
                      </li>

                      <li className="app-menu-list__item">
                        <Link to="/005">005. Trevert (App Icon)</Link>

                        <span className="app-menu-list__item-date">
                          January 5, 2019
                        </span>
                      </li>

                      <li className="app-menu-list__item">
                        <Link to="/006">006. Elecy (User Profile)</Link>

                        <span className="app-menu-list__item-date">
                          January 6, 2019
                        </span>
                      </li>

                      <li className="app-menu-list__item">
                        <Link to="/007">007. Settings</Link>

                        <span className="app-menu-list__item-date">
                          January 8, 2019
                        </span>
                      </li>

                      <li className="app-menu-list__item">
                        <Link to="/008">008. Payapa (404)</Link>

                        <span className="app-menu-list__item-date">
                          January 10, 2019
                        </span>
                      </li>

                      <li className="app-menu-list__item">
                        <Link to="/009">009. Granite (Music Player)</Link>

                        <span className="app-menu-list__item-date">
                          January 12, 2019
                        </span>
                      </li>

                      <li className="app-menu-list__item">
                        <Link to="/010">010. Social Share</Link>

                        <span className="app-menu-list__item-date">
                          January 13, 2019
                        </span>
                      </li>

                      <li className="app-menu-list__item">
                        <Link to="/011">011. Flash Message</Link>

                        <span className="app-menu-list__item-date">
                          January 14, 2019
                        </span>
                      </li>

                      <li className="app-menu-list__item">
                        <Link to="/012">012. Ample (E-Commerce Shop)</Link>

                        <span className="app-menu-list__item-date">
                          January 17, 2019
                        </span>
                      </li>

                      <li className="app-menu-list__item">
                        <Link to="/013">013. Dusk (Direct Messaging)</Link>

                        <span className="app-menu-list__item-date">
                          January 21, 2019
                        </span>
                      </li>

                      <li className="app-menu-list__item">
                        <Link to="/014">014. Game of Thrones Season 8 Countdown (Countdown Timer)</Link>

                        <span className="app-menu-list__item-date">
                          January 23, 2019
                        </span>
                      </li>

                      <li className="app-menu-list__item">
                        <Link to="/015">015. On/Off Switch</Link>

                        <span className="app-menu-list__item-date">
                          January 23, 2019
                        </span>
                      </li>

                      <li className="app-menu-list__item">
                        <Link to="/016">016. Pop-Up/Overlay</Link>

                        <span className="app-menu-list__item-date">
                          January 24, 2019
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            />

            <Route path="/001" component={Sentiment} />

            <Route path="/002" component={OrbitalSkies} />

            <Route path="/003" component={BlindBox} />

            <Route path="/004" component={Calculatey} />

            <Route path="/005" component={Trevert} />

            <Route path="/006" component={Elecy} />

            <Route path="/007" component={Settings} />

            <Route path="/008" component={Page404} />

            <Route path="/009" component={Granite} />

            <Route path="/010" component={SocialShare} />
            
            <Route path="/011" component={FlashMessage} />

            <Route path="/012" component={Ample} />

            <Route path="/013" component={Dusk} />

            <Route path="/014" component={GotSeason8} />

            <Route path="/015" component={OnOffSwitch} />

            <Route path="/016" component={PopUpOverlay} />

            <Route component={() => <div>404 Not found</div>} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
