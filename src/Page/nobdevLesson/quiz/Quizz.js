import React, { useState } from 'react';
import Question01 from './Question01';
function QuizPage() {
  
  return (
    <div>
      <Question01 questionNo={1} arr={['অ','আ','ই','ঈ','উ','ঊ']}> </Question01>
      <Question01 questionNo={2} arr={['উ','ঊ','ঋ','এ','ঐ','ও']}> </Question01>
    </div>
  );
}

export default QuizPage;