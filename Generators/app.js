'use strict';

// yield : 할당
function* listPeople() {
  yield 'Dal';
  yield 'Flynn';
  yield 'Mark';
  yield 'GodKimchi';
  yield 'Japan Guy';
}

const listG = listPeople();
console.log(listG.next());

const friends = ['Dal', 'Flynn', 'Mark', 'GodKimchi', 'Japan Guy'];

function* friendTeller() {
  for (const friend of friends) {
    yield friend;
  }
}

const listF = friendTeller();
console.log(listF.next());
