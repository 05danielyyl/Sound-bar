const sounds = ['crash', 'kick-bass', 'snare', 'tom-1', 'tom-2'];

sounds.forEach(sound=>{
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', ()=> {
        stop();
        document.getElementById(sound).play();
    })

    document.getElementById('button').appendChild(btn)
})



function stop() {
    sounds.forEach(sound => {

        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;

    })
}


//use js to creat element (cleatElement)and add (appendChild) to the container(div);
//use forEach instead of the for loop;
//use play() to play sound;
//stop sound when you click another button. (pause() and currentTime)
