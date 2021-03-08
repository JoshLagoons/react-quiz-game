import ChatMessage from "./demos/props/chat-message";
import SpeakButton from "./demos/props/speak-button";
import AlertButton from "./demos/props/alert-button";
import WelcomeMessage from "./demos/props/welcome-message";
import SocialPost from "./demos/props/social-media";
import ClickButton from "./demos/props/state/click-button";
import SpeakForm from "./demos/props/state/speak-form";
import CustomIncrement from "./demos/props/state/CustomIncrement";
import MusicalButton from "./demos/dependencies/musical-button";
import ConfettiDemo from "./demos/dependencies/confetti-demo";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import HomePage from "./home/home-page";
import QuizPage from "./quiz/quiz-page";
import DemosPage from "./demos/demos-page";
import AboutPage from "./about/about-page";
import PageHeader from "./common/page-header";
import PageFooter from "./common/page-footer";

function App() {
  return (
    <BrowserRouter>
    <PageHeader/>
      {/* Switch enforces that only ONE route can be matched.*/}

      <Switch>
        {/*Route allows you to conditionall render children based on router's path*/}

        <Route path="/" exact>
          {/*Put whatever you want to render for this Route here*/}
          <HomePage />
        </Route>
        <Route path="/quiz">
          <QuizPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/demos">
          <DemosPage />
        </Route>
      </Switch>

      <PageFooter/>
    </BrowserRouter>
  );
}

//components can take inputs in the form of props (or properties).
//pascal case
//to start the terminal its ctrl + `
//to make a browser its npm run start
//a (functional) component is just a js function that returns jsx

export default App;
