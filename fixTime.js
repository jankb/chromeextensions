var timestamps = document.getElementsByClassName("commit-row")

for (i = 0; i<timestamps.length; i++)
{
  var ts = timestamps[i].dataset.commitJson;
  const commitData = JSON.parse(ts);
  const times = new Date(commitData.committerTimestamp);
//  const tid = new Date(times+times.getTimezoneOffset());
//  var note = document.createTextNode(tid.toUTCString());
  var note = document.createTextNode(times);
  timestamps[i].appendChild(note);
}
