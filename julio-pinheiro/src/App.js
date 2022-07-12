import "./App.css";
import "nes.css/css/nes.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nes-container with-title is-centered">
          <p class="title">Welcome! Hello! </p>
          <p>
            This is my creative resume! Hope you like it!{" "}
            <i class="nes-icon  like"></i>
          </p>
        </div>
      </header>

      <div class="nes-container with-title ">
        <p class="title">About me</p>
        <p>
          Hi, I'm Julio Pinheiro and I live in São Paulo, Brazil. I've been a
          software developer for the past nine years! I've been working in
          several business segments and with very cool and interesting
          technologies. I learned a lot during my career, and what I value the
          most is understanding the real needs of the clients/business. I also
          had the great opportunity to lead teams during some projects,
          understanding the profiles of each one, and feedback techniques. I
          really enjoy teaching, especially to people new to the area, I had
          several nice opportunities in this regard. I also like to learn from
          the team and keep the team engaged.
        </p>
      </div>

      {/* SKILLS */}
      <div class="nes-container  with-title">
        <p class="title">Skills</p>
        <p>
          Well, I didn't achieve lvl 999+ but I keep trying{" "}
          <i class="snes-logo"></i>
        </p>
        <div class="lists">
          <ul class="nes-list is-disc">
            <li>C#</li>
            <li>NodeJs</li>
            <li>Angular</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default App;
