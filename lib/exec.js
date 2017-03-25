module.exports = function exec(params){
    var newState;
    var req = params.deviceType.identifier;
    
    switch(params.state.value){
      case 0:
            gladys.utils.request(req);
            return;
      break;

      case 1:
            gladys.utils.request(req);
            return;
      break;
            
      default:
            if(value != 0 || value != 1){
                console.log("Erreur de données !");
            }
    }
};
