function calc(height) {
    return (height - 100) * 0.8;
  }
  
  // there is test script
  
  const t1 = calc(180);
  
  if (t1 !== 64) {
    throw new Error('test failed');
  }
