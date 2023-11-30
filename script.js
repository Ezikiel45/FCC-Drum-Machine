const projectName = "Drum-Machine";

const drumKeysOne = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Heater-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "Heater-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "Heater-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "Heater-4",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Clap",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "Kick-n'-Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];



const drumKeysTwo = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Chord-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "Chord-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "Chord-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "Shaker",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "Punchy-Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "Side-Stick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "Snare",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" }];



const inertStyle = {
  margin: "10px",
  fontSize: "30px",
  filter: "drop-shadow(0px 0px 6px cyan)",
  color: "cyan",
  backgroundColor: "rgba(0, 100, 100, 0.6)",
  border: "2px solid rgba(0, 100, 100, 0.3)",
  borderRadius: "5px",
  boxShadow: "5px 5px 2px rgba(0, 100, 100, 0.9)",
  height: "55px",
  width: "55px" };


const inactiveStyle = {
  margin: "10px",
  fontSize: "30px",
  filter: "drop-shadow(0px 0px 0px cyan)",
  color: "white",
  backgroundColor: "rgba(179, 237, 240, 0.3)",
  border: "1px solid rgba(0, 100, 100, 0.2)",
  borderRadius: "5px",
  boxShadow: "5px 5px  2px rgba(179, 237, 240, 0.5)",
  height: "55px",
  width: "55px" };


const soundsName = {
  heaterKit: "Heat Kit",
  smoothPianoKit: "Smooth Piano Kit" };


const soundsGroup = {
  heaterKit: drumKeysOne,
  smoothPianoKit: drumKeysTwo };


const KeyboardKey = ({
  play,
  style,
  sound: { id, keyTrigger, url, keyCode } }) =>
{
  const handleKeydown = event => {
    if (event.keyCode === keyCode) {
      play(keyTrigger, id);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, []);
  return /*#__PURE__*/(
    React.createElement("button", {
      className: "drum-pad",
      id: id,
      url: url,
      onClick: () => play(keyTrigger, id),
      style: style }, /*#__PURE__*/

    React.createElement("audio", { className: "clip", id: keyTrigger, src: url }),
    keyTrigger));


};

const Keyboard = ({ power, play, sounds, style }) => /*#__PURE__*/
React.createElement("div", { className: "keyboard" },
power ?
sounds.map((sound) => /*#__PURE__*/
React.createElement(KeyboardKey, { sound: sound, play: play, style: style })) :

sounds.map((sound) => /*#__PURE__*/
React.createElement(KeyboardKey, {
  sound: { ...sound, url: "#" },
  play: play,
  style: style })));





const DrumControll = ({
  stop,
  power,
  name,
  volume,
  handleVolumeChange,
  changeSoundsGroup }) => /*#__PURE__*/

React.createElement("div", { className: "controll" }, /*#__PURE__*/
React.createElement("h2", { className: "display", id: "display" },
power ? name : ""), /*#__PURE__*/

React.createElement("button", {
  className: "changeSoundGroup",
  onClick: changeSoundsGroup,
  style:
  power ?
  { color: "LightCyan", boxShadow: "2px 2px 3px LightCyan" } :
  { color: "white", boxShadow: "2px 2px 3px grey" } }, "Change Sound Group"), /*#__PURE__*/




React.createElement("button", {
  className: "power-button",
  onClick: stop,
  style:
  power ?
  {
    color: "LightCyan",
    backgroundColor: "black",
    boxShadow: "2px 2px 3px LightCyan" } :

  {
    color: "white",
    backgroundColor: "black",
    boxShadow: "2px 2px 3px grey" } },



power ? "OFF" : "ON"), /*#__PURE__*/

React.createElement("h2", {
  className: "volume",
  style:
  power ?
  { backgroundColor: "#C6CDD5", color: "LightCyan" } :
  { backgroundColor: "#78828E", color: "#78828E" } }, "Volume: ",


Math.round(volume * 100)), /*#__PURE__*/

React.createElement("input", {
  className: "volume-slider",
  max: "1",
  min: "0",
  step: "0.01",
  type: "range",
  value: volume,
  onChange: handleVolumeChange }));




const App = () => {
  const [soundType, setSoundType] = React.useState("heaterKit");
  const [sounds, setSounds] = React.useState(soundsGroup[soundType]);
  const [soundName, setSoundName] = React.useState("");
  const [volume, setVolume] = React.useState(1);
  const [power, setPower] = React.useState(true);
  const [style, setStyle] = React.useState(inertStyle);

  const handleVolumeChange = event => {
    setVolume(event.target.value);
  };

  const styleActiveKey = key => {
    if (key.parentElement.style.color === "cyan") {
      key.parentElement.style.backgroundColor = "#00ABB4",
      key.parentElement.style.color = "cyan",
      key.parentElement.style.filter = "drop-shadow(0 0 0 grey)",
      key.parentElement.style.transform = "translateY(3px)",
      key.parentElement.style.boxShadow =
      "1px 1px 0px rgb(0, 100, 100, 0.9)";
    } else {
      key.parentElement.style.backgroundColor = "rgba(179, 237, 240, 0.3)",
      key.parentElement.style.color = "white",
      key.parentElement.style.filter = "drop-shadow(0 0 0 cyan)",
      key.parentElement.style.transform = "translateY(3px)",
      key.parentElement.style.boxShadow =
      "2px 2px rgba(179, 237, 240, 0.5)";
    }
  };

  const deactivateAudio = audio => {
    setTimeout(() => {
      if (audio.parentElement.style.color === "cyan") {
        audio.parentElement.style.backgroundColor = "rgba(0, 100, 100, 0.6)",
        audio.parentElement.style.color = "cyan",
        audio.parentElement.style.filter = "drop-shadow(0 0 6px cyan)",
        audio.parentElement.style.boxShadow =
        "5px 5px rgba(0, 100, 100, 0.9)",
        audio.parentElement.style.transform = "translateY(-3px)";
      } else {
        audio.parentElement.style.backgroundColor =
        "rgba(179, 237, 240, 0.3)",
        audio.parentElement.style.color = "white",
        audio.parentElement.style.boxShadow =
        "5px 5px 2px rgba(179, 237, 240, 0.5)",
        audio.parentElement.style.transform = "translateY(-3px)";
      }
    }, 200);
  };

  const play = (keyTrigger, sound) => {
    setSoundName(sound);
    const audio = document.getElementById(keyTrigger);
    styleActiveKey(audio);
    audio.currentTime = 0;
    audio.play();
    deactivateAudio(audio);
  };

  const stop = () => {
    setPower(!power);
    {
      !power ? setStyle(inertStyle) : setStyle(inactiveStyle);
    }
  };

  const changeSoundsGroup = () => {
    setSoundName("");
    if (soundType === "heaterKit") {
      setSoundType("smoothPianoKit");
      setSounds(soundsGroup.smoothPianoKit);
    } else {
      setSoundType("heaterKit");
      setSounds(soundsGroup.heaterKit);
    }
  };

  const setKeyVolume = () => {
    const audios = sounds.map((sound) =>
    document.getElementById(sound.keyTrigger));

    audios.forEach(audio => {
      if (audio) {
        audio.volume = volume;
      }
    });
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-machine" },
    setKeyVolume(), /*#__PURE__*/
    React.createElement(Keyboard, { play: play, sounds: sounds, power: power, style: style }), /*#__PURE__*/
    React.createElement(DrumControll, {
      volume: volume,
      handleVolumeChange: handleVolumeChange,
      name: soundName || soundsName[soundType],
      changeSoundsGroup: changeSoundsGroup,
      power: power,
      stop: stop }), /*#__PURE__*/

    React.createElement("div", { className: "speaker" }, /*#__PURE__*/
    React.createElement("div", { className: "speaker-line" }), /*#__PURE__*/
    React.createElement("div", { className: "speaker-line" }), /*#__PURE__*/
    React.createElement("div", { className: "speaker-line" }), /*#__PURE__*/
    React.createElement("div", { className: "speaker-line" }), /*#__PURE__*/
    React.createElement("div", { className: "speaker-line" }), /*#__PURE__*/
    React.createElement("div", { className: "speaker-line" }))));



};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));