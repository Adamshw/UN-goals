


function displayGoals(data) {


  for (var i = 0; i < data.length; i++) {
    let goalsList = document.querySelector('#gaols--list')
    let goal = document.createElement('li');

    let goals = data[i].description;


    goal.innerHTML = goals;
    goalsList.appendChild(goal);



    let targets = data[i].targets;

    for (var j = 0; j < targets.length; j++) {
      const subGoalsList = document.createElement('ul');



      goal.appendChild(subGoalsList);

      let title = targets[j].title;
      let subGoalTitle = document.createElement('li');


      subGoalTitle.innerHTML = title;


      subGoalsList.append(subGoalTitle);



      goalClicked(goal, subGoalTitle);
    }
  }
}





function goalClicked(goal, subGoalTitle) {
  subGoalTitle.style.display = "none";
  goal.addEventListener('click', () => {
    subGoalTitle.style.display = "block"

  })

}




const url = "https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true"

async function getGoals() {
  let response = await fetch(url);
  let data = await response.json()
  displayGoals(data);

}


getGoals();



