module.exports = function exec(params){
    var newState;
    
    switch(params.deviceType.type){
      case params.state.value === 0:
      gladys.utils.request(params.deviceType.id);  
      break;

      case params.state.value === 1:
      gladys.utils.request(params.deviceType.id); 
      break;

      case params.state.value != 1 || params.state.value != 0:
      console.log("Erreur de valeur")      
      break;
    }
    return err()
    .then((response) => { console.log(response);}).catch((err) => {  console.log(err);})

};