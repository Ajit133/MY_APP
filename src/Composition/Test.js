export default function Text({ addEmoji,addBrecket}) {
  let text = "i am JavaScript Programming Language. ";
  if(addEmoji){
    text = addEmoji(text,'💜');
  }
  if(addBrecket){
    text = addBrecket(text)
  }
  return <div>{text}</div>;
}

