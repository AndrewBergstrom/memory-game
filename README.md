# memory-game

To flip the card when clicked, a class 'flip' is added to the element. For that, I selected all memory-card elements with document.querySelectorAll. Then I loop through them with forEach and attach an event listener. Every time a card gets clicked 'flipCard' function is fired. The 'this' variable represents the card that was clicked. The function accesses the element's classList and toggles the 'flip' class. 

To produce the 3D flip effect, I added the perspective property to .memory-game. That property sets how far in the z plane the object is from the user. The lower the value the bigger the perspective effect. For a subtle effect, let’s apply 1000px

To the .memory-card elements I added transform-style: preserve-3d, to position them in the 3D space created in the parent, instead of flattening it to the z = 0 plane (transform-style). A transition has to be applied to the transform property to produce the movement effect.

I got the card to 3D flip but right now, both .front-face and .back-face are stacked up onto each other, because they have been assigned position: absolute. Every element has a back face, which is a mirror image of its front face. The property backface-visibility defaults to visible, so when you flip the card, we get the JS badge back face.

Match Card: When you click the first card, it waits until another is flipped. The variables hasFlippedCard and flippedCard manage the flip state. If there is no card flipped, hasFlippedCard is set to true and flippedCard is set to the clicked card. 
