import "./about-page.css";
import animationImage from "../images/metroid.gif"
function AboutPage() {
  return (
    <main>
       <h1>About Me</h1>
    <hr />
    <h2>Josh Lagunas</h2>
    <p>i'm learning <em>HTML!</em></p>
  

<p>Thing i've been doing lately</p>
<ul class="list">
<li>Playing video games</li>
<li>Playing guitar</li>
<li>Learning Ableton</li>
<li>Drawing</li>
<li>Voice chatting with friends</li>
</ul>

<p>Languages I'm going to be using:</p>
<ul class="list">
<li>HTML</li>
<li>CSS</li>
<li>JS</li>
<li>TS</li>
<li>React</li>
</ul>
<p>Random list:</p>
<ul>
<li>YEP</li>
<li>Save</li>
<li>Sweater</li>
</ul>

<p>App I use regularly is <a href="https://www.twitch.tv/" title="My procrastination space">Twitch</a></p>
<p>My github:<a href="https://github.com/JoshLagoons" title="My account I use for all my coding classes"> Josh's github</a></p>
<img src={animationImage} alt="A game I enjoy" width="600" height="400" id="image" />


<p>Favorite quote:</p>
<p><cite>A person who never made a mistake never tried anything new.</cite> From Albert Einstein.</p>
 </main>
  );
}
export default AboutPage;
