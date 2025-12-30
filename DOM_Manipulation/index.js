 const arr = ['Bootstrap', 'Tailwind', 'React', 'Angular'];
 // const unorderd = document.getElementById('unorderd')
 // for (tech of arr) {
 //     const list = document.createElement('li');
 //     list.textContent = tech;
 //     unorderd.append(list)
 // }

 //Above method is not good for the UI
 //Create a fragment and then update the UI

 const unorderd = document.getElementById('unorderd')
 const fragment = document.createDocumentFragment();
 for (tech of arr) {
     const list = document.createElement('li');
     list.textContent = tech;
     fragment.append(list);
 }

 unorderd.append(fragment);