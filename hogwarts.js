// Este programa gera 3 mensagens aleatórias, baseadas em 3 bases de dados.

// random index number generator
const createRandom = maxNum => {
    return Math.floor(Math.random() * maxNum);
  }
  // Casa de Hogwarts
  const houseList = ['Griffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];
  
  // Aula 
  const lessonList = ['Feitiços', 'Transfiguração', 'Poções', 'História da Magia', 'Astronomia', 'Herbologia', 'Defesa Contra as Artes Negras'];
  
  // Amigo
  const friendList = ['Harry Potter', 'Ronald Weasley', 'Hermione Granger', 'Neville Longbottom', 'Draco Malfoy', 'Luna Lovegood', ];
  
  // Escolhe um item aleatório de cada lista.
  let house = houseList[createRandom(houseList.length)];
  let lesson = lessonList[createRandom(lessonList.length)];
  let friend = friendList[createRandom(friendList.length)];
  
  // Output a messagem no console.
  console.log(`Bem-vido(a) a  Hogwarts. A tua casa é "${house}", a primeira aula que terás será "${lesson}" e tu irás praticar com ${friend}.`);hogwarts.js
