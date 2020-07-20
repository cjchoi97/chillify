[Chillify Live Link](https://chillify-app.herokuapp.com/#/ "Chillify Live Link")

![alt text][logo]

[logo]: https://chillify-aa-dev.s3.amazonaws.com/chillifylogoblack.png "Chillify Logo"

Chillify is a clone of Spotify that houses music that is listened to when laying back or "chilling" in any setting!

# Feature Highlights
## Search
![alt text](https://github.com/cjchoi97/chillify/blob/master/app/assets/images/readme/Animated%20GIF-downsized.gif "Search")

Users can search for songs, albums, and artists. The results will be displayed neatly in the search component.

## Continuous Play

![alt text](https://github.com/cjchoi97/chillify/blob/master/app/assets/images/readme/continous-gif.gif "continuous play")

This customized audio player plays music while other components of the application are loaded on the screen.

Because I couldn't use the default audio player given, I had to create my own custom audio player. This brought it's own set of challenges. However, figuring out the specific audio levels and creating a bar for that audio change was one of the biggest challenges. On top of just getting the functionality, I had to style the volume icon to change at specific audio levels.

```javascript
setNewVolume(e) {
    const volumeMeter = document.getElementById("volume-meter");
    const meterWidth = volumeMeter.offsetWidth;
    const evt = window.event ? event : e;
    const clickLoc = evt.layerX - volumeMeter.offsetLeft;

    const percentage = (clickLoc/meterWidth);

    if (percentage <= .5 && percentage != 0) {
      this.setState({
        mute:"dontshow",
        quiet: "show",
        loud: "dontshow",
        percentage: percentage
      })
    } else if (percentage > .5 && percentage <= 1) {
      this.setState({
        mute:"dontshow",
        quiet: "dontshow",
        loud: "show",
        percentage: percentage
      })
    } else {
      this.setState({
        mute: "show",
        quiet: "dontshow",
        loud: "dontshow",
        percentage: percentage
      })
    }

    const song = document.getElementById("player");
    song.volume = percentage;

    const percentVolume = song.volume / 1;
    const volumeSlider = meterWidth * percentVolume;
    document.getElementById("volume-status").style.width = Math.round(volumeSlider) + "px";
}
```
What I ended up doing was calculating the offset of a click within the container of the volume bar. After setting the volume to a certain percentage, I then had to reflect that change in the styling of the volume bar. I converted volume percentage to the specific width that the volume progress had to be.

## Create Playlists
![alt text](https://github.com/cjchoi97/chillify/blob/master/app/assets/images/readme/createplaylist.png "Create Playlist")

After logging in, users have the option to create a playlist. They can add the name of the playlist and they will be named the creator of that playlist.

## Login

![alt text](https://github.com/cjchoi97/chillify/blob/master/app/assets/images/readme/login.png "Login option")

You can always sign up for the website! When you try to log in without the correct credentials, you will see an error message. If you don't want to sign up, you can always check in as a demo user to see the website!

# Technologies Used

* React.js

* Redux

* Javascript

* Ruby on Rails

* SCSS / CSS

* PostgreSQL

* AWS S3

* Heroku
