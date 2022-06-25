  ///////////////////////////////////////
 // Generate parts of the sheet music //
///////////////////////////////////////

// generate a note
export function note(pitch, octave, voice, time, staff) {
  let type = '';
  switch(time) {
    case 0.5:
      type = 'eighth'
      break;
    case 1:
      type = 'quarter'
      break;
    case 2:
      type = 'half'
      break;
    case 4:
      type = 'whole'
      break;
  }

  return pitch ? '<note>'
                + '<pitch>'
                + '<step>' + pitch + '</step>'
                + '<octave>' + octave.toString() + '</octave>'
                + '</pitch>'
                + '<duration>' + time.toString() + '</duration>'
                + '<voice>' + voice.toString() + '</voice>'
                + '<type>' + type + '</type>'
                + '<stem>up</stem>'
                + '<staff>' + staff.toString() + '</staff>'
                + '</note>' : rest(time, voice, staff)
}

// generate a rest
export function rest(time, voice, staff) {
  let type = '';
  switch(time) {
    case 0.5:
      type = 'eighth'
      break;
    case 1:
      type = 'quarter'
      break;
    case 2:
      type = 'half'
      break;
    case 4:
      type = 'whole'
      break;
  }

  return '<note>'
        + '<rest/>'
        + '<duration>' + time.toString() + '</duration>'
        + '<voice>' + voice.toString() + '</voice>'
        + '<type>' + type + '</type>'
        + '<staff>' + staff.toString() + '</staff>'
        + '</note>'
}

// backup beats to coordinate multiple voices in one part
export function back(time) {
  return '<backup>'
        + '<duration>' + time.toString() + '</duration>'
        + '</backup>'
} 