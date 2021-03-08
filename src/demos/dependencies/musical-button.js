import * as Tone from "tone";

function MusicalButton({children}) {
    
    const playMusic = () =>{

        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();
        synth.triggerAttackRelease("C4","4n");
        synth.triggerAttackRelease("G2","4n", now + 1);
        synth.triggerAttackRelease("B3","4n", now + 2);
        synth.triggerAttackRelease("E1","4n", now + 3);
        synth.triggerAttackRelease("F4","4n", now + 4);
        synth.triggerAttackRelease("B1","4n", now + 5);
        synth.triggerAttackRelease("E4","4n", now + 6);
    };

    return <button onClick={playMusic}>{children}</button>

}
export default MusicalButton;