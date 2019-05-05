const rec = new webkitSpeechRecognition();
rec.lang = 'ja-JP';

rec.onresult = function (e) {
  if (e.results.length > 0) {
    const value = e.results[0][0].transcript;
    document.write(`${value}<br />`);
  }
};

rec.onstart = () => {
  console.log('on start');
};
rec.onend = () => {
  console.log('on end');
  rec.start();
};

rec.onspeechstart = () => {
  console.log('on speech start');
};
rec.onspeechend = () => {
  console.log('on speech end');
};

rec.onosundstart = () => {
  console.log('on sound start');
};
rec.onsoundend = () => {
  console.log('on sound end');
};

rec.onaudiostart = () => {
  console.log('on audio start');
};
rec.onaudioend = () => {
  console.log('on audio end');
};

rec.start();