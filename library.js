function collision(p1,p2) {
    if (p1.x - p2.x < p2.width/2 + p1.width/2
      && p2.x - p1.x < p2.width/2 + p1.width/2
      && p1.y - p2.y < p2.height/2 + p1.height/2
      && p2.y - p1.y < p2.height/2 + p1.height/2) {
      return true;
  }
  else {
    return false;
  }
  }
  
  function bounceoff (g1,g2){
    if (g1.x - g2.x < g2.width/2 +g1 .width/2
      && g2.x - g1.x < g2.width/2 + g1.width/2) {
    g1.velocityX = g1.velocityX * (-1);
    g2.velocityX = g2.velocityX * (-1);
  }
  if (g1.y - g2.y < g2.height/2 + g1.height/2
    && g2.y - g1.y < g2.height/2 + g1.height/2){
    g1.velocityY = g1.velocityY * (-1);
    g2.velocityY = g2.velocityY * (-1);
  }
  }