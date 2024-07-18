// code your solution here


function superbowlWin(record) {
    const winningRecord = record.find(r => r.result === 'W');
    return winningRecord ? winningRecord.year : undefined;
  }
  
  
  