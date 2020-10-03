let id;
function F0(phoneNumber, listPerson) {
  for (let i = 0; i < listPerson.length; i++) {
    if (listPerson[i].phone == phoneNumber) {
      id = i;
      return listPerson[i];
    }
  }
  console.log("Not Found");
}

// function distance(F1place, F0place) {
//   for (let i = 0; i < F1place.length; i++) {
//     for (let j = 0; j < F0place.length; j++) {
//       if (F1place[i] != F0place[j]) {
//       }
//     }
//   }
// }

//F0 is a person
function checkWithF0(F1, F0,listPlace) {
  let F1place = F1.placeGone;
  let F0place = F0.placeGone;

  //check namePlace
  for (let i = 0; i < F1place.length; i++) {
    for (let j = 0; j < F0place.length; j++) {
      if (F1place[i] == F0place[j]) {
        return true;
      }else{
        let foundF1 = listPlace.find(element => element.name == F1place[i])
        let foundF0 = listPlace.find(element => element.name == F0place[j])

        let distance = Math.sqrt((foundF1.y-foundF0.y)**2+(foundF1.x-foundF0.x)**2)
        if(distance <=2) return true
      }
    }
  }
  return false;
}

function F1(F0, listPerson,listPlace) {
  let listF1 = [];
  for (let i = 0; i < listPerson.length; i++) {
    if (i != id) {
      if (checkWithF0(listPerson[i], F0,listPlace)) {
        listF1.push(listPerson[i]);
      }
    }
  }
  return listF1;
}




export { F0, F1 };
