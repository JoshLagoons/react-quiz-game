import ConfettiDemo from "./dependencies/confetti-demo";
import MusicalButton from "./dependencies/musical-button";
import AlertButton from "./props/alert-button";
import ChatMessage from "./props/chat-message";
import SocialPost from "./props/social-media";
import SpeakButton from "./props/speak-button";
import ClickButton from "./props/state/click-button";
import CustomIncrement from "./props/state/CustomIncrement";
import SpeakForm from "./props/state/speak-form";
import WelcomeMessage from "./props/welcome-message";

function DemosPage() {
  return (
    <main>
       <h1>Henloooo</h1>
       <p>My first react app!</p>

       <h2>Confetti Demo</h2>
       <ConfettiDemo/>

       <h2>Tone.js Music</h2>
       <MusicalButton>playing some beats</MusicalButton>

       <h2>Custom Increment</h2>
       <CustomIncrement />

       <h2>Speak Form</h2>
       <SpeakForm />

       <h2>Stateful Buttons</h2>
       <ClickButton>lol</ClickButton>

       <h2>Welcome</h2>
       {/*name and greeting become properties on an object passed in to the Welcome message*/}
       <WelcomeMessage name="jo" greeting="Hello buddy!" />
       <WelcomeMessage name="jose" greeting="sup bro" />
       <WelcomeMessage name="person" greeting="Welcome" />
       <h2>Buttons</h2>
       <SpeakButton message="Hello there" rate={1} pitch={1} />
       <SpeakButton message="Speeeeen" rate={5} pitch={2} />
       <h2>Alert buttons</h2>
       <AlertButton message="Alert" />
       <AlertButton message="alertMessage" />
       <h2>Chat</h2>
       <ChatMessage
         message="Hey!, how the coding going bud"
         userName="polaroids"
         date="02/15/21"
       />
       <ChatMessage
         message="it's going well, learning at least"
         userName="pottedplant"
         date="02/15/21"
       />
       <ChatMessage
         message="Hopefully you'll get a hang of it :)"
         userName="polaroids"
         date="02/15/21"
       />

       <h2>Social Media</h2>
       <SocialPost
         message="just procrastincating, ps. i suck at writing that word."
         userName="Pk444 "
         buts1="LIke"
         buts2=":)"
         buts3=":/"
       />
       <SocialPost
         message="used to play superman 64, it was bad but good type of game."
         userName="Protonhenry "
         buts1="LIke"
         buts2=":)"
         buts3=":/"
       />
     </main>
  );
}
export default DemosPage;
